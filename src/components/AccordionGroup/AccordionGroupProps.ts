export interface AccordionGroupProps {
	className?: string
	mode?: '' | 'dark'
	columns?: number
	children: JSX.Element[]
	isOrderedList?: boolean
}