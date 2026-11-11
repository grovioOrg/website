// #region imports
import { footerLinks } from "@/data"
import { BetaButton } from "@/components/Buttons"
import {
    CursorField,
    IDriftingCursor
} from "@/components/Mascots"

import { Wordmark } from "./Wordmark"
// #endregion

const CURSORS: IDriftingCursor[] = [
    {
        by: "graphic",
        path: [[8, 18], [37, 70], [37, 70], [28, 12]],
        duration: 11,
        select: { rect: [18.5, 4, 19, 74], from: 0.25, to: 0.55 },
    },
    {
        by: "sales",
        path: [[95, 16], [80, 72], [80, 72], [66, 18]],
        duration: 11,
        delay: 5.5,
        select: { rect: [54, 4, 26, 74], from: 0.25, to: 0.55 },
        className: "max-mobile:hidden",
    },
    {
        by: "seo",
        path: [[48, 30], [58, 12], [44, 50]],
        duration: 15,
        delay: 2,
        className: "max-tablet:hidden",
    },
]

const linkClass = "text-grey-300 hover:text-ink smooth"

export const Footer = () => (
    <footer className="relative bg-paper overflow-hidden">
        <div className="
            relative max-w-7xl mx-auto px-6 pt-20 pb-10
            grid grid-cols-[1.4fr_repeat(3,1fr)] gap-10
            max-tablet:grid-cols-2 max-mobile:grid-cols-1
            max-mobile:px-4
        ">
            <div className="flex flex-col gap-5 max-tablet:col-span-full">
                <Wordmark size={34} />
                <p className="text-grey-300 max-w-xs text-sm leading-relaxed">
                    An AI workforce for sales and marketing. Hire specialised contractors, manage their work, and approve what ships.
                </p>
                <BetaButton size="sm" className="w-fit" />
            </div>

            {footerLinks.map(({ title, urls }) => (
                <nav
                    key={title}
                    aria-label={title}
                    className="flex flex-col gap-3 text-sm"
                >
                    <p className="font-semibold text-ink mb-1">
                        {title}
                    </p>

                    {urls.map(({ name, url }) => (
                        <a
                            key={url}
                            href={url}
                            className={linkClass}
                        >
                            {name}
                        </a>
                    ))}
                </nav>
            ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-6 max-mobile:px-4">
            <CursorField cursors={CURSORS} className="w-fit translate-y-[12%]">
                <p
                    aria-hidden
                    className="
                        font-display font-bold tracking-[-0.06em] leading-[0.78]
                        text-[clamp(5rem,22vw,20rem)] text-ink select-none
                    "
                >
                    GORVIO
                </p>
            </CursorField>
        </div>

        <div className="
            relative bg-ink text-white/60 text-xs
        ">
            <div className="
                max-w-7xl mx-auto px-6 py-5 flex justify-between gap-4
                max-mobile:flex-col max-mobile:px-4
            ">
                <p>© 2026 GORVIO. Currently in private beta.</p>
                <p>Built for the EU · GDPR compliant</p>
            </div>
        </div>
    </footer>
)
