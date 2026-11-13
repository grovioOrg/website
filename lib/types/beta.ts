export const COMPANY_SIZES = [
    "1-10",
    "11-50",
    "51-200",
    "201-1000",
    "1000+",
] as const

export const BETA_INTERESTS = [
    "sales",
    "marketing",
    "both",
    "exploring",
] as const

export type ICompanySize = typeof COMPANY_SIZES[number]
export type IBetaInterest = typeof BETA_INTERESTS[number]

export interface IBetaRegistration {
    name: string
    email: string
    company: string
    website: string
    size: ICompanySize
    interest: IBetaInterest
    consent: true
    language: string
}

export interface IRawBetaRegistration {
    full_name: string
    work_email: string
    company_name: string
    website: string
    company_size: ICompanySize
    primary_interest: IBetaInterest
    consent: true
    language: string
    source: "landing"
}

export const serializeBeta = (
    beta: IBetaRegistration
): IRawBetaRegistration => ({
    full_name: beta.name.trim(),
    work_email: beta.email.trim().toLowerCase(),
    company_name: beta.company.trim(),
    website: beta.website.trim(),
    company_size: beta.size,
    primary_interest: beta.interest,
    consent: beta.consent,
    language: beta.language,
    source: "landing",
})
