import 'swiper/css'
import './Slider.scss'
import { type SliderProps } from './SliderProps'
import { SliderNavigation } from '@/components'
import cn from 'classnames'

const defaultSliderParams = {
	slidesPerView: 5,
	slidesPerGroup: 5,
	spaceBetween: 30,
	breakpoints: {
		0: {
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
		481: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			slidesPerGroup: 4,
			spaceBetween: 20,
		},
		1024: {
			spaceBetween: 20,
			allowTouchMove: false,
		},
		1441: {
			spaceBetween: 30,
			allowTouchMove: false,
		},
	},
}

export const Slider = (props: SliderProps) => {
	const {
		children,
		navigationTargetElementId = null,
		sliderParams = defaultSliderParams,
		isBeyondTheViewportOnMobileS,
		hasScrollbarOnMobile = true,
		navigationMode,
		navigationPosition = '',
		isNavigationHiddenMobile = true,
	} = props

	return (
		<div
			className={cn('slider', {
				'slider__beyond-the-viewport-on-mobile-s': isBeyondTheViewportOnMobileS,
			})}
			data-js-slider={JSON.stringify({
				sliderParams,
				navigationTargetElementId,
			})}
		>
			<div className="slider__swiper swiper" data-js-slider-swiper="">
				<ul className="slider__list swiper-wrapper">
					{children &&
						children.map((slide, idx) => (
							<li className="slider__item swiper-slide" key={idx}>
								{slide}
							</li>
						))}
				</ul>
			</div>
			{!navigationTargetElementId && (
				<SliderNavigation
					mode={navigationMode}
					isHiddenMobile={isNavigationHiddenMobile}
					position={navigationPosition}
					className="slider__navigation"
				/>
			)}

			{hasScrollbarOnMobile && <div data-js-slider-scrollbar="" className="slider__scrollbar visible-mobile"></div>}
		</div>
	)
}
