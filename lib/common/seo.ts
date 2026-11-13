// #region imports
import type { Metadata } from "next"

import {
    DEFAULT_LOCALE,
    HTML_LANG,
    LOCALES,
    localePath,
    type ILocale
} from "@/dictionaries/locales"
// #endregion

/** Canonical URL plus hreflang links for a path that exists in every locale. */
export const alternates = (
    lang: ILocale,
    path: string
): Metadata["alternates"] => ({
    canonical: localePath(lang, path || "/"),
    languages: {
        ...Object.fromEntries(
            LOCALES.map(locale => [HTML_LANG[locale], localePath(locale, path || "/")])
        ),
        "x-default": localePath(DEFAULT_LOCALE, path || "/"),
    },
})
