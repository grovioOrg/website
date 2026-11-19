"use client"

// #region imports
import { useState } from "react"

import { cn } from "@/utils"
import { ENTERPRISE_AGENTS, PLANS } from "@/data"
import type { IDictionary } from "@/dictionaries"

import { Pill } from "@/components/Mockups"
import { EnterprisePlanCard, PlanCard } from "@/components/Pages"

// #endregion

type IPricingTab = keyof typeof PLANS | "enterprise"

const TABS: IPricingTab[] = ["sales", "marketing", "enterprise"]

export const Pricing = ({
    t,
}: {
    t: IDictionary["pricing"]
}) => {
    const [team, setTeam] = useState<IPricingTab>("sales")

    return (
        <section
            id="pricing"
            className="relative  pb-32 max-mobile:pb-20 "
        >
            <div className="
                max-w-7xl mx-auto px-6 max-mobile:px-4 pt-24
                max-mobile:pt-16 flex flex-col items-center
            ">
                <div
                    role="tablist"
                    aria-label={t.title}
                    className="flex shrink-0 rounded-full bg-paper ring-1 ring-ink/6 p-1 w-max max-w-full overflow-x-auto"
                >
                    {TABS.map(tab => (
                        <button
                            key={tab}
                            type="button"
                            role="tab"
                            id={`pricing-tab-${tab}`}
                            aria-selected={team === tab}
                            aria-controls="pricing-panel"
                            onClick={() => setTeam(tab)}
                            className={cn(
                                "rounded-full px-5 py-2 text-sm font-semibold cursor-pointer outline-none smooth shrink-0",
                                "focus-visible:ring-2 focus-visible:ring-ink",
                                team === tab ? "bg-ink text-white" : "text-grey-300 hover:text-ink"
                            )}
                        >
                            {t.tabs[tab]}
                        </button>
                    ))}
                </div>

                <div
                    id="pricing-panel"
                    role="tabpanel"
                    aria-labelledby={`pricing-tab-${team}`}
                    className="mt-14 w-full"
                >
                    {team === "enterprise" ? (
                        <div className="grid w-full grid-cols-2 gap-5 items-stretch max-tablet:grid-cols-1">
                            <EnterprisePlanCard
                                copy={t.enterprise.sales}
                                agents={ENTERPRISE_AGENTS.sales}
                                t={t}
                            />
                            <EnterprisePlanCard
                                copy={t.enterprise.marketing}
                                agents={ENTERPRISE_AGENTS.marketing}
                                t={t}
                            />
                        </div>
                    ) : (
                        <div className="grid w-full grid-cols-3 gap-5 items-stretch max-tablet:grid-cols-1">
                            {PLANS[team].map(plan => (
                                <PlanCard key={plan.id} plan={plan} t={t} />
                            ))}
                        </div>
                    )}

                    <div className="mt-6 flex w-full flex-col gap-4 rounded-3xl bg-paper ring-1 ring-ink/6 p-6">
                        <p className="text-sm text-grey-300 leading-relaxed max-w-3xl">
                            {team === "sales"
                                ? t.salesNote
                                : team === "marketing"
                                    ? t.marketingNote
                                    : t.enterpriseNote}
                        </p>
                        {team === "sales" && (
                            <ul className="flex flex-wrap gap-2">
                                {t.salesLimits.map(limit => (
                                    <li key={limit}>
                                        <Pill className="text-[12px] px-2.5 py-1">{limit}</Pill>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}