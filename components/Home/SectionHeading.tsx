// #region imports
import { ReactNode } from "react"

import { cn } from "@/utils"
import { Reveal } from "@/animation"
// #endregion

export const SectionHeading = ({
    title,
    description,
    align = "left",
    tone = "light",
    className = "",
}: {
    title: ReactNode
    description?: ReactNode
    align?: "left" | "center"
    tone?: "light" | "dark"
    className?: string
}) => (
    <div className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center mx-auto",
        className
    )}>
        <Reveal>
            <h2 className={cn(
                "font-display font-semibold tracking-[-0.04em] leading-[0.98]",
                "text-[clamp(2.3rem,5vw,4.4rem)] max-w-[16ch]",
                align === "center" && "mx-auto",
                tone === "dark" ? "text-white" : "text-ink"
            )}>
                {title}
            </h2>
        </Reveal>

        {description && (
            <Reveal delay={0.05}>
                <p className={cn(
                    "text-lg leading-relaxed max-w-[38rem] max-mobile:text-base",
                    tone === "dark" ? "text-white/65" : "text-grey-300"
                )}>
                    {description}
                </p>
            </Reveal>
        )}
    </div>
)
