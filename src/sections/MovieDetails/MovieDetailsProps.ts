export interface MovieDetailsProps {
	seasons?: JSX.Element
	castItems: { imgSrc: string; imgAlt: string }[]
	reviewItems: {
		name: string
		subtitle: string
		description: string
		ratingValue: number
	}[]
}
