import "./Header.scss";
import { type HeaderProps } from "./HeaderProps";
import cn from "classnames"
import { Button, Logo, BurgerButton} from "@/components";

export const Header = (props: HeaderProps) => {
	const { url, isFixed } = props

	const menuItems = [
		{ label: 'Home', href: '/' },
		{ label: 'Movies & Shows', href: '/movies' },
		{ label: 'Support', href: '/support' },
		{ label: 'Subscriptions', href: '/subscriptions' },
	]

	return (
		<header
			className={cn('header', {
				'is-fixed': isFixed
			})}
			data-js-overlay-menu=''
		>
			<div className='header__inner container'>
				<Logo className='header__logo' loading='eager'/>
				<dialog className="header__overlay-menu-dialog" data-js-overlay-menu-dialog=''>
					<nav className="header__menu">
						<ul className="header__menu-list">
							{
								menuItems.map(({label, href}, idx) => (
									<li className='header__menu-item' key={idx}>
										<a href={href} className={cn('header__menu-link', {
											'is-active': href === url
										})}>{label}</a>
									</li>
								))
							}
						</ul>
					</nav>
					<div className="header__actions">
						<Button
							className='header__button'
							label="Search"
							isLabelHidden
							mode='transparent'
							iconName='search'/>
						<Button
							className='header__button'
							label="Notification"
							isLabelHidden
							mode='transparent'
							iconName='notification'/>
					</div>
				</dialog>
				<BurgerButton
					className='header__burger-button visible-tablet'
					extraAttrs={{
						'data-js-overlay-menu-burger-button': ''
					}}
				/>
			</div>
		</header>
	)
}