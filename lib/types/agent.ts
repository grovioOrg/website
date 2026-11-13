export type IAgentId =
    | "sales"
    | "researcher"
    | "signal"
    | "seo"
    | "writer"
    | "graphic"
    | "video"
    | "caller"
    | "concierge"
    | "community"

export type ITeam = "sales" | "marketing" | "vertical"

export type IAgentStatus = "available" | "upcoming"

export type IAgentPage =
    | "sales-agent"
    | "seo-agent"
    | "writer-agent"
    | "graphic-designer"
    | "video-agent"
    | "hot-leads-caller"
    | "concierge"
    | "community-growth"

export interface IAgentCopy {
    name: string
    role: string
    tagline: string
    description: string
    quirk: string
    task: {
        title: string
        steps: string[]
        result: string
    }
}

export interface IAgentMeta {
    id: IAgentId
    team: ITeam
    status: IAgentStatus
    page: IAgentPage
    color: string
}

export interface IAgent extends IAgentMeta, IAgentCopy {}
