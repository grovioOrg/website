"use client"

// #region imports
import {
    KeyboardEvent,
    ReactNode,
    useCallback,
    useEffect,
    useId,
    useMemo,
    useRef,
    useState
} from "react"

import {
    useMouse,
    useShortcut
} from "@/hooks"
import type { IKeyBinding } from "@/hooks/useShortcut"

import { cn } from "@/utils"
// #endregion

export interface IDropdownItem {
    href: string
    title: ReactNode
    description?: ReactNode
    icon?: ReactNode
    badge?: ReactNode
}

export interface IDropdownColumn {
    title?: ReactNode
    items: IDropdownItem[]
    /** Lay the column's items out in this many sub-columns. */
    split?: 1 | 2
}

export interface IDropdownProps {
    label: ReactNode
    columns: IDropdownColumn[]
    align?: "left" | "center" | "right"
    className?: string
    panelClassName?: string
}

const HOVER_DELAY = 120

const alignClasses = {
    left: "left-0",
    center: "left-1/2 -translate-x-1/2",
    right: "right-0",
}

const Dropdown = ({
    label,
    columns,
    align = "center",
    className = "",
    panelClassName = "",
}: IDropdownProps) => {
    const id = useId()
    const root = useRef<HTMLDivElement | null>(null)
    const trigger = useRef<HTMLButtonElement | null>(null)
    const panel = useRef<HTMLDivElement | null>(null)
    const timer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const [open, setOpen] = useState(false)

    const clear = () => {
        if (timer.current)
            clearTimeout(timer.current)
    }

    const show = () => {
        clear()
        timer.current = setTimeout(() => setOpen(true), HOVER_DELAY)
    }

    const hide = () => {
        clear()
        timer.current = setTimeout(() => setOpen(false), HOVER_DELAY)
    }

    const close = useCallback((refocus = false) => {
        setOpen(false)
        if (refocus)
            trigger.current?.focus()
    }, [])

    useEffect(() => clear, [])

    const outside = useMemo(() => ({
        combination: "pointerdown",
        handler: (event: Event) => {
            if (open && !root.current?.contains(event.target as Node))
                close()
        },
    }), [open, close])

    useMouse(outside)

    const shortcuts = useMemo<IKeyBinding[]>(() => [
        ["escape", () => open && close(true), false],
    ], [open, close])

    useShortcut(shortcuts)

    const links = () =>
        Array.from(panel.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? [])

    const focusLink = (index: number) => {
        const items = links()
        items[(index + items.length) % items.length]?.focus()
    }

    const onTriggerKey = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key !== "ArrowDown")
            return

        event.preventDefault()
        setOpen(true)
        requestAnimationFrame(() => focusLink(0))
    }

    const onPanelKey = (event: KeyboardEvent<HTMLDivElement>) => {
        const items = links()
        const current = items.indexOf(document.activeElement as HTMLAnchorElement)

        if (event.key === "ArrowDown") {
            event.preventDefault()
            focusLink(current + 1)
        }
        if (event.key === "ArrowUp") {
            event.preventDefault()
            focusLink(current - 1)
        }
        if (event.key === "Tab" && !event.shiftKey && current === items.length - 1)
            close()
    }

    return (
        <div
            ref={root}
            className={cn("relative", className)}
            onPointerEnter={(event) => event.pointerType === "mouse" && show()}
            onPointerLeave={(event) => event.pointerType === "mouse" && hide()}
        >
            <button
                ref={trigger}
                type="button"
                aria-expanded={open}
                aria-controls={id}
                aria-haspopup="true"
                onClick={() => setOpen(!open)}
                onKeyDown={onTriggerKey}
                className={cn(
                    "inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-medium cursor-pointer smooth outline-none",
                    "focus-visible:ring-2 focus-visible:ring-ink",
                    open ? "text-ink bg-grey-50" : "text-grey-300 hover:text-ink hover:bg-grey-50"
                )}
            >
                {label}
                <svg
                    width={12}
                    height={12}
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                    className={cn("smooth", open && "rotate-180")}
                >
                    <path d="M4 6l4 4 4-4" />
                </svg>
            </button>

            <div
                ref={panel}
                id={id}
                hidden={!open}
                onKeyDown={onPanelKey}
                className={cn(
                    "absolute top-full pt-3 z-50",
                    alignClasses[align],
                )}
            >
                <div className={cn(
                    "flex gap-8 rounded-2xl bg-white p-5 shadow-lift ring-1 ring-ink/6",
                    "animate-fade-in-fast",
                    panelClassName
                )}>
                    {columns.map((column, index) => (
                        <div
                            key={index}
                            className={cn(
                                "flex flex-col min-w-0",
                                index > 0 && "pl-8 border-l border-grey-100"
                            )}
                        >
                            {column.title && (
                                <p className="px-2.5 mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-grey-200">
                                    {column.title}
                                </p>
                            )}
                            <ul className={cn(
                                "grid gap-0.5",
                                column.split === 2 && "grid-cols-2 gap-x-4"
                            )}>
                                {column.items.map(item => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            onClick={() => close()}
                                            className="
                                                flex items-start gap-3 rounded-xl px-2.5 py-2 outline-none smooth
                                                hover:bg-paper focus-visible:bg-paper focus-visible:ring-2 focus-visible:ring-ink
                                            "
                                        >
                                            {item.icon && (
                                                <span className="shrink-0 mt-0.5 text-grey-300">
                                                    {item.icon}
                                                </span>
                                            )}
                                            <span className="flex flex-col min-w-0">
                                                <span className="flex items-center gap-2 text-sm font-medium text-ink whitespace-nowrap">
                                                    {item.title}
                                                    {item.badge}
                                                </span>
                                                {item.description && (
                                                    <span className="text-xs text-grey-200 leading-snug mt-0.5">
                                                        {item.description}
                                                    </span>
                                                )}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dropdown
