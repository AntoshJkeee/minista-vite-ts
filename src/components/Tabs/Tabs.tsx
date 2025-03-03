import './Tabs.scss'
import { type TabsProps } from './TabsProps'
import cn from 'classnames'
import getTabsElementsIdsFromTitle from './utils/getTabsElementsIdsFromTitle'
import { TabsNavigation } from '@/components'

export const Tabs = (props: TabsProps) => {
	const { className, title, items = [], navigationTargetElementId = null, isEnableOnlyOnMobile = false } = props

	return (
		<div
			className={cn(className, 'tabs', {
				'tabs--enable-only-on-mobile': isEnableOnlyOnMobile,
			})}
			data-js-tabs={JSON.stringify({
				navigationTargetElementId,
			})}
		>
			{!navigationTargetElementId && <TabsNavigation title={title} items={items} />}

			<div className="tabs__body">
				{items.map((item, idx) => {
					const { title, children, isActive } = item

					const { buttonId, contentId } = getTabsElementsIdsFromTitle(title)

					return (
						<div
							className={cn('tabs__content', {
								'is-active': isActive,
							})}
							id={contentId}
							aria-labelledby={buttonId}
							tabIndex={0}
							data-js-tabs-content=""
							key={idx}
						>
							{children}
						</div>
					)
				})}
			</div>
		</div>
	)
}
