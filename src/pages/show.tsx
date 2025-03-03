import { Metadata } from 'minista'
import { ShowBanner, MovieDetails } from '@/sections'
import { ShowStore } from '@/store/show.store'

export const metadata: Metadata = {
	title: 'Show - Stranger Things',
}

export default () => {
	return (
		<>
			<ShowBanner />
			<MovieDetails {...ShowStore.MovieDetails} />
		</>
	)
}
