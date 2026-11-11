"use client"

// #region imports
import { useRef } from "react"

import {
    motion,
    useScroll,
    useTransform
} from "framer-motion"
// #endregion

type ParallaxProps = {
    children: React.ReactNode
    speed?: number
    className?: string
    motionClassName?: string
}

export const Parallax = ({
    children,
    speed = 0.2,
    className = "",
    motionClassName = ""
}: ParallaxProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(
        scrollYProgress,
        [0, 1],
        [-80 * speed, 80 * speed],
        { clamp: false }
    )

    return (
        <div
            ref={ref}
            className={`relative ${className}`}
        >
            <motion.div
                className={motionClassName}
                style={{ y }}
            >
                {children}
            </motion.div>
        </div>
    )
}
