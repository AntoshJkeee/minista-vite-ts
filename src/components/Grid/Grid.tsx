import './Grid.scss'
import { type GridProps } from "./GridProps";
import cn from "classnames";

export const Grid = (props: GridProps) => {

	const {
		columns = 1,
		children
	} = props

	return (
		<ul className={cn('grid', {
			[`grid__${columns}`]: columns > 1
		})}>
			{children.map((child, idx) => (
				<li
					className='grid__item'
					key={idx}
				>
					{child}
				</li>
			))}
		</ul>
	);
}