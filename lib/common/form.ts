export type IFieldErrors<T> =
    Partial<Record<keyof T, string>>

export type IValidator<T> = {
    [K in keyof T]?: (value: T[K]) => string | null
}

export interface IFormResponse<T> {
    success: boolean
    errors?: Partial<Record<keyof T, string>>
    data?: Partial<Record<keyof T, string>>
    /** Network or backend failure shown in the form, separate from field errors. */
    message?: string
}

export const parseForm = <T>(formData: FormData): Record<keyof T, string> =>
    Object.fromEntries(
        Array.from(formData.entries(), ([key, value]) => [
            key,
            typeof value === "string" ? value : String(value),
        ])
    ) as Record<keyof T, string>

export const validateForm = <T>(
    data: T,
    rules: IValidator<T>
): IFieldErrors<T> | null => {

    const errors: IFieldErrors<T> = {}

    for (const key in rules) {
        const rule = rules[key]
        if (!rule) continue

        const error = rule(data[key])
        if (error)
            errors[key] = error
    }

    if (Object.keys(errors).length)
        return errors

    return null
}

export const requireField =
    (message: string) =>
    (value?: string | null) =>
        !value || value.trim() === ""
            ? message
            : null

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const emailField =
    (
        requiredMessage = "Email is required",
        formatMessage = "Enter a valid email address",
    ) =>
    (value?: string | null) => {
        const email = value?.trim() ?? ""
        if (!email)
            return requiredMessage
        if (!EMAIL_PATTERN.test(email))
            return formatMessage
        return null
    }

const DOMAIN_PATTERN = /^(https?:\/\/)?([a-z0-9-]+\.)+[a-z]{2,}(\/\S*)?$/i

export const urlField =
    (
        requiredMessage = "Website is required",
        formatMessage = "Enter a valid website, like acme.com",
    ) =>
    (value?: string | null) => {
        const url = value?.trim() ?? ""
        if (!url)
            return requiredMessage
        if (!DOMAIN_PATTERN.test(url))
            return formatMessage
        return null
    }

export const oneOfField =
    (options: readonly string[], message: string) =>
    (value?: string | null) =>
        value && options.includes(value)
            ? null
            : message

export const checkedField =
    (message: string) =>
    (value?: string | null) =>
        value === "on" || value === "true"
            ? null
            : message
