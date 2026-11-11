"use server"

export interface IResponse<T> {
    data?: T
    success: boolean
    error?: string
    status?: number
}

type IRequestOptions = RequestInit

const _parseParams = (
    params?: Record<string, unknown>
): string => {
    if (!params) return ""

    const search = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
        if (
            value === undefined ||
            value === null ||
            value === ""
        ) return

        if (Array.isArray(value)) {
            value.forEach(item => {
                if (item !== undefined && item !== null && item !== "")
                    search.append(key, String(item))
            })
            return
        }

        search.append(key, String(value))
    })

    const query = search.toString()
    return query ? `?${query}` : ""
}

const _detailMessage = (detail: unknown): string => {
    if (typeof detail === "string" && detail.trim())
        return detail

    if (!Array.isArray(detail))
        return ""

    for (const item of detail) {
        if (typeof item === "string" && item.trim())
            return item

        if (
            item &&
            typeof item === "object" &&
            "msg" in item &&
            typeof item.msg === "string" &&
            item.msg.trim()
        )
            return item.msg
    }

    return ""
}

const _request = async <T>(
    url: string,
    options?: IRequestOptions
): Promise<IResponse<T>> => {
    try {
        const request = await fetch(
            url,
            {
                cache: "no-store",
                ...options,
            }
        )

        const isJson = request.headers
            ?.get("content-type")
            ?.includes("application/json")

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let response: any = null
        if (isJson) {
            try { response = await request.json() }
            catch (e) {
                console.error(e)
            }
        }

        if (request.ok)
            return {
                success: true,
                status: request.status,
                data: response?.data ?? response,
            }

        return {
            success: false,
            status: request.status,
            error:
                (typeof response?.error === "string" && response.error) ||
                (typeof response?.message === "string" && response.message) ||
                _detailMessage(response?.detail) ||
                request.statusText ||
                "Unknown error"
        }
    }
    catch (e) {
        console.error(e)
        return {
            success: false,
            error:
                e instanceof Error
                    ? e.message
                    : "Unknown error"
        }
    }
}

export const _GET = async <T>(
    url: string,
    query?: Record<string, unknown>,
    options?: IRequestOptions
): Promise<IResponse<T>> =>
    _request<T>(
        `${url}${_parseParams(query)}`,
        {
            ...options,
            method: "GET"
        }
    )

export const _POST = async <T>(
    url: string,
    query?: Record<string, unknown>,
    options?: IRequestOptions
): Promise<IResponse<T>> => {
    const isFormData = options?.body instanceof FormData

    return _request<T>(
        `${url}${_parseParams(query)}`,
        {
            ...options,
            headers: {
                ...(
                    isFormData ? {} :
                    { "Content-Type": "application/json" }
                ),
                "accept": "application/json",
                ...(options?.headers as Record<string, string> | undefined),
            },
            method: "POST"
        }
    )
}
