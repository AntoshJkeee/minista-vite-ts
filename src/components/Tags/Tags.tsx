import "./Tags.scss"
import { type TagsProps } from "./TagsProps";

export const Tags = (props: TagsProps) => {
  const {
    items = [],
  } = props

  return (
    <div className="tags">
      <ul className="tags__list">
        {items.map((tag, idx) => (
          <li className="tags__item" key={idx}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}
