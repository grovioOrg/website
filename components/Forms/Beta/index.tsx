"use client"

// #region imports
import {
    FormEvent,
    startTransition,
    useActionState,
    useEffect,
    useState,
} from "react"

import {
    Button,
    SelectGroup,
    TextField
} from "@/base"

import { Arrow } from "@/icons"
import { IFieldErrors } from "@/lib/common"
import { AgentAvatar } from "@/components/Mascots"
import { _PRIVACY_URL } from "@/constants"

import {
    betaAction,
    IBetaResponse
} from "./action"

import {
    BETA_CONSENT_TEXT,
    IBetaForm,
    validateBetaFields
} from "./rules"
// #endregion

const SIZE_OPTIONS = [
    { name: "1–10", value: "1-10" },
    { name: "11–50", value: "11-50" },
    { name: "51–200", value: "51-200" },
    { name: "201–1k", value: "201-1000" },
    { name: "1k+", value: "1000+" },
]

const INTEREST_OPTIONS = [
    { name: "Sales Workforce", value: "sales", hint: "Leads, research, outreach" },
    { name: "Marketing Workforce", value: "marketing", hint: "SEO, content, video" },
    { name: "Both", value: "both", hint: "The whole team" },
    { name: "Exploring GORVIO", value: "exploring", hint: "Just looking around" },
]

export const BetaSuccess = ({
    duplicate = false,
    onDone,
}: {
    duplicate?: boolean
    onDone?: () => void
}) => (
    <div
        role="status"
        className="flex flex-col items-center text-center py-6 gap-5"
    >
        <div className="flex items-center gap-3">
            <AgentAvatar agent="researcher" size={64} ring={false} live delay={0.2} />
            <AgentAvatar agent="sales" size={80} ring={false} live />
            <AgentAvatar agent="video" size={64} ring={false} live delay={0.5} />
        </div>

        <h3 className="font-display text-3xl font-semibold tracking-tight">
            {duplicate ? "You're already on the list." : "You're on the list."}
        </h3>

        <p className="text-grey-300 max-w-sm">
            {duplicate
                ? "We already have your application. We'll be in touch at your work email as beta spots open."
                : "Thanks for applying. We'll review your application and reach out at your work email as beta spots open."
            }
        </p>

        {onDone && (
            <Button variant="secondary" onClick={onDone}>
                Back to the site
            </Button>
        )}
    </div>
)

export const BetaForm = ({
    onSuccess,
}: {
    onSuccess?: (duplicate: boolean) => void
}) => {
    const [state, action, isPending] = useActionState<IBetaResponse, FormData>(
        betaAction,
        {
            success: false,
            errors: {},
        }
    )

    const [clientErrors, setClientErrors] =
        useState<IFieldErrors<IBetaForm> | null>(null)

    const errors = clientErrors ?? state.errors ?? {}

    useEffect(() => {
        if (state.success)
            onSuccess?.(!!state.duplicate)
    }, [state, onSuccess])

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (isPending)
            return

        const formData = new FormData(event.currentTarget)
        const fieldErrors = validateBetaFields(
            Object.fromEntries(
                ["name", "email", "company", "website", "size", "interest", "consent"]
                    .map(key => [key, String(formData.get(key) ?? "")])
            ) as unknown as IBetaForm
        )

        setClientErrors(fieldErrors)
        if (fieldErrors)
            return

        startTransition(() => action(formData))
    }

    if (state.success)
        return <BetaSuccess duplicate={state.duplicate} />

    return (
        <form
            noValidate
            onSubmit={handleSubmit}
            onChange={() => clientErrors && setClientErrors(null)}
            className="grid grid-cols-2 gap-x-4 gap-y-1 max-mobile:grid-cols-1"
        >
            <TextField
                name="name"
                label="Name"
                autoComplete="name"
                placeholder="Ada Lovelace"
                defaultValue={state.data?.name}
                error={!!errors.name}
                helperText={errors.name}
            />

            <TextField
                name="email"
                type="email"
                label="Work email"
                autoComplete="email"
                placeholder="ada@company.com"
                defaultValue={state.data?.email}
                error={!!errors.email}
                helperText={errors.email}
            />

            <TextField
                name="company"
                label="Company"
                autoComplete="organization"
                placeholder="Acme Inc."
                defaultValue={state.data?.company}
                error={!!errors.company}
                helperText={errors.company}
            />

            <TextField
                name="website"
                label="Website"
                autoComplete="url"
                placeholder="acme.com"
                inputMode="url"
                defaultValue={state.data?.website}
                error={!!errors.website}
                helperText={errors.website}
            />

            <SelectGroup
                name="size"
                title="Company size"
                columns={5}
                options={SIZE_OPTIONS}
                defaultValue={state.data?.size}
                error={!!errors.size}
                helperText={errors.size}
                className="col-span-full mt-1"
            />

            <SelectGroup
                name="interest"
                title="What would you like to hire for?"
                columns={2}
                options={INTEREST_OPTIONS}
                defaultValue={state.data?.interest}
                error={!!errors.interest}
                helperText={errors.interest}
                className="col-span-full"
            />

            <div className="col-span-full mt-1 mb-3">
                <label className="flex items-start gap-3 cursor-pointer text-sm text-grey-300 leading-relaxed">
                    <input
                        type="checkbox"
                        name="consent"
                        required
                        defaultChecked={state.data?.consent === "on"}
                        aria-invalid={!!errors.consent}
                        aria-describedby={errors.consent ? "beta-consent-error" : undefined}
                        className="mt-0.5 size-[18px] shrink-0 rounded accent-ink cursor-pointer"
                    />
                    <span>
                        {BETA_CONSENT_TEXT}
                        {_PRIVACY_URL && (
                            <>
                                {" "}
                                <a
                                    href={_PRIVACY_URL}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-ink underline underline-offset-2 hover:text-grey-300 smooth"
                                >
                                    Privacy policy
                                </a>
                            </>
                        )}
                    </span>
                </label>
                {errors.consent && (
                    <p id="beta-consent-error" className="mt-1.5 pl-[30px] text-xs font-medium text-error">
                        {errors.consent}
                    </p>
                )}
            </div>

            {state.message && (
                <p
                    role="alert"
                    className="
                        col-span-full rounded-xl bg-error/8 text-error
                        text-sm font-medium px-4 py-3 mb-2
                    "
                >
                    {state.message}
                </p>
            )}

            <div className="
                col-span-full flex items-center justify-between gap-4 mt-2
                max-mobile:flex-col-reverse max-mobile:items-stretch
            ">
                <p className="text-xs text-grey-200 max-w-xs">
                    Built for the EU and GDPR compliant. We only use these details to review your application.
                </p>

                <Button
                    type="submit"
                    size="lg"
                    loading={isPending}
                    loadingText="Submitting…"
                    endIcon={<Arrow size={16} />}
                >
                    Apply for Beta Access
                </Button>
            </div>
        </form>
    )
}
