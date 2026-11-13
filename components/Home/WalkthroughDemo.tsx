"use client"

// #region imports
import {
    AnimatePresence,
    motion
} from "framer-motion"

import { Check, Logo } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"
import type { IDictionary } from "@/dictionaries"

import { AgentAvatar } from "@/components/Mascots"

import {
    Glyph,
    Pill
} from "@/components/Mockups"
// #endregion

type IWalkthrough = IDictionary["home"]["walkthrough"]
type IDemo = IWalkthrough["demo"]

const ease = [0.2, 0.7, 0.2, 1] as const

const LEADS: [string, IAgentId][] = [
    ["Maya Chen", "sales"],
    ["Theo Brandt", "researcher"],
    ["Priya Nair", "signal"],
    ["Jonas Weber", "sales"],
    ["Ana Ruiz", "researcher"],
]

const OPPORTUNITY_AGENTS: IAgentId[] = ["sales", "seo", "writer"]

const rise = (index: number) => ({
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay: 0.15 + index * 0.12, ease },
})

const Url = ({ t }: { t: IDemo }) => (
    <div className="h-full flex flex-col items-center justify-center gap-6">
        <p className="font-display text-3xl font-semibold tracking-tight">{t.urlLabel}</p>
        <div className="flex items-center gap-2 w-[520px] rounded-2xl bg-white p-2 pl-5 ring-2 ring-ink shadow-lift">
            <span className="text-grey-200 text-lg">https://</span>
            <motion.span
                className="overflow-hidden whitespace-nowrap text-lg font-medium"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1, delay: 0.3, ease: "linear" }}
            >
                northwind.co
            </motion.span>
            <span className="w-px h-5 bg-ink animate-caret" />
            <motion.span
                className="ml-auto rounded-xl bg-ink text-white px-5 py-2.5 text-sm font-semibold"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1, 0.94, 1] }}
                transition={{ duration: 0.5, delay: 1.6, times: [0, 0.6, 0.8, 1] }}
            >
                {t.analyse}
            </motion.span>
        </div>
    </div>
)

const Reading = ({ t }: { t: IDemo }) => (
    <div className="h-full flex flex-col justify-center gap-5 px-24">
        <div className="flex items-center gap-3">
            <span className="size-5 rounded-full border-2 border-ink border-t-transparent animate-spin" />
            <p className="font-display text-2xl font-semibold tracking-tight">{t.reading}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {t.sources.map((source, index) => (
                <motion.div
                    key={source}
                    {...rise(index)}
                    className="flex items-center gap-3 rounded-2xl bg-white ring-1 ring-ink/6 shadow-card px-4 py-3.5"
                >
                    <span className="grid place-items-center size-6 rounded-full bg-success text-white">
                        <Check size={12} />
                    </span>
                    <span className="font-medium">{source}</span>
                    {index === 0 && <span className="ml-auto text-sm text-grey-200">{t.pages}</span>}
                </motion.div>
            ))}
        </div>
        <div className="h-2 rounded-full bg-grey-100 overflow-hidden">
            <motion.span
                className="block h-full rounded-full bg-yellow-100"
                initial={{ width: "5%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
            />
        </div>
    </div>
)

const Signals = ({ t }: { t: IDemo }) => (
    <div className="h-full grid grid-cols-[1.1fr_1fr] gap-6 items-center px-16">
        <motion.div {...rise(0)} className="rounded-3xl bg-ink text-white p-8 flex flex-col gap-3">
            <Pill tone="yellow" className="w-fit">Signal Analyser</Pill>
            <p className="font-display text-7xl font-semibold tracking-[-0.04em] tabular-nums">{t.intentValue}</p>
            <p className="text-white/70">{t.intentLabel}</p>
        </motion.div>
        <div className="flex flex-col gap-3">
            <motion.div {...rise(1)} className="rounded-2xl bg-white ring-1 ring-ink/6 shadow-card p-5">
                <p className="font-display text-4xl font-semibold">23</p>
                <p className="text-sm text-grey-300">{t.missedLabel}</p>
            </motion.div>
            <motion.div {...rise(2)} className="rounded-2xl bg-white ring-1 ring-ink/6 shadow-card p-5 flex items-end gap-1.5 h-28">
                {[34, 52, 40, 68, 58, 84, 76, 96].map((height, index) => (
                    <motion.span
                        key={index}
                        className="flex-1 rounded-md bg-agent-signal"
                        initial={{ height: "8%" }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.06, ease }}
                    />
                ))}
            </motion.div>
        </div>
    </div>
)

const Opportunities = ({ t }: { t: IDemo }) => (
    <div className="h-full flex flex-col justify-center gap-3 px-20">
        {t.opportunities.map((item, index) => (
            <motion.div
                key={item}
                {...rise(index)}
                className="flex items-center gap-4 rounded-2xl bg-white ring-1 ring-ink/6 shadow-card px-5 py-4"
            >
                <span className="grid place-items-center size-9 rounded-full bg-yellow-50 text-ink">
                    <Glyph name="bolt" size={16} />
                </span>
                <span className="font-medium text-[17px]">{item}</span>
                <span className="ml-auto flex items-center gap-2">
                    <Pill tone="green">{t.helps}</Pill>
                    <AgentAvatar agent={OPPORTUNITY_AGENTS[index]} size={30} ring={false} />
                </span>
            </motion.div>
        ))}
    </div>
)

const Icp = ({ t }: { t: IDemo }) => (
    <div className="h-full flex flex-col justify-center px-20">
        <motion.div {...rise(0)} className="rounded-3xl bg-white ring-1 ring-ink/6 shadow-card overflow-hidden">
            <div className="flex items-center gap-3 px-6 py-4 border-b border-grey-100">
                <Pill tone="yellow">ICP</Pill>
                <p className="font-semibold">{t.campaignName}</p>
                <AgentAvatar agent="sales" size={26} ring={false} className="ml-auto" />
            </div>
            <div className="grid grid-cols-[1fr_220px] px-6 py-2.5 text-xs font-medium text-grey-200">
                <span>{t.segment}</span>
                <span>{t.fit}</span>
            </div>
            {t.segments.map(({ name, fit }, index) => (
                <div key={name} className="grid grid-cols-[1fr_220px] items-center px-6 py-3 border-t border-grey-100">
                    <span className="font-medium">{name}</span>
                    <span className="flex items-center gap-3">
                        <span className="flex-1 h-2 rounded-full bg-grey-50 overflow-hidden">
                            <motion.span
                                className="block h-full rounded-full bg-ink"
                                initial={{ width: 0 }}
                                animate={{ width: `${fit}%` }}
                                transition={{ duration: 0.7, delay: 0.3 + index * 0.12, ease }}
                            />
                        </span>
                        <span className="text-sm font-semibold tabular-nums w-10 text-right">{fit}%</span>
                    </span>
                </div>
            ))}
        </motion.div>
    </div>
)

const LeadRows = ({ roles, approved = false }: { roles: string[], approved?: boolean }) => (
    <>
        {LEADS.map(([name, agent], index) => (
            <motion.div
                key={name}
                {...rise(index)}
                className="flex items-center gap-3 px-5 py-3 border-t border-grey-100"
            >
                <AgentAvatar agent={agent} size={28} ring={false} />
                <span className="font-medium">{name}</span>
                <span className="text-sm text-grey-200">{roles[index]}</span>
                <span className={cn(
                    "ml-auto grid place-items-center size-5 rounded-full smooth",
                    approved ? "bg-success text-white" : "ring-1 ring-grey-150 text-transparent"
                )}>
                    <Check size={11} />
                </span>
            </motion.div>
        ))}
    </>
)

const Leads = ({ t }: { t: IDemo }) => (
    <div className="h-full flex flex-col justify-center px-20">
        <div className="rounded-3xl bg-white ring-1 ring-ink/6 shadow-card overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4">
                <p className="font-semibold">{t.batch}</p>
                <Pill tone="yellow" dot>{t.awaiting}</Pill>
                <motion.span
                    className="ml-auto rounded-xl bg-ink text-white px-4 py-2 text-sm font-semibold"
                    animate={{ scale: [1, 1, 0.94, 1] }}
                    transition={{ duration: 0.5, delay: 1.6, times: [0, 0.6, 0.8, 1] }}
                >
                    {t.approveAll}
                </motion.span>
            </div>
            <LeadRows roles={t.leadRoles} />
        </div>
    </div>
)

const Studio = ({ t }: { t: IDemo }) => (
    <div className="h-full grid grid-cols-[1.3fr_1fr] gap-5 items-center px-12">
        <div className="rounded-3xl bg-white ring-1 ring-ink/6 shadow-card overflow-hidden">
            <div className="flex items-center gap-3 px-5 py-4">
                <p className="font-semibold">{t.studio}</p>
                <Pill tone="green" dot>{t.approved}</Pill>
            </div>
            <LeadRows roles={t.leadRoles} approved />
        </div>
        <div className="flex flex-col gap-3">
            <motion.div {...rise(0)} className="rounded-2xl bg-paper ring-1 ring-ink/6 p-4">
                <p className="text-sm font-semibold flex items-center gap-2">
                    <span className="size-2 rounded-full bg-yellow-100 animate-pulse" />
                    {t.next}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                    {[0, 1, 2].map(index => (
                        <motion.span
                            key={index}
                            className="h-7 rounded-lg bg-white ring-1 ring-ink/5"
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.25, ease }}
                        />
                    ))}
                </div>
            </motion.div>
            <motion.div {...rise(1)} className="grid grid-cols-3 gap-2">
                {[["5", t.sent], ["2", t.replies], ["1", t.meetings]].map(([value, label]) => (
                    <div key={label} className="rounded-2xl bg-white ring-1 ring-ink/6 shadow-card p-3">
                        <p className="font-display text-3xl font-semibold">{value}</p>
                        <p className="text-xs text-grey-300">{label}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    </div>
)

export const WalkthroughDemo = ({
    t,
    step,
}: {
    t: IWalkthrough
    step: number
}) => {
    const screens = [
        <Url key="url" t={t.demo} />,
        <Reading key="reading" t={t.demo} />,
        <Signals key="signals" t={t.demo} />,
        <Opportunities key="opportunities" t={t.demo} />,
        <Icp key="icp" t={t.demo} />,
        <Leads key="leads" t={t.demo} />,
        <Studio key="studio" t={t.demo} />,
    ]

    return (
        <div className="w-[1000px] h-[600px] flex flex-col bg-white rounded-2xl overflow-hidden shadow-window">
            <div className="relative flex items-center h-10 px-4 shrink-0 border-b border-grey-100">
                <span className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-[#FF5F57]" />
                    <span className="size-3 rounded-full bg-[#FEBC2E]" />
                    <span className="size-3 rounded-full bg-[#28C840]" />
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-medium text-grey-300">
                    <Logo size={14} />
                    Grovio · {t.steps[step].title}
                </span>
            </div>

            <div className="relative flex-1 min-h-0 bg-paper dot-grid">
                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={step}
                        className="absolute inset-0"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease }}
                    >
                        {screens[step]}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}
