// #region imports
import { INTEGRATIONS, getAgent } from "@/data"
import { IIntegrationGroup } from "@/data/integrations"
import { cn } from "@/utils"
import type { IDictionary } from "@/dictionaries"

import { AgentAvatar } from "@/components/Mascots"
import { ToolChip } from "@/components/Pages/BrandMark"

import { SectionHeading } from "./SectionHeading"
// #endregion

/** Desktop: 3 equal cells on row 1, 2 equal halves on row 2 (6-col grid). */
const CARD_SPAN: Record<IIntegrationGroup, string> = {
    leads: "col-span-2",
    outreach: "col-span-2",
    crm: "col-span-2",
    social: "col-span-3",
    team: "col-span-3",
}

export const Integrations = ({
    t,
}: {
    t: IDictionary["home"]["integrations"]
}) => (
    <section
        id="integrations"
        className="relative bg-paper py-32 max-mobile:py-20"
    >
        <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
            <SectionHeading
                title={t.title}
                description={t.description}
            />

            <div className="
                mt-14 grid gap-4 auto-rows-fr
                grid-cols-6 max-tablet:grid-cols-2 max-mobile:grid-cols-1
            ">
                {INTEGRATIONS.map(({ group, agents, tools }) => (
                    <article
                        key={group}
                        className={cn(
                            "flex h-full min-h-[13.75rem] flex-col gap-5 rounded-3xl bg-white p-6 ring-1 ring-ink/5 shadow-card",
                            CARD_SPAN[group],
                            "max-mobile:col-span-1 max-tablet:col-span-1",
                            group === "team" && "max-tablet:col-span-2 max-tablet:w-full max-tablet:max-w-md max-tablet:justify-self-center"
                        )}
                    >
                        <header className="flex min-h-11 shrink-0 items-start justify-between gap-3">
                            <h3 className="font-display text-lg font-semibold tracking-tight leading-snug">
                                {t.groups[group]}
                            </h3>
                            <span className="flex shrink-0 self-start items-center gap-2">
                                <span className="sr-only">{t.usedBy}</span>
                                <span className="flex -space-x-1.5">
                                    {agents.map(agent => (
                                        <AgentAvatar key={agent} agent={agent} size={26} title={getAgent(agent).name} />
                                    ))}
                                </span>
                            </span>
                        </header>

                        <ul className="flex flex-wrap items-start gap-2">
                            {tools.map(tool => <ToolChip key={tool} tool={tool} />)}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    </section>
)
