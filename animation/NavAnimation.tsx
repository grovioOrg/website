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
                group/nav fixed top-0 inset-x-0 z-50
                flex justify-center ${className}
            `}
        >
            <motion.div
                className="
                    absolute inset-0 bg-white/85 backdrop-blur-md
                    border-b border-grey-100
                "
                initial={false}
                animate={{ opacity: showBg ? 1 : 0 }}
                transition={{ duration: 0.25 }}
            />

            {children}
        </motion.header>
    )
}
