"use client"

// #region imports
import {
    ReactNode,
    useEffect,
    useId,
    useRef
} from "react"

import { Cancel } from "@/icons"
import { cn } from "@/utils"

import {
    useMouse,
    useShortcut
} from "@/hooks"

import { Portal } from "@/context"
// #endregion

const modalVariants = {
    overlay: `
        fixed inset-0 z-100 bg-ink/40 backdrop-blur-[2px]
        flex items-center justify-center p-4
        max-mobile:items-end max-mobile:p-0
        animate-fade-in-fast
    `,
    container: `
        bg-white rounded-3xl relative animate-modal
        flex flex-col overflow-y-auto max-h-[92vh]
        shadow-window max-mobile:rounded-b-none
    `,
    sizes: {
        sm: "w-[min(92vw,420px)] max-mobile:w-full",
        md: "w-[min(92vw,640px)] max-mobile:w-full",
        lg: "w-[min(94vw,920px)] max-mobile:w-full",
    },
    padding: {
        none: "p-0",
        sm: "p-4",
        md: "p-6",
        lg: "p-8 max-mobile:p-5",
    },
    close: `
        absolute top-5 right-5 z-10 grid place-items-center
        size-9 rounded-full cursor-pointer smooth
        text-grey-300 hover:text-ink hover:bg-grey-50
    `,
}

export interface IModalProps {
    open: boolean
    onClose: () => void

    children: ReactNode
    title?: ReactNode

    size?: keyof typeof modalVariants.sizes
    padding?: keyof typeof modalVariants.padding

    closeOnOutside?: boolean
    showClose?: boolean
    closeLabel?: string

    className?: string
    overlayClassName?: string
    contentClassName?: string
}

const Modal = ({
    open,
    onClose,

    children,
    title,

    size = "md",
    padding = "lg",

    closeOnOutside = true,
    showClose = true,
    closeLabel = "Close",

    className = "",
    overlayClassName = "",
    contentClassName = "",
}: IModalProps) => {
    const modalRef = useRef<HTMLDivElement | null>(null)
    const titleId = useId()

    useMouse({
        combination: "mousedown",
        handler: (e) => {
            if (
                open &&
                closeOnOutside &&
                modalRef.current &&
                !modalRef.current.contains(e.target as Node)
            ) {
                onClose()
            }
        },
    })

    useShortcut([
        ["escape", () => open && onClose(), false]
    ])

    useEffect(() => {
        if (!open)
            return

        const original = document.body.style.overflow
        const previous = document.activeElement as HTMLElement | null
        document.body.style.overflow = "hidden"
        modalRef.current?.focus()

        return () => {
            document.body.style.overflow = original
            previous?.focus?.()
        }
    }, [open])

    if (!open)
        return null

    return (
        <Portal>
            <div
                className={cn(
                    modalVariants.overlay,
                    overlayClassName
                )}
            >
                <aside
                    ref={modalRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={title ? titleId : undefined}
                    tabIndex={-1}
                    onMouseDown={e => e.stopPropagation()}
                    className={cn(
                        modalVariants.container,
                        modalVariants.sizes[size],
                        modalVariants.padding[padding],
                        "outline-none",
                        className
                    )}
                >
                    {
                        showClose &&
                        <button
                            type="button"
                            aria-label={closeLabel}
                            onClick={onClose}
                            className={modalVariants.close}
                        >
                            <Cancel size={11} />
                        </button>
                    }

                    {
                        title &&
                        <h2
                            id={titleId}
                            className="font-display text-2xl font-semibold mb-4"
                        >
                            {title}
                        </h2>
                    }

                    <section
                        className={cn(
                            "flex flex-col",
                            contentClassName
                        )}
                    >
                        {children}
                    </section>
                </aside>
            </div>
        </Portal>
    )
}

export default Modal
