"use client"

// #region imports
import {
    ReactNode,
    useRef,
} from "react"

import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion"
// #endregion

/**
 * Lifts a block into place as it enters: a short rise and a slight
 * scale settle, finished before it reaches the middle of the screen.
 * Driven straight from scroll so Lenis provides the smoothing.
 */
export const SectionElevate = ({
    children,
    className = "",
}: {
    children: ReactNode
    className?: string
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const reduced = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start 35%"],
    })

    const y = useTransform(scrollYProgress, [0, 1], [72, 0])
    const scale = useTransform(scrollYProgress, [0, 1], [0.965, 1])

    if (reduced)
        return <div className={className}>{children}</div>

    return (
        <div ref={ref} className={className}>
            <motion.div
                style={{
                    y,
                    scale,
                    transformOrigin: "50% 0%",
                    willChange: "transform",
                }}
            >
                {children}
            </motion.div>
        </div>
    )
}
