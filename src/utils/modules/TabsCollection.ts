import getParams from "@/utils/helpers/getParams";
import pxToRem from "@/utils/helpers/pxToRem";
import BaseComponent from "@/utils/modules/generic/BaseComponent";

const rootSelector = '[data-js-tabs]'

class Tabs extends BaseComponent {
	rootElement
	params
	navigationElement: HTMLElement | null
	state
	limitTabIndex
	buttonElements
	contentElements

	selectors = {
		root: rootSelector,
		navigation: '[data-js-tabs-navigation]',
		button: '[data-js-tabs-button]',
		content: '[data-js-tabs-content]',
	}

	stateClasses = {
		isActive: 'is-active'
	}

	stateCSSVariables = {
		activeButtonWidth: '--tabsNavigationActiveButtonWidth',
		activeButtonOffsetLeft: '--tabsNavigationActiveButtonOffsetLeft'
	}

	constructor(rootElement: Element) {
		super();
		this.rootElement = rootElement
		this.params = getParams(this.rootElement as HTMLElement, this.selectors.root)
		this.navigationElement = this.params.navigationTargetElementId
		 ? document.getElementById(this.params.navigationTargetElementId)
			: this.rootElement.querySelector(this.selectors.navigation)

		this.buttonElements = [...this.navigationElement!.querySelectorAll(this.selectors.button)]
		this.contentElements = [...this.rootElement.querySelectorAll(this.selectors.content)]

		if (this.buttonElements) {
			this.state = this.getProxyState({
				activeTabIndex: this.buttonElements.findIndex(({ ariaSelected }) => ariaSelected )
			})
			this.limitTabIndex = this.buttonElements.length - 1
		}
		this.bindEvents()
		setTimeout(this.bindObservers, 500)
	}

	updateUI() {
		const { activeTabIndex } = this.state

		this.buttonElements?.forEach((buttonElement, idx) => {
			const isActive = activeTabIndex === idx

			buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
			// @ts-ignore
			buttonElement.ariaSelected = isActive
			// @ts-ignore
			buttonElement.tabIndex = isActive ? 0 : -1

			if(isActive) {
				this.updateNavigationSCCVars(buttonElement)
			}
		})

		this.contentElements.forEach((contentElement, idx) => {
			const isActive = activeTabIndex === idx

			contentElement.classList.toggle(this.stateClasses.isActive, isActive)
		})
	}

	updateNavigationSCCVars(activeButtonElement = this.buttonElements?.[this.state.activeTabIndex]) {
		const { width, left } = activeButtonElement.getBoundingClientRect()
		const offsetLeft = left - this.navigationElement!.getBoundingClientRect().left

		this.navigationElement!.style.setProperty(
			this.stateCSSVariables.activeButtonWidth,
			`${pxToRem(width)}rem`
		)

		this.navigationElement!.style.setProperty(
			this.stateCSSVariables.activeButtonOffsetLeft,
			`${pxToRem(offsetLeft)}rem`
		)
	}

	activateTab(newTabIndex: number) {
		this.state.activeTabIndex = newTabIndex;
		(this.buttonElements?.[newTabIndex] as HTMLElement)?.focus();
	}

	previousTab = () => {
		const newTabIndex = this.state.activeTabIndex === 0
		? this.limitTabIndex
		: this.state.activeTabIndex - 1

		this.activateTab(newTabIndex!)
	}

	nextTab = () => {
		const newTabIndex = this.state.activeTabIndex === this.limitTabIndex
		? 0
		: this.state.activeTabIndex + 1

		this.activateTab(newTabIndex)
	}

	firstTab = () => {
		this.activateTab(0)
	}

	lastTab = () => {
		this.activateTab(this.limitTabIndex!)
	}

	onButtonClick(buttonIndex: number) {
		this.state.activeTabIndex = buttonIndex
	}

	onKeyDown = (event: KeyboardEvent) => {
		const { target, code, metaKey } = event
		const isTabsContentFocused = this.contentElements
			.some((contentElement) => contentElement === target)

		if(this.buttonElements) {
			const isTabsButtonFocused = this.buttonElements
				.some((buttonElement) => buttonElement === target)

			if(!isTabsContentFocused && !isTabsButtonFocused) {
				return
			}
		}

		const action = {
			ArrowLeft: this.previousTab,
			ArrowRight: this.nextTab,
			Home: this.firstTab,
			End: this.lastTab,
		}[code]

		const isMacHomeKey = metaKey && code === 'ArrowLeft'
		if(isMacHomeKey) {
			event.preventDefault()
			this.firstTab()
			return
		}

		const isMacEndKey = metaKey && code === 'ArrowRight'
		if(isMacEndKey) {
			event.preventDefault()
			this.lastTab()
			return
		}

		if(action) {
			event.preventDefault()
			action()
		}
	}

	bindEvents() {
		this.buttonElements?.forEach((buttonElement, idx) => {
			buttonElement.addEventListener('click', () => this.onButtonClick(idx))
		})

		document.addEventListener('keydown', this.onKeyDown)
	}

	onResize = () => {
		this.updateNavigationSCCVars()
	}

	bindObservers = () => {
		const resizeObserver = new ResizeObserver(this.onResize)

		resizeObserver.observe(this.navigationElement as Element)
	}
}

export class TabsCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach((element) => {
			new Tabs(element)
		})
	}
}