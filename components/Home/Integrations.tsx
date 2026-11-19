// #region imports
import { INTEGRATIONS, TOOLS } from "@/data"
import type { IDictionary } from "@/dictionaries"

import { BrandMark } from "@/components/Pages/BrandMark"

import { SectionHeading } from "./SectionHeading"
// #endregion

const ALL_TOOLS = [...new Set(INTEGRATIONS.flatMap(({ tools }) => tools))]

export const Integrations = ({
    t,
}: {
    t: IDictionary["home"]["integrations"]
}) => (
    <section
        id="integrations"
        className="relative bg-white"
    >
        <div className="
            max-w-6xl mx-auto px-6 max-mobile:px-4
            max-mobile:pt-16 flex flex-col gap-16 items-center
            max-tablet:grid-cols-1 max-tablet:gap-10
        ">
            <SectionHeading
                className="text-center"
                title={t.title}
            />

            <ul className="flex flex-wrap justify-center gap-3 max-tablet:justify-start max-mobile:gap-2 mt-12">
                {ALL_TOOLS.map(tool => (
                    <li
                        key={tool}
                        className="
                            flex items-center gap-3 rounded-full bg-white ring-1 ring-ink/8 shadow-card
                            pl-1.5 pr-5 py-1.5 text-[15px] font-medium
                            smooth hover:-translate-y-0.5 hover:ring-ink/15
                            motion-reduce:hover:translate-y-0
                            max-mobile:text-sm max-mobile:pr-4
                        "
                    >
                        <aside className="p-1">
                            <BrandMark tool={tool} size={48} />
                        </aside>
                        {TOOLS[tool].name}
                    </li>
                ))}
            </ul>
        </div>
    </section>
)
