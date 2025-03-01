import "./MovieCard.scss"
import { Image } from "minista"
import { type MovieCardProps } from "./MovieCardProps";
import { Badge, RatingView } from '@/components'

export const MovieCard = (props: MovieCardProps) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    released,
    rating,
    season,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            iconName="clock"
            iconAriaLabel="Duration"
            hasFillIcon
          >
            {duration}
          </Badge>
        )}

        {season && (
          <Badge
            iconName="catalog"
            hasFillIcon
          >
            {season}
          </Badge>
        )}

        {rating && (
          <Badge className="movie-card__rating-badge">
            <RatingView {...rating} />
          </Badge>
        )}

        {views && (
          <Badge
            iconName="eye"
            iconAriaLabel="Views"
            hasFillIcon
          >
            {views}
          </Badge>
        )}

        {released && (
          <Badge className="movie-card__released-badge">
            Released at <time className="movie-card__released-badge-label" dateTime={released.dateTime}>{released.label}</time>
          </Badge>
        )}
      </div>
    </a>
  )
}
