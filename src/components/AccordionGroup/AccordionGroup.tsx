import "./AccordionGroup.scss"
import { type AccordionGroupProps } from "./AccordionGroupProps";
import cn from "classnames"

export const AccordionGroup = (props: AccordionGroupProps) => {
	const {
		className,
		mode = '',
		columns = 1,
		children,
		isOrderedList = true,
	} = props

	const itemsPerColumn = Math.ceil(children.length / columns  )
	const ListTag = isOrderedList ? 'ol' : 'ul'

	return (
		<ListTag
			className={cn(className, 'accordion-group', {
				[`accordion-group--${columns}-columns`]: columns > 1,
				[`accordion-group--${mode}`]: mode,
				'accordion-group--has-counter': isOrderedList,
			})}
		>
			{children.map((child, index) => (
				<li
					className={cn('accordion-group__item', {
						'accordion-group__item--last-column-item': columns > 1 && (index + 1) % itemsPerColumn === 0
					})}
					key={index}
				>
					{child}
				</li>
			))}
		</ListTag>
	)
}
