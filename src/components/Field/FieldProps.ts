export interface FieldProps {
	className?: string
	id?: string
	label: string
	type?: 'email' | 'textarea'
	placeholder: string
	isRequired?: boolean
	inputMode?: 'email' | 'search' | 'tel' | 'none' | 'text' | 'url' | 'numeric' | 'decimal' | undefined
	mask?: string
	renderBefore?: (value: string) => JSX.Element
}
