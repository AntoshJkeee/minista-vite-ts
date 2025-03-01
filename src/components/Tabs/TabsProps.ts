import React from "react";

export interface TabsProps {
	className?: string
	title: string
	items: any // TODO ПЕРЕДАВАТЬ КОРРЕКТНЫЙ ТИП
	navigationTargetElementId?: null | string
	isEnableOnlyOnMobile?: boolean
}