"use server"

// #region imports
import {
    IFormResponse,
    parseForm,
} from "@/lib/common"

import { registerBeta } from "@/lib/api"

import {
    IBetaInterest,
    ICompanySize
} from "@/lib/types"

import {
    IBetaForm,
    validateBetaFields
} from "./rules"
// #endregion

export interface IBetaResponse extends IFormResponse<IBetaForm> {
    duplicate?: boolean
}

export const betaAction = async (
    _prevState: IBetaResponse,
    formData: FormData,
): Promise<IBetaResponse> => {

    const data = parseForm<IBetaForm>(formData)
    const errors = validateBetaFields(data)

    if (errors !== null)
        return {
            success: false,
            errors,
            data,
        }

    const res = await registerBeta({
        name: data.name,
        email: data.email,
        company: data.company,
        website: data.website,
        size: data.size as ICompanySize,
        interest: data.interest as IBetaInterest,
        consent: true,
    })

    if (res.success)
        return {
            success: true,
            duplicate: res.data?.duplicate,
        }

    return {
        success: false,
        data,
        message: res.error ?? "Something went wrong. Please try again.",
    }
}
