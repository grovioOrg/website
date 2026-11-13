// #region imports
import {
    _CONTACT_EMAIL,
    _PRIVACY_URL
} from "@/constants"

import {
    localePath,
    type IDictionary,
    type ILocale
} from "@/dictionaries"

import { AGENT_PAGES } from "./agents"
import { INDUSTRIES } from "./industries"
// #endregion

export interface ILink {
    name: string
    url: string
}

export interface ILinkGroup {
    title: string
    urls: ILink[]
}

/** Home sections, reachable from any page. */
export const homeLink = (lang: ILocale, hash: string) =>
    `${localePath(lang, "/")}#${hash}`

export const agentLink = (lang: ILocale, page: string) =>
    localePath(lang, `/agents/${page}`)

export const industryLink = (lang: ILocale, id: string) =>
    localePath(lang, `/industries/${id}`)

export const getNavLinks = (lang: ILocale, t: IDictionary["common"]["nav"]): ILink[] => [
    { name: t.howItWorks, url: homeLink(lang, "walkthrough") },
    { name: t.pricing, url: homeLink(lang, "pricing") },
    { name: t.platform, url: homeLink(lang, "platform") },
]

export const getFooterLinks = (lang: ILocale, t: IDictionary): ILinkGroup[] => [
    {
        title: t.common.footer.product,
        urls: [
            { name: t.common.footer.walkthrough, url: homeLink(lang, "walkthrough") },
            { name: t.common.footer.howItWorks, url: homeLink(lang, "how-it-works") },
            { name: t.common.footer.pricing, url: homeLink(lang, "pricing") },
            { name: t.common.footer.platform, url: homeLink(lang, "platform") },
            { name: t.common.footer.collaboration, url: homeLink(lang, "collaboration") },
            { name: t.common.footer.why, url: homeLink(lang, "why") },
        ],
    },
    {
        title: t.common.footer.agents,
        urls: AGENT_PAGES.map(({ page, agent }) => ({
            name: t.agents.list[agent].role,
            url: agentLink(lang, page),
        })),
    },
    {
        title: t.common.footer.industries,
        urls: INDUSTRIES.map(({ id }) => ({
            name: t.industries.list[id].name,
            url: industryLink(lang, id),
        })),
    },
    {
        title: t.common.footer.company,
        urls: [
            { name: t.common.footer.joinBeta, url: "#beta" },
            { name: t.common.footer.investors, url: homeLink(lang, "investors") },
            ...(_CONTACT_EMAIL
                ? [{ name: t.common.footer.contact, url: `mailto:${_CONTACT_EMAIL}` }]
                : []
            ),
            ...(_PRIVACY_URL
                ? [{ name: t.common.footer.privacy, url: _PRIVACY_URL }]
                : []
            ),
        ],
    },
]
