// #region imports
import { IAgentId, IAgentPage } from "@/lib/types"
import { IBrandPath } from "@/icons/brands"
// #endregion

export type IIntegrationGroup =
    | "leads"
    | "outreach"
    | "crm"
    | "social"
    | "team"

export type IToolId =
    | "sheets"
    | "csv"
    | "linkedin"
    | "gmail"
    | "outlook"
    | "hubspot"
    | "salesforce"
    | "pipedrive"
    | "zoho"
    | "instagram"
    | "facebook"
    | "x"
    | "tiktok"
    | "youtube"
    | "slack"
    | "gcal"
    | "calendly"
    | "mcp"

export interface IIntegration {
    id: IToolId
    name: string
    brand: IBrandPath
}

export const TOOLS: Record<IToolId, IIntegration> = {
    sheets: { id: "sheets", name: "Google Sheets", brand: "googlesheets" },
    csv: { id: "csv", name: "CSV upload", brand: "csvfile" },
    linkedin: { id: "linkedin", name: "LinkedIn", brand: "linkedin" },
    gmail: { id: "gmail", name: "Gmail", brand: "gmail" },
    outlook: { id: "outlook", name: "Outlook", brand: "microsoftoutlook" },
    hubspot: { id: "hubspot", name: "HubSpot", brand: "hubspot" },
    salesforce: { id: "salesforce", name: "Salesforce", brand: "salesforce" },
    pipedrive: { id: "pipedrive", name: "Pipedrive", brand: "pipedrive" },
    zoho: { id: "zoho", name: "Zoho CRM", brand: "zoho" },
    instagram: { id: "instagram", name: "Instagram", brand: "instagram" },
    facebook: { id: "facebook", name: "Facebook", brand: "facebook" },
    x: { id: "x", name: "X", brand: "x" },
    tiktok: { id: "tiktok", name: "TikTok", brand: "tiktok" },
    youtube: { id: "youtube", name: "YouTube", brand: "youtube" },
    slack: { id: "slack", name: "Slack", brand: "slack" },
    gcal: { id: "gcal", name: "Google Calendar", brand: "googlecalendar" },
    calendly: { id: "calendly", name: "Calendly", brand: "calendly" },
    mcp: { id: "mcp", name: "MCP tools", brand: "mcp" },
}

export const INTEGRATIONS: { group: IIntegrationGroup, agents: IAgentId[], tools: IToolId[] }[] = [
    { group: "leads", agents: ["sales", "researcher"], tools: ["sheets", "csv"] },
    { group: "outreach", agents: ["sales", "signal"], tools: ["linkedin", "gmail", "outlook"] },
    { group: "crm", agents: ["signal", "sales"], tools: ["hubspot", "salesforce", "pipedrive", "zoho"] },
    { group: "social", agents: ["writer", "graphic", "video"], tools: ["instagram", "facebook", "x", "tiktok", "youtube"] },
    { group: "team", agents: ["sales", "writer"], tools: ["slack", "gcal", "calendly"] },
]

export const AGENT_TOOLS: Record<IAgentPage, IToolId[]> = {
    "sales-agent": ["sheets", "csv", "linkedin", "gmail", "outlook", "hubspot", "salesforce", "pipedrive", "zoho"],
    "seo-agent": ["sheets", "slack"],
    "writer-agent": ["linkedin", "instagram", "facebook", "x", "slack"],
    "graphic-designer": ["instagram", "facebook", "linkedin", "slack"],
    "video-agent": ["tiktok", "youtube", "instagram"],
    "hot-leads-caller": ["hubspot", "salesforce", "pipedrive", "gcal", "calendly"],
    concierge: ["gcal", "mcp"],
    "community-growth": ["linkedin", "slack", "gmail"],
}

/** The industry's tools an agent works with, or the agent's own tools if none overlap. */
export const toolsFor = (page: IAgentPage, available: IToolId[], limit = 3) => {
    const shared = AGENT_TOOLS[page].filter(tool => available.includes(tool))
    return (shared.length ? shared : AGENT_TOOLS[page]).slice(0, limit)
}
