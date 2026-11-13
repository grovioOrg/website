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
    step,
    title,
    agent,
    children,
    active,
    className = "",
}: {
    step: number
    title: string
    agent?: IAgentId
    children: ReactNode
    active: boolean
    className?: string
}) => (
    <div className={cn(
        "relative rounded-3xl bg-white p-5 flex flex-col gap-4 smooth duration-500",
        active ? "ring-2 ring-ink shadow-lift" : "ring-1 ring-ink/6 shadow-card",
        className
    )}>
        <div className="flex items-center gap-2">
            <span className={cn(
                "grid place-items-center size-6 rounded-full text-[11px] font-bold smooth duration-500",
                active ? "bg-yellow-100 text-ink" : "bg-grey-50 text-grey-300"
            )}>
                {step}
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
            className="relative bg-paper py-32 max-mobile:py-20"
        >
            <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
                <SectionHeading
                    title={t.title}
                    description={t.description}
                />

                <div
                    ref={ref}
                    className="
                        relative mt-16 grid gap-5
                        grid-cols-[0.9fr_1.1fr_1.2fr_1.1fr]
                        max-tablet:grid-cols-2 max-mobile:grid-cols-1
                    "
                >
                    <Column step={1} title={copy.presence} active={phase === 0}>
                        <div className="rounded-xl ring-1 ring-grey-100 overflow-hidden">
                            <div className="flex items-center gap-1 px-2.5 h-6 bg-grey-50">
                                <span className="size-1.5 rounded-full bg-grey-150" />
                                <span className="size-1.5 rounded-full bg-grey-150" />
                                <span className="ml-1.5 text-[10px] text-grey-300">northwind.co</span>
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

                        <div className="flex flex-wrap gap-1">
                            {["LinkedIn", "Instagram", "YouTube", "Blog"].map(name => (
                                <Pill key={name}>{name}</Pill>
                            ))}
                        </div>
                    </Column>

                    <Column step={2} title={common.mockup.nav.seo} agent="seo" active={phase === 1}>
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

                        <div className="rounded-xl bg-yellow-50 px-3 py-2 text-[12px] leading-snug">
                            <span className="font-semibold">{copy.ctaLabel} </span>
                            {copy.cta}
                        </div>
                    </Column>

                    <Column step={3} title={copy.creators} active={phase === 2}>
                        {creators.map(({ agent, format, title, tone }, index) => {
                            const ready = phase >= 3 || (phase === 2 && reduced)

                            return (
                                <div key={agent} className="rounded-xl ring-1 ring-grey-100 p-3 flex flex-col gap-2">
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
                    </Column>

                    <Column step={4} title={copy.schedule} active={phase >= 3}>
                        <LayoutGroup>
                            <div className="grid grid-cols-5 gap-1.5">
                                {common.mockup.days.map((day, index) => {
                                    const post = [creators[0], undefined, creators[1], undefined, creators[2]][index]

                                    return (
                                        <div key={day} className="flex flex-col gap-1.5">
                                            <span className="text-[10px] text-grey-200 text-center">{day}</span>
                                            <div className="h-24 rounded-lg bg-paper p-1 flex flex-col">
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
                    </Column>
                </div>
            </div>
        </section>
    )
}
