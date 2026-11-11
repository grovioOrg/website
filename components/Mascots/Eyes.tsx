"use client"

// #region imports
import {
    motion,
    useReducedMotion,
    useTransform,
    type MotionValue
} from "framer-motion"

import { usePointer } from "@/hooks"
// #endregion

const INK = "var(--color-ink)"

export const Eyes = ({
    eyes,
    look,
    radius = 12,
    wink = false,
    blink = true,
    delay = 0,
    pointerX,
    pointerY,
}: {
    eyes: [[number, number], [number, number]]
    look: [number, number]
    radius?: number
    wink?: boolean
    blink?: boolean
    delay?: number
    pointerX?: MotionValue<number>
    pointerY?: MotionValue<number>
}) => {
    const reduced = useReducedMotion()
    const fallback = usePointer(false)
    const px = useTransform(pointerX ?? fallback.x, v => look[0] * 0.4 + v * radius * 0.3)
    const py = useTransform(pointerY ?? fallback.y, v => look[1] * 0.4 + v * radius * 0.25)
    const tracking = !!pointerX

    return (
        <g>
            {eyes.map(([cx, cy], index) => {
                if (wink && index === 1)
                    return (
                        <path
                            key={index}
                            d={`M${cx - radius * 0.75} ${cy + 2} Q${cx} ${cy - radius * 0.75} ${cx + radius * 0.75} ${cy + 2}`}
                            fill="none"
                            stroke={INK}
                            strokeWidth={radius * 0.4}
                            strokeLinecap="round"
                        />
                    )

                return (
                    <motion.g
                        key={index}
                        style={{ transformBox: "fill-box", transformOrigin: "center" }}
                        animate={blink && !reduced ? { scaleY: [1, 1, 0.08, 1, 1] } : undefined}
                        transition={{
                            duration: 4.6,
                            times: [0, 0.9, 0.93, 0.96, 1],
                            repeat: Infinity,
                            delay,
                        }}
                    >
                        <circle cx={cx} cy={cy} r={radius} fill="white" />
                        <motion.circle
                            cx={cx}
                            cy={cy}
                            r={radius * 0.56}
                            fill={INK}
                            style={tracking
                                ? { x: px, y: py }
                                : { x: look[0], y: look[1] }
                            }
                        />
                    </motion.g>
                )
            })}
        </g>
    )
}
