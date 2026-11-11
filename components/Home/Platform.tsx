"use client"

// #region imports
import {
    useEffect,
    useRef,
    useState
} from "react"

import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll
} from "framer-motion"

import { ScaledFrame } from "@/base"
import { cn } from "@/utils"

import {
    APP_NAV,
    AppWindow,
    Glyph,
    IAppScreen
} from "@/components/Mockups"

import { PLATFORM_SCREENS } from "./PlatformScreens"
import { SectionHeading } from "./SectionHeading"
// #endregion

const DESCRIPTIONS: Record<IAppScreen, string> = {
    playbooks: "Save what works as a play. Run it again with one click.",
    campaigns: "Each campaign gets its own workforce, goals and approvals.",
    epic: "One board for every task your agents and your team are working on.",
    seo: "Keywords, page health and CTA ideas, refreshed by your SEO agent.",
    marketing: "A content calendar your creators fill and you sign off.",
    playground: "Try a prompt with any agent before you brief them for real.",
    account: "Hire, pause and manage contracts, people and approval rules.",
}

const DESKTOP_QUERY = "(min-width: 1030px)"

export const Platform = () => {
    const track = useRef<HTMLDivElement | null>(null)
    const [active, setActive] = useState(0)
    const [pinned, setPinned] = useState(false)

    const { scrollYProgress } = useScroll({
        target: track,
        offset: ["start 20%", "end 80%"],
    })

    useEffect(() => {
        const query = window.matchMedia(DESKTOP_QUERY)
        const sync = () => setPinned(query.matches)

        sync()
        query.addEventListener("change", sync)
        return () => query.removeEventListener("change", sync)
    }, [])

    useMotionValueEvent(scrollYProgress, "change", (value) => {
        if (!pinned)
            return

        const index = Math.min(APP_NAV.length - 1, Math.floor(value * APP_NAV.length))
        setActive(index)
    })

    const select = (index: number) => {
        const el = track.current
        if (!pinned || !el) {
            setActive(index)
            return
        }

        const top = el.getBoundingClientRect().top + window.scrollY
        const start = top - window.innerHeight * 0.2
        const end = top + el.offsetHeight - window.innerHeight * 0.8
        window.scrollTo({ top: start + (end - start) * ((index + 0.5) / APP_NAV.length) })
    }

    const screen = APP_NAV[active]
    const Screen = PLATFORM_SCREENS[screen.id]

    return (
        <section id="platform" className="relative bg-white">
            <div className="max-w-7xl mx-auto px-6 pt-28 max-mobile:px-4 max-mobile:pt-20">
                <SectionHeading
                    title={<>One workspace for the whole workforce.</>}
                    description="Brief agents, review their work and watch campaigns move, all in the same place your team already plans."
                />
            </div>

            <div
                ref={track}
                className="relative mt-14 pb-28 tablet:h-[250vh] max-mobile:mt-10 max-mobile:pb-20"
            >
                <div className="tablet:sticky tablet:top-[20vh]">
                    <div className="
                        w-full max-w-7xl mx-auto px-6 max-mobile:px-4
                        grid grid-cols-[300px_1fr] gap-10 items-center
                        max-tablet:grid-cols-1 max-tablet:gap-6
                    ">
                        <div
                            role="tablist"
                            aria-label="Platform areas"
                            className="
                                flex flex-col gap-1
                                max-tablet:flex-row max-tablet:overflow-x-auto
                                max-tablet:-mx-6 max-tablet:px-6 no-scrollbar
                            "
                        >
                            {APP_NAV.map((item, index) => {
                                const selected = index === active

                                return (
                                    <button
                                        key={item.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={selected}
                                        aria-controls="platform-screen"
                                        onClick={() => select(index)}
                                        className={cn(
                                            "relative text-left rounded-2xl px-4 py-3 cursor-pointer smooth outline-none",
                                            "focus-visible:ring-2 focus-visible:ring-ink",
                                            "max-tablet:shrink-0 max-tablet:rounded-full max-tablet:py-2",
                                            selected
                                                ? "max-tablet:bg-ink max-tablet:text-white"
                                                : "max-tablet:ring-1 max-tablet:ring-grey-100"
                                        )}
                                    >
                                        <span className={cn(
                                            "flex items-center gap-2.5 text-[15px] smooth max-tablet:text-sm",
                                            selected ? "font-semibold" : "font-medium text-grey-200 hover:text-grey-300"
                                        )}>
                                            <Glyph name={item.glyph} size={17} />
                                            {item.name}
                                        </span>
                                        <AnimatePresence initial={false}>
                                            {selected && (
                                                <motion.span
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="block overflow-hidden text-sm text-grey-300 leading-relaxed pl-[27px] max-tablet:hidden"
                                                >
                                                    <span className="block pt-1.5">{DESCRIPTIONS[item.id]}</span>
                                                </motion.span>
                                            )}
                                        </AnimatePresence>
                                    </button>
                                )
                            })}
                        </div>

                        <div id="platform-screen" role="tabpanel" aria-live="polite">
                            <p className="tablet:hidden text-sm text-grey-300 mb-4">
                                {DESCRIPTIONS[screen.id]}
                            </p>
                            <ScaledFrame width={1100} height={660}>
                                <AppWindow
                                    active={screen.id}
                                    title={`Northwind · ${screen.name}`}
                                    className="h-[660px]"
                                >
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={screen.id}
                                            initial={{ opacity: 0, y: 14 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                                            className="flex-1 min-h-0 overflow-hidden"
                                        >
                                            <Screen />
                                        </motion.div>
                                    </AnimatePresence>
                                </AppWindow>
                            </ScaledFrame>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
