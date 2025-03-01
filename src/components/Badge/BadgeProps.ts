export interface BadgeProps {
	className?: string
	mode?: '' | 'accent'
	isBig?: boolean,
	children: JSX.Element,
	iconName?: string,
	hasFillIcon?: boolean,
	iconAriaLabel?: string
}