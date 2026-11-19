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
            className="relative  pb-32 max-mobile:pb-20 "
        >
            <div className="
                max-w-7xl mx-auto px-6 max-mobile:px-4 pt-24
                max-mobile:pt-16 flex flex-col items-center
            ">
                <div
                    role="tablist"
                    aria-label={t.title}
                    className="flex shrink-0 rounded-full bg-paper ring-1 ring-ink/6 p-1 w-max"
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

                <div
                    id="pricing-panel"
                    role="tabpanel"
                    aria-labelledby={`pricing-tab-${team}`}
                    className="mt-14 w-full"
                >
                    <div className="grid w-full grid-cols-3 gap-5 items-stretch max-tablet:grid-cols-1">
                        {PLANS[team].map(plan => (
                            <PlanCard key={plan.id} plan={plan} t={t} />
                        ))}
                    </div>

                    <div className="mt-6 grid w-full grid-cols-[1fr_auto] gap-6 items-start rounded-3xl bg-paper ring-1 ring-ink/6 p-6 max-tablet:grid-cols-1">
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
                </div>
            </div>
        </section>
    )
}
