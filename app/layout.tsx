// #region imports
import "./globals.css"
import type { Metadata, Viewport } from "next"
import {
    Bricolage_Grotesque,
    Inter
} from "next/font/google"

import {
    BetaProvider,
    MotionProvider,
    PortalProvider
} from "@/context"
// #endregion

export const metadata: Metadata = {
    title: "Grovio",
    description:
        "AI workforce platform. Hire specialised AI contractors for your sales and marketing operations, manage their work in one place, and approve what ships. Built for the EU and GDPR compliant.",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/logo128.png",
        apple: "/logo512.png",
    },
}

export const viewport: Viewport = {
    themeColor: "#FFCC00",
}

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

const bricolage = Bricolage_Grotesque({
    subsets: ["latin"],
    variable: "--font-bricolage",
})

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode,
}>) => (
    <html
        lang="en"
        className={`${inter.variable} ${bricolage.variable}`}
    >
        <body className="
            antialiased min-h-screen overflow-x-clip
            font-main text-ink bg-white
        ">
            <MotionProvider>
                <PortalProvider>
                    <BetaProvider>
                        {children}
                    </BetaProvider>
                </PortalProvider>
            </MotionProvider>
        </body>
    </html>
)

export default RootLayout
