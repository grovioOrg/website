// #region imports
import { Check } from "@/icons"
import { cn } from "@/utils"
import { IPlan } from "@/data"
import type { IDictionary } from "@/dictionaries"

import { BetaButton } from "@/components/Buttons"
import { AgentAvatar } from "@/components/Mascots"
import { Pill } from "@/components/Mockups"
// #endregion

export const PlanCard = ({
    plan,
    t,
}: {
    plan: IPlan
    t: IDictionary["pricing"]
}) => {
    const copy = t.plans[plan.id]

    return (
        <article className={cn(
            "relative flex flex-col rounded-3xl bg-white p-7 shadow-card",
            plan.popular ? "ring-2 ring-ink" : "ring-1 ring-ink/6"
        )}>
            <div className="flex items-center justify-between gap-3">
                <div className="flex -space-x-2">
                    {plan.agents.map((agent, index) => (
                        <AgentAvatar key={`${agent}-${index}`} agent={agent} size={36} />
                    ))}
                </div>
                {plan.popular && <Pill tone="yellow">{t.popular}</Pill>}
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {copy.name}
            </h3>
            <p className="mt-1.5 text-sm text-grey-300 leading-relaxed">
                {copy.summary}
            </p>

            <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-semibold tracking-[-0.04em] tabular-nums">
                    {t.currency}{plan.price}
                </span>
                <span className="text-sm text-grey-300">{t.perMonth}</span>
            </p>

            <ul className="mt-6 flex flex-col gap-2.5 flex-1">
                {copy.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <span className="grid place-items-center size-4.5 mt-0.5 shrink-0 rounded-full bg-yellow-100 text-ink">
                            <Check size={10} />
                        </span>
                        {feature}
                    </li>
                ))}
            </ul>

            <BetaButton
                interest={plan.interest}
                variant={plan.popular ? "primary" : "secondary"}
                size="full"
                className="mt-8"
            >
                {t.cta}
            </BetaButton>
        </article>
    )
}
