import './Section.scss'
import { type SectionProps } from './SectionProps'
import cn from 'classnames'

export const Section = (props: SectionProps) => {
	const { className, title, titleId, description, actions, isActionsHiddenOnMobile = false, children } = props

	return (
		<section className={cn(className, 'section container')} aria-label={titleId}>
			<header className="section__header">
				<div className="section__info">
					<h2 className="section__title h3" id={titleId}>
						{title}
					</h2>
					{description && (
						<div className="section__description">
							<p>{description}</p>
						</div>
					)}
				</div>
				{actions && (
					<div
						className={cn('section__actions', {
							'hidden-mobile': isActionsHiddenOnMobile,
						})}
					>
						{actions}
					</div>
				)}
			</header>
			<div className="section__body">{children}</div>
		</section>
	)
}
