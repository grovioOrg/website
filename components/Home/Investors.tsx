"use client"

// #region imports
import { motion } from "framer-motion"

import { Arrow } from "@/icons"
import { _INVESTOR_EMAIL } from "@/constants"
import type { IDictionary } from "@/dictionaries"

import { EuFlag } from "@/components/Navigation/EuStamp"
// #endregion

const ease = [0.22, 1, 0.36, 1] as const

export const Investors = ({
    t,
}: {
    t: IDictionary["home"]["investors"]
}) => (
    <section id="investors" className="relative bg-paper pt-32 py-6 max-mobile:pb-4">
        <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -15% 0px" }}
                transition={{ duration: 1.1, ease }}
                className="
                    relative rounded-[2.5rem] bg-[var(--color-eu-blue)] text-white
                    px-10 py-28 text-center overflow-hidden
                    max-mobile:px-6 max-mobile:py-16 max-mobile:rounded-3xl
                "
            >
                <div className="relative flex flex-col items-center gap-7">
                    <EuFlag size={128} />
                    <h2 className="
                        font-display font-semibold
                        text-[clamp(2.4rem,5.5vw,4.8rem)] leading-[0.95] tracking-[-0.045em]
                        max-w-[15ch]
                    ">
                        {t.title}
                    </h2>
                    <p className="text-lg text-white/75 max-w-md max-mobile:text-base">
                        {t.body}
                    </p>
                    <a
                        href={`mailto:${_INVESTOR_EMAIL}?subject=${encodeURIComponent(t.briefSubject)}`}
                        className="
                            group inline-flex items-center gap-2 rounded-full px-7 py-3.5
                            bg-yellow-100 text-ink font-medium whitespace-nowrap
                            shadow-[inset_0_-2px_0_rgb(10_10_10/0.12)]
                            hover:bg-yellow-200 active:scale-97 smooth
                            focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white
                        "
                    >
                        {t.cta}
                        <Arrow size={15} className="smooth group-hover:translate-x-0.5" />
                    </a>
                </div>
            </motion.div>
        </div>
    </section>
)
