"use client"

// #region imports
import { useRef } from "react"
import {
    AnimatePresence,
    motion
} from "framer-motion"

import { ScaledFrame } from "@/base"
import { useTicker } from "@/hooks"
import { Check, Logo } from "@/icons"
import { formatText, type IDictionary } from "@/dictionaries"

import { AgentAvatar } from "@/components/Mascots"

import { SectionHeading } from "./SectionHeading"
// #endregion

type ITeach = IDictionary["home"]["teach"]

const ease = [0.2, 0.7, 0.2, 1] as const

const ChatPane = ({ t, step }: { t: ITeach, step: number }) => (
    <div className="flex flex-col w-[440px] shrink-0 border-r border-grey-100">
        <div className="flex items-center gap-2 h-12 px-5 border-b border-grey-100 text-[14px] font-semibold">
            <AgentAvatar agent="sales" size={24} ring={false} />
            {t.chatTitle}
        </div>

        <div className="flex-1 flex flex-col justify-end gap-3 p-5 overflow-hidden">
            <AnimatePresence initial={false}>
                {t.messages.slice(0, step).map(message => (
                    <motion.div
                        key={message.you}
                        layout
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="flex flex-col gap-2"
                    >
                        <p className="self-end max-w-[85%] rounded-2xl rounded-br-md bg-ink text-white px-3.5 py-2.5 text-[13px] leading-snug">
                            {message.you}
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="flex items-start gap-2 max-w-[90%]"
                        >
                            <AgentAvatar agent="sales" size={22} ring={false} />
                            <p className="rounded-2xl rounded-tl-md bg-paper px-3.5 py-2.5 text-[13px] leading-snug text-grey-300">
                                {message.agent}
                            </p>
                        </motion.div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>

        <div className="p-4 pt-0">
            <div className="flex items-center rounded-xl ring-1 ring-grey-100 px-3.5 py-2.5 text-[13px] text-grey-200">
                {t.inputPlaceholder}
                <span className="ml-auto grid place-items-center size-6 rounded-lg bg-yellow-100 text-ink">
                    <Check size={11} />
                </span>
            </div>
        </div>
    </div>
)

const PreviewPane = ({ t, step }: { t: ITeach, step: number }) => {
    const draft = t.drafts[step]
    const words = draft.split(/\s+/).length

    return (
        <div className="flex-1 min-w-0 flex flex-col bg-paper">
            <div className="flex items-center justify-between h-12 px-5 border-b border-grey-100 text-[14px] font-semibold bg-white">
                {t.dmTitle}
                <span className="text-[11px] font-normal text-grey-200">{t.preview}</span>
            </div>

            <div className="flex-1 flex flex-col gap-4 p-5">
                <div className="rounded-2xl bg-white ring-1 ring-ink/6 shadow-card p-4">
                    <div className="flex items-center justify-between text-[12px] text-grey-200">
                        <span>{t.to}</span>
                        <span className="tabular-nums">{formatText(t.words, { n: words })}</span>
                    </div>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.p
                            key={step}
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -4 }}
                            transition={{ duration: 0.3, ease }}
                            className="mt-3 text-[14px] leading-relaxed text-ink min-h-[120px]"
                        >
                            {draft}
                        </motion.p>
                    </AnimatePresence>
                </div>

                <div>
                    <p className="text-[12px] font-medium text-grey-200 mb-2">{t.rulesTitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                        {t.messages.map(({ rule }, index) => (
                            <motion.span
                                key={rule.label}
                                initial={false}
                                animate={{ opacity: index < step ? 1 : 0.35 }}
                                className="inline-flex items-center gap-1.5 rounded-lg bg-white ring-1 ring-ink/6 px-2.5 py-1.5 text-[12px]"
                            >
                                <span className="text-grey-200">{rule.label}</span>
                                <span className="font-medium">{rule.value}</span>
                            </motion.span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TeachAgents = ({
    t,
}: {
    t: ITeach
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const { tick, reduced } = useTicker(ref, 2800)

    const steps = t.messages.length + 1
    const step = reduced ? steps - 1 : Math.min(tick % (steps + 1), steps - 1)

    return (
        <section
            id="teach"
            className="relative bg-white py-32 max-mobile:py-20"
        >
            <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="
                    grid grid-cols-1 items-center gap-8
                    lg:grid-cols-[0.42fr_0.58fr] lg:gap-14
                    max-tablet:gap-10
                ">
                    <div className="flex flex-col gap-8 max-tablet:order-2">
                        <SectionHeading
                            title={t.title}
                            description={t.description}
                        />
                        <ul className="flex flex-col gap-3">
                            {t.points.map(point => (
                                <li key={point} className="flex items-start gap-3 text-[15px]">
                                    <span className="grid place-items-center size-5 mt-0.5 shrink-0 rounded-full bg-yellow-100 text-ink">
                                        <Check size={11} />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div
                        ref={ref}
                        className="
                            min-w-0 max-tablet:order-1
                            rounded-[28px] bg-paper ring-1 ring-ink/5 p-5
                            max-mobile:p-2.5 max-mobile:rounded-2xl
                        "
                    >
                        <ScaledFrame width={920} height={520}>
                            <div className="w-[920px] h-[520px] flex flex-col bg-white rounded-2xl overflow-hidden shadow-window">
                                <div className="relative flex items-center h-10 px-4 shrink-0 border-b border-grey-100">
                                    <span className="flex gap-1.5">
                                        <span className="size-3 rounded-full bg-[#FF5F57]" />
                                        <span className="size-3 rounded-full bg-[#FEBC2E]" />
                                        <span className="size-3 rounded-full bg-[#28C840]" />
                                    </span>
                                    <span className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-medium text-grey-300">
                                        <Logo size={14} />
                                        Grovio · {t.chatTitle}
                                    </span>
                                </div>
                                <div className="flex flex-1 min-h-0">
                                    <ChatPane t={t} step={step} />
                                    <PreviewPane t={t} step={step} />
                                </div>
                            </div>
                        </ScaledFrame>
                    </div>
                </div>
            </div>
        </section>
    )
}
