"use client"

// #region imports
import {
	ButtonHTMLAttributes,
	ReactNode,
	forwardRef
} from "react"

import {
	cn
} from "@/utils"
// #endregion


export const buttonVariants = {
	base: `
		inline-flex items-center justify-center gap-2 h-fit select-none
		rounded-full font-main font-medium text-base whitespace-nowrap
		smooth active:scale-97 shrink-0 cursor-pointer
		focus-visible:outline-2 focus-visible:outline-offset-2
		focus-visible:outline-ink disabled:opacity-50
		disabled:cursor-not-allowed
	`,

	variants: {
		primary: `
			bg-ink text-white hover:bg-charcoal-100
			shadow-[inset_0_-2px_0_rgb(255_255_255/0.08)]
		`,

		yellow: `
			bg-yellow-100 text-ink hover:bg-yellow-200
			shadow-[inset_0_-2px_0_rgb(10_10_10/0.12)]
		`,

		secondary: `
			bg-white text-ink ring-1 ring-grey-100
			hover:ring-grey-150 hover:bg-paper
		`,

		ghost: `
			bg-transparent text-ink hover:bg-grey-50
		`,

		inverted: `
			bg-white text-ink hover:bg-paper
		`,

		text: `
			bg-none text-ink underline-offset-4
			hover:underline
		`
	},

	sizes: {
		xs: "px-3 py-1 text-xs",
		sm: "px-4 py-1.5 text-sm",
		md: "px-5 py-2.5 text-sm",
		lg: "px-7 py-3.5 text-base",
		full: "px-6 py-3 w-full",
		auto: "px-0 py-0 w-fit",
	}
}

export interface ButtonProps
extends ButtonHTMLAttributes<
	HTMLButtonElement
> {
	variant?: keyof typeof buttonVariants.variants
	size?: keyof typeof buttonVariants.sizes
	disabled?: boolean
	loading?: boolean
	loadingText?: string

	startIcon?: ReactNode
	endIcon?: ReactNode

	children: ReactNode
	className?: string
	textClassName?: string

	fullWidth?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			variant = "primary",
			size = "md",
			disabled = false,
			loading = false,
			loadingText = "Loading",
			startIcon,
			endIcon,
			children,
			className = "",
			textClassName = "",
			fullWidth = false,
			type = "button",
			...props
		},
		ref
	) => {

		const isDisabled = disabled || loading
		const displayText = loading ? loadingText : children

		const displayStartIcon = loading ? (
			<span
				aria-hidden
				className="
					block size-4 rounded-full border-2
					border-current border-r-transparent
					animate-spin
				"
			/>
		) : startIcon

		const buttonClasses = cn(
			buttonVariants.base,
			buttonVariants.variants[variant],
			fullWidth ? buttonVariants.sizes.full : buttonVariants.sizes[size],
			className
		)

		return (
			<button
				ref={ref}
				type={type}
				className={buttonClasses}
				disabled={isDisabled}
				aria-busy={loading || undefined}
				{...props}
			>

				{displayStartIcon && (
					<span className="shrink-0">
						{displayStartIcon}
					</span>
				)}

				<span className={textClassName}>
					{displayText}
				</span>

				{endIcon && !loading && (
					<span className="shrink-0">
						{endIcon}
					</span>
				)}
			</button>
		)
	}
)

Button.displayName = "Button"
export default Button
