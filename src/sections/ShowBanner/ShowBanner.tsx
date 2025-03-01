import { MovieBannerCard } from "@/components";

export const ShowBanner = () => {
	return (
		<section className="container" aria-labelledby="show-banner-title">
			<MovieBannerCard
				title="Stranger Things"
				titleId="show-banner-title"
				TitleTag="h1"
				imgSrc="/src/assets/images/movie-banner/3.jpg"
				isSmallPaddingY
				description="When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
			/>
		</section>
	);
}