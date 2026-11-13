// #region imports
import { en } from "@/dictionaries/en"
import type { IDictionary } from "@/dictionaries"

import {
    IAgent,
    IAgentId,
    IAgentMeta,
    IAgentPage
} from "@/lib/types"
// #endregion

const meta = (
    id: IAgentId,
    team: IAgentMeta["team"],
    page: IAgentPage,
    status: IAgentMeta["status"] = "available",
): IAgentMeta => ({
    id,
    team,
    status,
    page,
    color: `var(--color-agent-${id})`,
})

export const AGENT_META: IAgentMeta[] = [
    meta("sales", "sales", "sales-agent"),
    meta("researcher", "sales", "sales-agent"),
    meta("signal", "sales", "sales-agent"),
    meta("seo", "marketing", "seo-agent"),
    meta("writer", "marketing", "writer-agent"),
    meta("graphic", "marketing", "graphic-designer"),
    meta("video", "marketing", "video-agent"),
    meta("caller", "sales", "hot-leads-caller", "upcoming"),
    meta("concierge", "vertical", "concierge", "upcoming"),
    meta("community", "vertical", "community-growth", "upcoming"),
]

/** Agent pages, in menu order, with the agent whose face represents each one. */
export const AGENT_PAGES: { page: IAgentPage, agent: IAgentId, members: IAgentId[] }[] = [
    { page: "sales-agent", agent: "sales", members: ["sales", "researcher", "signal"] },
    { page: "seo-agent", agent: "seo", members: ["seo"] },
    { page: "writer-agent", agent: "writer", members: ["writer"] },
    { page: "graphic-designer", agent: "graphic", members: ["graphic"] },
    { page: "video-agent", agent: "video", members: ["video"] },
    { page: "hot-leads-caller", agent: "caller", members: ["caller"] },
    { page: "concierge", agent: "concierge", members: ["concierge"] },
    { page: "community-growth", agent: "community", members: ["community"] },
]

export const localizeAgents = (t: IDictionary["agents"]): IAgent[] =>
    AGENT_META.map(item => ({ ...item, ...t.list[item.id] }))

/** English copy for product mockups, which show a sample English workspace. */
export const agents = localizeAgents(en.agents)

export const availableAgents = (list: IAgent[]) =>
    list.filter(agent => agent.status === "available")

export const getAgent = (id: IAgentId): IAgent =>
    agents.find(agent => agent.id === id) ?? agents[0]

export const hasAgentPage = (value: string): value is IAgentPage =>
    AGENT_PAGES.some(item => item.page === value)
