"use client"

// #region imports
import {
    ReactNode,
    useRef
} from "react"

import {
    AnimatePresence,
    motion
} from "framer-motion"

import { ScaledFrame } from "@/base"
import { useDictionary } from "@/context"
import { useTicker } from "@/hooks"
import { Check } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import { Glyph } from "@/components/Mockups"

import type { IDictionary } from "@/dictionaries"

import { SectionHeading } from "./SectionHeading"
// #endregion

type IStageState = "idle" | "active" | "done"
type IFlow = IDictionary["home"]["sales"]["flow"]

interface IStage {
    id: string
    title: string
    caption: string
    agent?: IAgentId | "you"
    log: string
    rect: [number, number, number, number]
    body?: (state: IStageState, t: IFlow) => ReactNode
}

const STAGES: Omit<IStage, "title" | "caption" | "log">[] = [
    {
        id: "providers",
        rect: [10, 16, 200, 244],
        body: (state, t) => (
            <div className="mt-3 flex flex-col gap-1.5">
                {t.providers.map((name, index) => (
                    <motion.span
                        key={name}
                        initial={false}
                        animate={{ opacity: state === "idle" ? 0.55 : 1, x: state === "active" ? [0, 3, 0] : 0 }}
                        transition={{ delay: index * 0.08 }}
                        className="flex items-center gap-2 rounded-lg bg-white/[0.06] px-2.5 py-1.5 text-[12px] text-white/80"
                    >
                        <span className="size-1.5 rounded-full bg-yellow-100" />
                        {name}
                    </motion.span>
                ))}
            </div>
        ),
    },
    {
        id: "sales",
        agent: "sales",
        rect: [250, 82, 190, 96],
    },
    {
        id: "researcher",
        agent: "sales",
        rect: [480, 64, 220, 132],
        body: (state, t) => (
            <div className="mt-3 grid grid-cols-2 gap-1.5 text-[11px]">
                <span className="rounded-md bg-success/20 text-[#7BE0B5] px-2 py-1 font-medium">
                    {state === "idle" ? "—" : "4"} {t.accepted}
                </span>
                <span className="rounded-md bg-error/20 text-[#FF9C8F] px-2 py-1 font-medium">
                    {state === "idle" ? "—" : "1"} {t.discarded}
                </span>
            </div>
        ),
    },
    {
        id: "funnel",
        rect: [740, 82, 200, 96],
    },
    {
        id: "draft",
        agent: "sales",
        rect: [740, 372, 200, 96],
    },
    {
        id: "outreach",
        agent: "you",
        rect: [480, 354, 220, 132],
        body: (state, t) => (
            <div className="mt-3 flex gap-1.5 text-[11px] font-medium">
                <span className="rounded-md bg-white/[0.08] text-white/70 px-1.5 py-1">{t.edit}</span>
                <motion.span
                    initial={false}
                    animate={{ scale: state === "active" ? [1, 1.12, 1] : 1 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                    className={cn(
                        "rounded-md px-1.5 py-1 smooth",
                        state === "idle" ? "bg-white/[0.08] text-white/70" : "bg-yellow-100 text-ink"
                    )}
                >
                    {t.accept}
                </motion.span>
                <span className="rounded-md bg-white/[0.08] text-white/70 px-1.5 py-1">{t.discard}</span>
            </div>
        ),
    },
    {
        id: "sent",
        rect: [250, 372, 190, 96],
    },
    {
        id: "signal",
        agent: "sales",
        rect: [10, 372, 200, 96],
    },
    {
        id: "crm",
        rect: [10, 520, 200, 56],
    },
]

const CONNECTORS = [
    "",
    "M210 130 H250",
    "M440 130 H480",
    "M700 130 H740",
    "M840 178 V372",
    "M740 420 H700",
    "M480 420 H440",
    "M250 420 H210",
    "M110 468 V520",
]

const LOOP = "M210 452 C 350 570, 740 570, 840 468"

const STAGE_ICON: Record<string, ReactNode> = {
    funnel: <Glyph name="filter" size={18} />,
    sent: <Glyph name="chat" size={18} />,
    crm: <Glyph name="board" size={16} />,
}

const StageCard = ({
    t,
    you,
    stage,
    state,
}: {
    t: IFlow
    you: string
    stage: IStage
    state: IStageState
}) => {
    const [x, y, width, height] = stage.rect
    const compact = !stage.caption

    return (
        <motion.div
            initial={false}
            animate={{ y: state === "active" ? -3 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={cn(
                "absolute rounded-2xl bg-charcoal-100 p-3.5 smooth duration-300",
                state === "active"
                    ? "ring-2 ring-yellow-100 shadow-[0_0_0_6px_rgb(255_204_0/0.12)]"
                    : "ring-1 ring-white/10",
                compact && "flex items-center py-0"
            )}
            style={{ left: x, top: y, width, height }}
        >
            <div className="flex items-center gap-2.5">
                {stage.agent === "you" ? (
                    <span className="grid place-items-center size-7 rounded-full bg-white text-ink text-[11px] font-bold shrink-0">
                        {you}
                    </span>
                ) : stage.agent ? (
                    <AgentAvatar agent={stage.agent} size={28} ring={false} />
                ) : (
                    <span className="grid place-items-center size-7 rounded-full bg-white/[0.08] text-white shrink-0">
                        {STAGE_ICON[stage.id] ?? <Glyph name="inbox" size={16} />}
                    </span>
                )}

                <div className="min-w-0">
                    <p className="text-[13px] font-semibold text-white leading-tight">
                        {stage.title}
                    </p>
                    {!compact && (
                        <p className="text-[11px] text-white/50 leading-snug mt-0.5">
                            {stage.caption}
                        </p>
                    )}
                </div>

                <span className={cn(
                    "ml-auto grid place-items-center size-4 rounded-full shrink-0 smooth duration-300",
                    state === "done" ? "bg-yellow-100 text-ink" : "bg-white/10 text-transparent"
                )}>
                    <Check size={9} />
                </span>
            </div>

            {stage.body?.(state, t)}
        </motion.div>
    )
}

const Pipeline = ({
    t,
    you,
    stages,
    stage,
    tick,
    running,
}: {
    t: IFlow
    you: string
    stages: IStage[]
    stage: number
    tick: number
    running: boolean
}) => (
    <div className="relative w-[960px] h-[600px]">
        <svg viewBox="0 0 960 600" className="absolute inset-0" aria-hidden>
            {CONNECTORS.map((d, index) => d && (
                <path
                    key={index}
                    d={d}
                    fill="none"
                    stroke={index <= stage ? "var(--color-yellow-100)" : "rgb(255 255 255 / 0.18)"}
                    strokeWidth={2}
                    strokeDasharray={index <= stage ? undefined : "4 5"}
                    style={{ transition: "stroke 300ms" }}
                />
            ))}
            <path
                d={LOOP}
                fill="none"
                stroke="rgb(255 204 0 / 0.5)"
                strokeWidth={2}
                strokeDasharray="5 6"
            />
            <text x={525} y={552} textAnchor="middle" fill="rgb(255 255 255 / 0.45)" fontSize={11}>
                {t.loop}
            </text>
        </svg>

        {running && stage > 0 && (
            <motion.span
                key={tick}
                aria-hidden
                className="absolute left-0 top-0 size-3 rounded-full bg-yellow-100 shadow-[0_0_12px_rgb(255_204_0/0.8)]"
                style={{ offsetPath: `path("${CONNECTORS[stage]}")`, offsetRotate: "0deg" }}
                initial={{ offsetDistance: "0%", opacity: 0 }}
                animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            />
        )}

        {running && stage === STAGES.length - 1 && (
            <motion.span
                aria-hidden
                className="absolute left-0 top-0 size-2.5 rounded-full bg-yellow-100"
                style={{ offsetPath: `path("${LOOP}")`, offsetRotate: "0deg" }}
                initial={{ offsetDistance: "0%" }}
                animate={{ offsetDistance: "100%" }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
            />
        )}

        {stages.map((item, index) => (
            <StageCard
                key={item.id}
                t={t}
                you={you}
                stage={item}
                state={index < stage ? "done" : index === stage ? "active" : "idle"}
            />
        ))}
    </div>
)

const RunLog = ({
    t,
    you,
    stages,
    step,
}: {
    t: IFlow
    you: string
    stages: IStage[]
    step: number
}) => {
    const entries = Array.from({ length: Math.min(6, step + 1) }, (_, offset) => {
        const at = step - offset
        const index = at % stages.length
        return { ...stages[index], index, key: at }
    })

    return (
        <div className="rounded-3xl bg-charcoal-100 ring-1 ring-white/10 p-5 flex flex-col min-h-[420px]">
            <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-white">{t.runLog}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#7BE0B5]">
                    <span className="relative flex size-2">
                        <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-60" />
                        <span className="relative size-2 rounded-full bg-success" />
                    </span>
                    {t.live}
                </span>
            </div>

            <ol className="mt-4 flex flex-col gap-2" aria-live="off">
                <AnimatePresence initial={false} mode="popLayout">
                    {entries.map((item) => (
                        <motion.li
                            key={item.key}
                            layout
                            initial={{ opacity: 0, y: -12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="flex items-start gap-2.5 rounded-xl bg-white/[0.04] px-3 py-2.5"
                        >
                            {item.agent && item.agent !== "you" ? (
                                <AgentAvatar agent={item.agent} size={22} ring={false} />
                            ) : (
                                <span className="grid place-items-center size-[22px] rounded-full bg-white/10 text-white text-[9px] font-bold shrink-0">
                                    {item.agent === "you" ? you : <Glyph name="bolt" size={11} />}
                                </span>
                            )}
                            <span className="text-[13px] text-white/80 leading-snug">{item.log}</span>
                            <span className="ml-auto text-[10px] text-white/35 tabular-nums pt-0.5">
                                00:{String(item.index * 7 + 3).padStart(2, "0")}
                            </span>
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ol>
        </div>
    )
}

export const SalesWorkforce = ({
    t,
}: {
    t: IDictionary["home"]["sales"]
}) => {
    const { common } = useDictionary()
    const ref = useRef<HTMLDivElement | null>(null)
    const { tick, running, reduced } = useTicker(ref, 1600)
    const stages: IStage[] = STAGES.map((item, index) => ({ ...item, ...t.flow.stages[index] }))

    const last = STAGES.length - 1
    const step = reduced ? last : tick
    const stage = step % STAGES.length

    return (
        <section
            id="sales"
            className="relative bg-ink text-white py-32 max-mobile:py-20 overflow-hidden"
        >
            <div aria-hidden className="absolute inset-0 dot-grid-dark opacity-60" />

            <div className="relative max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="flex items-end justify-between gap-10 max-tablet:flex-col max-tablet:items-start">
                    <SectionHeading
                        tone="dark"
                        title={t.title}
                        description={t.description}
                    />

                    <div className="flex flex-col items-end gap-3 shrink-0 max-tablet:items-start">
                        <div className="flex -space-x-3">
                            {(["sales", "researcher", "signal"] as IAgentId[]).map(id => (
                                <AgentAvatar key={id} agent={id} size={52} className="ring-ink!" />
                            ))}
                        </div>
                        <p className="text-xs text-white/55 max-w-48 tablet:text-right">{t.agentsNote}</p>
                    </div>
                </div>

                <div
                    ref={ref}
                    className="mt-16 grid grid-cols-[1fr_340px] gap-6 max-tablet:grid-cols-1"
                >
                    <div className="relative rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6 max-mobile:hidden">
                        <ScaledFrame width={960} height={600}>
                            <Pipeline t={t.flow} you={common.you} stages={stages} stage={stage} tick={tick} running={running} />
                        </ScaledFrame>
                    </div>

                    <ol className="mobile:hidden flex flex-col gap-2">
                        {stages.map((item, index) => (
                            <li
                                key={item.id}
                                className={cn(
                                    "flex items-center gap-3 rounded-2xl px-4 py-3 smooth duration-300",
                                    index === stage
                                        ? "bg-charcoal-100 ring-2 ring-yellow-100"
                                        : "bg-charcoal-100 ring-1 ring-white/10",
                                    index > stage && "opacity-55"
                                )}
                            >
                                <span className="text-[11px] tabular-nums text-white/40 w-4">{index + 1}</span>
                                <span className="text-sm font-semibold">{item.title}</span>
                                {index < stage && (
                                    <span className="ml-auto grid place-items-center size-4 rounded-full bg-yellow-100 text-ink">
                                        <Check size={9} />
                                    </span>
                                )}
                            </li>
                        ))}
                    </ol>

                    <RunLog t={t.flow} you={common.you} stages={stages} step={step} />
                </div>
            </div>
        </section>
    )
}
