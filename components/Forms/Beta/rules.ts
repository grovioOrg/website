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

export const BETA_CONSENT_TEXT =
    "I agree that GORVIO may store these details to contact me about the beta. You can ask us to delete them at any time."

const FREE_EMAIL_DOMAINS = [
    "gmail.com",
    "yahoo.com",
    "hotmail.com",
    "outlook.com",
    "icloud.com",
    "aol.com",
    "proton.me",
    "protonmail.com",
]

const workEmailRule = emailField(
    "Work email is required",
    "Enter a valid email address",
)

export const BETA_RULES: IValidator<IBetaForm> = {
    name: requireField("Tell us your name"),
    email: (value) => {
        const error = workEmailRule(value)
        if (error)
            return error

        const domain = value.trim().split("@")[1]?.toLowerCase()
        return FREE_EMAIL_DOMAINS.includes(domain)
            ? "Please use your work email"
            : null
    },
    company: requireField("Company name is required"),
    website: urlField(),
    size: oneOfField(COMPANY_SIZES, "Pick your company size"),
    interest: oneOfField(BETA_INTERESTS, "Pick what you'd like to hire for"),
    consent: checkedField("Please agree so we can contact you about the beta"),
}

export const validateBetaFields = (data: IBetaForm) =>
    validateForm(data, BETA_RULES)
