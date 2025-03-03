const rootSelector = '[data-js-overlay-menu]'

export class OverlayMenu {
	rootElement: HTMLElement
	dialogElement: HTMLDialogElement
	burgerButtonElement: HTMLElement
	selectors = {
		root: rootSelector,
		dialog: '[data-js-overlay-menu-dialog]',
		burgerButton: '[data-js-overlay-menu-burger-button]',
	}

	stateClasses = {
		isActive: 'is-active',
		isLock: 'is-lock',
	}

	constructor() {
		this.rootElement = document.querySelector(this.selectors.root) as HTMLElement
		this.dialogElement = this.rootElement?.querySelector(this.selectors.dialog) as HTMLDialogElement
		this.burgerButtonElement = this.rootElement.querySelector(this.selectors.burgerButton) as HTMLElement
		this.bindEvents()
	}

	onBurgerButtonClick = () => {
		this.burgerButtonElement.classList.toggle(this.stateClasses.isActive)
		this.dialogElement.open = !this.dialogElement.open
		document.documentElement.classList.toggle(this.stateClasses.isLock)
	}

	bindEvents() {
		this.burgerButtonElement.addEventListener('click', this.onBurgerButtonClick)
	}
}
