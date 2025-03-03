import './SliderNavigation.scss'
import cn from 'classnames'
import { type SliderNavigationProps } from './SliderNavigationProps'
import { Button } from '@/components'

export const SliderNavigation = (props: SliderNavigationProps) => {
	const {
		className,
		id,
		hasPagination = true,
		mode = '',
		position = '',
		isHiddenMobile,
		buttonMode = 'black-10',
	} = props

	return (
		<div
			className={cn(className, 'slider-navigation', {
				[`slider-navigation__${mode}`]: mode,
				[`slider-navigation__${position}`]: position,
				'hidden-mobile': isHiddenMobile,
			})}
			id={id}
			data-js-slider-navigation=""
		>
			<Button
				className="slider-navigation__arrow-button slider-navigation__arrow-button--previous"
				mode="black-10"
				iconName="arrow-left"
				label="Previous slide"
				isLabelHidden
				extraAttrs={{
					'data-js-slider-previous-button': '',
				}}
			/>
			{hasPagination && <div className="slider-navigation__pagination" data-js-slider-pagination="" />}
			<Button
				className="slider-navigation__arrow-button slider-navigation__arrow-button--next"
				mode={buttonMode}
				iconName="arrow-right"
				label="Next slide"
				isLabelHidden
				extraAttrs={{
					'data-js-slider-next-button': '',
				}}
			/>
		</div>
	)
}
