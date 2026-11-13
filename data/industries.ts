// #region imports
import { IAgentId } from "@/lib/types"
import { IGlyph } from "@/components/Mockups/Glyph"
import { IToolId } from "./integrations"
// #endregion

export type IIndustry =
    | "hotels"
    | "restaurants"
    | "ecommerce"
    | "retail"
    | "real-estate"
    | "property-management"
    | "car-dealerships"
    | "law-firms"
    | "tax-advisors"
    | "self-employed"
    | "tradespeople"

/** Each industry's agents line up with the `agents` copy in the dictionary, in order. */
export const INDUSTRIES: { id: IIndustry, glyph: IGlyph, agents: IAgentId[], tools: IToolId[] }[] = [
    { id: "hotels", glyph: "bed", agents: ["sales", "writer", "concierge"], tools: ["linkedin", "gmail", "hubspot", "instagram", "facebook", "gcal", "mcp"] },
    { id: "restaurants", glyph: "dish", agents: ["sales", "writer", "concierge"], tools: ["linkedin", "gmail", "instagram", "facebook", "tiktok", "gcal", "mcp"] },
    { id: "ecommerce", glyph: "cart", agents: ["sales", "seo", "writer"], tools: ["sheets", "linkedin", "gmail", "instagram", "tiktok", "youtube", "hubspot"] },
    { id: "retail", glyph: "bag", agents: ["sales", "writer", "graphic"], tools: ["sheets", "linkedin", "outlook", "instagram", "facebook", "hubspot"] },
    { id: "real-estate", glyph: "key", agents: ["sales", "writer", "video"], tools: ["linkedin", "gmail", "pipedrive", "instagram", "youtube", "calendly"] },
    { id: "property-management", glyph: "building", agents: ["sales", "writer", "seo"], tools: ["sheets", "linkedin", "outlook", "salesforce", "facebook", "gcal"] },
    { id: "car-dealerships", glyph: "car", agents: ["sales", "writer", "video"], tools: ["linkedin", "outlook", "salesforce", "instagram", "tiktok", "youtube"] },
    { id: "law-firms", glyph: "scale", agents: ["sales", "writer", "seo"], tools: ["linkedin", "outlook", "salesforce", "hubspot", "slack", "calendly"] },
    { id: "tax-advisors", glyph: "receipt", agents: ["sales", "writer", "graphic"], tools: ["sheets", "linkedin", "gmail", "zoho", "instagram", "calendly"] },
    { id: "self-employed", glyph: "person", agents: ["sales", "writer", "researcher"], tools: ["csv", "linkedin", "gmail", "pipedrive", "instagram", "calendly"] },
    { id: "tradespeople", glyph: "wrench", agents: ["sales", "video", "seo"], tools: ["sheets", "linkedin", "gmail", "instagram", "tiktok", "youtube"] },
]

export const hasIndustry = (value: string): value is IIndustry =>
    INDUSTRIES.some(item => item.id === value)
