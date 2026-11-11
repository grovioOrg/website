"use client"

// #region imports
import { MotionConfig } from "framer-motion"
// #endregion

export const MotionProvider = ({
    children,
}: {
    children: React.ReactNode
}) => (
    <MotionConfig reducedMotion="user">
        {children}
    </MotionConfig>
)
