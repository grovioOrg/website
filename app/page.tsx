// #region imports
import {
    Footer,
    Navbar
} from "@/components/Navigation"

import {
    Collaboration,
    FinalCta,
    Hero,
    HowItWorks,
    MarketingWorkforce,
    Platform,
    SalesWorkforce,
    WhyGorvio,
    Workforce
} from "@/components/Home"
// #endregion

const Home = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <Workforce />
            <HowItWorks />
            <SalesWorkforce />
            <MarketingWorkforce />
            <Platform />
            <Collaboration />
            <WhyGorvio />
            <FinalCta />
        </main>
        <Footer />
    </>
)

export default Home
