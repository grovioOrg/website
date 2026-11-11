"use client"

// #region imports
import {
    ReactNode,
    useEffect,
    useRef,
    useState
} from "react"

import { cn } from "@/utils"
// #endregion

export interface IScaledFrameProps {
    /** Width the content is designed at. It scales down, never up. */
    width: number
    height: number
    children: ReactNode
    className?: string
}

const ScaledFrame = ({
    width,
    height,
    children,
    className = "",
}: IScaledFrameProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [scale, setScale] = useState(1)

    useEffect(() => {
        const el = ref.current
        if (!el)
            return

        const observer = new ResizeObserver(([entry]) =>
            setScale(Math.min(1, entry.contentRect.width / width))
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [width])

    return (
        <div
            ref={ref}
            className={cn("relative w-full", className)}
            style={{ height: height * scale }}
        >
            <div
                className="absolute top-0 left-1/2 origin-top"
                style={{
                    width,
                    height,
                    transform: `translateX(-50%) scale(${scale})`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ScaledFrame
