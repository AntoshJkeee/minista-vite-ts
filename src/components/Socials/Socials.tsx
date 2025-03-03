import './Socials.scss'
import { type SocialsProps } from './SocialsProps'
import cn from 'classnames'
import { Button } from '@/components'

export const Socials = (props: SocialsProps) => {
	const { className, links = [] } = props

	return (
		<div className={cn(className, 'soc1als')}>
			<ul className="soc1als__list">
				{links.map(({ label, iconName }, idx) => (
					<li className="soc1als__item" key={idx}>
						<Button
							className="soc1ials__link"
							mode="black-10"
							href="/"
							target="_blank"
							label={label}
							isLabelHidden
							iconName={iconName}
							hasFillIcon
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
