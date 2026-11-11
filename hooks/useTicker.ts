"use client"

// #region imports
import {
    RefObject,
    useEffect,
    useState
} from "react"

import {
    useInView,
    useReducedMotion
} from "framer-motion"
// #endregion

/**
 * Counts up every `interval` ms while `ref` is on screen.
 * Stays at 0 for users who prefer reduced motion.
 */
export const useTicker = (
    ref: RefObject<Element | null>,
    interval: number
) => {
    const [tick, setTick] = useState(0)
    const reduced = useReducedMotion()
    const inView = useInView(ref, { margin: "-15% 0px -15% 0px" })
    const running = inView && !reduced

    useEffect(() => {
        if (!running)
            return

        const id = setInterval(() => setTick(value => value + 1), interval)
        return () => clearInterval(id)
    }, [running, interval])

    return { tick, running, reduced: !!reduced }
}
