"use server"

// #region imports
import { _BETA_URL } from "@/constants"

import {
    _POST,
    IResponse
} from "@/lib/api/utils"

import {
    IBetaRegistration,
    serializeBeta
} from "@/lib/types"
// #endregion

export interface IBetaReceipt {
    duplicate: boolean
}

export const registerBeta = async (
    beta: IBetaRegistration
): Promise<IResponse<IBetaReceipt>> => {
    if (!_BETA_URL) {
        console.error(
            "Beta registration is not configured: set NEXT_PUBLIC_API_CORE_BASE_URL."
        )

        return {
            success: false,
            error: "Beta registration isn't open on this site yet. Please try again soon.",
        }
    }

    const response = await _POST<unknown>(
        _BETA_URL,
        undefined,
        {
            body: JSON.stringify(serializeBeta(beta)),
        }
    )

    if (response.success || response.status === 409)
        return {
            success: true,
            data: { duplicate: response.status === 409 },
        }

    return {
        success: false,
        error: response.error,
    }
}
