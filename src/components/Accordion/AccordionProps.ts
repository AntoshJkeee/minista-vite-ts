import React from "react";

export interface AccordionProps {
	title: string
	id: string
	name: string
	isOpen: boolean
	isArrowButton?: boolean
	children: React.ReactNode,
	titleLevelClassName?: 'h4' | 'h5',
	subtitle?: string,
}