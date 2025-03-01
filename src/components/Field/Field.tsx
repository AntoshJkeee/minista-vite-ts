import "./Field.scss"
import { type FieldProps } from "@/components/Field/FieldProps";
import getIdFromTitle from "@/utils/helpers/getIdFromTitle"
import cn from "classnames"

export const Field = (props: FieldProps) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    type,
    placeholder,
    isRequired,
    inputMode,
    mask,
    renderBefore
  } = props

  const Component = type === 'textarea'
      ? 'textarea'
      : 'input'

  const extraAttrs: {[key: string]: string } = {}

  if(mask) {
    extraAttrs['data-js-input-mask'] = mask
  }

  return (
      <div
          className={cn(className, 'field')}
      >
        <label
            className="field__label"
            htmlFor={id}
        >
          {label} {isRequired && (
            <span
                className="field__required-star"
                aria-hidden="true"
            >*</span>
        )}
        </label>
        <div className="field__body">
          {renderBefore?.('field__control')}
          <Component
              className="field__control"
              id={id}
              type={type}
              placeholder={placeholder}
              required={isRequired}
              inputMode={inputMode}
              {...extraAttrs}
          />
        </div>
      </div>
  )
}
