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

import { SectionHeading } from "./SectionHeading"
// #endregion

const NAMES: Record<IAgentId, string> = {
    sales: "Sunny · Sales Agent",
    researcher: "Bolt · Lead Researcher",
    signal: "Echo · Signal Analyst",
    seo: "Scout · SEO Agent",
    writer: "Quill · Writer Agent",
    graphic: "Pixie · Graphic Designer",
    video: "Reel · Video Agent",
}

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

export const Collaboration = () => {
    const [approved, setApproved] = useState(false)

    return (
        <section
            id="collaboration"
            className="relative bg-white py-32 max-mobile:py-20"
        >
            <div className="
                max-w-7xl mx-auto px-6 max-mobile:px-4
                grid grid-cols-[0.9fr_1.1fr] gap-16 items-center
                max-tablet:grid-cols-1 max-tablet:gap-12
            ">
                <div className="flex flex-col gap-8">
                    <SectionHeading
                        title={<>Your agents, in the channel you already use.</>}
                        description="Sunny posts the morning summary, agents ask for approvals in-thread, and you answer with one click. No new tab to babysit."
                    />
                    <div className="flex items-start gap-3 rounded-2xl bg-paper p-4 max-w-md">
                        <Pill tone="yellow" className="mt-0.5">Coming with the beta</Pill>
                        <p className="text-sm text-grey-300 leading-relaxed">
                            The Slack plugin is rolling out to beta teams. What you see here is a preview of how it works.
                        </p>
                    </div>
                </div>

                <div className="relative">
                    <div className="rounded-2xl bg-white shadow-window overflow-hidden flex min-h-[540px]">
                        <aside className="w-48 shrink-0 bg-[#3F0E40] text-white/70 p-4 text-[13px] flex flex-col gap-1 max-mobile:hidden">
                            <p className="font-semibold text-white mb-3">Northwind</p>
                            {["general", "growth-team", "content", "sales-wins"].map(channel => (
                                <span
                                    key={channel}
                                    className={cn(
                                        "flex items-center gap-1.5 rounded-md px-2 py-1",
                                        channel === "growth-team" && "bg-[#1164A3] text-white"
                                    )}
                                >
                                    <Hash size={13} /> {channel}
                                </span>
                            ))}
                            <p className="mt-5 mb-1 text-[11px] text-white/50">Apps</p>
                            {(["sales", "researcher", "signal"] as const).map(id => (
                                <span key={id} className="flex items-center gap-2 px-2 py-1">
                                    <AgentAvatar agent={id} size={16} ring={false} />
                                    {NAMES[id].split(" ·")[0]}
                                </span>
                            ))}
                        </aside>

                        <div className="flex-1 min-w-0 flex flex-col">
                            <div className="flex items-center gap-1.5 h-12 px-5 border-b border-grey-100 text-[14px] font-semibold">
                                <Hash size={14} /> growth-team
                                <span className="ml-auto text-[11px] font-normal text-grey-200">Preview</span>
                            </div>

                            <div className="flex-1 flex flex-col gap-5 p-5">
                                <Message from="sales" time="9:02 AM" index={0}>
                                    Morning! Overnight your workforce qualified <b className="text-ink">51 leads</b>, drafted
                                    {" "}<b className="text-ink">3 posts</b> and found <b className="text-ink">7 positive replies</b>.
                                    Two things need you today.
                                </Message>

                                <Message from="sales" time="9:04 AM" index={1}>
                                    <p>Opener for Maya at Lumen Labs, based on Bolt&apos;s research:</p>
                                    <div className="mt-2 rounded-xl ring-1 ring-grey-100 border-l-4 border-l-agent-sales p-3 text-ink text-[13px]">
                                        &ldquo;Saw Lumen just closed its seed round. Congrats! Most teams your size lose a day a month to
                                        close. Worth a 15-minute look at how Northwind gets that back?&rdquo;
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
                                                    <Check size={12} /> Approved by you
                                                </motion.span>
                                            ) : (
                                                <motion.span key="actions" exit={{ opacity: 0 }} className="flex gap-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => setApproved(true)}
                                                        className="rounded-lg bg-[#007A5A] px-3 py-1.5 text-[13px] font-medium text-white cursor-pointer hover:brightness-110 smooth"
                                                    >
                                                        Approve
                                                    </button>
                                                    <span className="rounded-lg ring-1 ring-grey-150 px-3 py-1.5 text-[13px] font-medium text-ink">
                                                        Edit
                                                    </span>
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                        {!approved && (
                                            <span className="text-[11px] text-grey-200">Try it</span>
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
                                                Thanks! Scheduled for 9:30 AM her time. I&apos;ll let Echo know to watch for a reply.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <Message from="signal" time="9:11 AM" index={2}>
                                    Positive reply from <b className="text-ink">Theo at Brightline</b>: &ldquo;Can we talk Thursday?&rdquo;
                                    {" "}Added to CRM and flagged for you.
                                </Message>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
