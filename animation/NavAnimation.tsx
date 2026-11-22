"use client"

// #region imports
import {
    useRef,
    useState
} from "react"

import {
    motion,
    useScroll,
    useMotionValueEvent
} from "framer-motion"
// #endregion

export const NavAnimation = ({
    children,
    className = ""
}: {
    children: React.ReactNode
    className?: string
}) => {
    const [showBg, setShowBg] = useState(false)
    const [visible, setVisible] = useState(true)
    const lastY = useRef(0)
    const { scrollY } = useScroll()

    useMotionValueEvent(scrollY, "change", (current) => {
        const scrollingDown = current > lastY.current

        setShowBg(current > 24)
        setVisible(!scrollingDown || current < 320)

        lastY.current = current
    })

    return (
        <motion.header
            initial={false}
            animate={{ y: visible ? 0 : -96 }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 32,
            }}
            data-scrolled={showBg}
            className={`
                group/nav fixed top-0 left-0 right-[var(--scroll-lock-pad,0px)] z-50 pt-6
                flex justify-center items-center ${className}
            `}
        >
            <motion.div
                className="
                    absolute h-full bg-white/85 backdrop-blur-md rounded-full
                    border border-grey-100 min-w-auto w-[62%] justify-self-center
                "
                initial={false}
                animate={{ opacity: showBg ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            />

            {children}
        </motion.header>
    )
}
