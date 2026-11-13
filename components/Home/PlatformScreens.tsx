"use client"

// #region imports
import { ReactNode } from "react"

import { Check, Plus } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"
import { formatText, type IDictionary } from "@/dictionaries"

import { AgentAvatar } from "@/components/Mascots"

import {
    Glyph,
    IAppCopy,
    IAppScreen,
    IPillTone,
    Pill
} from "@/components/Mockups"
// #endregion

type IScreenProps = {
    t: IDictionary["home"]["platform"]["mockup"]
    app: IAppCopy
}

const ScreenHeader = ({
    title,
    subtitle,
    action,
    newLabel,
}: {
    title: string
    subtitle: string
    action?: ReactNode
    newLabel?: string
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
                <Plus size={13} /> {newLabel}
            </span>
        )}
    </div>
)

const Avatars = ({ ids, size = 22 }: { ids: IAgentId[], size?: number }) => (
    <span className="flex -space-x-1.5">
        {ids.map(id => <AgentAvatar key={id} agent={id} size={size} />)}
    </span>
)

const Playbooks = ({ t, app }: IScreenProps) => (
    <>
        <ScreenHeader title={app.nav.playbooks} subtitle={t.playbooks.subtitle} newLabel={t.new} />
        <div className="grid grid-cols-2 gap-4 p-6">
            {([
                { steps: 6, agents: ["sales", "researcher", "signal"], tone: "yellow", tag: "sales" },
                { steps: 5, agents: ["seo", "writer", "graphic"], tone: "green", tag: "marketing" },
                { steps: 4, agents: ["researcher", "sales"], tone: "yellow", tag: "sales" },
                { steps: 4, agents: ["writer", "video", "graphic"], tone: "pink", tag: "marketing" },
            ] as { steps: number, agents: IAgentId[], tone: IPillTone, tag: "sales" | "marketing" }[]).map((play, index) => (
                <div key={index} className="rounded-2xl ring-1 ring-grey-100 p-5 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <Pill tone={play.tone}>{t.playbooks.tags[play.tag]}</Pill>
                        <span className="text-[11px] text-grey-200">{formatText(t.playbooks.steps, { n: play.steps })}</span>
                    </div>
                    <p className="font-semibold text-[15px] leading-snug">{t.playbooks.plays[index]}</p>
                    <div className="flex gap-1">
                        {Array.from({ length: play.steps }).map((_, index) => (
                            <span key={index} className={cn("h-1.5 flex-1 rounded-full", index < 2 ? "bg-ink" : "bg-grey-100")} />
                        ))}
                    </div>
                    <div className="flex items-center justify-between">
                        <Avatars ids={play.agents} />
                        <span className="text-[12px] font-medium">{t.playbooks.run}</span>
                    </div>
                </div>
            ))}
        </div>
    </>
)

type ICampaignStatus = keyof IScreenProps["t"]["campaigns"]["status"]

const Campaigns = ({ t, app }: IScreenProps) => (
    <>
        <ScreenHeader title={app.nav.campaigns} subtitle={t.campaigns.subtitle} newLabel={t.new} />
        <div className="p-6">
            <div className="grid grid-cols-[2fr_1.2fr_1fr_0.8fr_0.8fr] text-[11px] font-medium text-grey-200 px-4 pb-2">
                {t.campaigns.columns.map(column => <span key={column}>{column}</span>)}
            </div>
            {([
                [["sales", "researcher", "signal"], "running", "green", "51", "7"],
                [["seo", "writer", "graphic"], "running", "green", "—", "—"],
                [["researcher", "sales"], "approval", "yellow", "38", "4"],
                [["video", "writer"], "drafting", "blue", "—", "—"],
                [["signal", "sales"], "paused", "grey", "120", "11"],
            ] as [IAgentId[], ICampaignStatus, IPillTone, string, string][]).map(([ids, status, tone, leads, replies], index) => (
                <div key={index} className="grid grid-cols-[2fr_1.2fr_1fr_0.8fr_0.8fr] items-center text-[13px] px-4 py-3.5 border-t border-grey-100">
                    <span className="font-medium">{t.campaigns.names[index]}</span>
                    <Avatars ids={ids} />
                    <span><Pill tone={tone} dot>{t.campaigns.status[status]}</Pill></span>
                    <span className="tabular-nums">{leads}</span>
                    <span className="tabular-nums">{replies}</span>
                </div>
            ))}
        </div>
    </>
)

const Epic = ({ t, app }: IScreenProps) => (
    <>
        <ScreenHeader title={t.epic.title} subtitle={t.epic.subtitle} newLabel={t.new} />
        <div className="p-6">
            <div className="grid grid-cols-[150px_repeat(5,1fr)] text-[11px] text-grey-200 pb-2">
                <span />
                {app.days.map(day => <span key={day}>{day}</span>)}
            </div>
            {([
                ["sales", "Sunny · Sales", 0, 2],
                ["researcher", "Bolt · Sales", 1, 2],
                ["signal", "Echo · Sales", 3, 2],
                ["seo", "SEO Agent", 0, 1],
                ["writer", "Writer Agent", 1, 3],
                ["graphic", "Graphic Designer", 2, 2],
                ["video", "Video Agent", 3, 2],
            ] as [IAgentId, string, number, number][]).map(([id, name, start, span], index) => (
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
                        {t.epic.tasks[index]}
                    </span>
                </div>
            ))}
        </div>
    </>
)

const Seo = ({ t, app }: IScreenProps) => (
    <>
        <ScreenHeader title={app.nav.seo} subtitle={t.seo.subtitle} action={<Pill tone="blue">{t.seo.tracked}</Pill>} />
        <div className="grid grid-cols-[220px_1fr] gap-5 p-6">
            <div className="rounded-2xl bg-paper p-5 flex flex-col items-center gap-3">
                <div className="relative grid place-items-center size-32">
                    <svg viewBox="0 0 120 120" className="absolute inset-0 -rotate-90">
                        <circle cx={60} cy={60} r={48} fill="none" stroke="var(--color-grey-100)" strokeWidth={12} />
                        <circle cx={60} cy={60} r={48} fill="none" stroke="var(--color-agent-seo)" strokeWidth={12} strokeLinecap="round" strokeDasharray={`${0.72 * 301.6} 301.6`} />
                    </svg>
                    <p className="font-display text-3xl font-semibold">72</p>
                </div>
                <p className="text-[12px] text-grey-300 text-center">{t.seo.health}</p>
            </div>
            <div className="rounded-2xl ring-1 ring-grey-100">
                <div className="grid grid-cols-[2fr_1fr_1fr_1.2fr] text-[11px] font-medium text-grey-200 px-4 py-2.5">
                    {t.seo.columns.map(column => <span key={column}>{column}</span>)}
                </div>
                {([
                    ["2.4k", "18"],
                    ["1.9k", "24"],
                    ["1.2k", "—"],
                    ["880", "9"],
                    ["720", "31"],
                ]).map(([volume, position], index) => (
                    <div key={index} className="grid grid-cols-[2fr_1fr_1fr_1.2fr] items-center text-[13px] px-4 py-3 border-t border-grey-100">
                        <span className="font-medium">{t.seo.keywords[index]}</span>
                        <span className="tabular-nums text-grey-300">{volume}</span>
                        <span className="tabular-nums text-grey-300">{position}</span>
                        <span><Pill tone="blue">{t.seo.actions[index]}</Pill></span>
                    </div>
                ))}
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 px-6">
            {t.seo.cards.map(({ label, hint }, index) => (
                <div key={label} className="rounded-2xl ring-1 ring-grey-100 p-4">
                    <p className="text-[11px] text-grey-200">{label}</p>
                    <p className="font-display text-3xl font-semibold mt-1">{[14, 6, 9][index]}</p>
                    <p className="text-[12px] text-grey-300 mt-1 leading-snug">{hint}</p>
                </div>
            ))}
        </div>
    </>
)

const Marketing = ({ t, app }: IScreenProps) => {
    const slots: [number, IAgentId][] = [
        [1, "writer"],
        [3, "graphic"],
        [4, "video"],
        [8, "writer"],
        [10, "graphic"],
        [12, "video"],
        [15, "writer"],
        [17, "graphic"],
    ]
    const items: Record<number, [IAgentId, string]> = Object.fromEntries(
        slots.map(([day, agent], index) => [day, [agent, t.marketing.items[index]]])
    )

    return (
        <>
            <ScreenHeader title={app.nav.marketing} subtitle={t.marketing.subtitle} newLabel={t.new} />
            <div className="grid grid-cols-5 gap-2 p-6">
                {app.days.map(day => (
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

const Playground = ({ t, app }: IScreenProps) => (
    <>
        <ScreenHeader
            title={app.nav.playground}
            subtitle={t.playground.subtitle}
            action={<span className="flex items-center gap-2"><Avatars ids={["writer", "sales", "seo"]} /></span>}
        />
        <div className="p-6 flex flex-col gap-4 max-w-[640px]">
            <div className="self-end rounded-2xl rounded-br-md bg-ink text-white px-4 py-3 text-[13px] max-w-[420px]">
                {t.playground.prompt}
            </div>
            <div className="flex gap-3">
                <AgentAvatar agent="writer" size={30} />
                <div className="rounded-2xl rounded-tl-md bg-paper px-4 py-3 text-[13px] flex flex-col gap-2">
                    <p className="text-grey-300">{t.playground.reply}</p>
                    {t.playground.lines.map((line, index) => (
                        <span key={line} className="flex items-center gap-2 rounded-lg bg-white ring-1 ring-grey-100 px-3 py-2">
                            <span className="text-grey-200 tabular-nums">{index + 1}</span> {line}
                        </span>
                    ))}
                    <span className="flex gap-2 mt-1">
                        <Pill tone="ink">{t.playground.send}</Pill>
                        <Pill>{t.playground.retry}</Pill>
                    </span>
                </div>
            </div>
            <div className="mt-2 flex items-center gap-2 rounded-full ring-1 ring-grey-150 px-4 py-2.5 text-[13px] text-grey-200">
                <Glyph name="chat" size={15} /> {t.playground.ask}
            </div>
        </div>
    </>
)

const Account = ({ t, app }: IScreenProps) => (
    <>
        <ScreenHeader title={app.nav.account} subtitle={t.account.subtitle} action={<Pill tone="yellow">{t.account.beta}</Pill>} />
        <div className="grid grid-cols-[1.4fr_1fr] gap-5 p-6">
            <div className="rounded-2xl ring-1 ring-grey-100">
                <p className="px-4 py-3 text-[12px] font-semibold">{t.account.contracts}</p>
                {([
                    ["sales", "Sunny · Sales Agent", true],
                    ["researcher", "Bolt · Sales Agent", true],
                    ["signal", "Echo · Sales Agent", true],
                    ["seo", "SEO Agent", true],
                    ["writer", "Writer Agent", false],
                    ["video", "Video Agent", false],
                ] as [IAgentId, string, boolean][]).map(([id, name, on]) => (
                    <div key={id} className="flex items-center gap-3 px-4 py-2.5 border-t border-grey-100 text-[13px]">
                        <AgentAvatar agent={id} size={22} ring={false} />
                        {name}
                        <span className="ml-auto text-[11px] text-grey-200">{on ? t.account.active : t.account.paused}</span>
                        <span className={cn("relative w-8 h-[18px] rounded-full", on ? "bg-ink" : "bg-grey-150")}>
                            <span className={cn("absolute top-0.5 size-3.5 rounded-full bg-white", on ? "left-4" : "left-0.5")} />
                        </span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-4">
                <div className="rounded-2xl bg-paper p-4">
                    <p className="text-[12px] font-semibold">{t.account.team}</p>
                    <div className="mt-3 flex flex-col gap-2 text-[13px]">
                        {t.account.people.map(person => (
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
                    <p className="text-[12px] font-semibold">{t.account.approvals}</p>
                    {t.account.rules.map(rule => (
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

export const PLATFORM_SCREENS: Record<IAppScreen, (props: IScreenProps) => ReactNode> = {
    playbooks: Playbooks,
    campaigns: Campaigns,
    epic: Epic,
    seo: Seo,
    marketing: Marketing,
    playground: Playground,
    account: Account,
}
