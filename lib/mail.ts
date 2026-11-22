import "server-only"

import nodemailer from "nodemailer"

import {
    BETA_INTERESTS,
    COMPANY_SIZES,
    type IBetaRegistration,
    type IRawBetaRegistration,
} from "@/lib/types/beta"

const BETA_NOTIFY_EMAIL =
    process.env.BETA_NOTIFY_EMAIL ??
    process.env.NEXT_PUBLIC_INVESTOR_EMAIL ??
    "vshon447@gmail.com"

const gmailUser = () =>
    process.env.GMAIL_USER ??
    process.env.SMTP_USER ??
    ""

/** Google app passwords are 16 chars; Google copies them with spaces. */
const gmailAppPassword = () =>
    (process.env.GMAIL_APP_PASSWORD ?? process.env.SMTP_PASS ?? "")
        .replaceAll(" ", "")

const INTEREST_LABELS: Record<IBetaRegistration["interest"], string> = {
    sales: "Sales",
    marketing: "Marketing",
    both: "Sales & marketing",
    exploring: "Just exploring",
}

export const isMailConfigured = (): boolean =>
    Boolean(gmailUser() && gmailAppPassword())

const createTransport = () => {
    const user = gmailUser()
    const pass = gmailAppPassword()

    if (!user || !pass)
        throw new Error(
            "Email is not configured. Set GMAIL_USER and GMAIL_APP_PASSWORD (a Google app password, not the account password)."
        )

    return nodemailer.createTransport({
        service: "gmail",
        auth: { user, pass },
    })
}

export const parseBetaPayload = (
    body: unknown
): IBetaRegistration | { error: string } => {
    if (!body || typeof body !== "object")
        return { error: "Invalid JSON body." }

    const raw = body as Partial<IRawBetaRegistration>
    const name = String(raw.full_name ?? "").trim()
    const email = String(raw.work_email ?? "").trim().toLowerCase()
    const company = String(raw.company_name ?? "").trim()
    const website = String(raw.website ?? "").trim()
    const size = String(raw.company_size ?? "").trim()
    const interest = String(raw.primary_interest ?? "").trim()
    const language = String(raw.language ?? "en").trim() || "en"

    if (!name || !email || !company || !website || !size || !interest)
        return { error: "Missing required fields." }

    if (!COMPANY_SIZES.includes(size as IBetaRegistration["size"]))
        return { error: "Invalid company size." }

    if (!BETA_INTERESTS.includes(interest as IBetaRegistration["interest"]))
        return { error: "Invalid interest." }

    if (raw.consent !== true)
        return { error: "Consent is required." }

    return {
        name,
        email,
        company,
        website,
        size: size as IBetaRegistration["size"],
        interest: interest as IBetaRegistration["interest"],
        consent: true,
        language,
    }
}

export const sendBetaRegistrationEmail = async (
    beta: IBetaRegistration
): Promise<void> => {
    const transporter = createTransport()
    const from =
        process.env.SMTP_FROM ||
        gmailUser() ||
        BETA_NOTIFY_EMAIL

    await transporter.sendMail({
        from: `"Grovio Beta" <${from}>`,
        to: BETA_NOTIFY_EMAIL,
        replyTo: beta.email,
        subject: `Beta registration: ${beta.company}`,
        text: [
            "New beta registration",
            "",
            `Name: ${beta.name}`,
            `Email: ${beta.email}`,
            `Company: ${beta.company}`,
            `Website: ${beta.website}`,
            `Company size: ${beta.size}`,
            `Interest: ${INTEREST_LABELS[beta.interest]}`,
            `Language: ${beta.language}`,
            `Consent: yes`,
        ].join("\n"),
        html: `
            <h2>New beta registration</h2>
            <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
                <tr><td><strong>Name</strong></td><td>${escapeHtml(beta.name)}</td></tr>
                <tr><td><strong>Email</strong></td><td><a href="mailto:${escapeHtml(beta.email)}">${escapeHtml(beta.email)}</a></td></tr>
                <tr><td><strong>Company</strong></td><td>${escapeHtml(beta.company)}</td></tr>
                <tr><td><strong>Website</strong></td><td>${escapeHtml(beta.website)}</td></tr>
                <tr><td><strong>Company size</strong></td><td>${escapeHtml(beta.size)}</td></tr>
                <tr><td><strong>Interest</strong></td><td>${escapeHtml(INTEREST_LABELS[beta.interest])}</td></tr>
                <tr><td><strong>Language</strong></td><td>${escapeHtml(beta.language)}</td></tr>
                <tr><td><strong>Consent</strong></td><td>yes</td></tr>
            </table>
        `.trim(),
    })
}

const escapeHtml = (value: string): string =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;")
