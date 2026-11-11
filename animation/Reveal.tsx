"use client"

// #region imports
import { ReactNode } from "react"
import { motion } from "framer-motion"
// #endregion

export const Reveal = ({
    children,
    delay = 0,
    y = 24,
    className = "",
    as = "div",
}: {
    children: ReactNode
    delay?: number
    y?: number
    className?: string
    as?: "div" | "li" | "section" | "article"
}) => {
    const Component = motion[as]

    return (
        <Component
            className={className}
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -12% 0px" }}
            transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
        >
            {children}
        </Component>
    )
}
