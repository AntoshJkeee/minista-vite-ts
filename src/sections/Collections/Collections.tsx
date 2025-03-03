import './Collections.scss'
import { type CollectionsProps } from './CollectionsProps'
import { Tabs, SliderNavigation, Slider, CategoryCard, MovieCard } from '@/components'
import { Section } from '@/layouts'
import getIdFromTitle from '@/utils/helpers/getIdFromTitle'

export const Collections = (props: CollectionsProps) => {
	const { collectionItems } = props

	return (
		<Tabs
			className="collections container"
			title="collections"
			isEnableOnlyOnMobile
			items={collectionItems.map((collectionGroup) => ({
				isActive: collectionGroup.isActive,
				title: collectionGroup.title,
				children: (
					<div className="collections__group">
						<p className="collections__title hidden-mobile">{collectionGroup.title}</p>
						{collectionGroup.items.map((collectionItem, idx) => {
							const { title, categoryItems, movieItems, sliderParams } = collectionItem

							const titleFormatted = `${getIdFromTitle(collectionGroup.title)}-${getIdFromTitle(title)}`
							const titleId = `${titleFormatted}-title`
							const sliderNavigationId = `${titleFormatted}-slider-navigation`

							return (
								<Section
									className="collections__section"
									title={title}
									titleId={titleId}
									actions={<SliderNavigation id={sliderNavigationId} mode="tile" />}
									isActionsHiddenOnMobile
									key={idx}
								>
									<Slider
										sliderParams={sliderParams}
										navigationTargetElementId={sliderNavigationId}
										isBeyondTheViewportOnMobileS
									>
										{categoryItems?.map((categoryItem, idx) => <CategoryCard {...categoryItem} key={idx} />) ??
											movieItems?.map((movieItem, idx) => <MovieCard {...movieItem} key={idx} />)}
									</Slider>
								</Section>
							)
						})}
					</div>
				),
			}))}
		/>
	)
}
