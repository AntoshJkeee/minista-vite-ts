import './Content.scss'
import { type ContentProps } from './ContentProps'
import cn from 'classnames'

export const Content = (props: ContentProps) => {
	const { children, isResetPaddingTop = false } = props

	return (
		<main
			className={cn('content', {
				'content--reset-padding-top': isResetPaddingTop,
			})}
		>
			{children}
		</main>
	)
}
