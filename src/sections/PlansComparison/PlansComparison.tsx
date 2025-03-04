import { Section } from '@/layouts'
import { Table, Specifications, Tabs } from '@/components'
import { type PlansComparisonProps } from './PlansComparisonProps'

export const PlansComparison = (props: PlansComparisonProps) => {
	const { headCells, rows } = props

	const tabsItems = headCells
		.filter((headCell) => headCell.tabsTitle)
		.map((headCell, headCellIndex) => ({
			title: headCell.tabsTitle ? headCell.tabsTitle : '',
			isActive: headCellIndex === 0,
			children: (
				<Specifications
					items={rows.map(({ cells, isWide }) => ({
						key: cells[0],
						value: cells[headCellIndex + 1],
						isWide,
					}))}
				/>
			),
		}))

	return (
		<Section
			title="Compare our plans and find the right one for you"
			titleId="plans-comparison-title"
			description="StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that's right for you."
		>
			<Table className="hidden-mobile" headCells={headCells} rows={rows} />
			<Tabs className="visible-mobile" title="plans-comparison-tabs-title" items={tabsItems} />
		</Section>
	)
}
