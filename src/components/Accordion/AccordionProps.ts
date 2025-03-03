export interface AccordionProps {
	title: string
	id: string
	name: string
	isOpen: boolean
	isArrowButton?: boolean
	children: JSX.Element
	titleLevelClassName?: 'h4' | 'h5'
	subtitle?: string
}
