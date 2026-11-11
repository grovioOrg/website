// #region imports
import { ReactNode } from "react"
import { cn } from "@/utils"
// #endregion

const PILL_TONES = {
    grey: "bg-grey-50 text-grey-300",
    yellow: "bg-yellow-50 text-[#8A6A00]",
    green: "bg-[#E3F7EE] text-[#147A52]",
    blue: "bg-[#E8EDFF] text-[#3550C4]",
    red: "bg-[#FDE9E6] text-[#B23A2A]",
    purple: "bg-[#F1E9FD] text-[#7340C2]",
    pink: "bg-[#FFE8F0] text-[#C0306A]",
    ink: "bg-ink text-white",
}

export type IPillTone = keyof typeof PILL_TONES

export const Pill = ({
    children,
    tone = "grey",
    dot = false,
    className = "",
}: {
    children: ReactNode
    tone?: IPillTone
    dot?: boolean
    className?: string
}) => (
    <span className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5",
        "text-[11px] font-medium whitespace-nowrap",
        PILL_TONES[tone],
        className
    )}>
        {dot && <span className="size-1.5 rounded-full bg-current" />}
        {children}
    </span>
)
