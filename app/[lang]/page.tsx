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

import { SectionElevate, SmoothScroll } from "@/animation"

import {
    Footer,
    Navbar
} from "@/components/Navigation"

import {
    FinalCta,
    Hero,
    Integrations,
    Investors,
    MarketingWorkforce,
    Platform,
    Pricing,
    SalesWorkforce,
    TeachAgents,
    Walkthrough,
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
        <SmoothScroll>
            <Navbar lang={lang} t={t} />
            <main>
                <Hero t={t.home.hero} />
                <Workforce t={t.home.workforce} agents={availableAgents(agents)} />
                <Walkthrough t={t.home.walkthrough} />

                <SectionElevate>
                    <section className="p-4">
                        <SalesWorkforce t={t.home.sales} />
                        <TeachAgents t={t.home.teach} agents={agents} />
                        <MarketingWorkforce t={t.home.marketing} />
                    </section>
                </SectionElevate>

                <Platform t={t.home.platform} />
                <Integrations t={t.home.integrations} />
                <Pricing t={t.pricing} />
                <Investors t={t.home.investors} />
                <FinalCta t={t.home.finalCta} />
            </main>
            <Footer lang={lang} t={t} />
        </SmoothScroll>
    )
}

export default Home
