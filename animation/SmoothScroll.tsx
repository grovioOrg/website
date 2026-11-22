"use client"

// #region imports
import {
    forwardRef,
    ReactNode,
    useEffect,
    useState,
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
    const [enabled, setEnabled] = useState(false)

    // Mount Lenis only after hydration so a locale remount never races
    // React's DOM insertAgainst Lenis' document-level listeners/classes.
    useEffect(() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)")
        const sync = () => setEnabled(!reduce.matches)
        sync()
        reduce.addEventListener("change", sync)
        return () => reduce.removeEventListener("change", sync)
    }, [])

    const wrapperClasses = cn(
        "w-full h-full no-scrollbar",
        className,
    )

    if (!enabled)
        return <div className={wrapperClasses}>{children}</div>

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
