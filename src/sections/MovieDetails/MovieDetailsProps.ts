import React from "react";

export interface MovieDetailsProps {
	seasons?: React.ReactNode
	castItems: { imgSrc: string, imgAlt: string }[],
	reviewItems: {
		name: string
		subtitle: string
		description: string
		ratingValue: number,
	}[]
}