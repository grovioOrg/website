"use client"

// #region imports
import {
    Button,
    type ButtonProps
} from "@/base"

import { Arrow } from "@/icons"
import { useBeta, useDictionary } from "@/context"
import { IBetaInterest } from "@/lib/types/beta"
import { cn } from "@/utils"
// #endregion

export const BetaButton = ({
    children,
    arrow = true,
    interest,
    className = "",
    ...props
}: Omit<ButtonProps, "children" | "onClick"> & {
    children?: React.ReactNode
    arrow?: boolean
    interest?: IBetaInterest
}) => {
    const { openBeta } = useBeta()
    const { common } = useDictionary()

    return (
        <Button
            aria-haspopup="dialog"
            onClick={() => openBeta(interest)}
            endIcon={arrow
                ? <Arrow size={15} className="group-hover:translate-x-0.5" />
                : undefined
            }
            className={cn("group", className)}
            {...props}
        >
            {children ?? common.joinBeta}
        </Button>
    )
}
