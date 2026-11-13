"use client"

// #region imports
import { useState } from "react"
import {
    motion,
    useMotionValueEvent,
    useScroll
} from "framer-motion"

import { useDictionary } from "@/context"
import { homeLink } from "@/data/links"
import { cn } from "@/utils"
// #endregion

const star = (cx: number, cy: number, r: number) =>
    Array.from({ length: 10 }, (_, index) => {
        const angle = -Math.PI / 2 + index * Math.PI / 5
        const radius = index % 2 ? r * 0.42 : r
        return `${(cx + Math.cos(angle) * radius).toFixed(2)},${(cy + Math.sin(angle) * radius).toFixed(2)}`
    }).join(" ")

const STARS = Array.from({ length: 12 }, (_, index) => {
    const angle = index * Math.PI / 6
    return star(12 + Math.sin(angle) * 6.6, 12 - Math.cos(angle) * 6.6, 1.5)
})

export const EuFlag = ({
    size = 24,
    className = "",
}: {
    size?: number
    className?: string
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden
        className={cn("shrink-0", className)}
    >
        <circle cx={12} cy={12} r={12} fill="var(--color-eu-blue)" />
        {STARS.map(points => (
            <polygon key={points} points={points} fill="var(--color-yellow-100)" />
        ))}
    </svg>
)

export const EuStamp = () => {
    const { lang, common } = useDictionary()
    const { scrollY } = useScroll()
    const [compact, setCompact] = useState(false)
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, "change", (current) => {
        setCompact(current > 480)
        setHidden(current + window.innerHeight > document.documentElement.scrollHeight - 140)
    })

    return (
        <motion.a
            href={homeLink(lang, "why")}
            aria-label={common.euStamp.aria}
            initial={false}
            animate={{ opacity: hidden ? 0 : 1, y: hidden ? 12 : 0 }}
            transition={{ duration: 0.25 }}
            data-compact={compact}
            className={cn(
                "group fixed bottom-5 right-5 z-40 flex items-center gap-2.5",
                "rounded-full bg-white p-1.5 shadow-card ring-1 ring-ink/8",
                "outline-none focus-visible:ring-2 focus-visible:ring-ink smooth",
                "max-mobile:bottom-3 max-mobile:right-3",
                hidden && "pointer-events-none"
            )}
        >
            <EuFlag size={28} />
            <span className={cn(
                "overflow-hidden whitespace-nowrap text-xs font-semibold text-ink",
                "grid transition-[grid-template-columns,padding] duration-300 ease-out",
                "grid-cols-[1fr] pr-3",
                "group-data-[compact=true]:grid-cols-[0fr] group-data-[compact=true]:pr-0",
                "group-hover:grid-cols-[1fr]! group-hover:pr-3! group-focus-visible:grid-cols-[1fr]! group-focus-visible:pr-3!",
                "max-mobile:grid-cols-[0fr] max-mobile:pr-0"
            )}>
                <span className="min-w-0">{common.euStamp.label}</span>
            </span>
        </motion.a>
    )
}
