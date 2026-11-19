"use client"

// #region imports
import {
    ReactNode,
    useRef
} from "react"

import {
    AnimatePresence,
    LayoutGroup,
    motion
} from "framer-motion"

import { useDictionary } from "@/context"
import { useTicker } from "@/hooks"
import { Check } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import {
    Pill,
    IPillTone
} from "@/components/Mockups"

import type { IDictionary } from "@/dictionaries"

import { SectionHeading } from "./SectionHeading"
import { WORKFORCE_DEMO_MIN_H } from "./workforceDemo"
// #endregion

const PHASES = 6

const KEYWORDS = [
    { volume: "2.4k", width: 88 },
    { volume: "1.9k", width: 70 },
    { volume: "1.2k", width: 52 },
]

const CREATORS: {
    agent: IAgentId
    tone: IPillTone
}[] = [
    { agent: "writer", tone: "green" },
    { agent: "graphic", tone: "purple" },
    { agent: "video", tone: "pink" },
]

const Column = ({
    title,
    agent,
    children,
    active,
    className = "",
}: {
    title: string
    agent?: IAgentId
    children: ReactNode
    active: boolean
    className?: string
}) => (
    <div className={cn(
        "relative rounded-2xl bg-white text-ink p-5 flex h-full flex-col gap-4 smooth duration-500",
        active ? "ring-2 ring-yellow-100 shadow-lift" : "ring-1 ring-white/10",
        className
    )}>
        <div className="flex items-center gap-2">
            <span className={cn(
                "grid place-items-center size-6 rounded-full smooth duration-500",
                active ? "bg-yellow-100 text-ink" : "bg-grey-50 text-grey-200"
            )}>
                <Check size={10} />
            </span>
            <p className="text-sm font-semibold">{title}</p>
            {agent && <AgentAvatar agent={agent} size={24} className="ml-auto" />}
        </div>
        {children}
    </div>
)

const Done = ({ on }: { on: boolean }) => (
    <span className={cn(
        "grid place-items-center size-4 rounded-full shrink-0 smooth duration-300",
        on ? "bg-success text-white" : "ring-1 ring-grey-150 text-transparent"
    )}>
        <Check size={9} />
    </span>
)

export const MarketingWorkforce = ({
    t,
}: {
    t: IDictionary["home"]["marketing"]
}) => {
    const { common } = useDictionary()
    const copy = t.flow
    const creators = CREATORS.map((item, index) => ({ ...item, ...copy.creatorItems[index] }))
    const ref = useRef<HTMLDivElement | null>(null)
    const { tick, reduced } = useTicker(ref, 1500)
    const phase = reduced ? PHASES - 1 : tick % PHASES

    const scheduled = phase >= 3
    const published = phase >= 4

    return (
        <section
            id="marketing"
            className="relative bg-ink text-white pb-32 max-mobile:pb-20 overflow-hidden rounded-b-3xl"
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
                        {(["seo", ...CREATORS.map(({ agent }) => agent)] as IAgentId[]).map(id => (
                            <AgentAvatar key={id} agent={id} size={52} className="ring-ink!" />
                        ))}
                    </div>
                </div>

                <div
                    ref={ref}
                    className={cn(
                        "relative mt-16 grid items-stretch gap-4 rounded-3xl bg-white/[0.03] ring-1 ring-white/10 p-6",
                        WORKFORCE_DEMO_MIN_H,
                        "grid-cols-[0.9fr_1.1fr_1.2fr_1.1fr]",
                        "max-tablet:grid-cols-2 max-mobile:grid-cols-1 max-mobile:p-3 max-mobile:min-h-0",
                    )}
                >
                    <Column title={copy.presence} active={phase === 0}>
                        <div className="flex flex-1 flex-col gap-4 min-h-0">
                        <div className="rounded-xl ring-1 ring-grey-100 overflow-hidden">
                            <div className="flex items-center gap-1 px-2.5 h-6 bg-grey-50">
                                <span className="size-1.5 rounded-full bg-grey-150" />
                                <span className="size-1.5 rounded-full bg-grey-150" />
                                <span className="ml-1.5 text-[10px] text-grey-300">casalinden.at</span>
                            </div>
                            <div className="relative p-2.5 flex flex-col gap-1.5">
                                <span className="h-2 w-3/4 rounded-full bg-grey-100" />
                                <span className="h-2 w-1/2 rounded-full bg-grey-100" />
                                <span className="h-5 w-16 rounded-md bg-yellow-100 mt-1" />
                                {phase === 0 && !reduced && (
                                    <motion.span
                                        aria-hidden
                                        className="absolute inset-x-0 h-6 bg-gradient-to-b from-transparent via-yellow-100/40 to-transparent"
                                        initial={{ top: "-20%" }}
                                        animate={{ top: "100%" }}
                                        transition={{ duration: 1.2, ease: "easeInOut" }}
                                    />
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 text-[13px]">
                            <span className="flex items-center gap-2">
                                <Done on={phase >= 1} /> {copy.website}
                            </span>
                            <span className="flex items-center gap-2">
                                <Done on={phase >= 1} /> {copy.identity}
                            </span>
                        </div>

                        <div className="mt-auto flex flex-wrap gap-1">
                            {["LinkedIn", "Instagram", "YouTube", "Blog"].map(name => (
                                <Pill key={name}>{name}</Pill>
                            ))}
                        </div>
                        </div>
                    </Column>

                    <Column title={common.mockup.nav.seo} agent="seo" active={phase === 1}>
                        <div className="flex flex-1 flex-col gap-4 min-h-0">
                        <div className="flex flex-col gap-2.5">
                            <p className="text-[11px] font-medium text-grey-200">{copy.keywordsTitle}</p>
                            {KEYWORDS.map(({ volume, width }, index) => (
                                <div key={index} className="flex flex-col gap-1">
                                    <span className="flex justify-between gap-2 text-[13px]">
                                        {copy.keywords[index]}
                                        <span className="text-grey-200 tabular-nums">{volume}</span>
                                    </span>
                                    <span className="h-1.5 rounded-full bg-grey-50 overflow-hidden">
                                        <motion.span
                                            className="block h-full rounded-full bg-agent-seo"
                                            initial={false}
                                            animate={{ width: phase >= 1 ? `${width}%` : "8%" }}
                                            transition={{ duration: 0.8, delay: index * 0.12 }}
                                        />
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            <div className="rounded-xl bg-paper p-2.5">
                                <p className="text-[11px] text-grey-200">{copy.pages}</p>
                                <p className="font-display text-2xl font-semibold">{phase >= 1 ? 6 : "–"}</p>
                            </div>
                            <div className="rounded-xl bg-paper p-2.5">
                                <p className="text-[11px] text-grey-200">{copy.gaps}</p>
                                <p className="font-display text-2xl font-semibold">{phase >= 1 ? 14 : "–"}</p>
                            </div>
                        </div>

                        <div className="mt-auto rounded-xl bg-yellow-50 px-3 py-2 text-[12px] leading-snug">
                            <span className="font-semibold">{copy.ctaLabel} </span>
                            {copy.cta}
                        </div>
                        </div>
                    </Column>

                    <Column title={copy.creators} active={phase === 2}>
                        <div className="flex flex-1 flex-col gap-2 min-h-0">
                        {creators.map(({ agent, format, title, tone }, index) => {
                            const ready = phase >= 3 || (phase === 2 && reduced)

                            return (
                                <div key={agent} className="flex flex-1 flex-col rounded-xl ring-1 ring-grey-100 p-3 gap-2 min-h-[7.5rem]">
                                    <div className="flex items-center gap-2">
                                        <AgentAvatar agent={agent} size={22} ring={false} />
                                        <Pill tone={tone}>{format}</Pill>
                                        <span className="ml-auto text-[11px] text-grey-200">
                                            {ready ? copy.ready : phase === 2 ? copy.drafting : copy.briefed}
                                        </span>
                                    </div>
                                    <p className="text-[13px] font-medium leading-snug">{title}</p>
                                    <span className="h-1 rounded-full bg-grey-50 overflow-hidden">
                                        <motion.span
                                            className="block h-full rounded-full bg-ink"
                                            initial={false}
                                            animate={{ width: phase >= 2 ? "100%" : "12%" }}
                                            transition={{ duration: 0.8, delay: phase === 2 ? index * 0.15 : 0 }}
                                        />
                                    </span>
                                </div>
                            )
                        })}
                        </div>
                    </Column>

                    <Column title={copy.schedule} active={phase >= 3}>
                        <div className="flex flex-1 flex-col gap-4 min-h-0">
                        <LayoutGroup>
                            <div className="grid grid-cols-5 gap-1.5">
                                {common.mockup.days.map((day, index) => {
                                    const post = [creators[0], undefined, creators[1], undefined, creators[2]][index]

                                    return (
                                        <div key={day} className="flex flex-col gap-1.5">
                                            <span className="text-[10px] text-grey-200 text-center">{day}</span>
                                            <div className="h-32 rounded-lg bg-paper p-1 flex flex-col flex-1 min-h-28">
                                                <AnimatePresence>
                                                    {scheduled && post && (
                                                        <motion.span
                                                            layout
                                                            initial={{ opacity: 0, y: -16, scale: 0.8 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0 }}
                                                            transition={{ type: "spring", stiffness: 260, damping: 18, delay: index * 0.06 }}
                                                            className="relative grid place-items-center rounded-md bg-white ring-1 ring-ink/6 h-full"
                                                        >
                                                            <AgentAvatar agent={post.agent} size={22} ring={false} />
                                                            {published && (
                                                                <motion.span
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    className="absolute -top-1.5 -right-1.5"
                                                                >
                                                                    <Done on />
                                                                </motion.span>
                                                            )}
                                                        </motion.span>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </LayoutGroup>

                        <div className="flex flex-col gap-2 text-[13px]">
                            <span className="flex items-center gap-2">
                                <Done on={scheduled} /> {copy.scheduled}
                            </span>
                            <span className="flex items-center gap-2">
                                <Done on={published} /> {copy.posted}
                            </span>
                        </div>

                        <motion.div
                            initial={false}
                            animate={{ opacity: phase === 5 ? 1 : 0, y: phase === 5 ? 0 : 8 }}
                            className="mt-auto rounded-xl bg-ink text-white px-3 py-2.5 text-[12px] flex items-center gap-2"
                        >
                            <AgentAvatar agent="seo" size={20} ring={false} />
                            {copy.live}
                        </motion.div>
                        </div>
                    </Column>
                </div>
            </div>
        </section>
    )
}
