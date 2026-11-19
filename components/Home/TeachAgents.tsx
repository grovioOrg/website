"use client"

// #region imports
import { ReactNode, useRef } from "react"
import {
    AnimatePresence,
    motion
} from "framer-motion"

import { ScaledFrame } from "@/base"
import { useTicker } from "@/hooks"
import { Check, Logo } from "@/icons"
import { formatText, type IDictionary } from "@/dictionaries"
import { IAgent, IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import { SectionHeading } from "./SectionHeading"
import { WORKFORCE_DEMO_MIN_H } from "./workforceDemo"
// #endregion

type ITeach = IDictionary["home"]["teach"]

const ease = [0.2, 0.7, 0.2, 1] as const

const VISIBLE = 3

const TEAM: IAgentId[] = ["sales", "seo", "writer", "graphic", "video"]

const AgentTabs = ({ team }: { team: IAgent[] }) => (
    <div className="flex items-center gap-1.5 h-12 px-4 shrink-0 border-b border-grey-100 bg-paper">
        {team.map((agent, index) => (
            <span
                key={agent.id}
                className={cn(
                    "flex items-center gap-2 rounded-full py-1 pl-1 pr-3 text-[12px]",
                    index === 0
                        ? "bg-white ring-1 ring-ink/8 shadow-card font-semibold text-ink"
                        : "font-medium text-grey-300"
                )}
            >
                <AgentAvatar agent={agent.id} size={22} ring={false} />
                {agent.name}
                <span className="font-normal text-grey-200">{agent.role}</span>
            </span>
        ))}
    </div>
)

const PaneHeader = ({ children }: { children: ReactNode }) => (
    <div className="flex items-center gap-2 h-12 px-5 shrink-0 border-b border-grey-100 bg-white text-[14px] font-semibold">
        {children}
    </div>
)

const AgentBubble = ({ children }: { children: ReactNode }) => (
    <div className="flex items-start gap-2 max-w-[90%]">
        <AgentAvatar agent="sales" size={22} ring={false} />
        <p className="rounded-2xl rounded-tl-md bg-paper px-3.5 py-2.5 text-[13px] leading-snug text-grey-300">
            {children}
        </p>
    </div>
)

const ChatPane = ({ t, step }: { t: ITeach, step: number }) => {
    const from = Math.max(0, step - VISIBLE)

    return (
        <div className="flex flex-col w-[400px] shrink-0 border-r border-grey-100">
            <PaneHeader>
                <AgentAvatar agent="sales" size={24} ring={false} />
                {t.chatTitle}
            </PaneHeader>

            <div className="flex-1 flex flex-col gap-3 p-5 overflow-hidden">
                <AnimatePresence initial={false} mode="popLayout">
                    {from === 0 && (
                        <motion.div key="greeting" layout exit={{ opacity: 0, y: -10 }}>
                            <AgentBubble>{t.greeting}</AgentBubble>
                        </motion.div>
                    )}
                    {t.messages.slice(from, step).map(message => (
                        <motion.div
                            key={message.you}
                            layout
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
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
                            >
                                <AgentBubble>{message.agent}</AgentBubble>
                            </motion.div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>

            <div className="p-4 pt-0">
                <div className="flex items-center gap-3 rounded-xl ring-1 ring-grey-100 px-3.5 py-2.5 text-[13px]">
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.span
                            key={step}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className={cn("truncate", t.messages[step] ? "text-ink" : "text-grey-200")}
                        >
                            {t.messages[step]?.you ?? t.inputPlaceholder}
                        </motion.span>
                    </AnimatePresence>
                    <span className="ml-auto grid place-items-center size-6 shrink-0 rounded-lg bg-yellow-100 text-ink">
                        <Check size={11} />
                    </span>
                </div>
            </div>
        </div>
    )
}

const PreviewPane = ({ t, step }: { t: ITeach, step: number }) => {
    const draft = t.drafts[step]
    const words = draft.split(/\s+/).length

    return (
        <div className="flex-1 min-w-0 flex flex-col bg-paper">
            <PaneHeader>
                {t.dmTitle}
                <span className="ml-auto text-[11px] font-normal text-grey-200">{t.preview}</span>
            </PaneHeader>

            <div className="flex-1 flex flex-col gap-4 p-5">
                <div className="flex-1 flex flex-col rounded-2xl bg-white ring-1 ring-ink/6 shadow-card p-5">
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
                            className="mt-3 text-[15px] leading-relaxed text-ink"
                        >
                            {draft}
                        </motion.p>
                    </AnimatePresence>
                    <div className="mt-auto flex items-center gap-2 border-t border-grey-100 pt-3.5 text-[12px] text-grey-300">
                        <span className="size-1.5 rounded-full bg-success" />
                        {t.note}
                    </div>
                </div>

                <div className="rounded-2xl border border-dashed border-grey-150 p-4">
                    <p className="text-[11px] font-medium text-grey-200">{t.before}</p>
                    <p className="mt-1.5 text-[12px] leading-relaxed text-grey-200">{t.drafts[0]}</p>
                </div>
            </div>
        </div>
    )
}

const RulesPane = ({ t, step }: { t: ITeach, step: number }) => {
    const total = t.messages.length
    const learned = Math.min(step, total)

    return (
        <div className="flex flex-col w-[300px] shrink-0 border-l border-grey-100">
            <PaneHeader>{t.rulesTitle}</PaneHeader>

            <div className="flex-1 flex flex-col gap-2.5 p-5">
                {t.messages.map(({ rule }, index) => {
                    const done = index < step

                    return (
                        <div
                            key={rule.label}
                            className={cn(
                                "flex items-center gap-3 rounded-xl border px-3.5 py-3 smooth duration-300",
                                done ? "border-ink/6 bg-white shadow-card" : "border-dashed border-grey-150"
                            )}
                        >
                            <span className={cn(
                                "grid place-items-center size-5 shrink-0 rounded-full smooth duration-300",
                                done ? "bg-yellow-100 text-ink" : "border border-dashed border-grey-150 text-transparent"
                            )}>
                                <Check size={10} />
                            </span>
                            <span className="min-w-0 flex flex-col">
                                <span className="text-[11px] text-grey-200">{rule.label}</span>
                                <span className={cn("text-[13px] truncate", done ? "font-medium text-ink" : "text-grey-200")}>
                                    {done ? rule.value : t.notSet}
                                </span>
                            </span>
                        </div>
                    )
                })}

                <div className="mt-auto">
                    <p className="text-[12px] font-medium text-ink">
                        {formatText(t.learned, { n: learned, total })}
                    </p>
                    <div className="mt-2 h-1.5 rounded-full bg-grey-50 overflow-hidden">
                        <motion.div
                            initial={false}
                            animate={{ width: `${learned / total * 100}%` }}
                            transition={{ duration: 0.5, ease }}
                            className="h-full rounded-full bg-yellow-100"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export const TeachAgents = ({
    t,
    agents,
}: {
    t: ITeach
    agents: IAgent[]
}) => {
    const team = TEAM.map(id => agents.find(agent => agent.id === id)).filter((agent): agent is IAgent => !!agent)
    const ref = useRef<HTMLDivElement | null>(null)
    const { tick, reduced } = useTicker(ref, 2800)

    const total = t.messages.length
    const step = reduced ? total : Math.min(1 + tick % (total + 1), total)

    return (
        <section
            id="teach"
            className="relative bg-ink text-white pb-24 max-mobile:pb-16 overflow-hidden"
        >
            <div aria-hidden className="absolute inset-0 dot-grid-dark" />

            <div className="relative max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="
                    flex items-end justify-between gap-10 pt-16
                    max-tablet:flex-col max-tablet:items-start max-mobile:pt-12
                ">
                    <SectionHeading
                        tone="dark"
                        title={t.title}
                        points={t.points}
                    />
                    <div className="flex -space-x-3 shrink-0">
                        {TEAM.map(id => (
                            <AgentAvatar key={id} agent={id} size={52} className="ring-ink!" />
                        ))}
                    </div>
                </div>

                <div
                    ref={ref}
                    className={cn(
                        "mt-16 rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6",
                        WORKFORCE_DEMO_MIN_H,
                        "max-mobile:p-2.5 max-mobile:rounded-2xl max-mobile:min-h-0",
                    )}
                >
                    <ScaledFrame width={1160} height={600}>
                        <div className="w-[1160px] h-[600px] flex flex-col bg-white text-ink rounded-2xl overflow-hidden shadow-window">
                            <div className="relative flex items-center h-10 px-4 shrink-0 border-b border-grey-100">
                                <span className="flex gap-1.5">
                                    <span className="size-3 rounded-full bg-[#FF5F57]" />
                                    <span className="size-3 rounded-full bg-[#FEBC2E]" />
                                    <span className="size-3 rounded-full bg-[#28C840]" />
                                </span>
                                <span className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-medium text-grey-300">
                                    <Logo size={14} />
                                    Grovio · {t.windowTitle}
                                </span>
                            </div>
                            <AgentTabs team={team} />
                            <div className="flex flex-1 min-h-0">
                                <ChatPane t={t} step={step} />
                                <PreviewPane t={t} step={step} />
                                <RulesPane t={t} step={step} />
                            </div>
                        </div>
                    </ScaledFrame>
                </div>
            </div>
        </section>
    )
}
