"use client"

// #region imports
import { motion } from "framer-motion"

import { BetaButton } from "@/components/Buttons"
import {
    AgentAvatar,
    CursorField,
    IDriftingCursor
} from "@/components/Mascots"
// #endregion

const DraftCard = () => (
    <span className="flex items-center gap-2 rounded-xl bg-white pl-2 pr-3 py-2 shadow-card ring-1 ring-ink/5 whitespace-nowrap">
        <AgentAvatar agent="writer" size={22} ring={false} />
        <span className="flex flex-col text-left leading-tight">
            <span className="text-xs font-semibold text-ink">LinkedIn post</span>
            <span className="text-[11px] text-grey-300">Ready for review</span>
        </span>
    </span>
)

const CURSORS: IDriftingCursor[] = [
    {
        by: "writer",
        path: [[7, 22], [13, 34], [9, 50], [5, 36]],
        duration: 14,
        carry: <DraftCard />,
        className: "max-tablet:hidden",
    },
    {
        by: "video",
        path: [[84, 14], [79, 28], [88, 40], [83, 24]],
        duration: 13,
        delay: 1.5,
        className: "max-tablet:hidden",
    },
    {
        by: "researcher",
        path: [[52, 80], [52, 80], [60, 68], [44, 90]],
        duration: 10,
        delay: 0.5,
    },
    {
        by: "signal",
        path: [[16, 80], [26, 88], [12, 70]],
        duration: 12,
        delay: 3,
        className: "max-tablet:hidden",
    },
]

export const FinalCta = () => (
    <section className="relative bg-white px-6 pt-24 pb-28 max-mobile:px-4 max-mobile:pb-20">
        <CursorField
            cursors={CURSORS}
            className="
                max-w-7xl mx-auto rounded-[2.5rem] bg-yellow-100
                px-10 py-28 text-center overflow-hidden
                max-mobile:px-6 max-mobile:pt-16 max-mobile:pb-24 max-mobile:rounded-3xl
            "
        >
            <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />

            <div className="relative flex flex-col items-center gap-7">
                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
                    className="
                        font-display font-semibold text-ink
                        text-[clamp(2.6rem,7vw,6rem)] leading-[0.95] tracking-[-0.045em]
                        max-w-[13ch]
                    "
                >
                    Your next team is already here.
                </motion.h2>
                <p className="text-lg text-ink/70 max-w-md max-mobile:text-base">
                    We&apos;re onboarding a small group of teams for the private beta. Tell us about yours.
                </p>
                <BetaButton size="lg" />
            </div>
        </CursorField>
    </section>
)
