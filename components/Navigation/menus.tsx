// #region imports
import type { IDropdownColumn } from "@/base"
import type { IDictionary, ILocale } from "@/dictionaries"

import {
    AGENT_META,
    AGENT_PAGES,
    INDUSTRIES,
    agentLink,
    industryLink
} from "@/data"

import { AgentAvatar } from "@/components/Mascots"
import { Glyph } from "@/components/Mockups/Glyph"
import { Pill } from "@/components/Mockups/Pill"
// #endregion

const status = (agent: string) =>
    AGENT_META.find(item => item.id === agent)?.status

export const agentMenu = (lang: ILocale, t: IDictionary): IDropdownColumn[] => {
    const item = ({ page, agent }: typeof AGENT_PAGES[number]) => ({
        href: agentLink(lang, page),
        title: t.agents.list[agent].role,
        description: t.agents.menu[page],
        icon: <AgentAvatar agent={agent} size={32} ring={false} />,
    })

    return [
        {
            title: t.common.nav.agentsAvailable,
            items: AGENT_PAGES.filter(({ agent }) => status(agent) === "available").map(item),
        },
        {
            title: t.common.nav.agentsUpcoming,
            items: AGENT_PAGES.filter(({ agent }) => status(agent) === "upcoming").map(entry => ({
                ...item(entry),
                badge: <Pill tone="yellow">{t.common.comingSoon}</Pill>,
            })),
        },
    ]
}

export const industryMenu = (lang: ILocale, t: IDictionary): IDropdownColumn[] => [
    {
        title: t.common.nav.industriesTitle,
        split: 2,
        items: INDUSTRIES.map(({ id, glyph }) => ({
            href: industryLink(lang, id),
            title: t.industries.list[id].name,
            description: t.industries.list[id].short,
            icon: <Glyph name={glyph} size={17} />,
        })),
    },
]
