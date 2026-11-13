export const LOCALES = ["en", "de", "de-at", "it", "fr", "hu"] as const

export type ILocale = typeof LOCALES[number]

export const DEFAULT_LOCALE: ILocale = "en"

export const LOCALE_NAMES: Record<ILocale, string> = {
    en: "English",
    de: "Deutsch",
    "de-at": "Deutsch (Österreich)",
    it: "Italiano",
    fr: "Français",
    hu: "Magyar",
}

export const LOCALE_SHORT: Record<ILocale, string> = {
    en: "EN",
    de: "DE",
    "de-at": "AT",
    it: "IT",
    fr: "FR",
    hu: "HU",
}

/** BCP 47 tags for `<html lang>` and hreflang. */
export const HTML_LANG: Record<ILocale, string> = {
    en: "en",
    de: "de-DE",
    "de-at": "de-AT",
    it: "it-IT",
    fr: "fr-FR",
    hu: "hu-HU",
}

export const hasLocale = (value: string): value is ILocale =>
    (LOCALES as readonly string[]).includes(value)

/** Prefix an in-site path with the locale. Hash-only links stay on the current page. */
export const localePath = (lang: ILocale, path = "") =>
    path.startsWith("#")
        ? path
        : `/${lang}${path === "/" ? "" : path}`

/** Same path in another locale, for the language switcher. */
export const swapLocale = (pathname: string, lang: ILocale) => {
    const [, first, ...rest] = pathname.split("/")
    const tail = hasLocale(first ?? "") ? rest : [first, ...rest].filter(Boolean)
    return `/${[lang, ...tail].join("/")}`.replace(/\/$/, "")
}

export const formatText = (
    template: string,
    values: Record<string, string | number>
) =>
    template.replace(/\{(\w+)\}/g, (match, key) =>
        key in values ? String(values[key]) : match
    )
