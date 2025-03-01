import CheckJson from "./modules/JsonApi";

document.addEventListener('DOMContentLoaded', () => {

	CheckJson()

	if (document.querySelector('[data-js-overlay-menu]')) {
		import('/src/modules/OverlayMenu').then(({ OverlayMenu }) => {
			new OverlayMenu()
		})
	}

	if (document.querySelector('[data-js-slider]')) {
		import('/src/modules/SliderCollection').then(({ SliderCollection }) => {
			new SliderCollection()
		})
	}

	if (document.querySelector('[data-js-tabs]')) {
		import('/src/modules/TabsCollection').then(({ TabsCollection }) => {
			new TabsCollection()
		})
	}

	if (document.querySelector('[data-js-video-player]')) {
		import('/src/modules/VideoPlayerCollection').then(({ VideoPlayerCollection }) => {
			new VideoPlayerCollection()
		})
	}

	if (document.querySelector('[data-js-input-mask]')) {
		import('/src/modules/InputMaskCollection').then(({ InputMaskCollection }) => {
			new InputMaskCollection()
		})
	}

	if (document.querySelector('[data-js-select]')) {
		import('/src/modules/SelectCollection').then(({ SelectCollection }) => {
			new SelectCollection()
		})
	}
});