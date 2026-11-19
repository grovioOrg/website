// #region imports
import { Fragment, ReactNode } from "react"

import { Check } from "@/icons"
import { cn } from "@/utils"
import { Reveal } from "@/animation"
// #endregion

const renderWithNewlines = (text: string) => {
    const lines = text.replace(/\\n/g, "\n").split("\n")

    return lines.map((line, i) => (
        <Fragment key={i}>
            {line}
            {i < lines.length - 1 && <br />}
        </Fragment>
    ))
}

const withMultiline = (node: ReactNode, multiline: boolean) =>
    multiline && typeof node === "string" ? renderWithNewlines(node) : node

export const SectionHeading = ({
    title,
    description,
    points,
    align = "left",
    tone = "light",
    multiline = false,
    className = "",
}: {
    title: ReactNode
    description?: ReactNode
    points?: string[]
    align?: "left" | "center"
    tone?: "light" | "dark"
    /** When true, splits string content on `\n` and literal `\n` escape sequences. */
    multiline?: boolean
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
                {withMultiline(title, multiline)}
            </h2>
        </Reveal>

        {description && (
            <Reveal delay={0.05}>
                <p className={cn(
                    "text-lg leading-relaxed max-w-[38rem] max-mobile:text-base",
                    tone === "dark" ? "text-white/65" : "text-grey-300"
                )}>
                    {withMultiline(description, multiline)}
                </p>
            </Reveal>
        )}

        {points && (
            <Reveal delay={0.05}>
                <ul className="flex flex-col gap-3 max-w-[38rem]">
                    {points.map(point => (
                        <li
                            key={point}
                            className={cn(
                                "flex items-start gap-3 text-[15px] leading-relaxed",
                                tone === "dark" ? "text-white/75" : "text-grey-300"
                            )}
                        >
                            <span className="grid place-items-center size-5 mt-0.5 shrink-0 rounded-full bg-yellow-100 text-ink">
                                <Check size={11} />
                            </span>
                            {withMultiline(point, multiline)}
                        </li>
                    ))}
                </ul>
            </Reveal>
        )}
    </div>
)
