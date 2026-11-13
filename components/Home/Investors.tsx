// #region imports
import { Arrow } from "@/icons"
import { _INVESTOR_EMAIL } from "@/constants"
import type { IDictionary } from "@/dictionaries"

import { EuFlag } from "@/components/Navigation/EuStamp"
// #endregion

export const Investors = ({
    t,
}: {
    t: IDictionary["home"]["investors"]
}) => (
    <section
        id="investors"
        className="relative bg-ink text-white py-28 overflow-hidden max-mobile:py-16"
    >
        <div aria-hidden className="absolute inset-0 dot-grid-dark opacity-40" />

        <div className="
            relative max-w-7xl mx-auto px-6 max-mobile:px-4
            grid grid-cols-[1fr_1fr] gap-14 items-stretch
            max-tablet:grid-cols-1 max-tablet:gap-10
        ">
            <div className="flex flex-col gap-6 min-w-0">
                <EuFlag size={44} />
                <h2 className="font-display text-[clamp(2.4rem,5vw,4.4rem)] font-semibold leading-[0.98] tracking-[-0.04em] max-w-[14ch]">
                    {t.title}
                </h2>
                <p className="text-white/70 text-lg leading-relaxed max-w-xl max-mobile:text-base">
                    {t.body}
                </p>

                <dl className="m-0 mt-4 grid grid-cols-3 gap-3 items-stretch max-mobile:grid-cols-1">
                    {t.facts.map(fact => (
                        <div key={fact.label} className="flex h-full flex-col gap-1 rounded-2xl bg-white/6 ring-1 ring-white/10 p-5">
                            <dd className="font-display text-4xl font-semibold tracking-tight tabular-nums">{fact.value}</dd>
                            <dt className="mt-auto text-sm text-white/60 leading-snug">{fact.label}</dt>
                        </div>
                    ))}
                </dl>
            </div>

            <a
                href={`mailto:${_INVESTOR_EMAIL}?subject=${encodeURIComponent(t.briefSubject)}`}
                className="
                    group relative flex h-full min-h-0 flex-col gap-8 rounded-[2.5rem]
                    bg-[var(--color-eu-blue)] text-white
                    p-12 overflow-hidden smooth
                    hover:-translate-y-1 hover:shadow-lift
                    motion-reduce:hover:translate-y-0
                    outline-none focus-visible:ring-4 focus-visible:ring-yellow-100
                    max-mobile:p-7 max-mobile:rounded-3xl
                "
            >
                <span aria-hidden className="absolute inset-0 dot-grid-dark opacity-40" />
                <span aria-hidden className="absolute -right-16 -bottom-16 opacity-20 group-hover:rotate-12 smooth duration-700 motion-reduce:group-hover:rotate-0">
                    <EuFlag size={260} />
                </span>

                <span className="relative flex flex-col gap-4">
                    <span className="font-display text-[clamp(2.2rem,4vw,3.6rem)] font-semibold leading-[0.98] tracking-[-0.04em] max-w-[12ch] text-white">
                        {t.briefTitle}
                    </span>
                    <span className="text-lg text-white/70 max-w-sm leading-relaxed max-mobile:text-base">
                        {t.briefBody}
                    </span>
                </span>

                <span className="relative flex items-center justify-between gap-4 rounded-full bg-yellow-100 text-ink pl-8 pr-2 py-2 text-lg font-semibold max-mobile:text-base max-mobile:pl-6">
                    {t.cta}
                    <span className="grid place-items-center size-12 rounded-full bg-ink text-yellow-100 smooth group-hover:translate-x-1 motion-reduce:group-hover:translate-x-0">
                        <Arrow size={18} />
                    </span>
                </span>

                <span className="relative mt-auto text-sm text-white/70">
                    {t.emailLabel}:{" "}
                    <span className="font-semibold text-white select-all">{_INVESTOR_EMAIL}</span>
                </span>
            </a>
        </div>
    </section>
)
