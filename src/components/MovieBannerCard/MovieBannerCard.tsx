import './MovieBannerCard.scss'
import { type MovieBannerCardProps } from './MovieBannerCardProps'
import { Image } from 'minista'
import { Button } from '@/components'
import cn from 'classnames'

export const MovieBannerCard = (props: MovieBannerCardProps) => {
	const { title, titleId, TitleTag = 'h2', description, imgSrc, isSmallPaddingY = false } = props

	return (
		<div className="movie-banner-card">
			<Image className="movie-banner-card__image" src={imgSrc} />
			<div
				className={cn('movie-banner-card__inner', {
					'movie-banner-card__inner--small-padding-y': isSmallPaddingY,
				})}
			>
				<div className="movie-banner-card__body">
					<TitleTag id={titleId}>{title}</TitleTag>
					<div className="movie-banner-card__description hidden-mobile">
						<p>{description}</p>
					</div>
				</div>
				<footer className="movie-banner-card__footer">
					<Button className="movie-banner-card__play-button" iconName="play" hasFillIcon label="Play Now" />
					<div className="movie-banner-card__actions">
						<Button mode="black-06" iconName="plus" label="Add to playlist" isLabelHidden />
						<Button mode="black-06" iconName="like" label="Like" isLabelHidden />
						<Button mode="black-06" iconName="volume" label="Mute" isLabelHidden />
					</div>
				</footer>
			</div>
		</div>
	)
}
