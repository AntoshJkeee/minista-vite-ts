import "./Checkbox.scss"
import {type CheckboxProps } from "./CheckboxProps";
import getIdFromTitle from "@/utils/getIdFromTitle";
import cn from "classnames";

export const Checkbox = (props: CheckboxProps) => {
  const {
    className,
    id = getIdFromTitle(props.label),
    label,
    isRequired,
  } = props

  return (
      <label
        className={cn(className, 'checkbox')}
        htmlFor={id}
      >
        <input
          className='checkbox__input'
          id={id}
          type="checkbox"
          required={isRequired}
        />
        <span className='checkbox__label'>{label}</span>
      </label>
  );
}