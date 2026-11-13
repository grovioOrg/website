"use client"

// #region imports
import {
    ReactNode,
    useState
} from "react"

import {
    AnimatePresence,
    motion
} from "framer-motion"

import { Check, Hash } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import { Pill } from "@/components/Mockups"

import type { IDictionary } from "@/dictionaries"

import { SectionHeading } from "./SectionHeading"
// #endregion

const NAMES: Partial<Record<IAgentId, string>> = {
    sales: "Sunny · Sales Agent",
    researcher: "Bolt · Sales Agent",
    signal: "Echo · Sales Agent",
    seo: "Scout · SEO Agent",
    writer: "Quill · Writer Agent",
    graphic: "Pixie · Graphic Designer",
    video: "Reel · Video Agent",
}

const rich = (text: string) =>
    text.split("**").map((part, index) => index % 2
        ? <b key={index} className="text-ink">{part}</b>
        : part
    )

const Message = ({
    from,
    time,
    children,
    index,
}: {
    from: IAgentId
    time: string
    children: ReactNode
    index: number
}) => (
    <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        transition={{ duration: 0.45, delay: 0.3 + index * 0.45 }}
        className="flex gap-3"
    >
        <AgentAvatar agent={from} size={34} ring={false} />
        <div className="min-w-0 flex-1">
            <p className="text-[13px]">
                <span className="font-semibold">{NAMES[from]}</span>
                <span className="ml-1.5 rounded bg-grey-50 px-1 text-[10px] font-medium text-grey-300 align-middle">APP</span>
                <span className="ml-2 text-[11px] text-grey-200">{time}</span>
            </p>
            <div className="mt-1 text-[14px] text-grey-300 leading-relaxed">{children}</div>
        </div>
    </motion.div>
)

export const Collaboration = ({
    t,
}: {
    t: IDictionary["home"]["collaboration"]
}) => {
    const [approved, setApproved] = useState(false)
    const copy = t.mockup

    return (
        <section
            id="collaboration"
            className="relative bg-white pt-4 pb-32 max-mobile:pt-0 max-mobile:pb-20"
        >
            <div className="
                max-w-7xl mx-auto px-6 max-mobile:px-4
                grid grid-cols-[0.9fr_1.1fr] gap-16 items-center
                max-tablet:grid-cols-1 max-tablet:gap-12
            ">
                <div className="flex flex-col gap-8">
                    <SectionHeading
                        title={t.title}
                        description={t.description}
                    />
                    <aside className="flex w-full max-w-xl flex-col items-start gap-2.5 rounded-2xl bg-paper p-5 ring-1 ring-ink/5">
                        <Pill tone="yellow">{t.pill}</Pill>
                        <p className="text-sm text-grey-300 leading-relaxed">
                            {t.notice}
                        </p>
                    </aside>
                </div>

                <div className="relative">
                    <div className="rounded-2xl bg-white shadow-window overflow-hidden flex min-h-[540px]">
                        <aside className="w-48 shrink-0 bg-[#3F0E40] text-white/70 p-4 text-[13px] flex flex-col gap-1 max-mobile:hidden">
                            <p className="font-semibold text-white mb-3">Northwind</p>
                            {copy.channels.map((channel, index) => (
                                <span
                                    key={channel}
                                    className={cn(
                                        "flex items-center gap-1.5 rounded-md px-2 py-1",
                                        index === 1 && "bg-[#1164A3] text-white"
                                    )}
                                >
                                    <Hash size={13} /> {channel}
                                </span>
                            ))}
                            <p className="mt-5 mb-1 text-[11px] text-white/50">{copy.apps}</p>
                            {(["sales", "researcher", "signal"] as const).map(id => (
                                <span key={id} className="flex items-center gap-2 px-2 py-1">
                                    <AgentAvatar agent={id} size={16} ring={false} />
                                    {NAMES[id]?.split(" ·")[0]}
                                </span>
                            ))}
                        </aside>

                        <div className="flex-1 min-w-0 flex flex-col">
                            <div className="flex items-center gap-1.5 h-12 px-5 border-b border-grey-100 text-[14px] font-semibold">
                                <Hash size={14} /> {copy.channels[1]}
                                <span className="ml-auto text-[11px] font-normal text-grey-200">{copy.preview}</span>
                            </div>

                            <div className="flex-1 flex flex-col gap-5 p-5">
                                <Message from="sales" time={copy.times[0]} index={0}>
                                    {rich(copy.summary)}
                                </Message>

                                <Message from="sales" time={copy.times[1]} index={1}>
                                    <p>{copy.opener}</p>
                                    <div className="mt-2 rounded-xl ring-1 ring-grey-100 border-l-4 border-l-agent-sales p-3 text-ink text-[13px]">
                                        &ldquo;{copy.dm}&rdquo;
                                    </div>
                                    <div className="mt-2.5 flex items-center gap-2">
                                        <AnimatePresence mode="wait" initial={false}>
                                            {approved ? (
                                                <motion.span
                                                    key="done"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="inline-flex items-center gap-1.5 rounded-lg bg-[#E3F7EE] px-3 py-1.5 text-[13px] font-medium text-[#147A52]"
                                                >
                                                    <Check size={12} /> {copy.approved}
                                                </motion.span>
                                            ) : (
                                                <motion.span key="actions" exit={{ opacity: 0 }} className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setApproved(true)}
                                                        className="rounded-lg bg-[#007A5A] px-3 py-1.5 text-[13px] font-medium text-white cursor-pointer hover:brightness-110 smooth"
                                                    >
                                                        {copy.approve}
                                                    </button>
                                                    <span className="rounded-lg ring-1 ring-grey-150 px-3 py-1.5 text-[13px] font-medium text-ink">
                                                        {copy.edit}
                                                    </span>
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                        {!approved && (
                                            <span className="text-[11px] text-grey-200">{copy.tryIt}</span>
                                        )}
                                    </div>
                                </Message>

                                <AnimatePresence>
                                    {approved && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                            className="flex gap-3"
                                        >
                                            <AgentAvatar agent="sales" size={34} ring={false} />
                                            <p className="text-[14px] text-grey-300 pt-4">
                                                {copy.scheduled}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Message from="signal" time={copy.times[2]} index={2}>
                                    {rich(copy.reply)}
                                </Message>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
