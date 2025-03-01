import CheckJson from "./modules/JsonApi";

document.addEventListener('DOMContentLoaded', () => {

	CheckJson()

	if (document.querySelector('[data-js-overlay-menu]')) {
		import('@/modules/OverlayMenu').then(({ OverlayMenu }) => {
			new OverlayMenu()
		})
	}

	if (document.querySelector('[data-js-slider]')) {
		import('@/modules/SliderCollection').then(({ SliderCollection }) => {
			new SliderCollection()
		})
	}

	if (document.querySelector('[data-js-tabs]')) {
		import('@/modules/TabsCollection').then(({ TabsCollection }) => {
			new TabsCollection()
		})
	}

	if (document.querySelector('[data-js-video-player]')) {
		import('@/modules/VideoPlayerCollection').then(({ VideoPlayerCollection }) => {
			new VideoPlayerCollection()
		})
	}

	if (document.querySelector('[data-js-input-mask]')) {
		import('@/modules/InputMaskCollection').then(({ InputMaskCollection }) => {
			new InputMaskCollection()
		})
	}

	if (document.querySelector('[data-js-select]')) {
		import('@/modules/SelectCollection').then(({ SelectCollection }) => {
			new SelectCollection()
		})
	}
});