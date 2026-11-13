// #region imports
import {
    NextResponse,
    type NextRequest
} from "next/server"

import {
    DEFAULT_LOCALE,
    hasLocale,
    type ILocale
} from "@/dictionaries/locales"
// #endregion

/** Best supported locale from an Accept-Language header, e.g. "de-AT,de;q=0.9,en;q=0.8". */
const preferredLocale = (header: string | null): ILocale => {
    const tags = (header ?? "")
        .split(",")
        .map(part => {
            const [tag, quality] = part.trim().split(";q=")
            return { tag: tag.toLowerCase(), quality: quality ? Number(quality) : 1 }
        })
        .filter(({ tag }) => tag && tag !== "*")
        .sort((a, b) => b.quality - a.quality)

    for (const { tag } of tags) {
        if (hasLocale(tag))
            return tag

        const base = tag.split("-")[0]
        if (hasLocale(base))
            return base
    }

    return DEFAULT_LOCALE
}

export const proxy = (request: NextRequest) => {
    const { pathname } = request.nextUrl
    const first = pathname.split("/")[1] ?? ""

    if (hasLocale(first))
        return

    const url = request.nextUrl.clone()
    url.pathname = `/${preferredLocale(request.headers.get("accept-language"))}${pathname === "/" ? "" : pathname}`

    return NextResponse.redirect(url)
}

export const config = {
    matcher: [
        "/((?!_next|api|favicon.ico|.*\\..*).*)",
    ],
}
