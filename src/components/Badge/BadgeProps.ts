export interface BadgeProps {
	className?: string
	mode?: '' | 'accent'
	isBig?: boolean
	children: React.ReactNode
	iconName?: string
	hasFillIcon?: boolean
	iconAriaLabel?: string
}
