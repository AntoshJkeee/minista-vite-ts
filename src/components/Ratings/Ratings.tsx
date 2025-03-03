import './Ratings.scss'
import { type RatingsProps } from './RatingsProps'
import { RatingView } from '@/components'

export const Ratings = (props: RatingsProps) => {
	const { items = [] } = props

	return (
		<div className="ratings">
			<ul className="ratings__list">
				{items.map(({ title, ratingValue }, index) => (
					<li className="ratings__item" key={index}>
						<h4 className="ratings__title">{title}</h4>
						<RatingView value={ratingValue} label={String(ratingValue)} />
					</li>
				))}
			</ul>
		</div>
	)
}
