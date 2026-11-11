import { IconProps } from "."

const Check = ({
	size = 20,
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 16 16"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		stroke="currentColor"
		{...props}
	>
		<path
			d="M3 8.5L6.5 12L13 4.5"
			strokeWidth={1.8}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
)

export default Check
