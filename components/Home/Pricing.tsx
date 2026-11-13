"use client"

// #region imports
import { useState } from "react"

import { cn } from "@/utils"
import { PLANS } from "@/data"
import type { IDictionary } from "@/dictionaries"

import { Pill } from "@/components/Mockups"
import { PlanCard } from "@/components/Pages"

import { SectionHeading } from "./SectionHeading"
// #endregion

type ITeamTab = keyof typeof PLANS

const TABS: ITeamTab[] = ["sales", "marketing"]

export const Pricing = ({
    t,
}: {
    t: IDictionary["pricing"]
}) => {
    const [team, setTeam] = useState<ITeamTab>("sales")

    return (
        <section
            id="pricing"
            className="relative bg-white py-32 max-mobile:py-20"
        >
            <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="flex items-end justify-between gap-10 max-tablet:flex-col max-tablet:items-start">
                    <SectionHeading
                        title={t.title}
                        description={t.description}
                    />

                    <div
                        role="tablist"
                        aria-label={t.title}
                        className="flex shrink-0 rounded-full bg-paper ring-1 ring-ink/6 p-1"
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
                                    "rounded-full px-5 py-2 text-sm font-semibold cursor-pointer outline-none smooth",
                                    "focus-visible:ring-2 focus-visible:ring-ink",
                                    team === tab ? "bg-ink text-white" : "text-grey-300 hover:text-ink"
                                )}
                            >
                                {t.tabs[tab]}
                            </button>
                        ))}
                    </div>
                </div>

                <div
                    id="pricing-panel"
                    role="tabpanel"
                    aria-labelledby={`pricing-tab-${team}`}
                    className="mt-14"
                >
                    <div className="grid grid-cols-3 gap-5 max-tablet:grid-cols-1">
                        {PLANS[team].map(plan => (
                            <PlanCard key={plan.id} plan={plan} t={t} />
                        ))}
                    </div>

                    <div className="mt-6 grid grid-cols-[1fr_auto] gap-6 items-start rounded-3xl bg-paper ring-1 ring-ink/6 p-6 max-tablet:grid-cols-1">
                        <p className="text-sm text-grey-300 leading-relaxed max-w-2xl">
                            {team === "sales" ? t.salesNote : t.marketingNote}
                        </p>
                        {team === "sales" && (
                            <ul className="flex flex-wrap gap-2 justify-end max-tablet:justify-start">
                                {t.salesLimits.map(limit => (
                                    <li key={limit}>
                                        <Pill className="text-[12px] px-2.5 py-1">{limit}</Pill>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    <p className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-grey-200">
                        <span>{t.beta}</span>
                        <span>{t.caller}</span>
                    </p>
                </div>
            </div>
        </section>
    )
}
