export interface TabsProps {
	className?: string
	title: string
	items: {
		title: string
		isActive: boolean
		children: JSX.Element
	}[]
	navigationTargetElementId?: null | string
	isEnableOnlyOnMobile?: boolean
}