"use client"

// #region imports
import {
    AnimatePresence,
    motion
} from "framer-motion"

import { Check } from "@/icons"
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

const CARD = "rounded-2xl bg-white ring-1 ring-ink/6 shadow-lift"

const LEADS: [string, IAgentId][] = [
    ["Maya Chen", "sales"],
    ["Theo Brandt", "researcher"],
    ["Priya Nair", "signal"],
    ["Jonas Weber", "sales"],
    ["Ana Ruiz", "researcher"],
]

const OPPORTUNITY_AGENTS: IAgentId[] = ["sales", "seo", "writer"]

const rise = (index: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, delay: 0.1 + index * 0.12, ease },
})

const Url = ({ t }: { t: IDemo }) => (
    <div className="flex flex-col items-center gap-7">
        <motion.p {...rise(0)} className="font-display text-4xl font-semibold tracking-tight">
            {t.urlLabel}
        </motion.p>
        <motion.div {...rise(1)} className={cn(CARD, "flex items-center gap-2 w-[640px] rounded-full p-2 pl-7 ring-2 ring-ink")}>
            <span className="text-grey-200 text-xl">https://</span>
            <motion.span
                className="overflow-hidden whitespace-nowrap text-xl font-medium"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1, delay: 0.4, ease: "linear" }}
            >
                alpenhof.at
            </motion.span>
            <span className="w-px h-6 bg-ink animate-caret" />
            <motion.span
                className="ml-auto rounded-full bg-ink text-white px-6 py-3 font-semibold"
                animate={{ scale: [1, 1, 0.94, 1] }}
                transition={{ duration: 0.5, delay: 1.7, times: [0, 0.6, 0.8, 1] }}
            >
                {t.analyse}
            </motion.span>
        </motion.div>
    </div>
)

const Reading = ({ t }: { t: IDemo }) => (
    <div className="w-[760px] flex flex-col gap-6">
        <motion.div {...rise(0)} className="flex items-center gap-3">
            <span className="size-6 rounded-full border-2 border-ink border-t-transparent animate-spin" />
            <p className="font-display text-3xl font-semibold tracking-tight">{t.reading}</p>
        </motion.div>
        <div className="grid grid-cols-2 gap-3">
            {t.sources.map((source, index) => (
                <motion.div
                    key={source}
                    {...rise(index + 1)}
                    className={cn(CARD, "flex items-center gap-3 px-5 py-4")}
                >
                    <span className="grid place-items-center size-7 rounded-full bg-success text-white">
                        <Check size={13} />
                    </span>
                    <span className="font-medium text-lg">{source}</span>
                    {index === 0 && <span className="ml-auto text-sm text-grey-200">{t.pages}</span>}
                </motion.div>
            ))}
        </div>
        <div className="h-2 rounded-full bg-grey-50 overflow-hidden">
            <motion.span
                className="block h-full rounded-full bg-yellow-100"
                initial={{ width: "5%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "easeInOut" }}
            />
        </div>
    </div>
)

const Signals = ({ t }: { t: IDemo }) => (
    <div className="w-[920px] grid grid-cols-[1.15fr_1fr] gap-5 items-stretch">
        <motion.div
            {...rise(0)}
            className={cn(CARD, "rounded-3xl border-t-[3px] p-10 flex flex-col justify-center gap-3")}
            style={{ borderTopColor: "var(--color-yellow-200)" }}
        >
            <Pill tone="yellow" className="w-fit">Signal Analyser</Pill>
            <p className="font-display text-8xl font-semibold tracking-[-0.04em] tabular-nums text-ink">{t.intentValue}</p>
            <p className="text-lg text-grey-300">{t.intentLabel}</p>
        </motion.div>
        <div className="flex flex-col gap-5">
            <motion.div {...rise(1)} className={cn(CARD, "rounded-3xl p-7")}>
                <p className="font-display text-5xl font-semibold">23</p>
                <p className="mt-1 text-grey-300">{t.missedLabel}</p>
            </motion.div>
            <motion.div {...rise(2)} className={cn(CARD, "rounded-3xl p-6 flex flex-1 items-end gap-2 min-h-36")}>
                {[34, 52, 40, 68, 58, 84, 76, 96].map((height, index) => (
                    <motion.span
                        key={index}
                        className="flex-1 rounded-md bg-yellow-200"
                        initial={{ height: "8%" }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.6, delay: 0.35 + index * 0.06, ease }}
                    />
                ))}
            </motion.div>
        </div>
    </div>
)

const Opportunities = ({ t }: { t: IDemo }) => (
    <div className="w-[800px] flex flex-col gap-4">
        {t.opportunities.map((item, index) => (
            <motion.div
                key={item}
                {...rise(index)}
                className={cn(CARD, "flex items-center gap-4 px-6 py-5")}
                style={{ marginLeft: index * 36, marginRight: (2 - index) * 36 }}
            >
                <span className="grid place-items-center size-10 rounded-full bg-yellow-50 text-ink">
                    <Glyph name="bolt" size={18} />
                </span>
                <span className="font-medium text-lg">{item}</span>
                <span className="ml-auto flex items-center gap-2.5">
                    <Pill tone="green">{t.helps}</Pill>
                    <AgentAvatar agent={OPPORTUNITY_AGENTS[index]} size={34} ring={false} />
                </span>
            </motion.div>
        ))}
    </div>
)

const Icp = ({ t }: { t: IDemo }) => (
    <motion.div {...rise(0)} className={cn(CARD, "w-[840px] rounded-3xl overflow-hidden")}>
        <div className="flex items-center gap-3 px-7 py-5 border-b border-grey-100">
            <Pill tone="yellow">ICP</Pill>
            <p className="font-semibold text-lg">{t.campaignName}</p>
            <AgentAvatar agent="sales" size={30} ring={false} className="ml-auto" />
        </div>
        <div className="grid grid-cols-[1fr_260px] px-7 py-3 text-xs font-medium text-grey-200">
            <span>{t.segment}</span>
            <span>{t.fit}</span>
        </div>
        {t.segments.map(({ name, fit }, index) => (
            <div key={name} className="grid grid-cols-[1fr_260px] items-center px-7 py-4 border-t border-grey-100">
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
)

const LeadRows = ({ roles, approved = false }: { roles: string[], approved?: boolean }) => (
    <>
        {LEADS.map(([name, agent], index) => (
            <motion.div
                key={name}
                {...rise(index)}
                className="flex items-center gap-3 px-6 py-3.5 border-t border-grey-100"
            >
                <AgentAvatar agent={agent} size={30} ring={false} />
                <span className="font-medium">{name}</span>
                <span className="text-sm text-grey-200">{roles[index]}</span>
                <span className={cn(
                    "ml-auto grid place-items-center size-6 rounded-full smooth",
                    approved ? "bg-success text-white" : "ring-1 ring-grey-150 text-transparent"
                )}>
                    <Check size={12} />
                </span>
            </motion.div>
        ))}
    </>
)

const Leads = ({ t }: { t: IDemo }) => (
    <div className={cn(CARD, "w-[780px] rounded-3xl overflow-hidden")}>
        <div className="flex items-center gap-3 px-6 py-5">
            <p className="font-semibold text-lg">{t.batch}</p>
            <Pill tone="yellow" dot>{t.awaiting}</Pill>
            <motion.span
                className="ml-auto rounded-full bg-ink text-white px-5 py-2.5 text-sm font-semibold"
                animate={{ scale: [1, 1, 0.94, 1] }}
                transition={{ duration: 0.5, delay: 1.6, times: [0, 0.6, 0.8, 1] }}
            >
                {t.approveAll}
            </motion.span>
        </div>
        <LeadRows roles={t.leadRoles} />
    </div>
)

const Studio = ({ t }: { t: IDemo }) => (
    <div className="w-[1000px] grid grid-cols-[1.35fr_1fr] gap-5 items-center">
        <div className={cn(CARD, "rounded-3xl overflow-hidden")}>
            <div className="flex items-center gap-3 px-6 py-5">
                <p className="font-semibold text-lg">{t.studio}</p>
                <Pill tone="green" dot>{t.approved}</Pill>
            </div>
            <LeadRows roles={t.leadRoles} approved />
        </div>
        <div className="flex flex-col gap-4">
            <motion.div {...rise(0)} className={cn(CARD, "rounded-3xl p-5")}>
                <p className="font-semibold flex items-center gap-2">
                    <span className="size-2 rounded-full bg-yellow-100 animate-pulse" />
                    {t.next}
                </p>
                <div className="mt-4 flex flex-col gap-2">
                    {[0, 1, 2].map(index => (
                        <motion.span
                            key={index}
                            className="h-8 rounded-xl bg-paper ring-1 ring-ink/5"
                            initial={{ opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + index * 0.25, ease }}
                        />
                    ))}
                </div>
            </motion.div>
            <motion.div {...rise(1)} className="grid grid-cols-3 gap-3">
                {[["5", t.sent], ["2", t.replies], ["1", t.meetings]].map(([value, label]) => (
                    <div key={label} className={cn(CARD, "p-4")}>
                        <p className="font-display text-4xl font-semibold">{value}</p>
                        <p className="text-sm text-grey-300">{label}</p>
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
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={step}
                className="grid place-items-center text-ink"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease }}
            >
                {screens[step]}
            </motion.div>
        </AnimatePresence>
    )
}
