// #region imports
import { Reveal } from "@/animation"

import type { IDictionary } from "@/dictionaries"

import { SectionHeading } from "./SectionHeading"
// #endregion

export const WhyGrovio = ({
    t,
}: {
    t: IDictionary["home"]["why"]
}) => {
    return (
        <section id="why" className="relative bg-paper py-32 max-mobile:py-20">
            <div className="
                max-w-7xl mx-auto px-6 max-mobile:px-4
                grid grid-cols-[0.8fr_1.2fr] gap-16
                max-tablet:grid-cols-1 max-tablet:gap-10
            ">
                <div className="tablet:sticky tablet:top-28 self-start">
                    <SectionHeading
                        title={t.title}
                        description={t.description}
                    />
                </div>

                <ol className="flex flex-col">
                    {t.reasons.map((reason, index) => (
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
