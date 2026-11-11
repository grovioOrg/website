// #region imports
import { ReactNode } from "react"

import { LOGO_PATH } from "@/icons"
import { IAgentId } from "@/lib/types"
// #endregion

type IPoint = [number, number]

export interface IAgentShape {
    body: ReactNode
    eyes: [IPoint, IPoint]
    look: IPoint
    /** Body bounds in the 200x200 viewBox: [x, y, width, height]. */
    bounds: [number, number, number, number]
    wink?: boolean
}

const rounded = (points: string, color: string) => (
    <path
        d={`M${points}Z`}
        fill={color}
        stroke={color}
        strokeWidth={16}
        strokeLinejoin="round"
    />
)

export const AGENT_SHAPES: Record<IAgentId, IAgentShape> = {
    sales: {
        body: (
            <path
                d={LOGO_PATH}
                fill="var(--color-agent-sales)"
                transform="translate(30 16) scale(0.52) translate(-115 -120)"
            />
        ),
        eyes: [[63, 88], [99, 64]],
        look: [3, 1],
        bounds: [22, 8, 138, 161],
    },

    researcher: {
        body: rounded(
            "34 62 L164 36 L130 92 L156 100 L82 160 L100 110 L58 114",
            "var(--color-agent-researcher)"
        ),
        eyes: [[84, 78], [114, 71]],
        look: [3, 1],
        bounds: [26, 28, 146, 140],
    },

    signal: {
        body: rounded(
            "44 64 L154 30 L148 148",
            "var(--color-agent-signal)"
        ),
        eyes: [[92, 76], [120, 69]],
        look: [-3, 2],
        bounds: [36, 22, 126, 134],
    },

    seo: {
        body: rounded(
            "30 72 L166 36 L152 108 L86 158 L98 114",
            "var(--color-agent-seo)"
        ),
        eyes: [[82, 82], [114, 74]],
        look: [3, 2],
        bounds: [22, 28, 152, 138],
    },

    writer: {
        body: rounded(
            "30 52 L166 32 L132 150",
            "var(--color-agent-writer)"
        ),
        eyes: [[80, 70], [108, 66]],
        look: [-2, 3],
        bounds: [22, 24, 152, 134],
    },

    graphic: {
        body: (
            <g fill="var(--color-agent-graphic)">
                <circle cx={72} cy={60} r={30} />
                <circle cx={128} cy={60} r={30} />
                <circle cx={72} cy={114} r={30} />
                <circle cx={128} cy={114} r={30} />
                <rect x={72} y={60} width={56} height={54} />
            </g>
        ),
        eyes: [[88, 86], [118, 84]],
        look: [-3, 1],
        bounds: [42, 30, 116, 114],
        wink: true,
    },

    video: {
        body: rounded(
            "54 34 L170 96 L62 160",
            "var(--color-agent-video)"
        ),
        eyes: [[86, 84], [116, 86]],
        look: [2, 0],
        bounds: [46, 26, 132, 142],
    },
}
