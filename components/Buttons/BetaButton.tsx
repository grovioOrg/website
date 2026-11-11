"use client"

// #region imports
import {
    Button,
    type ButtonProps
} from "@/base"

import { Arrow } from "@/icons"
import { useBeta } from "@/context"
import { cn } from "@/utils"
// #endregion

export const BetaButton = ({
    children = "Join the Beta",
    arrow = true,
    className = "",
    ...props
}: Omit<ButtonProps, "children" | "onClick"> & {
    children?: React.ReactNode
    arrow?: boolean
}) => {
    const { openBeta } = useBeta()

    return (
        <Button
            aria-haspopup="dialog"
            onClick={openBeta}
            endIcon={arrow
                ? <Arrow size={15} className="group-hover:translate-x-0.5" />
                : undefined
            }
            className={cn("group", className)}
            {...props}
        >
            {children}
        </Button>
    )
}
