"use client"

// #region imports
import {
    ReactNode,
    useRef
} from "react"

import {
    motion,
    useInView,
    useReducedMotion
} from "framer-motion"

import { cn } from "@/utils"

import {
    AgentCursor,
    CURSOR_STYLE,
    ICursorOwner
} from "./AgentCursor"
// #endregion

export interface IDriftingCursor {
    by: ICursorOwner
    /** Waypoints as [left %, top %] of the field. The first one is the resting spot. */
    path: [number, number][]
    duration?: number
    delay?: number
    /** Something the cursor is dragging, rendered just behind the pointer. */
    carry?: ReactNode
    /** A selection box the cursor draws while it lingers: [left, top, width, height] in % plus the share of the loop it stays visible. */
    select?: {
        rect: [number, number, number, number]
        from: number
        to: number
    }
    className?: string
}

/** Agent cursors gliding over an area, like collaborators on a shared canvas. */
export const CursorField = ({
    cursors,
    className = "",
    children,
}: {
    cursors: IDriftingCursor[]
    className?: string
    children?: ReactNode
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const inView = useInView(ref, { margin: "-10% 0px" })
    const reduced = useReducedMotion()
    const moving = inView && !reduced

    return (
        <div ref={ref} className={cn("relative", className)}>
            {children}

            <div aria-hidden className="absolute inset-0 pointer-events-none">
                {cursors.map(({ by, select, duration = 12, delay = 0, className }) => select && (
                    <motion.span
                        key={`select-${by}`}
                        className={cn("absolute rounded-md border-2", className)}
                        style={{
                            left: `${select.rect[0]}%`,
                            top: `${select.rect[1]}%`,
                            width: `${select.rect[2]}%`,
                            height: `${select.rect[3]}%`,
                            borderColor: CURSOR_STYLE[by].color,
                            background: `color-mix(in srgb, ${CURSOR_STYLE[by].color} 22%, transparent)`,
                        }}
                        initial={false}
                        animate={{ opacity: moving ? [0, 0, 1, 1, 0, 0] : 1 }}
                        transition={moving
                            ? {
                                duration,
                                delay,
                                repeat: Infinity,
                                times: [0, select.from, select.from + 0.04, select.to, select.to + 0.04, 1],
                            }
                            : { duration: 0 }
                        }
                    />
                ))}

                {cursors.map(({ by, path, duration = 12, delay = 0, carry, className }) => {
                    const loop = [...path, path[0]]

                    return (
                        <motion.div
                            key={by}
                            className={cn("absolute z-10", className)}
                            initial={false}
                            animate={moving
                                ? {
                                    left: loop.map(([x]) => `${x}%`),
                                    top: loop.map(([, y]) => `${y}%`),
                                }
                                : { left: `${path[0][0]}%`, top: `${path[0][1]}%` }
                            }
                            transition={moving
                                ? { duration, delay, repeat: Infinity, ease: "easeInOut" }
                                : { duration: 0 }
                            }
                        >
                            {carry && (
                                <div className="absolute left-2 top-11 rotate-[-4deg]">
                                    {carry}
                                </div>
                            )}
                            <AgentCursor by={by} />
                        </motion.div>
                    )
                })}
            </div>
        </div>
    )
}
