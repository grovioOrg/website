// #region imports
import { IAgentId } from "@/lib/types"
import { IBetaInterest } from "@/lib/types/beta"
// #endregion

export type IPlanId =
    | "sales-1"
    | "sales-2"
    | "sales-3"
    | "writer"
    | "writer-graphic"
    | "marketing-all"

export interface IPlan {
    id: IPlanId
    agents: IAgentId[]
    /** Indicative monthly price in EUR during the beta. */
    price: number
    interest: IBetaInterest
    popular?: boolean
}

export const PLANS: Record<"sales" | "marketing", IPlan[]> = {
    sales: [
        { id: "sales-1", agents: ["sales"], price: 249, interest: "sales" },
        { id: "sales-2", agents: ["sales", "researcher"], price: 449, interest: "sales", popular: true },
        { id: "sales-3", agents: ["sales", "researcher", "signal"], price: 599, interest: "sales" },
    ],
    marketing: [
        { id: "writer", agents: ["writer", "seo"], price: 149, interest: "marketing" },
        { id: "writer-graphic", agents: ["writer", "graphic", "seo"], price: 279, interest: "marketing", popular: true },
        { id: "marketing-all", agents: ["writer", "graphic", "video", "seo"], price: 449, interest: "marketing" },
    ],
}
