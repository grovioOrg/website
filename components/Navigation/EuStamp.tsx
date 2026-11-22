"use client"

// #region imports
import {
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react"
import {
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll
} from "framer-motion"

import { useDictionary } from "@/context"
import { homeLink } from "@/data/links"
import { cn } from "@/utils"
// #endregion

const star = (cx: number, cy: number, r: number) =>
    Array.from({ length: 10 }, (_, index) => {
        const angle = -Math.PI / 2 + index * Math.PI / 5
        const radius = index % 2 ? r * 0.42 : r
        return `${(cx + Math.cos(angle) * radius).toFixed(2)},${(cy + Math.sin(angle) * radius).toFixed(2)}`
    }).join(" ")

const STARS = Array.from({ length: 12 }, (_, index) => {
    const angle = index * Math.PI / 6
    return star(12 + Math.sin(angle) * 6.6, 12 - Math.cos(angle) * 6.6, 1.5)
})

export const EuFlag = ({
    size = 24,
    className = "",
}: {
    size?: number
    className?: string
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        aria-hidden
        className={cn("shrink-0", className)}
    >
        <circle cx={12} cy={12} r={12} fill="var(--color-eu-blue)" />
        {STARS.map(points => (
            <polygon key={points} points={points} fill="var(--color-yellow-100)" />
        ))}
    </svg>
)


const MOBILE_QUERY = "(max-width: 639px)"
const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export const EuStamp = () => {
    const { lang, common } = useDictionary()
    const reduceMotion = useReducedMotion()
    const { scrollY } = useScroll()
    const labelRef = useRef<HTMLSpanElement | null>(null)
    const pageHeight = useRef(0)
    const [labelWidth, setLabelWidth] = useState(0)
    const [compact, setCompact] = useState(false)
    const [hidden, setHidden] = useState(false)
    const [hovered, setHovered] = useState(false)
    const [focused, setFocused] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [instant, setInstant] = useState(true)

    useLayoutEffect(() => {
        const query = window.matchMedia(MOBILE_QUERY)
        const syncMobile = () => setMobile(query.matches)
        syncMobile()
        query.addEventListener("change", syncMobile)

        const root = document.documentElement
        const syncPage = () => {
            pageHeight.current = root.scrollHeight
        }
        syncPage()
        const pageObserver = new ResizeObserver(syncPage)
        pageObserver.observe(document.body)
        window.addEventListener("resize", syncPage)

        const y = window.scrollY
        setCompact(y > 480)
        setHidden(y + window.innerHeight > root.scrollHeight - 140)

        return () => {
            query.removeEventListener("change", syncMobile)
            pageObserver.disconnect()
            window.removeEventListener("resize", syncPage)
        }
    }, [])

    useLayoutEffect(() => {
        const el = labelRef.current
        if (!el)
            return

        let cancel = false
        const measure = () => {
            if (cancel)
                return
            const next = Math.ceil(el.getBoundingClientRect().width)
            if (next <= 0)
                return
            setLabelWidth(prev => Math.abs(prev - next) <= 1 ? prev : next)
        }
        measure()
        const observer = new ResizeObserver(measure)
        observer.observe(el)
        const frame = requestAnimationFrame(measure)
        document.fonts?.ready.then(measure)

        return () => {
            cancel = true
            cancelAnimationFrame(frame)
            observer.disconnect()
        }
    }, [common.euStamp.label])

    useEffect(() => {
        if (labelWidth > 0)
            setInstant(false)
    }, [labelWidth])

    useMotionValueEvent(scrollY, "change", (current) => {
        const nextCompact = current > 480
        const limit = pageHeight.current
        const nextHidden = limit > 0 && current + window.innerHeight > limit - 140
        setCompact(value => value === nextCompact ? value : nextCompact)
        setHidden(value => value === nextHidden ? value : nextHidden)
    })

    const expanded = !mobile && (!compact || hovered || focused)
    const collapse = instant || reduceMotion
        ? { duration: 0 }
        : { duration: 0.38, ease: EASE }

    return (
        <motion.a
            href={homeLink(lang, "eu")}
            aria-label={common.euStamp.aria}
            initial={false}
            animate={{ opacity: hidden ? 0 : 1, y: hidden ? 12 : 0 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.28, ease: EASE }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            onFocus={(event) => {
                if (event.currentTarget.matches(":focus-visible"))
                    setFocused(true)
            }}
            onBlur={() => setFocused(false)}
            data-compact={!expanded}
            className={cn(
                "fixed bottom-5 z-40 flex items-center rounded-full p-1.5",
                "right-[calc(1.25rem+var(--scroll-lock-pad,0px))]",
                "bg-white shadow-card ring-1 ring-ink/8",
                "outline-none focus-visible:ring-2 focus-visible:ring-ink",
                "max-mobile:bottom-3 max-mobile:right-[calc(0.75rem+var(--scroll-lock-pad,0px))]",
                hidden && "pointer-events-none"
            )}
        >
            <EuFlag size={28} />
            <span aria-hidden className="pointer-events-none absolute size-0 overflow-hidden">
                <span
                    ref={labelRef}
                    className="block w-max whitespace-nowrap pl-2.5 pr-3 text-xs font-semibold"
                >
                    {common.euStamp.label}
                </span>
            </span>
            <motion.span
                aria-hidden
                initial={false}
                animate={{ width: expanded ? labelWidth : 0 }}
                transition={collapse}
                className="block h-7 min-w-0 overflow-hidden"
            >
                <span className="flex h-7 w-max items-center whitespace-nowrap pl-2.5 pr-3 text-xs font-semibold text-ink">
                    {common.euStamp.label}
                </span>
            </motion.span>
        </motion.a>
    )
}
