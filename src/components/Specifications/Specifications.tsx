import "./Specifications.scss"
import { type SpecificationsProps } from "./SpecificationsProps";
import classNames from "classnames"

export const Specifications = (props: SpecificationsProps) => {
  const {
    items = [],
  } = props

  return (
    <div className="specifications">
      <dl className="specifications__list">
        {items.map(({ key, value, isWide }, idx) => (
          <div
            className={classNames('specifications__item', {
              'specifications__item--wide': isWide,
            })}
            key={idx}
          >
            <dt className="specifications__key">{key}</dt>
            <dd className="specifications__value">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
