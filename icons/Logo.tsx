import { IconProps } from "."

export const LOGO_PATH = "M118.758 235.689C115.152 237.628 113.694 242.05 115.44 245.754L152.635 324.641C154.807 329.247 160.772 330.514 164.628 327.187L263.252 242.108C268.922 237.217 277.53 242.478 275.763 249.755L242.239 387.802C240.636 394.403 247.746 399.695 253.609 396.264L345.425 342.535C347.785 341.154 349.235 338.625 349.235 335.89V313.584L342.891 127.798C342.697 122.093 336.578 118.576 331.551 121.279L118.758 235.689Z"

const Logo = ({
	size = 20,
	...props
}: IconProps) => (
	<svg
		width={size}
		height={size}
		viewBox="0 0 512 512"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<circle
			cx={256}
			cy={256}
			r={256}
			fill="var(--color-yellow-100)"
		/>
		<path
			d={LOGO_PATH}
			fill="var(--color-ink)"
		/>
	</svg>
)

export default Logo
