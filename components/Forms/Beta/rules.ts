// #region imports
import {
    checkedField,
    emailField,
    oneOfField,
    requireField,
    urlField,
    validateForm,
    type IValidator,
} from "@/lib/common/form"

import {
    BETA_INTERESTS,
    COMPANY_SIZES,
} from "@/lib/types/beta"

import type { IDictionary } from "@/dictionaries"
// #endregion

export interface IBetaForm {
    name: string
    email: string
    company: string
    website: string
    size: string
    interest: string
    consent: string
}

export type IBetaErrors = IDictionary["beta"]["errors"]

const FREE_EMAIL_DOMAINS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "aol.com",
    "proton.me",
    "protonmail.com",
    "gmx.at",
    "gmx.de",
    "web.de",
]

export const getBetaRules = (errors: IBetaErrors): IValidator<IBetaForm> => {
    const workEmailRule = emailField(errors.emailRequired, errors.emailFormat)

    return {
        name: requireField(errors.name),
        email: (value) => {
            const error = workEmailRule(value)
            if (error)
                return error

            const domain = value.trim().split("@")[1]?.toLowerCase()
            return FREE_EMAIL_DOMAINS.includes(domain)
                ? errors.workEmail
                : null
        },
        company: requireField(errors.company),
        website: urlField(errors.websiteRequired, errors.websiteFormat),
        size: oneOfField(COMPANY_SIZES, errors.size),
        interest: oneOfField(BETA_INTERESTS, errors.interest),
        consent: checkedField(errors.consent),
    }
}

export const validateBetaFields = (data: IBetaForm, errors: IBetaErrors) =>
    validateForm(data, getBetaRules(errors))
