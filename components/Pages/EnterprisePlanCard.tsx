// #region imports
import { Arrow, Check } from "@/icons"
import { cn } from "@/utils"
import { buttonVariants } from "@/base"
import { _ENTERPRISE_EMAIL } from "@/constants"
import type { IAgentId } from "@/lib/types"
import type { IDictionary } from "@/dictionaries"

import { AgentAvatar } from "@/components/Mascots"
// #endregion

type IEnterpriseCopy = IDictionary["pricing"]["enterprise"]["sales"]

export const EnterprisePlanCard = ({
    copy,
    agents,
    t,
}: {
    copy: IEnterpriseCopy
    agents: IAgentId[]
    t: IDictionary["pricing"]
}) => {
    const href = `mailto:${_ENTERPRISE_EMAIL}?subject=${encodeURIComponent(copy.mailSubject)}&body=${encodeURIComponent(copy.mailBody)}`

    return (
        <article className="relative flex h-full min-w-0 flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-ink/6">
            <div className="flex h-9 items-center gap-3">
                <div className="flex -space-x-2">
                    {agents.map((agent, index) => (
                        <AgentAvatar key={`${agent}-${index}`} agent={agent} size={36} />
                    ))}
                </div>
            </div>

            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">
                {copy.name}
            </h3>
            <p className="mt-1.5 text-sm text-grey-300 leading-relaxed">
                {copy.summary}
            </p>

            <p className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-5xl font-semibold tracking-[-0.04em]">
                    {t.enterprisePrice}
                </span>
            </p>

            <ul className="mt-6 flex flex-col gap-2.5 flex-1">
                {copy.features.map(feature => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm">
                        <span className="grid place-items-center size-4.5 mt-0.5 shrink-0 rounded-full bg-yellow-100 text-ink">
                            <Check size={10} />
                        </span>
                        <span className="text-pretty">{feature}</span>
                    </li>
                ))}
            </ul>

            <a
                href={href}
                className={cn(
                    buttonVariants.base,
                    buttonVariants.variants.secondary,
                    buttonVariants.sizes.full,
                    "group mt-8"
                )}
            >
                {copy.cta}
                <Arrow size={15} className="smooth group-hover:translate-x-0.5" />
            </a>
        </article>
    )
}