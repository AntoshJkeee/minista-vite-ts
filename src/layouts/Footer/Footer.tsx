import './Footer.scss'
import { Socials } from '@/components'

export const Footer = () => {
	const menuItems = [
		{
			title: 'Home',
			links: ['Categories', 'Devices', 'Pricing', 'FAQ'],
		},
		{
			title: 'Movies',
			links: ['Genres', 'Trending', 'New Release', 'Popular'],
		},
		{
			title: 'Shows',
			links: ['Genres', 'Trending', 'New Release', 'Popular'],
		},
		{
			title: 'Support',
			links: ['Contact Us'],
		},
		{
			title: 'Subscription',
			links: ['Plans', 'Features'],
		},
		{
			title: 'Connect With Us',
			socialLinks: [
				{ label: 'Facebook', iconName: 'facebook' },
				{ label: 'Twitter', iconName: 'twitter' },
				{ label: 'LinkedIn', iconName: 'linked-in' },
			],
		},
	]

	const extraLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy']

	return (
		<footer>
			<div className="footer__inner container">
				<nav className="footer__menu">
					{menuItems.map(({ title, links, socialLinks }, idx) => (
						<div className="footer__menu-column" key={idx}>
							<a href="/" className="footer__menu-title h6">
								{title}
							</a>
							{links && links.length > 0 && (
								<ul className="footer__menu-list">
									{links.map((link, idx) => (
										<li className="footer__menu-item" key={idx}>
											<a href="" className="footer__menu-link">
												{link}
											</a>
										</li>
									))}
								</ul>
							)}
							{socialLinks && socialLinks.length > 0 && <Socials className="footer__soc1als" links={socialLinks} />}
						</div>
					))}
				</nav>
				<div className="footer__extra">
					<p className="footer__copyright">
						@<time dateTime="2023">2023 </time>streamvibe, All Rights Reserved
					</p>
					<div className="footer__extra-links">
						{extraLinks.map((link, idx) => (
							<a href="/" className="footer__extra-link" key={idx}>
								{link}
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	)
}
