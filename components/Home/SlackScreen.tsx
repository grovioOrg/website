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

import type { IDictionary } from "@/dictionaries"
// #endregion

const NAMES: Partial<Record<IAgentId, string>> = {
    sales: "Sunny · Sales Agent",
    researcher: "Bolt · Sales Agent",
    signal: "Echo · Sales Agent",
}

const rich = (text: string) =>
    text.split("**").map((part, index) => index % 2
        ? <span key={index} className="font-semibold text-ink">{part}</span>
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.2 + index * 0.4 }}
        className="flex gap-3"
    >
        <AgentAvatar agent={from} size={30} ring={false} />
        <div className="min-w-0 flex-1">
            <p className="text-[13px] leading-tight">
                <span className="font-semibold">{NAMES[from]}</span>
                <span className="ml-1.5 rounded bg-grey-50 px-1 text-[10px] font-medium text-grey-300 align-middle">APP</span>
                <span className="ml-2 text-[11px] text-grey-200">{time}</span>
            </p>
            <div className="mt-1 text-[13px] text-grey-300 leading-relaxed">{children}</div>
        </div>
    </motion.div>
)

/** A Slack workspace where agents post updates and ask for approval. */
export const SlackScreen = ({
    t,
    width = 1240,
    height = 720,
}: {
    t: IDictionary["home"]["platform"]["slack"]
    width?: number
    height?: number
}) => {
    const [approved, setApproved] = useState(false)

    return (
        <div
            className="flex flex-col rounded-2xl bg-white text-ink overflow-hidden shadow-window ring-1 ring-ink/5"
            style={{ width, height }}
        >
            <div className="relative flex items-center h-10 px-4 shrink-0 bg-[#350D36]">
                <span className="flex gap-1.5">
                    <span className="size-3 rounded-full bg-[#FF5F57]" />
                    <span className="size-3 rounded-full bg-[#FEBC2E]" />
                    <span className="size-3 rounded-full bg-[#28C840]" />
                </span>
                <span className="absolute left-1/2 -translate-x-1/2 rounded-md bg-white/15 px-24 py-1 text-[12px] text-white/70">
                    Hotel Alpenhof
                </span>
            </div>

            <div className="flex flex-1 min-h-0">
                <aside className="w-56 shrink-0 bg-[#3F0E40] text-white/70 p-4 text-[13px] flex flex-col gap-0.5">
                    <p className="font-semibold text-white text-[14px] mb-3">Hotel Alpenhof</p>
                    {t.channels.map((channel, index) => (
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
                    <p className="mt-5 mb-1 text-[11px] text-white/50">{t.apps}</p>
                    {(["sales", "researcher", "signal"] as const).map(id => (
                        <span key={id} className="flex items-center gap-2 px-2 py-1">
                            <AgentAvatar agent={id} size={16} ring={false} />
                            {NAMES[id]?.split(" ·")[0]}
                        </span>
                    ))}
                </aside>

                <div className="flex-1 min-w-0 flex flex-col">
                    <div className="flex items-center gap-1.5 h-12 px-6 border-b border-grey-100 text-[14px] font-semibold shrink-0">
                        <Hash size={14} /> {t.channels[1]}
                        <span className="ml-auto text-[11px] font-normal text-grey-200">{t.preview}</span>
                    </div>

                    <div className="flex-1 flex flex-col gap-5 p-6 overflow-hidden">
                        <Message from="sales" time={t.times[0]} index={0}>
                            {rich(t.summary)}
                        </Message>

                        <Message from="sales" time={t.times[1]} index={1}>
                            <p>{t.opener}</p>
                            <div className="mt-2 rounded-xl ring-1 ring-grey-100 border-l-4 border-l-agent-sales px-3 py-2.5 text-ink text-[13px]">
                                &ldquo;{t.dm}&rdquo;
                            </div>
                            <div className="mt-2.5 flex items-center gap-2">
                                <AnimatePresence mode="wait" initial={false}>
                                    {approved ? (
                                        <motion.span
                                            key="done"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#E3F7EE] px-3 py-1.5 text-[12px] font-medium text-[#147A52]"
                                        >
                                            <Check size={12} /> {t.approved}
                                        </motion.span>
                                    ) : (
                                        <motion.span key="actions" exit={{ opacity: 0 }} className="flex gap-2">
                                            <button
                                                type="button"
                                                onClick={() => setApproved(true)}
                                                className="rounded-lg bg-[#007A5A] px-3 py-1.5 text-[12px] font-medium text-white cursor-pointer hover:brightness-110 smooth"
                                            >
                                                {t.approve}
                                            </button>
                                            <span className="rounded-lg ring-1 ring-grey-150 px-3 py-1.5 text-[12px] font-medium text-ink">
                                                {t.edit}
                                            </span>
                                        </motion.span>
                                    )}
                                </AnimatePresence>
                                {!approved && (
                                    <span className="text-[11px] text-grey-200">{t.tryIt}</span>
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
                                    <AgentAvatar agent="sales" size={30} ring={false} />
                                    <p className="text-[13px] text-grey-300 pt-1.5">
                                        {t.scheduled}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <Message from="signal" time={t.times[2]} index={2}>
                            {rich(t.reply)}
                        </Message>
                    </div>

                    <div className="px-6 pb-5">
                        <div className="rounded-lg ring-1 ring-grey-150 px-3.5 py-3 text-[13px] text-grey-200">
                            {t.composer} #{t.channels[1]}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
