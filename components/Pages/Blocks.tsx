// #region imports
import { ReactNode } from "react"

import { Plus } from "@/icons"
import { cn } from "@/utils"

import { BetaButton } from "@/components/Buttons"
import { IBetaInterest } from "@/lib/types/beta"
// #endregion

/** A page section with a plain h2, no eyebrow. */
export const PageSection = ({
    id,
    title,
    description,
    tone = "white",
    /** Tighter bottom padding when the next block is {@link CtaBand}, which takes this section's background. */
    end = false,
    /** Title in a left column, content on the right. */
    split = false,
    children,
}: {
    id?: string
    title: ReactNode
    description?: ReactNode
    tone?: "white" | "paper"
    end?: boolean
    split?: boolean
    children: ReactNode
}) => (
    <section
        id={id}
        className={cn(
            tone === "paper" ? "bg-paper" : "bg-white",
            end
                ? "pt-24 pb-20 max-mobile:pt-16 max-mobile:pb-12"
                : "py-24 max-mobile:py-16"
        )}
    >
        <div className={cn(
            "max-w-7xl mx-auto px-6 max-mobile:px-4",
            split && "grid grid-cols-[5fr_7fr] gap-16 items-start max-tablet:grid-cols-1 max-tablet:gap-0"
        )}>
            <div>
                <h2 className="font-display font-semibold tracking-[-0.035em] leading-[1.02] text-[clamp(1.9rem,3.6vw,3rem)] max-w-[22ch]">
                    {title}
                </h2>
                {description && (
                    <p className="mt-4 text-lg text-grey-300 leading-relaxed max-w-2xl max-mobile:text-base">
                        {description}
                    </p>
                )}
            </div>
            <div className={cn(split ? "max-tablet:mt-8" : "mt-12 max-mobile:mt-8")}>
                {children}
            </div>
        </div>
    </section>
)

export const FaqList = ({
    items,
}: {
    items: { q: string, a: string }[]
}) => (
    <div className="flex flex-col divide-y divide-grey-100 border-y border-grey-100 max-w-3xl">
        {items.map(({ q, a }) => (
            <details key={q} className="group py-5">
                <summary className="
                    flex items-center justify-between gap-6 cursor-pointer list-none
                    font-semibold text-lg max-mobile:text-base
                    outline-none focus-visible:underline [&::-webkit-details-marker]:hidden
                ">
                    {q}
                    <Plus size={16} className="shrink-0 smooth group-open:rotate-45" />
                </summary>
                <p className="pt-3 pr-10 text-grey-300 leading-relaxed">
                    {a}
                </p>
            </details>
        ))}
    </div>
)

export const CtaBand = ({
    title,
    body,
    action,
    interest,
}: {
    title: string
    body: string
    action?: string
    interest?: IBetaInterest
}) => (
    <section className="bg-white [.bg-paper+&]:bg-paper pb-24 max-mobile:pb-16">
        <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
            <div className="
                rounded-[2.5rem] bg-yellow-100 px-10 py-12 text-center
                flex flex-col items-center gap-5 relative overflow-hidden
                max-mobile:px-6 max-mobile:py-10 max-mobile:rounded-3xl
            ">
                <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />
                <h2 className="relative font-display font-semibold text-[clamp(2.2rem,5vw,4rem)] leading-[0.98] tracking-[-0.045em] max-w-[16ch]">
                    {title}
                </h2>
                <p className="relative text-lg text-ink/70 max-w-md max-mobile:text-base">
                    {body}
                </p>
                <BetaButton size="lg" interest={interest} className="relative">
                    {action}
                </BetaButton>
            </div>
        </div>
    </section>
)
