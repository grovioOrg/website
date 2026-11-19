"use client"

// #region imports
import {
    ReactNode,
    useEffect,
    useLayoutEffect,
    useRef,
    useState
} from "react"

import { cn } from "@/utils"
// #endregion

export interface IScaledFrameProps {
    /** Width the content is designed at. It scales down, never up. */
    width: number
    height: number
    /** Size the frame to its content instead of the design height. */
    fit?: boolean
    children: ReactNode
    className?: string
}

const ScaledFrame = ({
    width,
    height,
    fit = false,
    children,
    className = "",
}: IScaledFrameProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const innerRef = useRef<HTMLDivElement | null>(null)
    const [scale, setScale] = useState(1)
    const [contentHeight, setContentHeight] = useState(height)

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

    useLayoutEffect(() => {
        const el = innerRef.current
        if (!fit || !el)
            return

        const measure = () => {
            const next = el.offsetHeight
            setContentHeight(current => current === next ? current : next)
        }
        measure()

        const observer = new ResizeObserver(measure)
        observer.observe(el)
        return () => observer.disconnect()
    }, [fit])

    const layoutHeight = (fit ? contentHeight : height) * scale

    return (
        <div
            ref={ref}
            className={cn("relative w-full", className)}
            style={{ height: layoutHeight }}
        >
            <div
                ref={innerRef}
                className="absolute top-0 left-1/2 origin-top"
                style={{
                    width,
                    height: fit ? undefined : height,
                    transform: `translateX(-50%) scale(${scale})`,
                }}
            >
                {children}
            </div>
        </div>
    )
}

export default ScaledFrame
