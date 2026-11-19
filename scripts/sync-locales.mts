/**
 * Align locale dictionaries with English: same keys as `en`, keep existing translations where present.
 * Run: npx tsx scripts/sync-locales.mts
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

import { en } from "../dictionaries/en/index.ts"
import { de } from "../dictionaries/de/index.ts"
import { fr } from "../dictionaries/fr/index.ts"
import { hu } from "../dictionaries/hu/index.ts"
import { it } from "../dictionaries/it/index.ts"

const MODULES = ["common", "beta", "home", "agents", "pricing", "industries"] as const

const LOCALES: Record<string, typeof de> = { de, fr, hu, it }

const mergeWithEn = (enVal: unknown, locVal: unknown): unknown => {
    if (typeof enVal === "string") {
        return typeof locVal === "string" ? locVal : enVal
    }
    if (Array.isArray(enVal)) {
        const locArr = Array.isArray(locVal) ? locVal : []
        return enVal.map((item, i) => mergeWithEn(item, locArr[i]))
    }
    if (enVal !== null && typeof enVal === "object") {
        const out: Record<string, unknown> = {}
        const locObj =
            locVal !== null && typeof locVal === "object" && !Array.isArray(locVal)
                ? (locVal as Record<string, unknown>)
                : {}
        for (const [key, value] of Object.entries(enVal as Record<string, unknown>)) {
            out[key] = mergeWithEn(value, locObj[key])
        }
        return out
    }
    return enVal
}

const formatModule = (name: string, data: unknown) =>
    `export const ${name} = ${JSON.stringify(data, null, 4)}\n`

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)))

for (const [locale, dict] of Object.entries(LOCALES)) {
    for (const mod of MODULES) {
        const merged = mergeWithEn(
            (en as Record<string, unknown>)[mod],
            (dict as Record<string, unknown>)[mod],
        )
        const file = path.join(root, "dictionaries", locale, `${mod}.ts`)
        fs.writeFileSync(file, formatModule(mod, merged))
        console.log(`wrote ${locale}/${mod}.ts`)
    }
}

console.log("done")