// #region imports
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "./AgentAvatar"
// #endregion

export type ICursorOwner = IAgentId | "you"

export const CURSOR_STYLE: Record<ICursorOwner, { label: string, color: string }> = {
    you: { label: "You", color: "var(--color-ink)" },
    sales: { label: "Sunny · Sales", color: "var(--color-agent-sales)" },
    researcher: { label: "Bolt · Sales", color: "var(--color-agent-researcher)" },
    signal: { label: "Echo · Sales", color: "var(--color-agent-signal)" },
    seo: { label: "Scout · SEO", color: "var(--color-agent-seo)" },
    writer: { label: "Quill · Writer", color: "var(--color-agent-writer)" },
    graphic: { label: "Pixie · Design", color: "var(--color-agent-graphic)" },
    video: { label: "Reel · Video", color: "var(--color-agent-video)" },
    caller: { label: "Dash · Calls", color: "var(--color-agent-caller)" },
    concierge: { label: "Bell · Concierge", color: "var(--color-agent-concierge)" },
    community: { label: "Kin · Community", color: "var(--color-agent-community)" },
}

/** Multiplayer-style pointer with a name pill in the owner's colour. */
export const AgentCursor = ({
    by,
    label = CURSOR_STYLE[by].label,
    size = "md",
    className = "",
}: {
    by: ICursorOwner
    label?: string
    size?: "sm" | "md"
    className?: string
}) => {
    const { color } = CURSOR_STYLE[by]
    const small = size === "sm"

    return (
        <span className={cn("flex items-start pointer-events-none select-none", className)}>
            <svg
                width={small ? 16 : 20}
                height={small ? 18 : 22}
                viewBox="0 0 16 18"
                className="-mr-1 shrink-0 drop-shadow-[0_1px_1px_rgb(10_10_10/0.2)]"
                aria-hidden
            >
                <path
                    d="M1 1L14 8.5L8 9.8L5 16L1 1Z"
                    fill={color}
                    stroke="var(--color-ink)"
                    strokeWidth={1.4}
                    strokeLinejoin="round"
                />
            </svg>
            <span
                className={cn(
                    "flex items-center gap-1 rounded-full font-semibold whitespace-nowrap ring-1 ring-ink/10",
                    small ? "mt-3 pl-0.5 pr-2 py-0.5 text-[11px]" : "mt-4 pl-1 pr-2.5 py-1 text-xs"
                )}
                style={{ background: color, color: by === "you" ? "white" : "var(--color-ink)" }}
            >
                {by === "you"
                    ? <span className="w-1" />
                    : <AgentAvatar agent={by} size={small ? 16 : 18} ring={false} className="bg-white!" />
                }
                {label}
            </span>
        </span>
    )
}
