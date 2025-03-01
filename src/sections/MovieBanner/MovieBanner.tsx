import { MovieBannerCard } from "@/components";

export const MovieBanner = () => {
	return (
		<section
			aria-labelledby="movie-banner-title"
			className='container'
		>
			<MovieBannerCard
				titleId='movie-banner-title'
				title="Kantara"
				TitleTag='h1'
				description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
				imgSrc='/src/assets/images/movie-banner/2.jpg'
				isSmallPaddingY
			/>
		</section>
	);
};