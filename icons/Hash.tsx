import { IconProps } from "."

const Hash = ({
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
			d="M6 2L4.5 14M11.5 2L10 14M2.5 5.5H14M2 10.5H13.5"
			strokeWidth={1.5}
			strokeLinecap="round"
		/>
	</svg>
)

export default Hash
