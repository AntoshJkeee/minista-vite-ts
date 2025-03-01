import "./TabsNavigation.scss"
import { type TabsNavigationProps } from "./TabsNavigationProps"
import getIdFromTitle from "@/utils/getIdFromTitle"
import getTabsElementsIdsFromTitle from "@/components/Tabs/utils/getTabsElementsIdsFromTitle"
import cn from "classnames"

export const TabsNavigation = (props: TabsNavigationProps) => {
  const {
    className,
    id,
    title,
    items = [],
  } = props

  const titleFormatted = getIdFromTitle(title)
  const titleId = `${titleFormatted}-title`

  return (
    <div
      className={cn(className, 'tabs-navigation')}
      id={id}
      role="tablist"
      aria-labelledby={titleId}
      data-js-tabs-navigation=""
    >
      <h3 className="visually-hidden" id={titleId}>
        {title}
      </h3>
      {items.map((item, idx) => {
        const { buttonId, contentId } = getTabsElementsIdsFromTitle(item.title)

        return (
          <div
            className={cn('tabs-navigation__button', {
              'is-active': item.isActive
            })}
            id={buttonId}
            aria-controls={contentId}
            role="tab"
            aria-selected={item.isActive}
            tabIndex={item.isActive ? 0 : -1}
            data-js-tabs-button=""
            key={idx}
          >
            {item.title}
          </div>
        )
      })}
    </div>
  )
}
