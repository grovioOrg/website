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

export const getBetaRules = (errors: IBetaErrors): IValidator<IBetaForm> => ({
    name: requireField(errors.name),
    email: emailField(errors.emailRequired, errors.emailFormat),
    company: requireField(errors.company),
    website: urlField(errors.websiteRequired, errors.websiteFormat),
    size: oneOfField(COMPANY_SIZES, errors.size),
    interest: oneOfField(BETA_INTERESTS, errors.interest),
    consent: checkedField(errors.consent),
})

export const validateBetaFields = (data: IBetaForm, errors: IBetaErrors) =>
    validateForm(data, getBetaRules(errors))
