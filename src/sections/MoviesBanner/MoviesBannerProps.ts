import { MovieBannerCardProps } from '@/components/MovieBannerCard/MovieBannerCardProps'

export interface MoviesBannerProps {
	movieItems: {
		title: string
		description: string
		imgSrc: string
	}[]
}
