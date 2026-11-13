// #region imports
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Arrow, Check } from "@/icons"
import { alternates } from "@/lib/common/seo"
import { IBetaInterest } from "@/lib/types/beta"
import { ITeam } from "@/lib/types"

import {
    formatText,
    getDictionary,
    hasLocale
} from "@/dictionaries"

import {
    AGENT_PAGES,
    AGENT_TOOLS,
    PLANS,
    agentLink,
    hasAgentPage,
    localizeAgents
} from "@/data"

import { BetaButton } from "@/components/Buttons"
import { AgentAvatar } from "@/components/Mascots"
import { Pill } from "@/components/Mockups"

import {
    CtaBand,
    FaqList,
    PageSection,
    PlanCard,
    ToolHub
} from "@/components/Pages"

import {
    Footer,
    Navbar
} from "@/components/Navigation"
// #endregion

type IParams = Promise<{ lang: string, slug: string }>

const INTERESTS: Record<ITeam, IBetaInterest> = {
    sales: "sales",
    marketing: "marketing",
    vertical: "exploring",
}

export const generateStaticParams = () =>
    AGENT_PAGES.map(({ page }) => ({ slug: page }))

export const generateMetadata = async ({
    params,
}: {
    params: IParams
}): Promise<Metadata> => {
    const { lang, slug } = await params
    if (!hasLocale(lang) || !hasAgentPage(slug))
        return {}

    const t = await getDictionary(lang)
    const page = t.agents.pages[slug]

    return {
        title: page.metaTitle,
        description: page.metaDescription,
        alternates: alternates(lang, `/agents/${slug}`),
    }
}

const AgentPage = async ({
    params,
}: {
    params: IParams
}) => {
    const { lang, slug } = await params
    if (!hasLocale(lang) || !hasAgentPage(slug))
        notFound()

    const t = await getDictionary(lang)
    const labels = t.agents.page
    const page = t.agents.pages[slug]

    const agents = localizeAgents(t.agents)
    const entry = AGENT_PAGES.find(item => item.page === slug)!
    const agent = agents.find(item => item.id === entry.agent)!
    const members = entry.members.map(id => agents.find(item => item.id === id)!)

    const upcoming = agent.status === "upcoming"
    const interest = INTERESTS[agent.team]
    const isSales = slug === "sales-agent"
    const name = isSales ? agent.role : agent.name

    const plans = upcoming
        ? []
        : isSales
            ? PLANS.sales
            : agent.id === "seo"
                ? PLANS.marketing
                : PLANS.marketing.filter(plan => plan.agents.includes(agent.id))

    const action = upcoming
        ? t.common.joinWaitlist
        : formatText(labels.hire, { name })

    return (
        <>
            <Navbar lang={lang} t={t} />
            <main>
                <section className="relative bg-white pt-36 pb-24 overflow-hidden max-mobile:pt-28 max-mobile:pb-16">
                    <div aria-hidden className="absolute inset-0 dot-grid opacity-50 [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />
                    <div className="
                        relative max-w-7xl mx-auto px-6 max-mobile:px-4
                        grid grid-cols-[1.15fr_0.85fr] gap-14 items-center
                        max-tablet:grid-cols-1 max-tablet:gap-12
                    ">
                        <div className="flex flex-col items-start gap-7">
                            <div className="flex items-center gap-3">
                                <div className="flex -space-x-3">
                                    {members.map(member => (
                                        <AgentAvatar
                                            key={member.id}
                                            agent={member.id}
                                            size={members.length > 1 ? 56 : 72}
                                            live
                                            track
                                            title={member.name}
                                        />
                                    ))}
                                </div>
                                {upcoming && <Pill>{t.common.comingSoon}</Pill>}
                            </div>

                            <h1 className="font-display font-semibold text-[clamp(2.6rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.045em] max-w-[14ch]">
                                {page.title}
                            </h1>
                            <p className="text-lg text-grey-300 leading-relaxed max-w-xl max-mobile:text-base">
                                {page.pitch}
                            </p>

                            <div className="flex flex-wrap items-center gap-4">
                                <BetaButton size="lg" interest={interest}>
                                    {action}
                                </BetaButton>
                            </div>
                            {upcoming && (
                                <p className="text-sm text-grey-300 max-w-md">{labels.upcomingNote}</p>
                            )}
                        </div>

                        <div className="rounded-[28px] bg-paper ring-1 ring-ink/5 p-5 max-mobile:p-3">
                            <div className="rounded-2xl bg-white shadow-window p-6">
                                <div className="flex items-center gap-3">
                                    <AgentAvatar agent={agent.id} size={36} ring={false} />
                                    <div className="flex flex-col leading-tight">
                                        <span className="text-sm font-semibold">{agent.name}</span>
                                        <span className="text-xs text-grey-300">{agent.role}</span>
                                    </div>
                                    <Pill tone="green" dot className="ml-auto">{labels.example}</Pill>
                                </div>
                                <p className="mt-5 font-semibold">{agent.task.title}</p>
                                <ul className="mt-4 flex flex-col gap-3">
                                    {agent.task.steps.map(step => (
                                        <li key={step} className="flex items-start gap-3 text-sm">
                                            <span className="grid place-items-center size-5 shrink-0 rounded-full bg-success text-white">
                                                <Check size={10} />
                                            </span>
                                            {step}
                                        </li>
                                    ))}
                                </ul>
                                <p
                                    className="mt-5 rounded-xl px-4 py-3 text-sm font-semibold"
                                    style={{ background: `color-mix(in srgb, ${agent.color} 18%, white)` }}
                                >
                                    {agent.task.result}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <PageSection title={labels.flow} tone="paper">
                    <div className="flex flex-col gap-12 max-mobile:gap-10">
                        <ol className="grid max-w-3xl gap-2.5 sm:grid-cols-2">
                            {page.flow.map(step => (
                                <li key={step} className="flex items-start gap-3 text-sm leading-relaxed">
                                    <span className="grid place-items-center size-5 mt-0.5 shrink-0 rounded-full bg-yellow-100 text-ink">
                                        <Check size={10} />
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>

                        <ToolHub
                            tools={AGENT_TOOLS[slug]}
                            agent={agent.id}
                            label={isSales ? members.map(member => member.name).join(", ") : agent.name}
                            sublabel={agent.role}
                            result={agent.task.result}
                            toolNames={{ mcp: labels.mcpTool }}
                        />

                        <dl className="grid grid-cols-3 gap-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1">
                            {page.properties.map(item => (
                                <div key={item.label} className="rounded-2xl bg-white ring-1 ring-ink/5 px-4 py-3.5">
                                    <dt className="text-xs text-grey-300">{item.label}</dt>
                                    <dd className="mt-1 text-sm font-semibold leading-snug">{item.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </PageSection>

                {plans.length > 0 && (
                    <PageSection
                        id="package"
                        title={isSales ? labels.teamTitle : labels.package}
                        description={isSales ? labels.teamBody : t.pricing.marketingNote}
                    >
                        {isSales && (
                            <div className="mb-5 grid grid-cols-3 gap-4 max-tablet:grid-cols-1">
                                {members.map(member => (
                                    <div key={member.id} className="flex items-start gap-4 rounded-3xl bg-white ring-1 ring-ink/5 shadow-card p-6">
                                        <AgentAvatar agent={member.id} size={48} ring={false} />
                                        <div className="flex flex-col gap-1">
                                            <p className="font-semibold">{member.name}</p>
                                            <p className="text-sm text-grey-300 leading-relaxed">{member.tagline}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="grid grid-cols-3 gap-5 max-tablet:grid-cols-1">
                            {plans.map(plan => (
                                <PlanCard key={plan.id} plan={plan} t={t.pricing} />
                            ))}
                        </div>
                        <p className="mt-5 text-xs text-grey-200">{t.pricing.beta}</p>
                    </PageSection>
                )}

                <PageSection title={labels.faq} tone={plans.length > 0 ? "paper" : "white"} split>
                    <FaqList items={page.faq} />
                </PageSection>

                <PageSection title={labels.others} tone={plans.length > 0 ? "white" : "paper"} end>
                    <div className="grid grid-cols-4 gap-3 max-tablet:grid-cols-2 max-mobile:grid-cols-1">
                        {AGENT_PAGES.filter(item => item.page !== slug).map(item => {
                            const other = agents.find(each => each.id === item.agent)!

                            return (
                                <Link
                                    key={item.page}
                                    href={agentLink(lang, item.page)}
                                    className="
                                        group flex flex-col gap-4 rounded-2xl bg-white ring-1 ring-ink/6 p-5
                                        hover:ring-ink/15 hover:shadow-card smooth
                                        outline-none focus-visible:ring-2 focus-visible:ring-ink
                                    "
                                >
                                    <span className="flex items-center justify-between">
                                        <AgentAvatar agent={other.id} size={40} ring={false} />
                                        {other.status === "upcoming" && <Pill>{t.common.comingSoon}</Pill>}
                                    </span>
                                    <span className="flex flex-col gap-1">
                                        <span className="font-semibold">{other.role}</span>
                                        <span className="text-sm text-grey-300 leading-snug">{t.agents.menu[item.page]}</span>
                                    </span>
                                    <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold">
                                        {labels.viewAgent}
                                        <Arrow size={13} className="group-hover:translate-x-0.5 smooth" />
                                    </span>
                                </Link>
                            )
                        })}
                    </div>
                </PageSection>

                <CtaBand
                    title={isSales ? labels.teamCtaTitle : formatText(labels.ctaTitle, { name })}
                    body={labels.ctaBody}
                    action={action}
                    interest={interest}
                />
            </main>
            <Footer lang={lang} t={t} />
        </>
    )
}

export default AgentPage
