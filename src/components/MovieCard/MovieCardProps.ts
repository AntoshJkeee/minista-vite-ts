export interface MovieCardProps {
	title: MovieItem['title']
	imgSrc: MovieItem['imgSrc']
	duration?: MovieItem['duration']
	views?: MovieItem['views']
	released?: MovieItem['released']
	rating?: MovieItem['rating']
	season?: JSX.Element
	href?: '/movie' | string
}
