// #region imports
import Link from "next/link"

import { Arrow } from "@/icons"
import { agentLink } from "@/data"
import { IAgent } from "@/lib/types"
import type { IDictionary, ILocale } from "@/dictionaries"

import { BetaButton } from "@/components/Buttons"
import { AgentAvatar } from "@/components/Mascots"
import { Glyph, IGlyph, Pill } from "@/components/Mockups"

import { SectionHeading } from "./SectionHeading"
// #endregion

const VERTICAL_GLYPHS: IGlyph[] = ["globe", "filter", "inbox", "chat"]

export const Upcoming = ({
    lang,
    t,
    soon,
    agents,
}: {
    lang: ILocale
    t: IDictionary["home"]["upcoming"]
    soon: string
    agents: IAgent[]
}) => (
    <section
        id="upcoming"
        className="relative bg-white pt-32 pb-4 max-mobile:pt-20 max-mobile:pb-0"
    >
        <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
            <SectionHeading
                title={t.title}
                description={t.description}
            />

            <div className="mt-14 grid grid-cols-3 gap-5 max-tablet:grid-cols-1">
                {agents.map(agent => (
                    <Link
                        key={agent.id}
                        href={agentLink(lang, agent.page)}
                        className="
                            group flex flex-col gap-5 rounded-3xl bg-paper p-7 ring-1 ring-ink/5
                            hover:ring-ink/15 smooth outline-none focus-visible:ring-2 focus-visible:ring-ink
                        "
                    >
                        <span className="flex items-center justify-between">
                            <AgentAvatar agent={agent.id} size={52} ring={false} />
                            <Pill>{soon}</Pill>
                        </span>
                        <span className="flex flex-col gap-1.5">
                            <span className="font-display text-xl font-semibold tracking-tight">
                                {agent.role}
                            </span>
                            <span className="text-sm text-grey-300 leading-relaxed">
                                {agent.tagline}
                            </span>
                        </span>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold">
                            {t.learnMore}
                            <Arrow size={14} className="group-hover:translate-x-0.5 smooth" />
                        </span>
                    </Link>
                ))}
            </div>

            <div className="
                mt-5 rounded-3xl bg-ink text-white p-10
                grid grid-cols-[0.9fr_1.1fr] gap-12 items-center
                max-tablet:grid-cols-1 max-tablet:gap-8 max-mobile:p-6
            ">
                <div className="flex flex-col gap-4">
                    <h3 className="font-display text-3xl font-semibold tracking-tight max-mobile:text-2xl">
                        {t.vertical.title}
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                        {t.vertical.description}
                    </p>
                    <BetaButton
                        interest="exploring"
                        variant="yellow"
                        className="mt-2 w-fit"
                    >
                        {t.vertical.cta}
                    </BetaButton>
                </div>

                <div className="flex flex-col gap-4">
                    <p className="text-sm font-medium text-white/60">{t.vertical.example}</p>
                    <ol className="grid grid-cols-4 gap-2 max-mobile:grid-cols-2">
                        {t.vertical.steps.map((step, index) => (
                            <li
                                key={step}
                                aria-label={`${index + 1}. ${step}`}
                                className="flex flex-col gap-3 rounded-2xl bg-white/6 ring-1 ring-white/10 p-4"
                            >
                                <span className="grid place-items-center size-8 rounded-full bg-white/10 text-yellow-100">
                                    <Glyph name={VERTICAL_GLYPHS[index]} size={15} />
                                </span>
                                <span className="text-sm font-medium leading-snug">{step}</span>
                            </li>
                        ))}
                    </ol>
                    <p className="text-sm text-white/55 leading-relaxed">{t.vertical.note}</p>
                </div>
            </div>
        </div>
    </section>
)
