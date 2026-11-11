"use client"

// #region imports
import {
    forwardRef,
    ReactNode,
    useEffect,
    useId,
    useState,
} from "react"

import { cn } from "@/utils"
// #endregion

export interface ISelectOption {
    name: ReactNode
    value: string
    hint?: string
}

export interface ISelectGroupProps {
    options: ISelectOption[]
    name: string
    value?: string
    defaultValue?: string
    columns?: number
    title?: string
    error?: boolean
    helperText?: ReactNode
    disabled?: boolean
    className?: string
    onChange?: (value: string) => void
}

const columnClasses: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-2",
    3: "grid-cols-2 mobile:grid-cols-3",
    4: "grid-cols-2 mobile:grid-cols-4",
    5: "grid-cols-3 mobile:grid-cols-5",
}

const SelectGroup = forwardRef<
    HTMLFieldSetElement,
    ISelectGroupProps
>(
    (
        {
            options,
            name,
            value,
            defaultValue,
            columns = 2,
            title,
            error = false,
            helperText,
            disabled = false,
            className = "",
            onChange,
        },
        ref
    ) => {
        const helperId = useId()
        const [selected, setSelected] =
            useState<string>(
                value ??
                defaultValue ??
                ""
            )

        useEffect(() => {
            if (value !== undefined)
                setSelected(value)
        }, [value])

        return (
            <fieldset
                ref={ref}
                disabled={disabled}
                aria-describedby={helperId}
                className={cn(
                    "flex flex-col",
                    className
                )}
            >
                {title && (
                    <legend className="
                        mb-1.5 text-sm font-medium text-grey-300
                    ">
                        {title}
                    </legend>
                )}

                <div className={cn(
                    "grid gap-2",
                    columnClasses[columns] ?? columnClasses[2]
                )}>
                    {options.map(opt => (
                        <label
                            key={opt.value}
                            data-checked={selected === opt.value}
                            className={cn(
                                `
                                    group relative flex flex-col gap-0.5
                                    rounded-xl px-3 py-2.5 cursor-pointer
                                    bg-white ring-1 ring-grey-100 smooth
                                    hover:ring-grey-150 text-sm
                                    has-focus-visible:ring-2
                                    has-focus-visible:ring-ink
                                    data-[checked=true]:ring-2
                                    data-[checked=true]:ring-ink
                                    data-[checked=true]:bg-yellow-50
                                `,
                                error && "ring-error/60"
                            )}
                        >
                            <input
                                type="radio"
                                name={name}
                                value={opt.value}
                                checked={selected === opt.value}
                                className="sr-only"
                                onChange={() => {
                                    setSelected(opt.value)
                                    onChange?.(opt.value)
                                }}
                            />

                            <span className="font-medium text-ink">
                                {opt.name}
                            </span>

                            {opt.hint && (
                                <span className="text-xs text-grey-200">
                                    {opt.hint}
                                </span>
                            )}
                        </label>
                    ))}
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
            </fieldset>
        )
    }
)

SelectGroup.displayName =
    "SelectGroup"

export default SelectGroup
