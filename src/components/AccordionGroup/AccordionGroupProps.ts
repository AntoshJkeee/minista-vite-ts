import React from "react";

export interface AccordionGroupProps {
	className?: string
	mode?: '' | 'dark'
	columns?: number
	children: React.ReactNode[]
	isOrderedList?: boolean
}