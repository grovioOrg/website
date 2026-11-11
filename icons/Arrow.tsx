import { DirectionalProps } from "."

const ROTATION = {
	up: "-rotate-90",
	down: "rotate-90",
	left: "rotate-180",
	right: "rotate-0",
}

const Arrow = ({
	direction = "right",
	size = 20,
	className = "",
	...props
}: DirectionalProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		stroke="currentColor"
		className={`transition-transform duration-200 ${ROTATION[direction]} ${className}`}
		{...props}
	>
		<path
			d="M2 8H14M14 8L9 3M14 8L9 13"
			strokeWidth={1.6}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default Arrow
