// import { Children } from "react";

export interface SliderProps {
	children: any // TODO React.ReactNode | React.ReactNode[] ПЕРЕДАВАТЬ КОРРЕКТНЫЙ ТИП
	navigationTargetElementId?: null | string
	sliderParams?: SliderParams;
	isBeyondTheViewportOnMobileS?: boolean
	hasScrollbarOnMobile?: boolean
	navigationMode?: '' | 'tile' | 'rounded'
	navigationPosition?: '' | 'abs-bottom'
	isNavigationHiddenMobile?: boolean
}