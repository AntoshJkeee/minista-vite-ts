import React from "react";

export interface SectionProps {
	className?: string
	title: string
	titleId: string
	description?: string
	actions?: React.ReactNode
	isActionsHiddenOnMobile?: boolean
	children: React.ReactNode
}