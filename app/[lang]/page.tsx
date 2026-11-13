// #region imports
import { notFound } from "next/navigation"

import {
    getDictionary,
    hasLocale
} from "@/dictionaries"

import {
    availableAgents,
    localizeAgents
} from "@/data"

import {
    Footer,
    Navbar
} from "@/components/Navigation"

import {
    Collaboration,
    FinalCta,
    Hero,
    HowItWorks,
    Integrations,
    Investors,
    MarketingWorkforce,
    Platform,
    Pricing,
    SalesWorkforce,
    TeachAgents,
    Upcoming,
    Walkthrough,
    WhyGrovio,
    Workforce
} from "@/components/Home"
// #endregion

const Home = async ({
    params,
}: {
    params: Promise<{ lang: string }>
}) => {
    const { lang } = await params
    if (!hasLocale(lang))
        notFound()

    const t = await getDictionary(lang)
    const agents = localizeAgents(t.agents)

    return (
        <>
            <Navbar lang={lang} t={t} />
            <main>
                <Hero t={t.home.hero} />
                <Walkthrough t={t.home.walkthrough} />
                <Workforce t={t.home.workforce} agents={availableAgents(agents)} />
                <HowItWorks t={t.home.howItWorks} />
                <SalesWorkforce t={t.home.sales} />
                <TeachAgents t={t.home.teach} />
                <MarketingWorkforce t={t.home.marketing} />
                <Platform t={t.home.platform} />
                <Collaboration t={t.home.collaboration} />
                <Integrations t={t.home.integrations} />
                <Pricing t={t.pricing} />
                <WhyGrovio t={t.home.why} />
                <Upcoming
                    lang={lang}
                    t={t.home.upcoming}
                    soon={t.common.comingSoon}
                    agents={agents.filter(agent => agent.status === "upcoming")}
                />
                <FinalCta t={t.home.finalCta} />
                <Investors t={t.home.investors} />
            </main>
            <Footer lang={lang} t={t} />
        </>
    )
}

export default Home
