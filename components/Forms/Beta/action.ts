"use server"

// #region imports
import {
    IFormResponse,
    parseForm,
} from "@/lib/common"

import { registerBeta } from "@/lib/api"
import { _BETA_URL } from "@/constants"

import {
    DEFAULT_LOCALE,
    getDictionary,
    hasLocale
} from "@/dictionaries"

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

    const lang = String(formData.get("lang") ?? "")
    const t = (await getDictionary(hasLocale(lang) ? lang : DEFAULT_LOCALE)).beta

    const data = parseForm<IBetaForm>(formData)
    const errors = validateBetaFields(data, t.errors)

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
        language: hasLocale(lang) ? lang : DEFAULT_LOCALE,
    })

    if (res.success)
        return {
            success: true,
            duplicate: res.data?.duplicate,
        }

    return {
        success: false,
        data,
        message: _BETA_URL ? t.errors.generic : t.errors.unavailable,
    }
}
