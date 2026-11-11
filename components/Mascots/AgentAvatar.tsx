"use client"

// #region imports
import {
    motion,
    useReducedMotion
} from "framer-motion"

import { IAgentId } from "@/lib/types"
import { usePointer } from "@/hooks"
import { cn } from "@/utils"

import { Eyes } from "./Eyes"
import { AGENT_SHAPES } from "./shapes"
// #endregion

export interface IAgentAvatarProps {
    agent: IAgentId
    size?: number
    ring?: boolean
    /** Blink. Use for larger, featured avatars. */
    live?: boolean
    /** Pupils follow the pointer. */
    track?: boolean
    /** Gentle lift on hover. */
    hover?: boolean
    delay?: number
    title?: string
    className?: string
}

const FILL = 0.62

/** The whole silhouette, body and eyes only, centred on a tinted circle. */
export const AgentAvatar = ({
    agent,
    size = 28,
    ring = true,
    live = false,
    track = false,
    hover = false,
    delay = 0,
    title,
    className = "",
}: IAgentAvatarProps) => {
    const reduced = useReducedMotion()
    const pointer = usePointer(track && !reduced)
    const shape = AGENT_SHAPES[agent]

    const [x, y, width, height] = shape.bounds
    const side = Math.max(width, height) / FILL
    const viewBox = `${x + width / 2 - side / 2} ${y + height / 2 - side / 2} ${side} ${side}`

    return (
        <motion.span
            className={cn(
                "block rounded-full overflow-hidden shrink-0",
                ring && "ring-2 ring-white",
                className
            )}
            style={{
                width: size,
                height: size,
                background: `color-mix(in srgb, var(--color-agent-${agent}) 24%, white)`,
            }}
            whileHover={hover && !reduced ? { y: -3 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            role={title ? "img" : undefined}
            aria-label={title}
            aria-hidden={title ? undefined : true}
        >
            <svg viewBox={viewBox} className="block w-full h-full">
                {shape.body}
                <Eyes
                    eyes={shape.eyes}
                    look={shape.look}
                    radius={14}
                    wink={shape.wink}
                    blink={live}
                    delay={delay}
                    pointerX={track ? pointer.x : undefined}
                    pointerY={track ? pointer.y : undefined}
                />
            </svg>
        </motion.span>
    )
}
