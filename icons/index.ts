import { SVGProps } from "react"

export interface IconProps extends SVGProps<SVGSVGElement> {
	size?: number
}

export interface DirectionalProps extends SVGProps<SVGSVGElement> {
	direction?: "up" | "down" | "left" | "right"
	size?: number
}

// #region Icons
export { default as Logo, LOGO_PATH } from "./Logo"
export { default as Sparkle } from "./Sparkle"
export { default as Cancel } from "./Cancel"
export { default as Arrow } from "./Arrow"
export { default as Check } from "./Check"
export { default as Plus } from "./Plus"
export { default as Hash } from "./Hash"
// #endregion
