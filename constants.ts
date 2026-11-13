export const _ORIGIN_URL =
    process.env.NEXT_PUBLIC_APP_URL ??
    "http://localhost:3000"

export const _BASE_URL =
    process.env.NEXT_PUBLIC_API_CORE_BASE_URL

export const _CONTACT_EMAIL =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL

export const _PRIVACY_URL =
    process.env.NEXT_PUBLIC_PRIVACY_URL

export const _INVESTOR_EMAIL =
    process.env.NEXT_PUBLIC_INVESTOR_EMAIL ??
    "vshon447@gmail.com"

export const _OPUS_CO_URL = "https://opusco.dev/"

export const _BETA_URL = _BASE_URL
    ? `${_BASE_URL}/api/v1/beta_registration`
    : undefined
