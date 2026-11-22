"use client"

// #region imports
import { MouseEvent } from "react"
import { usePathname } from "next/navigation"

import { Dropdown } from "@/base"
import { useDictionary } from "@/context"
import { cn } from "@/utils"
import { Glyph } from "@/components/Mockups/Glyph"

import {
    HTML_LANG,
    LOCALE_NAMES,
    LOCALE_SHORT,
    LOCALES,
    swapLocale,
    type ILocale,
} from "@/dictionaries/locales"
// #endregion

/**
 * Locale changes remount the `[lang]` root layout (html/body + Lenis).
 * Soft App Router transitions race React against those DOM mutations and
 * throw `insertBefore` NotFoundError in production — force a full load.
 */
const hardNavigate = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.location.assign(href)
}

export const LanguageSwitcher = ({
    inline = false,
}: {
    /** A row of language chips instead of a dropdown, for the mobile menu. */
    inline?: boolean
}) => {
    const pathname = usePathname()
    const { lang, common } = useDictionary()

    const hrefFor = (locale: ILocale) => swapLocale(pathname, locale)

    if (inline)
        return (
            <nav aria-label={common.nav.language} className="flex flex-wrap gap-1">
                {LOCALES.map(locale => (
                    <a
                        key={locale}
                        href={hrefFor(locale)}
                        hrefLang={HTML_LANG[locale]}
                        aria-current={locale === lang ? "true" : undefined}
                        title={LOCALE_NAMES[locale]}
                        onClick={hardNavigate(hrefFor(locale))}
                        className={cn(
                            "rounded-full px-2.5 py-1 text-xs font-semibold smooth",
                            locale === lang ? "bg-ink text-white" : "text-grey-300 ring-1 ring-grey-100 hover:text-ink"
                        )}
                    >
                        {LOCALE_SHORT[locale]}
                    </a>
                ))}
            </nav>
        )

    return (
        <Dropdown
            align="right"
            label={
                <span className="inline-flex items-center gap-1.5">
                    <Glyph name="globe" size={15} />
                    <span aria-hidden>{LOCALE_SHORT[lang]}</span>
                    <span className="sr-only">{common.nav.language}: {LOCALE_NAMES[lang]}</span>
                </span>
            }
            panelClassName="p-2"
            columns={[{
                items: LOCALES.map(locale => ({
                    href: hrefFor(locale),
                    onClick: hardNavigate(hrefFor(locale)),
                    title: (
                        <span lang={HTML_LANG[locale]} className={locale === lang ? "font-semibold" : undefined}>
                            {LOCALE_NAMES[locale]}
                        </span>
                    ),
                    icon: (
                        <span className="inline-block w-6 text-[11px] font-semibold text-grey-200">
                            {LOCALE_SHORT[locale]}
                        </span>
                    ),
                })),
            }]}
        />
    )
}
