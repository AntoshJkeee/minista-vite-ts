export interface SliderProps {
	children: JSX.Element[];
	navigationTargetElementId?: null | string
	sliderParams?: SliderParams;
	isBeyondTheViewportOnMobileS?: boolean
	hasScrollbarOnMobile?: boolean
	navigationMode?: '' | 'tile' | 'rounded'
	navigationPosition?: '' | 'abs-bottom'
	isNavigationHiddenMobile?: boolean
}