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
import { useDictionary } from "@/context"
import { cn } from "@/utils"

import {
    APP_NAV,
    AppWindow,
    Glyph,
    IGlyph,
} from "@/components/Mockups"

import { IPlatformScreen, PLATFORM_SCREENS } from "./PlatformScreens"
import type { IDictionary } from "@/dictionaries"

import { SectionHeading } from "./SectionHeading"
import { SlackScreen } from "./SlackScreen"
// #endregion

const DESKTOP_QUERY = "(min-width: 1030px)"

/** Match `Hero` board frame so the demo renders at the same visual scale. */
const FRAME_W = 1200
const FRAME_H = 720

type ITab = IPlatformScreen | "slack"

const TABS: { id: ITab, glyph: IGlyph }[] = [
    ...APP_NAV.filter((item): item is { id: IPlatformScreen, glyph: IGlyph } => item.id !== "account"),
    { id: "slack", glyph: "chat" },
]

const AppScreen = ({
    id,
    t,
    app,
}: {
    id: IPlatformScreen
    t: IDictionary["home"]["platform"]
    app: IDictionary["common"]["mockup"]
}) => {
    const Screen = PLATFORM_SCREENS[id]

    return (
        <AppWindow
            t={app}
            active={id}
            title={`Northwind · ${app.nav[id]}`}
            className="w-[1200px] h-[720px]"
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={id}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
                    className="flex-1 min-h-0 overflow-hidden"
                >
                    <Screen t={t.mockup} app={app} />
                </motion.div>
            </AnimatePresence>
        </AppWindow>
    )
}

export const Platform = ({
    t,
}: {
    t: IDictionary["home"]["platform"]
}) => {
    const { common } = useDictionary()
    const app = common.mockup
    const DESCRIPTIONS: Record<ITab, string> = t.screens
    const label = (id: ITab) => id === "slack" ? "Slack" : app.nav[id]
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

        const index = Math.min(TABS.length - 1, Math.floor(value * TABS.length))
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
        window.scrollTo({ top: start + (end - start) * ((index + 0.5) / TABS.length) })
    }

    const screen = TABS[active]

    return (
        <section id="platform" className="relative bg-white flex flex-col items-center w-full">
            <div className="mx-auto w-full max-w-7xl px-6 pt-24 max-mobile:px-4 max-mobile:pt-16">
                <SectionHeading
                    align="center"
                    title={t.title}
                />
            </div>

            <div
                ref={track}
                className="relative mt-14 w-full pb-24 tablet:h-[250vh] max-mobile:mt-10 max-mobile:pb-16"
            >
                <div
                    aria-hidden
                    className="
                        pointer-events-none absolute inset-0 dot-grid
                        mask-[radial-gradient(ellipse_at_center,black_18%,transparent_72%)]
                    "
                />

                <div className="tablet:sticky tablet:top-[10vh] relative">
                    <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-8 px-6 max-mobile:px-4">
                        <div
                            role="tablist"
                            aria-label={t.tablist}
                            className="
                                flex w-full items-center justify-center-safe gap-2 overflow-x-auto p-1 no-scrollbar
                                max-mobile:-mx-4 max-mobile:w-[calc(100%+2rem)] max-mobile:px-4
                            "
                        >
                            {TABS.map((item, index) => {
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
                                            "flex shrink-0 cursor-pointer items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 outline-none smooth",
                                            "focus-visible:ring-2 focus-visible:ring-ink",
                                            "text-sm",
                                            selected
                                                ? "bg-ink text-white font-semibold"
                                                : "font-medium text-grey-300 ring-1 ring-grey-100 hover:text-ink hover:ring-grey-150"
                                        )}
                                    >
                                        <Glyph name={item.glyph} size={16} />
                                        {label(item.id)}
                                    </button>
                                )
                            })}
                        </div>

                        <div id="platform-screen" role="tabpanel" aria-live="polite" className="w-full">
                            <ScaledFrame width={FRAME_W} height={FRAME_H}>
                                {screen.id === "slack" ? (
                                    <SlackScreen t={t.slack} width={FRAME_W} height={FRAME_H} />
                                ) : (
                                    <AppScreen id={screen.id} t={t} app={app} />
                                )}
                            </ScaledFrame>
                        </div>

                        <AnimatePresence mode="wait" initial={false}>
                            <motion.p
                                key={screen.id}
                                initial={{ opacity: 0, y: 6 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="text-sm text-grey-300 leading-relaxed max-w-3xl text-center min-h-[1.75rem]"
                            >
                                {DESCRIPTIONS[screen.id]}
                            </motion.p>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
