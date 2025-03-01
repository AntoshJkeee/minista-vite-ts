import "./Categories.scss"
import { type CategoriesProps } from "./CategoriesProps";
import { Section } from "@/layouts"
import { CategoryCard, Slider, SliderNavigation } from "@/components";

export const Categories = (props: CategoriesProps) => {
	const {
		categoryItems
	} = props

	const sliderNavigationId = 'categories-slider-navigation'

	return (
		<Section
			title='Explore our wide variety of categories'
			titleId='categories-title'
			description="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
			isActionsHiddenOnMobile
			actions={(
			<SliderNavigation
				mode='tile'
				id={sliderNavigationId}
			/>
		)}>
			<Slider
				isBeyondTheViewportOnMobileS
				navigationTargetElementId={sliderNavigationId}
			>
				{
					categoryItems.map((item, idx) => (
						<CategoryCard {...item} key={idx}/>
					))
				}
			</Slider>
		</Section>
	);
};