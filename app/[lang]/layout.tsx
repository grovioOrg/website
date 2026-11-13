// #region imports
import "../globals.css"
import type { Metadata, Viewport } from "next"
import { notFound } from "next/navigation"
import {
    Bricolage_Grotesque,
    Inter
} from "next/font/google"

import {
    BetaProvider,
    DictionaryProvider,
    MotionProvider,
    PortalProvider
} from "@/context"

import {
    getDictionary,
    hasLocale,
    HTML_LANG,
    LOCALES
} from "@/dictionaries"

import { _ORIGIN_URL } from "@/constants"
import { EuStamp } from "@/components/Navigation"
import { alternates } from "@/lib/common/seo"
// #endregion

export const generateStaticParams = () =>
    LOCALES.map(lang => ({ lang }))

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ lang: string }>
}): Promise<Metadata> => {
    const { lang } = await params
    if (!hasLocale(lang))
        return {}

    const t = await getDictionary(lang)

    return {
        metadataBase: new URL(_ORIGIN_URL),
        title: {
            default: t.home.meta.title,
            template: `%s · ${t.common.brand}`,
        },
        description: t.home.meta.description,
        alternates: alternates(lang, ""),
        icons: {
            icon: "/favicon.ico",
            shortcut: "/logo128.png",
            apple: "/logo512.png",
        },
    }
}

export const viewport: Viewport = {
    themeColor: "#FFCC00",
}

const inter = Inter({
    subsets: ["latin", "latin-ext"],
    variable: "--font-inter",
})

const bricolage = Bricolage_Grotesque({
    subsets: ["latin", "latin-ext"],
    variable: "--font-bricolage",
})

const RootLayout = async ({
    children,
    params,
}: Readonly<{
    children: React.ReactNode
    params: Promise<{ lang: string }>
}>) => {
    const { lang } = await params
    if (!hasLocale(lang))
        notFound()

    const t = await getDictionary(lang)

    return (
        <html
            lang={HTML_LANG[lang]}
            className={`${inter.variable} ${bricolage.variable}`}
        >
            <body className="
                antialiased min-h-screen overflow-x-clip
                font-main text-ink bg-white
            ">
                <MotionProvider>
                    <PortalProvider>
                        <DictionaryProvider value={{ lang, common: t.common, beta: t.beta }}>
                            <BetaProvider>
                                {children}
                                <EuStamp />
                            </BetaProvider>
                        </DictionaryProvider>
                    </PortalProvider>
                </MotionProvider>
            </body>
        </html>
    )
}

export default RootLayout
