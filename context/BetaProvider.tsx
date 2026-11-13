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
import { IBetaInterest } from "@/lib/types/beta"
import { AgentAvatar } from "@/components/Mascots"

import {
    BetaForm,
    BetaSuccess
} from "@/components/Forms/Beta"

import { useDictionary } from "./DictionaryProvider"
// #endregion

interface IBetaContext {
    openBeta: (interest?: IBetaInterest) => void
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
    const { beta: t } = useDictionary()
    const [open, setOpen] = useState(false)
    const [interest, setInterest] = useState<IBetaInterest | undefined>()
    const [receipt, setReceipt] = useState<{ duplicate: boolean } | null>(null)

    const openBeta = useCallback((next?: IBetaInterest) => {
        setInterest(next)
        setOpen(true)
    }, [])

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
                closeLabel={t.close}
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
                                {t.panelTitle}
                            </h2>
                            <p className="mt-4 text-sm text-ink/70">
                                {t.panelBody}
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
                                {t.panelEu}
                            </p>
                        </div>
                    </aside>

                    <div className="p-8 max-mobile:p-5 max-mobile:pt-6">
                        {receipt
                            ? <BetaSuccess duplicate={receipt.duplicate} onDone={closeBeta} />
                            : (
                                <>
                                    <h2 className="font-display text-2xl font-semibold tracking-tight pr-10">
                                        {t.title}
                                    </h2>
                                    <p className="text-sm text-grey-300 mt-1 mb-6">
                                        {t.subtitle}
                                    </p>
                                    <BetaForm
                                        key={interest ?? "any"}
                                        interest={interest}
                                        onSuccess={handleSuccess}
                                    />
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
