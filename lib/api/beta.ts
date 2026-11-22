"use server"

// #region imports
import {
    isMailConfigured,
    sendBetaRegistrationEmail,
} from "@/lib/mail"

import type { IResponse } from "@/lib/api/utils"

import {
    IBetaRegistration,
} from "@/lib/types"
// #endregion

export interface IBetaReceipt {
    duplicate: boolean
}

export const registerBeta = async (
    beta: IBetaRegistration
): Promise<IResponse<IBetaReceipt>> => {
    if (!isMailConfigured()) {
        console.error(
            "Beta registration is not configured: set GMAIL_USER and GMAIL_APP_PASSWORD."
        )

        return {
            success: false,
            error: "Beta registration isn't open on this site yet. Please try again soon.",
        }
    }

    try {
        await sendBetaRegistrationEmail(beta)
        return {
            success: true,
            data: { duplicate: false },
        }
    }
    catch (error) {
        console.error("Beta registration email failed:", error)
        return {
            success: false,
            error: "Failed to send registration email.",
        }
    }
}
