import { IconProps } from "."

const Plus = ({
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
			d="M8 3V13M3 8H13"
			strokeWidth={1.6}
			strokeLinecap="round"
		/>
	</svg>
)

export default Plus
