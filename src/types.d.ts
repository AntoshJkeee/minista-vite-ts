interface SliderParams {
	[key: string]: any
}

interface CollectionItems {
	isActive: boolean
	title: string
	items: CollectionItem[] // remove
}

interface CollectionItem {
	title: string
	sliderParams?: SliderParams
	categoryItems?: CategoryItem[]
	movieItems?: MovieItem[]
}

interface CategoryItem {
	title: string
	badge?: string
	images: string[]
}

interface DeviceItem {
	title: string
	description: string
	imgSrc: string
}

interface MovieItem {
	title: string
	imgSrc: string
	duration?: string
	views?: string
	released?: { label: string, dateTime: string }
	rating?: { value: number, label: string }
}

interface PlansItems {
	title: string
	isActive?: boolean
	items: PlansItem[]
}

interface PlansItem {
	title: string
	description: string
	price: { value: string, label: string }
}

interface HeadCell {
	children: string | JSX.Element
	width: string
	tabsTitle?: string
}

interface Row {
	cells: string[]
	isWide?: boolean
}