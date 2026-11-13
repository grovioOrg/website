// #region imports
import type { en } from "./en"
import type { ILocale } from "./locales"
// #endregion

export * from "./locales"

export type IDictionary = typeof en

const dictionaries: Record<ILocale, () => Promise<IDictionary>> = {
    en: () => import("./en").then(module => module.en),
    de: () => import("./de").then(module => module.de),
    "de-at": () => import("./de-at").then(module => module.deAt),
    it: () => import("./it").then(module => module.it),
    fr: () => import("./fr").then(module => module.fr),
    hu: () => import("./hu").then(module => module.hu),
}

export const getDictionary = (lang: ILocale) =>
    dictionaries[lang]()
