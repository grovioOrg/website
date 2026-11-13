// #region imports
import { ReactNode } from "react"

import { cn } from "@/utils"
import { IAgentId } from "@/lib/types"
import { Logo } from "@/icons"
import { AgentAvatar } from "@/components/Mascots"
import type { IDictionary } from "@/dictionaries"

import {
    Glyph,
    IGlyph
} from "./Glyph"
// #endregion

export type IAppScreen =
    | "playbooks"
    | "campaigns"
    | "epic"
    | "seo"
    | "marketing"
    | "playground"
    | "account"

export type IAppCopy = IDictionary["common"]["mockup"]

export const APP_NAV: {
    id: IAppScreen
    glyph: IGlyph
}[] = [
    { id: "playbooks", glyph: "playbooks" },
    { id: "campaigns", glyph: "campaigns" },
    { id: "epic", glyph: "epic" },
    { id: "seo", glyph: "seo" },
    { id: "marketing", glyph: "marketing" },
    { id: "playground", glyph: "playground" },
    { id: "account", glyph: "account" },
]

const SIDEBAR_AGENTS: {
    id: IAgentId
    name: string
    busy: boolean
}[] = [
    { id: "sales", name: "Sunny · Sales", busy: true },
    { id: "researcher", name: "Bolt · Sales", busy: true },
    { id: "signal", name: "Echo · Sales", busy: false },
    { id: "seo", name: "SEO Agent", busy: true },
    { id: "writer", name: "Writer Agent", busy: false },
]

export const AppSidebar = ({
    t,
    active,
}: {
    t: IAppCopy
    active?: IAppScreen
}) => (
    <aside className="
        w-[228px] shrink-0 bg-paper border-r border-grey-100
        flex flex-col text-[13px] text-grey-300
    ">
        <div className="flex items-center gap-2 px-4 h-12">
            <Logo size={20} />
            <span className="font-semibold text-ink">Northwind</span>
            <span className="ml-auto flex gap-2 text-grey-200">
                <Glyph name="search" size={15} />
                <Glyph name="inbox" size={15} />
            </span>
        </div>

        <nav className="flex flex-col gap-0.5 px-2 mt-1">
            {APP_NAV.map(({ id, glyph }) => (
                <span
                    key={id}
                    data-active={active === id}
                    className="
                        flex items-center gap-2.5 px-2.5 py-1.5 rounded-md
                        data-[active=true]:bg-white data-[active=true]:text-ink
                        data-[active=true]:font-medium
                        data-[active=true]:shadow-[0_0_0_1px_rgb(10_10_10/0.06)]
                    "
                >
                    <Glyph name={glyph} size={15} />
                    {t.nav[id]}
                </span>
            ))}
        </nav>

        <p className="px-4 mt-5 mb-1.5 text-[11px] font-medium text-grey-200">
            {t.workforce}
        </p>

        <div className="flex flex-col gap-0.5 px-2">
            {SIDEBAR_AGENTS.map(({ id, name, busy }) => (
                <span
                    key={id}
                    className="flex items-center gap-2.5 px-2.5 py-1 rounded-md"
                >
                    <AgentAvatar agent={id} size={20} ring={false} />
                    {name}
                    <span
                        className={cn(
                            "ml-auto size-1.5 rounded-full",
                            busy ? "bg-success" : "bg-grey-150"
                        )}
                    />
                </span>
            ))}
        </div>

        <div className="mt-auto p-3">
            <span className="
                flex items-center gap-2 px-3 py-2 rounded-full bg-white
                shadow-[0_0_0_1px_rgb(10_10_10/0.08)] text-ink
            ">
                <Glyph name="search" size={15} className="text-grey-200" />
                {t.ask}
                <span className="ml-auto text-[11px] text-grey-200">⌘K</span>
            </span>
        </div>
    </aside>
)

export const AppWindow = ({
    t,
    children,
    title = "Grovio",
    active,
    sidebar = true,
    className = "",
}: {
    t: IAppCopy
    children: ReactNode
    title?: string
    active?: IAppScreen
    sidebar?: boolean
    className?: string
}) => (
    <div className={cn(
        "flex flex-col bg-white rounded-2xl overflow-hidden shadow-window",
        className
    )}>
        <div className="
            relative flex items-center h-10 px-4 shrink-0
            border-b border-grey-100 bg-white
        ">
            <span className="flex gap-1.5">
                <span className="size-3 rounded-full bg-[#FF5F57]" />
                <span className="size-3 rounded-full bg-[#FEBC2E]" />
                <span className="size-3 rounded-full bg-[#28C840]" />
            </span>
            <span className="
                absolute left-1/2 -translate-x-1/2 flex items-center gap-1.5
                text-xs font-medium text-grey-300
            ">
                <Logo size={14} />
                {title}
            </span>
        </div>

        <div className="flex flex-1 min-h-0">
            {sidebar && <AppSidebar t={t} active={active} />}
            <div className="flex-1 min-w-0 flex flex-col">
                {children}
            </div>
        </div>
    </div>
)
