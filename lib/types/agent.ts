export type IAgentId =
    | "sales"
    | "researcher"
    | "signal"
    | "seo"
    | "writer"
    | "graphic"
    | "video"

export type ITeam = "sales" | "marketing"

export interface IAgent {
    id: IAgentId
    name: string
    role: string
    team: ITeam
    color: string
    tagline: string
    description: string
    quirk: string
    task: {
        title: string
        steps: string[]
        result: string
    }
}
