"use client"

// #region imports
import {
	InputHTMLAttributes,
	ReactNode,
	forwardRef,
	useId,
} from "react"

import { cn } from "@/utils"
// #endregion


const textFieldVariants = {
	base: `
		flex w-full min-h-11 items-center gap-2 rounded-xl
		font-main font-normal text-ink
		transition-all ease-in-out duration-150
	`,
	variants: {
		filled: `
			bg-grey-50 hover:bg-grey-100
			focus-within:bg-white
			focus-within:ring-2 focus-within:ring-yellow-100
		`,
		outlined: `
			bg-white ring-1 ring-grey-100 hover:ring-grey-150
			focus-within:ring-2 focus-within:ring-ink
		`
	},
	sizes: {
		sm: "text-sm py-1 px-3",
		md: "text-base py-2 px-3.5",
		lg: "text-lg py-3 px-4"
	},
}

export interface ITextFieldProps
extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
	variant?: keyof typeof textFieldVariants.variants
	size?: keyof typeof textFieldVariants.sizes
	disabled?: boolean
	error?: boolean

	label?: string
	helperText?: ReactNode
	startIcon?: ReactNode
	endIcon?: ReactNode

	className?: string
}

const TextField = forwardRef<HTMLInputElement, ITextFieldProps>(
	(
		{
			variant = "outlined",
			size = "md",
			disabled = false,
			error = false,
			label,
			helperText,
			startIcon,
			endIcon,
			className = "",
			id,
			...props
		},
		ref
	) => {
		const autoId = useId()
		const fieldId = id ?? autoId
		const helperId = `${fieldId}-help`

		const boxClasses = cn(
			textFieldVariants.base,
			textFieldVariants.variants[variant],
			textFieldVariants.sizes[size],
			disabled && "cursor-not-allowed opacity-50",
			error && "ring-2 ring-error focus-within:ring-error",
		)

		return (
			<div
				className={cn(
					"flex w-full flex-col",
					className,
				)}
			>
				{label && (
					<label
						htmlFor={fieldId}
						className="mb-1.5 text-sm font-medium text-grey-300"
					>
						{label}
					</label>
				)}

				<div
					className={boxClasses}
					data-error={error}
				>
					{startIcon && (
						<span className="shrink-0 text-grey-200">
							{startIcon}
						</span>
					)}

					<input
						ref={ref}
						id={fieldId}
						className="
							min-w-0 flex-1 bg-transparent
							text-ink outline-none
							placeholder:text-grey-150
						"
						disabled={disabled}
						aria-invalid={error || undefined}
						aria-describedby={helperId}
						{...props}
					/>

					{endIcon && (
						<span className="shrink-0">
							{endIcon}
						</span>
					)}
				</div>

				<p
					id={helperId}
					className={cn(
						"mt-1 min-h-4 text-xs font-medium",
						error ? "text-error" : "text-grey-200",
					)}
				>
					{helperText}
				</p>
			</div>
		)
	}
)

TextField.displayName = "TextField"
export default TextField
