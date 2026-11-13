// #region imports
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { alternates } from "@/lib/common/seo"

import {
    formatText,
    getDictionary,
    hasLocale
} from "@/dictionaries"

import {
    AGENT_TOOLS,
    INDUSTRIES,
    agentLink,
    hasIndustry,
    industryLink,
    localizeAgents,
    toolsFor
} from "@/data"

import { BetaButton } from "@/components/Buttons"
import { AgentAvatar } from "@/components/Mascots"

import {
    Glyph,
    Pill
} from "@/components/Mockups"

import {
    CtaBand,
    FaqList,
    PageSection,
    ToolChip,
    UseCase
} from "@/components/Pages"

import {
    Footer,
    Navbar
} from "@/components/Navigation"
// #endregion

type IParams = Promise<{ lang: string, slug: string }>

export const generateStaticParams = () =>
    INDUSTRIES.map(({ id }) => ({ slug: id }))

export const generateMetadata = async ({
    params,
}: {
    params: IParams
}): Promise<Metadata> => {
    const { lang, slug } = await params
    if (!hasLocale(lang) || !hasIndustry(slug))
        return {}

    const t = await getDictionary(lang)
    const copy = t.industries.list[slug]

    return {
        title: copy.metaTitle,
        description: copy.metaDescription,
        alternates: alternates(lang, `/industries/${slug}`),
    }
}

const IndustryPage = async ({
    params,
}: {
    params: IParams
}) => {
    const { lang, slug } = await params
    if (!hasLocale(lang) || !hasIndustry(slug))
        notFound()

    const t = await getDictionary(lang)
    const labels = t.industries.page
    const copy = t.industries.list[slug]
    const industry = INDUSTRIES.find(item => item.id === slug)!
    const agents = localizeAgents(t.agents)
    const liveTools = industry.tools.filter(tool => industry.agents.some(id => {
        const agent = agents.find(item => item.id === id)!
        return agent.status !== "upcoming" && AGENT_TOOLS[agent.page].includes(tool)
    }))

    return (
        <>
            <Navbar lang={lang} t={t} />
            <main>
                <section className="relative bg-white pt-36 pb-4 overflow-hidden max-mobile:pt-28 max-mobile:pb-0">
                    <div aria-hidden className="absolute inset-0 dot-grid opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
                    <div className="
                        relative max-w-7xl mx-auto px-6 max-mobile:px-4
                        grid grid-cols-[1.1fr_0.9fr] gap-14 items-center
                        max-tablet:grid-cols-1 max-tablet:gap-12
                    ">
                        <div className="flex flex-col items-start gap-7">
                            <span className="grid place-items-center size-16 rounded-2xl bg-yellow-100 text-ink">
                                <Glyph name={industry.glyph} size={28} />
                            </span>
                            <h1 className="font-display font-semibold text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.045em] max-w-[14ch]">
                                {copy.title}
                            </h1>
                            <p className="text-lg text-grey-300 leading-relaxed max-w-xl max-mobile:text-base">
                                {copy.pitch}
                            </p>
                            <BetaButton size="lg" interest="both" />
                        </div>

                        <div className="flex flex-col gap-4 rounded-[28px] bg-paper ring-1 ring-ink/5 p-5 max-mobile:p-3">
                            <div className="rounded-2xl bg-white shadow-window overflow-hidden">
                                <div className="flex items-center gap-3 px-5 py-4 border-b border-grey-100">
                                    <Pill tone="yellow">ICP</Pill>
                                    <p className="text-sm font-semibold">{labels.icp}</p>
                                    <AgentAvatar agent="sales" size={24} ring={false} className="ml-auto" />
                                </div>
                                <div className="grid grid-cols-[1fr_140px] px-5 py-2 text-xs font-medium text-grey-200">
                                    <span>{labels.segment}</span>
                                    <span>{labels.fit}</span>
                                </div>
                                {copy.icp.map(({ name, fit }) => (
                                    <div key={name} className="grid grid-cols-[1fr_140px] items-center gap-3 px-5 py-3 border-t border-grey-100 text-sm">
                                        <span className="font-medium">{name}</span>
                                        <span className="flex items-center gap-2.5">
                                            <span className="flex-1 h-1.5 rounded-full bg-grey-50 overflow-hidden">
                                                <span className="block h-full rounded-full bg-ink" style={{ width: `${fit}%` }} />
                                            </span>
                                            <span className="font-semibold tabular-nums w-9 text-right">{fit}%</span>
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <div className="rounded-2xl bg-white shadow-card ring-1 ring-ink/5 p-5">
                                <div className="flex items-center gap-2.5">
                                    <AgentAvatar agent="sales" size={28} ring={false} />
                                    <p className="text-sm font-semibold">{labels.dm}</p>
                                </div>
                                <p className="mt-3 text-[15px] leading-relaxed">{copy.dm}</p>
                                <p className="mt-3 text-xs text-grey-200">{labels.dmNote}</p>
                            </div>
                        </div>
                    </div>
                </section>

                <PageSection title={labels.useCases} description={labels.useCasesBody}>
                    <div className="flex flex-col gap-24 max-mobile:gap-16">
                        {industry.agents.map((id, index) => {
                            const agent = agents.find(item => item.id === id)!
                            const useCase = copy.useCases[index]

                            return (
                                <UseCase
                                    key={id}
                                    agent={agent}
                                    href={agentLink(lang, agent.page)}
                                    title={useCase.title}
                                    description={copy.agents[index]}
                                    points={useCase.points}
                                    output={useCase.output}
                                    tools={toolsFor(agent.page, industry.tools)}
                                    soon={agent.status === "upcoming" ? t.common.comingSoon : undefined}
                                    viewLabel={t.agents.page.viewAgent}
                                    toolNames={{ mcp: t.agents.page.mcpTool }}
                                    flip={index % 2 === 1}
                                />
                            )
                        })}
                    </div>

                    {liveTools.length > 0 && (
                        <div className="mt-20 pt-10 border-t border-ink/8 max-mobile:mt-14 max-mobile:pt-8">
                            <h3 className="font-display text-xl font-semibold tracking-tight">
                                {labels.toolsTitle}
                            </h3>
                            <ul className="mt-4 flex flex-wrap gap-2.5">
                                {liveTools.map(tool => (
                                    <ToolChip key={tool} tool={tool} name={tool === "mcp" ? t.agents.page.mcpTool : undefined} />
                                ))}
                            </ul>
                        </div>
                    )}
                </PageSection>

                <PageSection title={labels.faq} tone="paper" split>
                    <FaqList items={copy.faq} />
                </PageSection>

                <PageSection title={labels.others} end>
                    <div className="grid grid-cols-5 gap-3 max-tablet:grid-cols-2">
                        {INDUSTRIES.filter(item => item.id !== slug).map(item => (
                            <Link
                                key={item.id}
                                href={industryLink(lang, item.id)}
                                className="
                                    flex flex-col items-start gap-3 rounded-2xl bg-white ring-1 ring-ink/6 p-4
                                    hover:ring-ink/15 hover:shadow-card smooth
                                    outline-none focus-visible:ring-2 focus-visible:ring-ink
                                "
                            >
                                <span className="grid place-items-center size-10 shrink-0 rounded-xl bg-paper">
                                    <Glyph name={item.glyph} size={17} />
                                </span>
                                <span className="flex flex-col gap-0.5 min-w-0">
                                    <span className="font-semibold leading-snug">{t.industries.list[item.id].name}</span>
                                    <span className="text-xs text-grey-300 leading-snug">{t.industries.list[item.id].short}</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </PageSection>

                <CtaBand
                    title={formatText(labels.ctaTitle, { industry: copy.name })}
                    body={labels.ctaBody}
                    interest="both"
                />
            </main>
            <Footer lang={lang} t={t} />
        </>
    )
}

export default IndustryPage
