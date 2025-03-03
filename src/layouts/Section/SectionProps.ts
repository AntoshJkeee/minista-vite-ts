export interface SectionProps {
	className?: string
	title: string
	titleId: string
	description?: string
	actions?: JSX.Element
	isActionsHiddenOnMobile?: boolean
	children: JSX.Element
}
