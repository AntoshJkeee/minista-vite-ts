export interface ButtonProps {
	className?: string
	href?: string
	type?: 'button' | 'submit'
	target?: string
	mode?: string
	label?: string
	isLabelHidden?: boolean
	iconName?: string
	iconPosition?: 'before' | 'after'
	hasFillIcon?: boolean
	extraAttrs?: { [key: string]: string }
}