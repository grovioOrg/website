import { NextResponse } from "next/server"

import {
    isMailConfigured,
    parseBetaPayload,
    sendBetaRegistrationEmail,
} from "@/lib/mail"

export const runtime = "nodejs"

export async function POST(request: Request) {
    if (!isMailConfigured()) {
        return NextResponse.json(
            {
                success: false,
                error: "Beta registration email is not configured yet.",
            },
            { status: 503 }
        )
    }

    let body: unknown
    try {
        body = await request.json()
    }
    catch {
        return NextResponse.json(
            { success: false, error: "Invalid JSON body." },
            { status: 400 }
        )
    }

    const parsed = parseBetaPayload(body)
    if ("error" in parsed) {
        return NextResponse.json(
            { success: false, error: parsed.error },
            { status: 400 }
        )
    }

    try {
        await sendBetaRegistrationEmail(parsed)
        return NextResponse.json(
            { success: true, data: { duplicate: false } },
            { status: 201 }
        )
    }
    catch (error) {
        console.error("Beta registration email failed:", error)
        return NextResponse.json(
            {
                success: false,
                error: "Failed to send registration email. Please try again.",
            },
            { status: 500 }
        )
    }
}
