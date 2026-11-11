"use client"

// #region imports
import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react"

import { Modal } from "@/base"
import { IAgentId } from "@/lib/types"
import { AgentAvatar } from "@/components/Mascots"

import {
    BetaForm,
    BetaSuccess
} from "@/components/Forms/Beta"
// #endregion

interface IBetaContext {
    openBeta: () => void
    closeBeta: () => void
}

const BetaContext = createContext<IBetaContext | null>(null)

export const BETA_HASH = "#beta"

const AGENT_IDS: IAgentId[] = ["sales", "researcher", "signal", "seo", "writer", "graphic", "video"]

export const BetaProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [open, setOpen] = useState(false)
    const [receipt, setReceipt] = useState<{ duplicate: boolean } | null>(null)

    const openBeta = useCallback(() => setOpen(true), [])
    const closeBeta = useCallback(() => {
        setOpen(false)
        if (window.location.hash === BETA_HASH)
            history.replaceState(null, "", window.location.pathname)
    }, [])

    const handleSuccess = useCallback(
        (duplicate: boolean) => setReceipt({ duplicate }),
        []
    )

    useEffect(() => {
        const sync = () => {
            if (window.location.hash === BETA_HASH)
                setOpen(true)
        }

        sync()
        window.addEventListener("hashchange", sync)
        return () => window.removeEventListener("hashchange", sync)
    }, [])

    const value = useMemo(
        () => ({ openBeta, closeBeta }),
        [openBeta, closeBeta]
    )

    return (
        <BetaContext.Provider value={value}>
            {children}

            <Modal
                open={open}
                onClose={closeBeta}
                size="lg"
                padding="none"
            >
                <div className="grid grid-cols-[0.8fr_1.2fr] max-tablet:grid-cols-1">
                    <aside className="
                        relative overflow-hidden bg-yellow-100 p-8
                        flex flex-col justify-between gap-8
                        max-tablet:hidden
                    ">
                        <div>
                            <h2 className="font-display text-4xl font-semibold tracking-tight leading-[1.02]">
                                Build your first AI workforce.
                            </h2>
                            <p className="mt-4 text-sm text-ink/70">
                                We&apos;re onboarding a small group of teams to hire GORVIO&apos;s sales and marketing agents and shape the product with us.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex -space-x-3">
                                {AGENT_IDS.map((id, index) => (
                                    <AgentAvatar
                                        key={id}
                                        agent={id}
                                        size={48}
                                        live
                                        delay={index * 0.5}
                                        className="ring-yellow-100!"
                                    />
                                ))}
                            </div>
                            <p className="text-xs font-medium text-ink/70">
                                Built for the EU · GDPR compliant
                            </p>
                        </div>
                    </aside>

                    <div className="p-8 max-mobile:p-5 max-mobile:pt-6">
                        {receipt
                            ? <BetaSuccess duplicate={receipt.duplicate} onDone={closeBeta} />
                            : (
                                <>
                                    <h2 className="font-display text-2xl font-semibold tracking-tight pr-10">
                                        Apply for beta access
                                    </h2>
                                    <p className="text-sm text-grey-300 mt-1 mb-6">
                                        Tell us about your business and we&apos;ll match you with the right agents.
                                    </p>
                                    <BetaForm onSuccess={handleSuccess} />
                                </>
                            )
                        }
                    </div>
                </div>
            </Modal>
        </BetaContext.Provider>
    )
}

export const useBeta = () => {
    const context = useContext(BetaContext)

    if (!context)
        throw new Error("useBeta must be used within BetaProvider")

    return context
}
