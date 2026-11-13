// #region imports
import { Logo } from "@/icons"
import { cn } from "@/utils"
// #endregion

export const Wordmark = ({
    size = 28,
    className = "",
}: {
    size?: number
    className?: string
}) => (
    <span className={cn("inline-flex items-center gap-2", className)}>
        <Logo size={size} aria-hidden />
        <span
            className="font-display font-bold tracking-tight"
            style={{ fontSize: size * 0.72 }}
        >
            GROVIO
        </span>
    </span>
)
