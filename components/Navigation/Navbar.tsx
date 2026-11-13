// #region imports
import { Dropdown } from "@/base"
import { getNavLinks } from "@/data"
import { NavAnimation } from "@/animation"
import { BetaButton } from "@/components/Buttons"

import {
    localePath,
    type IDictionary,
    type ILocale
} from "@/dictionaries"

import { Wordmark } from "./Wordmark"
import { MobileMenu } from "./MobileMenu"
import { LanguageSwitcher } from "./LanguageSwitcher"

import {
    agentMenu,
    industryMenu
} from "./menus"
// #endregion

const linkClass = `
    px-3 py-1.5 rounded-full text-sm font-medium
    text-grey-300 hover:text-ink hover:bg-grey-50 smooth
`

export const Navbar = ({
    lang,
    t,
}: {
    lang: ILocale
    t: IDictionary
}) => {
    const links = getNavLinks(lang, t.common.nav)
    const agents = agentMenu(lang, t)
    const industries = industryMenu(lang, t)

    return (
        <NavAnimation>
            <div className="
                relative w-full max-w-7xl flex items-center
                justify-between gap-6 px-6 h-16
                max-mobile:px-4
            ">
                <a
                    href={localePath(lang, "/")}
                    aria-label={t.common.nav.home}
                    className="rounded-full"
                >
                    <Wordmark size={30} />
                </a>

                <nav
                    aria-label={t.common.nav.primary}
                    className="flex items-center gap-1 max-tablet:hidden"
                >
                    <Dropdown
                        label={t.common.nav.agents}
                        columns={agents}
                        panelClassName="w-[640px]"
                    />
                    <Dropdown
                        label={t.common.nav.industries}
                        columns={industries}
                        panelClassName="w-[600px]"
                    />
                    {links.map(({ name, url }) => (
                        <a
                            key={url}
                            href={url}
                            className={linkClass}
                        >
                            {name}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <div className="max-tablet:hidden">
                        <LanguageSwitcher />
                    </div>
                    <BetaButton
                        size="sm"
                        className="max-mobile:hidden"
                    />
                    <MobileMenu
                        links={links}
                        groups={[
                            { title: t.common.nav.agents, columns: agents },
                            { title: t.common.nav.industries, columns: industries },
                        ]}
                    />
                </div>
            </div>
        </NavAnimation>
    )
}
