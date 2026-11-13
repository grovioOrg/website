"use client"

// #region imports
import { useRef } from "react"

import {
    motion,
    useScroll,
    useTransform,
    useReducedMotion
} from "framer-motion"

import { ScaledFrame } from "@/base"
import { Check } from "@/icons"
import { BetaButton } from "@/components/Buttons"
import { Pill } from "@/components/Mockups"

import { AgentAvatar } from "@/components/Mascots"

import type { IDictionary } from "@/dictionaries"

import { HeroBoard } from "./HeroBoard"
// #endregion

const ease = [0.2, 0.7, 0.2, 1] as const

const rise = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
})

const FloatCard = ({
    children,
    className = "",
    delay = 0,
}: {
    children: React.ReactNode
    className?: string
    delay?: number
}) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay, ease }}
        className={`absolute z-20 max-tablet:hidden ${className}`}
    >
        <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay }}
            className="
                rounded-2xl bg-white p-3 pr-4 text-[13px]
                shadow-lift ring-1 ring-ink/5
            "
        >
            {children}
        </motion.div>
    </motion.div>
)

const FLANKS: {
    agent: "sales" | "seo"
    className: string
    delay: number
}[] = [
    { agent: "sales", className: "left-4 top-20 desktop:left-16", delay: 0.5 },
    { agent: "seo", className: "right-4 top-40 desktop:right-16", delay: 0.7 },
]

export const Hero = ({
    t,
}: {
    t: IDictionary["home"]["hero"]
}) => {
    const ref = useRef<HTMLElement | null>(null)
    const reduced = useReducedMotion()

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    })

    const boardScale = useTransform(scrollYProgress, [0, 0.5], [0.97, 1])
    const boardY = useTransform(scrollYProgress, [0, 1], [0, -60])
    const flankLeftY = useTransform(scrollYProgress, [0, 1], [0, 140])
    const flankRightY = useTransform(scrollYProgress, [0, 1], [0, 90])
    const cardsY = useTransform(scrollYProgress, [0, 1], [0, -140])

    return (
        <section
            id="top"
            ref={ref}
            className="relative pt-32 pb-24 overflow-hidden max-mobile:pt-24"
        >
            <div
                aria-hidden
                className="
                    absolute inset-x-0 top-0 h-[780px] dot-grid
                    mask-[radial-gradient(ellipse_at_top,black_20%,transparent_70%)]
                "
            />

            <div className="relative max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="relative flex flex-col items-center text-center">

                    {FLANKS.map(({ agent, className, delay }, index) => (
                        <motion.div
                            key={agent}
                            style={{ y: reduced ? 0 : index ? flankRightY : flankLeftY }}
                            className={`absolute max-tablet:hidden ${className}`}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{ type: "spring", stiffness: 90, damping: 12, delay }}
                            >
                                <AgentAvatar
                                    agent={agent}
                                    size={112}
                                    ring={false}
                                    live
                                    track
                                    hover
                                    delay={index * 1.3}
                                    title={t.sides[agent]}
                                    className="shadow-card"
                                />
                            </motion.div>
                        </motion.div>
                    ))}

                    <motion.h1
                        {...rise(0.1)}
                        className="
                            font-display font-semibold text-ink mt-10
                            text-[clamp(2.9rem,7.6vw,6.9rem)]
                            leading-[0.94] tracking-[-0.045em]
                            max-w-[12ch]
                        "
                    >
                        {t.titleStart}{" "}
                        <span className="relative inline-block">
                            {t.titleMark}
                            <svg
                                aria-hidden
                                viewBox="0 0 300 30"
                                preserveAspectRatio="none"
                                className="absolute left-[-4%] -bottom-[0.12em] w-[108%] h-[0.3em]"
                            >
                                <motion.path
                                    d="M4 20 C 70 6, 170 4, 296 14"
                                    fill="none"
                                    stroke="var(--color-yellow-100)"
                                    strokeWidth={12}
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.9, delay: 0.9, ease: "easeInOut" }}
                                />
                            </svg>
                        </span>{" "}
                        {t.titleEnd}
                    </motion.h1>

                    <motion.p
                        {...rise(0.3)}
                        className="
                            mt-7 max-w-[40rem] text-lg text-grey-300 leading-relaxed
                            max-mobile:text-base
                        "
                    >
                        {t.body}
                    </motion.p>

                    <motion.div
                        {...rise(0.4)}
                        className="mt-9 flex items-center gap-3 max-mobile:flex-col max-mobile:w-full"
                    >
                        <BetaButton size="lg" className="max-mobile:w-full" />
                        <a
                            href="#walkthrough"
                            className="
                                inline-flex items-center justify-center gap-2 rounded-full
                                px-7 py-3.5 font-medium ring-1 ring-grey-100 bg-white
                                hover:bg-paper hover:ring-grey-150 smooth
                                max-mobile:w-full
                            "
                        >
                            {t.secondary}
                        </a>
                    </motion.div>

                    <motion.p
                        {...rise(0.5)}
                        className="mt-5 inline-flex items-center gap-2 text-sm text-grey-300"
                    >
                        <Check size={14} className="text-success" />
                        {t.eu}
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.1, delay: 0.55, ease }}
                    className="relative mt-20 max-mobile:mt-14"
                >
                    <motion.div style={reduced ? undefined : { scale: boardScale, y: boardY }}>
                        <ScaledFrame width={1200} height={720}>
                            <HeroBoard t={t.board} />
                        </ScaledFrame>
                    </motion.div>

                    <motion.div style={reduced ? undefined : { y: cardsY }} className="absolute inset-0 pointer-events-none">
                        <FloatCard className="-left-10 top-[66%] desktop:-left-24" delay={1.4}>
                            <div className="flex items-center gap-2.5">
                                <AgentAvatar agent="sales" size={30} />
                                <div className="text-left">
                                    <p className="font-semibold">{t.icpTitle}</p>
                                    <p className="text-grey-200 text-xs">{t.icpBody}</p>
                                </div>
                                <span className="ml-2 grid place-items-center size-6 rounded-full bg-success text-white">
                                    <Check size={13} />
                                </span>
                            </div>
                        </FloatCard>

                        <FloatCard className="-right-10 top-[52%] desktop:-right-24" delay={1.8}>
                            <div className="flex flex-col gap-2 text-left w-56">
                                <div className="flex items-center gap-2">
                                    <AgentAvatar agent="signal" size={22} />
                                    <span className="font-semibold">{t.replyTitle}</span>
                                    <Pill tone="green" className="ml-auto">{t.replyPill}</Pill>
                                </div>
                                <p className="text-grey-300 text-xs leading-relaxed">
                                    &ldquo;{t.replyQuote}&rdquo;
                                </p>
                            </div>
                        </FloatCard>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
