import getParams from '@/utils/helpers/getParams'
import Swiper from 'swiper'
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'

const rootSelector = '[data-js-slider]'

class Slider {
	rootElement
	swiperElement
	params
	navigationElement: HTMLElement | null
	prevButtonElement
	nextButtonElement
	paginationElement
	scrollbarElement

	selectors = {
		root: rootSelector,
		swiper: '[data-js-slider-swiper]',
		navigation: '[data-js-slider-navigation]',
		pagination: '[data-js-slider-pagination]',
		prevButton: '[data-js-slider-previous-button]',
		nextButton: '[data-js-slider-next-button]',
		scrollbar: '[data-js-slider-scrollbar]',
	}

	constructor(rootElement: Element) {
		this.rootElement = rootElement
		this.swiperElement = this.rootElement.querySelector(this.selectors.swiper) as HTMLElement
		this.params = getParams(this.rootElement as HTMLElement, this.selectors.root)
		this.navigationElement = this.params.navigationTargetElementId
			? document.getElementById(this.params.navigationTargetElementId)
			: this.rootElement.querySelector(this.selectors.navigation)
		this.prevButtonElement = this.navigationElement?.querySelector(this.selectors.prevButton)
		this.nextButtonElement = this.navigationElement?.querySelector(this.selectors.nextButton)
		this.paginationElement = this.navigationElement?.querySelector(this.selectors.pagination)
		this.scrollbarElement = this.rootElement.querySelector(this.selectors.scrollbar)
		this.init()
	}

	init() {
		new Swiper(this.swiperElement, {
			...this.params.sliderParams,
			modules: [Navigation, Pagination, Scrollbar],
			navigation: {
				prevEl: this.prevButtonElement,
				nextEl: this.nextButtonElement,
			},
			pagination: {
				el: this.paginationElement,
				bulletClass: 'slider-navigation__pagination-bullet',
				bulletActiveClass: 'is-active',
			},
			scrollbar: {
				el: this.scrollbarElement,
				dragClass: 'slider__scrollbar-drag',
			},
		})
	}
}

export class SliderCollection {
	constructor() {
		this.init()
	}

	init() {
		document.querySelectorAll(rootSelector).forEach((element) => {
			new Slider(element)
		})
	}
}
