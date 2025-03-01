export interface SelectProps {
	id?: string
	label: string
	isLabelHidden?: boolean
	options: { value: string, isSelected?: boolean }[]
	buttonClassName: string
}