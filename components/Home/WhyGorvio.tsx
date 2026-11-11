// #region imports
import { Reveal } from "@/animation"

import { SectionHeading } from "./SectionHeading"
// #endregion

const REASONS: {
    title: string
    description: string
}[] = [
    {
        title: "Built in and for the EU",
        description: "GORVIO is designed around European rules from day one and is GDPR compliant, so your customer data is handled the way your customers expect.",
    },
    {
        title: "Contractors, not tools",
        description: "Each agent owns a role with a clear job description, so you hand over outcomes instead of prompts.",
    },
    {
        title: "You approve what ships",
        description: "Messages, posts and campaigns wait for your sign-off. Approval rules are yours to set.",
    },
    {
        title: "Every decision has a reason",
        description: "Accepted, discarded, edited: each step is logged so you can see why, not just what.",
    },
    {
        title: "One connected team",
        description: "Sales and marketing agents share research, signals and context instead of starting from zero.",
    },
    {
        title: "Hire monthly, pause anytime",
        description: "Start with one contractor, add more as the work grows, pause the ones you don't need.",
    },
]

export const WhyGorvio = () => {
    return (
        <section id="why" className="relative bg-paper py-32 max-mobile:py-20">
            <div className="
                max-w-7xl mx-auto px-6 max-mobile:px-4
                grid grid-cols-[0.8fr_1.2fr] gap-16
                max-tablet:grid-cols-1 max-tablet:gap-10
            ">
                <div className="tablet:sticky tablet:top-28 self-start">
                    <SectionHeading
                        title={<>Built like a team. Managed like one too.</>}
                        description="Most AI tools hand you a blank prompt. GORVIO hands you specialists who know their job and check in before anything goes out."
                    />
                </div>

                <ol className="flex flex-col">
                    {REASONS.map((reason, index) => (
                        <Reveal key={reason.title} as="li" delay={index * 0.05}>
                            <div
                                className="
                                    grid grid-cols-[56px_1fr] items-center gap-4
                                    py-8 border-t border-grey-150
                                    max-mobile:grid-cols-[40px_1fr] max-mobile:py-6
                                "
                            >
                                <span className="font-display text-sm font-semibold text-grey-200 tabular-nums self-start pt-2">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="font-display text-3xl font-semibold tracking-[-0.03em] max-mobile:text-2xl">
                                        {reason.title}
                                    </h3>
                                    <p className="mt-2 text-grey-300 leading-relaxed max-w-lg">
                                        {reason.description}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    )
}
