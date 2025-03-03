import CheckJson from './utils/modules/JsonApi'

document.addEventListener('DOMContentLoaded', () => {
	CheckJson()

	if (document.querySelector('[data-js-overlay-menu]')) {
		import('@/utils/modules/OverlayMenu').then(({ OverlayMenu }) => {
			new OverlayMenu()
		})
	}

	if (document.querySelector('[data-js-slider]')) {
		import('@/utils/modules/SliderCollection').then(({ SliderCollection }) => {
			new SliderCollection()
		})
	}

	if (document.querySelector('[data-js-tabs]')) {
		import('@/utils/modules/TabsCollection').then(({ TabsCollection }) => {
			new TabsCollection()
		})
	}

	if (document.querySelector('[data-js-video-player]')) {
		import('@/utils/modules/VideoPlayerCollection').then(({ VideoPlayerCollection }) => {
			new VideoPlayerCollection()
		})
	}

	if (document.querySelector('[data-js-input-mask]')) {
		import('@/utils/modules/InputMaskCollection').then(({ InputMaskCollection }) => {
			new InputMaskCollection()
		})
	}

	if (document.querySelector('[data-js-select]')) {
		import('@/utils/modules/SelectCollection').then(({ SelectCollection }) => {
			new SelectCollection()
		})
	}
})
