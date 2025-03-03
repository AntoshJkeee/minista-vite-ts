import './Button.scss'
import { type ButtonProps } from './ButtonProps'
import cn from 'classnames'
import { Icon } from '@/components'

export const Button = (props: ButtonProps) => {
	const {
		className,
		href,
		type = 'button',
		target,
		mode = '',
		label,
		isLabelHidden = false,
		iconName,
		iconPosition = 'before',
		hasFillIcon,
		extraAttrs,
	} = props

	const isLink = href !== undefined
	const Component = isLink ? 'a' : 'button'
	const linkProps = { href, target }
	const buttonProps = { type }
	const specificProps = isLink ? linkProps : buttonProps
	const title = isLabelHidden ? label : undefined
	const iconComponent = iconName && <Icon className="button__icon" name={iconName} hasFill={hasFillIcon} />

	return (
		<Component
			className={cn(className, 'button', {
				[`button__${mode}`]: mode,
			})}
			{...specificProps}
			{...extraAttrs}
			title={title}
			aria-label={title}
		>
			{iconPosition === 'before' && iconComponent}
			{!isLabelHidden && <span className="button__label">{label}</span>}
			{iconPosition === 'after' && iconComponent}
		</Component>
	)
}
