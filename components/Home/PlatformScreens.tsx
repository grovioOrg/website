"use client"

// #region imports
import { ReactNode } from "react"

import { Check, Plus } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import {
    Glyph,
    IAppScreen,
    IPillTone,
    Pill
} from "@/components/Mockups"
// #endregion

const ScreenHeader = ({
    title,
    subtitle,
    action,
}: {
    title: string
    subtitle: string
    action?: ReactNode
}) => (
    <div className="flex items-end justify-between px-8 pt-7 pb-5 border-b border-grey-100">
        <div>
            <h3 className="font-display text-[26px] font-semibold tracking-tight leading-none">
                {title}
            </h3>
            <p className="text-[12px] text-grey-200 mt-1.5">{subtitle}</p>
        </div>
        {action ?? (
            <span className="inline-flex items-center gap-1 rounded-lg bg-ink text-white text-[12px] font-medium px-3 py-1.5">
                <Plus size={13} /> New
            </span>
        )}
    </div>
)

const Avatars = ({ ids, size = 22 }: { ids: IAgentId[], size?: number }) => (
    <span className="flex -space-x-1.5">
        {ids.map(id => <AgentAvatar key={id} agent={id} size={size} />)}
    </span>
)

const Playbooks = () => (
    <>
        <ScreenHeader title="Playbooks" subtitle="Repeatable plays your workforce can run on demand" />
        <div className="grid grid-cols-2 gap-4 p-6">
            {([
                { name: "Outbound to seed-stage fintech", steps: 6, agents: ["sales", "researcher", "signal"], tone: "yellow", tag: "Sales" },
                { name: "Weekly content engine", steps: 5, agents: ["seo", "writer", "graphic"], tone: "green", tag: "Marketing" },
                { name: "Webinar follow-up", steps: 4, agents: ["researcher", "sales"], tone: "yellow", tag: "Sales" },
                { name: "Launch teaser kit", steps: 4, agents: ["writer", "video", "graphic"], tone: "pink", tag: "Marketing" },
            ] as { name: string, steps: number, agents: IAgentId[], tone: IPillTone, tag: string }[]).map(play => (
                <div key={play.name} className="rounded-2xl ring-1 ring-grey-100 p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <Pill tone={play.tone}>{play.tag}</Pill>
                        <span className="text-[11px] text-grey-200">{play.steps} steps</span>
                    </div>
                    <p className="font-semibold text-[15px] leading-snug">{play.name}</p>
                    <div className="flex gap-1">
                        {Array.from({ length: play.steps }).map((_, index) => (
                            <span key={index} className={cn("h-1.5 flex-1 rounded-full", index < 2 ? "bg-ink" : "bg-grey-100")} />
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <Avatars ids={play.agents} />
                        <span className="text-[12px] font-medium">Run play →</span>
                    </div>
                </div>
            ))}
        </div>
    </>
)

const Campaigns = () => (
    <>
        <ScreenHeader title="Campaigns" subtitle="Every campaign, its workforce and how it's doing" />
        <div className="p-6">
            <div className="grid grid-cols-[2fr_1.2fr_1fr_0.8fr_0.8fr] text-[11px] font-medium text-grey-200 px-4 pb-2">
                <span>Campaign</span><span>Workforce</span><span>Status</span><span>Leads</span><span>Replies</span>
            </div>
            {([
                ["London fintech founders", ["sales", "researcher", "signal"], "Running", "green", "51", "7"],
                ["Q4 content push", ["seo", "writer", "graphic"], "Running", "green", "—", "—"],
                ["Webinar sign-ups", ["researcher", "sales"], "Needs approval", "yellow", "38", "4"],
                ["Product launch teaser", ["video", "writer"], "Drafting", "blue", "—", "—"],
                ["Re-engage cold leads", ["signal", "sales"], "Paused", "grey", "120", "11"],
            ] as [string, IAgentId[], string, IPillTone, string, string][]).map(([name, ids, status, tone, leads, replies]) => (
                <div key={name} className="grid grid-cols-[2fr_1.2fr_1fr_0.8fr_0.8fr] items-center text-[13px] px-4 py-3.5 border-t border-grey-100">
                    <span className="font-medium">{name}</span>
                    <Avatars ids={ids} />
                    <span><Pill tone={tone} dot>{status}</Pill></span>
                    <span className="tabular-nums">{leads}</span>
                    <span className="tabular-nums">{replies}</span>
                </div>
            ))}
        </div>
    </>
)

const Epic = () => (
    <>
        <ScreenHeader title="Q4 Growth Sprint" subtitle="Timeline view · who is doing what, and when" />
        <div className="p-6">
            <div className="grid grid-cols-[150px_repeat(5,1fr)] text-[11px] text-grey-200 pb-2">
                <span />
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => <span key={day}>{day}</span>)}
            </div>
            {([
                ["sales", "Sales Agent", 0, 2, "Source fintech founders"],
                ["researcher", "Lead Researcher", 1, 2, "Qualify 60 leads"],
                ["signal", "Signal Analyst", 3, 2, "Read replies"],
                ["seo", "SEO Agent", 0, 1, "Keyword audit"],
                ["writer", "Writer Agent", 1, 3, "Bookkeeping guide"],
                ["graphic", "Graphic Designer", 2, 2, "Carousel"],
                ["video", "Video Agent", 3, 2, "Launch teaser"],
            ] as [IAgentId, string, number, number, string][]).map(([id, name, start, span, task]) => (
                <div key={id} className="grid grid-cols-[150px_repeat(5,1fr)] items-center py-2 border-t border-grey-100">
                    <span className="flex items-center gap-2 text-[12px]">
                        <AgentAvatar agent={id} size={20} ring={false} /> {name}
                    </span>
                    <span
                        className="h-8 rounded-lg px-2.5 flex items-center text-[11px] font-medium text-ink truncate"
                        style={{
                            gridColumn: `${start + 2} / span ${span}`,
                            background: `color-mix(in srgb, var(--color-agent-${id}) 35%, white)`,
                        }}
                    >
                        {task}
                    </span>
                </div>
            ))}
        </div>
    </>
)

const Seo = () => (
    <>
        <ScreenHeader title="SEO Intelligence" subtitle="northwind.co · updated by Scout this morning" action={<Pill tone="blue">148 pages tracked</Pill>} />
        <div className="grid grid-cols-[220px_1fr] gap-5 p-6">
            <div className="rounded-2xl bg-paper p-5 flex flex-col items-center gap-3">
                <div className="relative grid place-items-center size-32">
                    <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
                        <circle cx={60} cy={60} r={48} fill="none" stroke="var(--color-grey-100)" strokeWidth={12} />
                        <circle cx={60} cy={60} r={48} fill="none" stroke="var(--color-agent-seo)" strokeWidth={12} strokeLinecap="round" strokeDasharray={`${0.72 * 301.6} 301.6`} />
                    </svg>
                    <p className="font-display text-3xl font-semibold">72</p>
                </div>
                <p className="text-[12px] text-grey-300 text-center">Site health score</p>
            </div>
            <div className="rounded-2xl ring-1 ring-grey-100">
                <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] text-[11px] font-medium text-grey-200 px-4 py-2.5">
                    <span>Keyword</span><span>Volume</span><span>Position</span><span>Action</span>
                </div>
                {([
                    ["bookkeeping for startups", "2.4k", "18", "Write guide"],
                    ["seed round accounting", "1.9k", "24", "Refresh page"],
                    ["r&d tax credits uk", "1.2k", "—", "New article"],
                    ["startup cfo services", "880", "9", "Improve CTA"],
                    ["month end close checklist", "720", "31", "Add template"],
                ]).map(([term, volume, position, action]) => (
                    <div key={term} className="grid grid-cols-[2fr_1fr_1fr_1.2fr] items-center text-[13px] px-4 py-3 border-t border-grey-100">
                        <span className="font-medium">{term}</span>
                        <span className="tabular-nums text-grey-300">{volume}</span>
                        <span className="tabular-nums text-grey-300">{position}</span>
                        <span><Pill tone="blue">{action}</Pill></span>
                    </div>
                ))}
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-6">
            {([
                ["Content gaps", "14", "Topics competitors rank for and you don't"],
                ["Pages to improve", "6", "Thin copy, slow load or missing headings"],
                ["CTA ideas", "9", "Clearer next steps on high-traffic pages"],
            ]).map(([label, value, hint]) => (
                <div key={label} className="rounded-2xl ring-1 ring-grey-100 p-4">
                    <p className="text-[11px] text-grey-200">{label}</p>
                    <p className="font-display text-3xl font-semibold mt-1">{value}</p>
                    <p className="text-[12px] text-grey-300 mt-1 leading-snug">{hint}</p>
                </div>
            ))}
        </div>
    </>
)

const Marketing = () => {
    const items: Record<number, [IAgentId, string]> = {
        1: ["writer", "Guide"],
        3: ["graphic", "Carousel"],
        4: ["video", "Teaser"],
        8: ["writer", "Newsletter"],
        10: ["graphic", "Quote card"],
        12: ["video", "Reel"],
        15: ["writer", "Case study"],
        17: ["graphic", "Infographic"],
    }

    return (
        <>
            <ScreenHeader title="Marketing Board" subtitle="November · 8 pieces scheduled, 3 awaiting review" />
            <div className="grid grid-cols-5 gap-2 p-6">
                {["Mon", "Tue", "Wed", "Thu", "Fri"].map(day => (
                    <span key={day} className="text-[11px] text-grey-200 px-1">{day}</span>
                ))}
                {Array.from({ length: 20 }).map((_, index) => {
                    const item = items[index]

                    return (
                        <div key={index} className="h-[92px] rounded-xl bg-paper p-2 flex flex-col gap-1.5">
                            <span className="text-[10px] text-grey-200">{index + 3}</span>
                            {item && (
                                <span
                                    className="rounded-lg px-2 py-1.5 flex items-center gap-1.5 text-[11px] font-medium"
                                    style={{ background: `color-mix(in srgb, var(--color-agent-${item[0]}) 30%, white)` }}
                                >
                                    <AgentAvatar agent={item[0]} size={16} ring={false} />
                                    {item[1]}
                                </span>
                            )}
                        </div>
                    )
                })}
            </div>
        </>
    )
}

const Playground = () => (
    <>
        <ScreenHeader
            title="AI Playground"
            subtitle="Try ideas with any agent before you brief them"
            action={<span className="flex items-center gap-2"><Avatars ids={["writer", "sales", "seo"]} /></span>}
        />
        <div className="p-6 flex flex-col gap-4 max-w-[640px]">
            <div className="self-end rounded-2xl rounded-br-md bg-ink text-white px-4 py-3 text-[13px] max-w-[420px]">
                Give me three subject lines for the London fintech campaign. Friendly, not salesy.
            </div>
            <div className="flex gap-3">
                <AgentAvatar agent="writer" size={30} />
                <div className="rounded-2xl rounded-tl-md bg-paper px-4 py-3 text-[13px] flex flex-col gap-2">
                    <p className="text-grey-300">Here are three, ranked by how well they fit your tone guide:</p>
                    {["Month-end in an afternoon?", "A quick idea for Lumen's finance stack", "What seed founders ask us most"].map((line, index) => (
                        <span key={line} className="flex items-center gap-2 rounded-lg bg-white ring-1 ring-grey-100 px-3 py-2">
                            <span className="text-grey-200 tabular-nums">{index + 1}</span> {line}
                        </span>
                    ))}
                    <span className="flex gap-2 mt-1">
                        <Pill tone="ink">Send to Sales Agent</Pill>
                        <Pill>Try again</Pill>
                    </span>
                </div>
            </div>
            <div className="mt-2 flex items-center gap-2 rounded-full ring-1 ring-grey-150 px-4 py-2.5 text-[13px] text-grey-200">
                <Glyph name="chat" size={15} /> Ask Quill anything…
            </div>
        </div>
    </>
)

const Account = () => (
    <>
        <ScreenHeader title="Account" subtitle="Your workforce, contracts and team" action={<Pill tone="yellow">Private beta</Pill>} />
        <div className="grid grid-cols-[1.4fr_1fr] gap-5 p-6">
            <div className="rounded-2xl ring-1 ring-grey-100">
                <p className="px-4 py-3 text-[12px] font-semibold">Monthly contracts</p>
                {([
                    ["sales", "Sales Agent", true],
                    ["researcher", "Lead Researcher", true],
                    ["signal", "Signal Analyst", true],
                    ["seo", "SEO Agent", true],
                    ["writer", "Writer Agent", false],
                    ["video", "Video Agent", false],
                ] as [IAgentId, string, boolean][]).map(([id, name, on]) => (
                    <div key={id} className="flex items-center gap-3 px-4 py-2.5 border-t border-grey-100 text-[13px]">
                        <AgentAvatar agent={id} size={22} ring={false} />
                        {name}
                        <span className="ml-auto text-[11px] text-grey-200">{on ? "Active" : "Paused"}</span>
                        <span className={cn("relative w-8 h-[18px] rounded-full", on ? "bg-ink" : "bg-grey-150")}>
                            <span className={cn("absolute top-0.5 size-3.5 rounded-full bg-white", on ? "left-4" : "left-0.5")} />
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-paper p-4">
                    <p className="text-[12px] font-semibold">Team</p>
                    <div className="mt-3 flex flex-col gap-2 text-[13px]">
                        {["Maya · Owner", "Theo · Approver", "Ines · Viewer"].map(person => (
                            <span key={person} className="flex items-center gap-2">
                                <span className="size-6 rounded-full bg-grey-100 grid place-items-center text-[10px] font-semibold">
                                    {person[0]}
                                </span>
                                {person}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="rounded-2xl bg-paper p-4 text-[13px] flex flex-col gap-2">
                    <p className="text-[12px] font-semibold">Approvals</p>
                    {["Every outbound message", "Published content", "New campaigns"].map(rule => (
                        <span key={rule} className="flex items-center gap-2">
                            <span className="grid place-items-center size-4 rounded-full bg-success text-white"><Check size={9} /></span>
                            {rule}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </>
)

export const PLATFORM_SCREENS: Record<IAppScreen, () => ReactNode> = {
    playbooks: Playbooks,
    campaigns: Campaigns,
    epic: Epic,
    seo: Seo,
    marketing: Marketing,
    playground: Playground,
    account: Account,
}
