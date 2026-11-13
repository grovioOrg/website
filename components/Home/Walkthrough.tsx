"use client"

// #region imports
import {
    useRef,
    useState
} from "react"

import { ScaledFrame } from "@/base"
import { useTicker } from "@/hooks"
import { Arrow } from "@/icons"
import { cn } from "@/utils"
import { _OPUS_CO_URL } from "@/constants"
import { formatText, type IDictionary } from "@/dictionaries"

import { SectionHeading } from "./SectionHeading"
import { WalkthroughDemo } from "./WalkthroughDemo"
// #endregion

const STEP_MS = 3200

export const Walkthrough = ({
    t,
}: {
    t: IDictionary["home"]["walkthrough"]
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { tick } = useTicker(ref, STEP_MS)
    const [offset, setOffset] = useState(0)

    const total = t.steps.length
    const step = (((tick + offset) % total) + total) % total

    return (
        <section
            id="walkthrough"
            className="relative bg-white py-32 max-mobile:py-20"
        >
            <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="flex items-end justify-between gap-10 max-tablet:flex-col max-tablet:items-start">
                    <SectionHeading
                        title={t.title}
                        description={t.description}
                    />
                    <p className="text-sm text-grey-300 tablet:text-right">
                        {t.noSite}{" "}
                        <a
                            href={_OPUS_CO_URL}
                            target="_blank"
                            rel="noopener"
                            className="font-semibold text-ink underline underline-offset-4 decoration-yellow-100 decoration-2 hover:decoration-ink smooth"
                        >
                            {t.noSiteLink}
                        </a>
                    </p>
                </div>

                <div
                    ref={ref}
                    className="
                        mt-16 grid grid-cols-[320px_1fr] gap-8 items-start
                        max-tablet:grid-cols-1 max-tablet:gap-6
                    "
                >
                    <ol
                        aria-label={t.title}
                        className="flex flex-col gap-1 max-tablet:order-2"
                    >
                        {t.steps.map((item, index) => {
                            const active = index === step

                            return (
                                <li key={item.title}>
                                    <button
                                        type="button"
                                        aria-current={active ? "step" : undefined}
                                        onClick={() => setOffset(index - tick)}
                                        className={cn(
                                            "w-full text-left rounded-2xl px-4 py-3 cursor-pointer outline-none smooth",
                                            "focus-visible:ring-2 focus-visible:ring-ink",
                                            active
                                                ? "bg-white ring-1 ring-ink/8 shadow-card"
                                                : "hover:bg-paper"
                                        )}
                                    >
                                        <span className="flex items-center gap-3">
                                            <span aria-hidden className={cn(
                                                "grid place-items-center size-6 shrink-0 rounded-full text-[11px] font-bold smooth",
                                                active ? "bg-yellow-100 text-ink" : "bg-grey-50 text-grey-300"
                                            )}>
                                                {index + 1}
                                            </span>
                                            <span className={cn(
                                                "text-[15px] smooth",
                                                active ? "font-semibold text-ink" : "font-medium text-grey-300"
                                            )}>
                                                <span className="sr-only">{formatText(t.stepLabel, { n: index + 1 })}: </span>
                                                {item.title}
                                            </span>
                                        </span>
                                        <span className={cn(
                                            "grid transition-[grid-template-rows] duration-300",
                                            active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                                        )}>
                                            <span className="overflow-hidden">
                                                <span className="block pt-1.5 pl-9 text-sm text-grey-300 leading-relaxed">
                                                    {item.description}
                                                </span>
                                            </span>
                                        </span>
                                    </button>
                                </li>
                            )
                        })}

                        <li className="mt-3 px-4">
                            <a
                                href="#pricing"
                                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-ink"
                            >
                                {t.seePricing}
                                <Arrow size={14} className="group-hover:translate-x-0.5 smooth" />
                            </a>
                        </li>
                    </ol>

                    <div
                        className="rounded-[28px] bg-paper ring-1 ring-ink/5 p-5 max-mobile:p-2.5 max-mobile:rounded-2xl"
                    >
                        <ScaledFrame width={1000} height={600}>
                            <WalkthroughDemo t={t} step={step} />
                        </ScaledFrame>
                    </div>
                </div>
            </div>
        </section>
    )
}
