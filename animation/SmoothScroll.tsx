"use client"

// #region imports
import {
    forwardRef,
    ReactNode,
} from "react"

import {
    ReactLenis,
    type LenisRef,
} from "lenis/react"

import { cn } from "@/utils"
// #endregion

export interface ISmoothScrollProps {
    children: ReactNode
    className?: string
}

export const SmoothScroll = forwardRef<LenisRef, ISmoothScrollProps>((
    {
        children,
        className,
    },
    ref,
) => {
    const wrapperClasses = cn(
        "w-full h-full no-scrollbar",
        className,
    )

    return (
        <ReactLenis
            ref={ref}
            root
            className={wrapperClasses}
            options={{
                smoothWheel: true,
                duration: 2,
                lerp: 0.02,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            }}
        >
            {children}
        </ReactLenis>
    )
})

SmoothScroll.displayName = "SmoothScroll"
