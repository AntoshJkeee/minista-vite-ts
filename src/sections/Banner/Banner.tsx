import './Banner.scss'
import { Button } from '@/components'

export const Banner = () => {
	return (
		<section className="banner container" aria-labelledby="banner-title">
			<div className="banner__inner">
				<div className="banner__body">
					<h2 className="banner__title" id="banner-title">
						Start your free trial today!
					</h2>
					<div className="banner__description">
						<p>
							This is a clear and concise call to action that encourages users to sign up for a free trial of
							StreamVibe.
						</p>
					</div>
				</div>
				<Button className="banner__button" label="Start a Free Trial" href="/subscriptions" />
			</div>
		</section>
	)
}
