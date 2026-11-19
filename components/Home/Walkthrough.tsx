"use client"

// #region imports
import {
    useRef,
    useState
} from "react"

import {
    AnimatePresence,
    motion
} from "framer-motion"

import { Button, ScaledFrame } from "@/base"
import { useDictionary } from "@/context"
import { useTicker } from "@/hooks"
import { Arrow } from "@/icons"
import { cn } from "@/utils"
import { _OPUS_CO_URL } from "@/constants"
import type { IDictionary } from "@/dictionaries"

import {
    AppWindow,
    Glyph,
    type IGlyph,
} from "@/components/Mockups"

import { SectionHeading } from "./SectionHeading"
import { WalkthroughDemo } from "./WalkthroughDemo"
// #endregion

const STEP_MS = 4200

/** Fixed design size so the window never changes height between steps. */
const FRAME_W = 1200
const FRAME_H = 640

const STEP_GLYPHS: IGlyph[] = [
    "globe",
    "marketing",
    "filter",
    "bolt",
    "campaigns",
    "people",
    "board",
]

export const Walkthrough = ({
    t,
}: {
    t: IDictionary["home"]["walkthrough"]
}) => {
    const { common } = useDictionary()
    const ref = useRef<HTMLDivElement | null>(null)
    const { tick } = useTicker(ref, STEP_MS)
    const [offset, setOffset] = useState(0)

    const total = t.steps.length
    const active = (((tick + offset) % total) + total) % total
    const step = t.steps[active]

    return (
        <section
            id="walkthrough"
            className="relative flex w-full flex-col items-center"
        >
            <div className="mx-auto w-full max-w-7xl px-6 pt-28 max-mobile:px-4 max-mobile:pt-20">
                <SectionHeading
                    multiline
                    align="center"
                    title={t.title}
                />

                <div className="flex flex-col items-center gap-3 text-center">
                    <p className="text-sm text-grey-300 mt-2">
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

                    <Button
                        className="mt-4"
                        type="button"
                        variant="yellow"
                        onClick={() => document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" })}
                        endIcon={<Arrow size={14} className="group-hover:translate-x-0.5 smooth" />}
                    >
                        {t.seePricing}
                    </Button>
                </div>
            </div>

            <div
                ref={ref}
                className="relative mt-14 w-full pb-24 max-mobile:mt-10 max-mobile:pb-16"
            >
                <div
                    aria-hidden
                    className="
                        pointer-events-none absolute inset-0 dot-grid
                        mask-[radial-gradient(ellipse_at_center,black_18%,transparent_72%)]
                    "
                />

                <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 max-mobile:px-4">
                    <div
                        role="tablist"
                        aria-label={t.title}
                        className="
                            flex w-full flex-wrap items-center justify-center gap-2 p-1
                            max-mobile:-mx-4 max-mobile:w-[calc(100%+2rem)] max-mobile:flex-nowrap
                            max-mobile:justify-start max-mobile:overflow-x-auto max-mobile:px-4 no-scrollbar
                        "
                    >
                        {t.steps.map((item, index) => {
                            const selected = index === active

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    role="tab"
                                    aria-selected={selected}
                                    aria-controls="walkthrough-screen"
                                    onClick={() => setOffset(index - tick)}
                                    className={cn(
                                        "flex shrink-0 cursor-pointer items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 py-2 outline-none smooth",
                                        "focus-visible:ring-2 focus-visible:ring-ink",
                                        "text-[13px]",
                                        selected
                                            ? "bg-ink font-semibold text-white"
                                            : "font-medium text-grey-300 ring-1 ring-grey-100 hover:text-ink hover:ring-grey-150",
                                    )}
                                >
                                    <Glyph name={STEP_GLYPHS[index]} size={15} />
                                    {item.title}
                                </button>
                            )
                        })}
                    </div>

                    <div
                        id="walkthrough-screen"
                        role="tabpanel"
                        aria-live="polite"
                        className="w-full"
                    >
                        <ScaledFrame width={FRAME_W} height={FRAME_H}>
                            <AppWindow
                                t={common.mockup}
                                sidebar={false}
                                title={`alpenhof.at · ${step.title}`}
                                className="w-[1200px] h-[640px]"
                            >
                                <div className="relative flex-1 min-h-0 bg-paper">
                                    <div
                                        aria-hidden
                                        className="absolute inset-0 dot-grid mask-[radial-gradient(ellipse_at_center,black_30%,transparent_80%)]"
                                    />
                                    <div className="relative grid size-full place-items-center">
                                        <WalkthroughDemo t={t} step={active} />
                                    </div>
                                </div>
                            </AppWindow>
                        </ScaledFrame>
                    </div>
                </div>
            </div>
        </section>
    )
}
