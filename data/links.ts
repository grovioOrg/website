// #region imports
import {
    _CONTACT_EMAIL,
    _PRIVACY_URL
} from "@/constants"
import { agents } from "./agents"
// #endregion

export interface ILink {
    name: string
    url: string
}

export interface ILinkGroup {
    title: string
    urls: ILink[]
}

export const navLinks: ILink[] = [
    { name: "Agents", url: "#workforce" },
    { name: "How it works", url: "#how-it-works" },
    { name: "Sales", url: "#sales" },
    { name: "Marketing", url: "#marketing" },
    { name: "Platform", url: "#platform" },
]

export const footerLinks: ILinkGroup[] = [
    {
        title: "Product",
        urls: [
            { name: "How it works", url: "#how-it-works" },
            { name: "Platform", url: "#platform" },
            { name: "Slack collaboration", url: "#collaboration" },
            { name: "Why GORVIO", url: "#why" },
        ],
    },
    {
        title: "Agents",
        urls: agents.map(agent => ({
            name: agent.role,
            url: `#agent-${agent.id}`,
        })),
    },
    {
        title: "Company",
        urls: [
            { name: "Join the beta", url: "#beta" },
            ...(_CONTACT_EMAIL
                ? [{ name: "Contact", url: `mailto:${_CONTACT_EMAIL}` }]
                : []
            ),
            ...(_PRIVACY_URL
                ? [{ name: "Privacy", url: _PRIVACY_URL }]
                : []
            ),
        ],
    },
]
