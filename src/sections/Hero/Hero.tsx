import './Hero.scss'
import { Button } from "@/components";

export const Hero = (props) => {
	const {
		buttonEl,
	} = props;

	return (
		<section className='hero' aria-labelledby='hero-title'>
			<div className="hero__pano">
				<div className="hero__pano-inner container">
					<button className="hero__play-button" type='button' aria-label='Play Video' title='Play Video'>
						<img  alt='' src='/images/play.svg' width={470} height={470} className='hero__play-button-image'/>
					</button>
				</div>
			</div>
			<div className="hero__body">
				<div className="hero__body-inner container">
					<h1 className="hero__title h1" id="hero-title">
						The Best Streaming Experience
					</h1>
					<div className="hero__description">
						<p>
							StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
						</p>
					</div>
					<Button {...buttonEl}/>
				</div>
			</div>
		</section>
	);
};