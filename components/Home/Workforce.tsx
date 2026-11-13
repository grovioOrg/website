"use client"

// #region imports
import {
    useEffect,
    useState
} from "react"

import { motion } from "framer-motion"

import { agentLink } from "@/data/links"
import { Check } from "@/icons"
import { useDictionary } from "@/context"
import { formatText, type IDictionary } from "@/dictionaries"
import { IAgent, IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"
import { Pill } from "@/components/Mockups"
import { BetaButton } from "@/components/Buttons"

import { SectionHeading } from "./SectionHeading"
// #endregion

type IWorkforceCopy = IDictionary["home"]["workforce"]

const TaskTicket = ({ agent, t }: { agent: IAgent, t: IWorkforceCopy }) => {
    const [done, setDone] = useState(0)

    useEffect(() => {
        const timers = agent.task.steps.map((_, index) =>
            setTimeout(() => setDone(index + 1), 500 + index * 700)
        )

        return () => timers.forEach(clearTimeout)
    }, [agent])

    const complete = done >= agent.task.steps.length

    return (
        <div className="h-full min-h-[340px] flex flex-col rounded-2xl bg-white ring-1 ring-ink/6 shadow-card p-5">
            <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-grey-200">{t.exampleTask}</p>
                <Pill tone={complete ? "green" : "yellow"} dot>
                    {complete ? t.done : t.working}
                </Pill>
            </div>

            <p className="font-semibold text-[15px] mt-2 leading-snug min-h-[2lh]">
                {agent.task.title}
            </p>

            <ol className="mt-4 mb-4 flex flex-col gap-2.5">
                {agent.task.steps.map((step, index) => {
                    const checked = index < done

                    return (
                        <li key={step} className="flex items-start gap-2.5 text-sm">
                            <span className={cn(
                                "grid place-items-center size-5 shrink-0 rounded-full mt-px smooth",
                                checked
                                    ? "bg-ink text-white"
                                    : "ring-1 ring-grey-150 text-transparent"
                            )}>
                                <Check size={11} />
                            </span>
                            <span className={checked ? "text-ink" : "text-grey-200"}>
                                {step}
                            </span>
                        </li>
                    )
                })}
            </ol>

            <motion.div
                initial={false}
                animate={{ opacity: complete ? 1 : 0.35 }}
                className="mt-auto pt-4 border-t border-grey-100 flex items-center justify-between text-sm"
            >
                <span className="text-grey-300">{t.result}</span>
                <span className="font-semibold">{agent.task.result}</span>
            </motion.div>
        </div>
    )
}

export const Workforce = ({
    t,
    agents,
}: {
    t: IWorkforceCopy
    agents: IAgent[]
}) => {
    const { lang, common } = useDictionary()
    const [selected, setSelected] = useState<IAgentId>("sales")
    const agent = agents.find(item => item.id === selected) ?? agents[0]

    useEffect(() => {
        const sync = () => {
            const match = window.location.hash.match(/^#agent-(\w+)$/)
            const found = agents.find(item => item.id === match?.[1])
            if (found) {
                setSelected(found.id)
                document.getElementById("workforce")?.scrollIntoView()
            }
        }

        sync()
        window.addEventListener("hashchange", sync)
        return () => window.removeEventListener("hashchange", sync)
    }, [agents])

    return (
        <section
            id="workforce"
            className="relative bg-paper py-32 max-mobile:py-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
                <div className="flex items-end justify-between gap-10 max-tablet:flex-col max-tablet:items-start">
                    <SectionHeading
                        title={t.title}
                        description={t.description}
                    />
                    <p className="text-sm text-grey-300 max-w-56 tablet:text-right">
                        {t.hint}
                    </p>
                </div>

                <div
                    role="tablist"
                    aria-label={t.tablist}
                    className="
                        relative mt-16 flex items-end justify-between gap-2
                        max-tablet:overflow-x-auto max-tablet:snap-x
                        max-tablet:justify-start no-scrollbar
                        max-tablet:-mx-6 max-tablet:px-6
                    "
                >
                    {agents.map((item, index) => {
                        const active = item.id === selected

                        return (
                            <button
                                key={item.id}
                                id={`agent-${item.id}`}
                                role="tab"
                                type="button"
                                aria-selected={active}
                                aria-controls="agent-profile"
                                onClick={() => setSelected(item.id)}
                                className="
                                    group relative flex flex-col items-center gap-3
                                    w-[140px] shrink-0 snap-center cursor-pointer outline-none
                                    rounded-2xl focus-visible:outline-2 focus-visible:outline-ink
                                    max-mobile:w-[110px]
                                "
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
                                    className="grid place-items-center size-[112px] max-mobile:size-[88px]"
                                >
                                    <span
                                        className={cn(
                                            "rounded-full smooth duration-300",
                                            active
                                                ? "opacity-100 ring-[3px] ring-offset-4 ring-offset-paper"
                                                : "opacity-50 group-hover:opacity-100"
                                        )}
                                        style={{
                                            "--tw-ring-color": `color-mix(in srgb, var(--color-agent-${item.id}) 78%, var(--color-ink))`,
                                        } as React.CSSProperties}
                                    >
                                        <AgentAvatar
                                            agent={item.id}
                                            size={96}
                                            ring={false}
                                            live
                                            hover
                                            delay={index * 0.6}
                                            className="max-mobile:size-[72px]!"
                                        />
                                    </span>
                                </motion.div>

                                <span className={cn(
                                    "text-[13px] whitespace-nowrap smooth",
                                    active ? "text-ink font-semibold" : "font-medium text-grey-200 group-hover:text-grey-300"
                                )}>
                                    {item.name}
                                    <span className="block text-[11px] font-medium text-grey-200">{item.role}</span>
                                </span>
                            </button>
                        )
                    })}
                </div>

                <div
                    id="agent-profile"
                    role="tabpanel"
                    aria-live="polite"
                    className="mt-14 grid grid-cols-[1.15fr_1fr] gap-6 max-tablet:grid-cols-1"
                >
                    <div className="grid">
                        {agents.map(item => {
                            const shown = item.id === agent.id

                            return (
                                <motion.div
                                    key={item.id}
                                    aria-hidden={!shown}
                                    inert={!shown}
                                    initial={false}
                                    animate={{ opacity: shown ? 1 : 0, y: shown ? 0 : 8 }}
                                    transition={shown
                                        ? { duration: 0.25, delay: 0.12 }
                                        : { duration: 0.12 }
                                    }
                                    className={cn(
                                        "[grid-area:1/1] rounded-3xl bg-white ring-1 ring-ink/6 p-9",
                                        "flex flex-col gap-6 max-mobile:p-6",
                                        !shown && "pointer-events-none"
                                    )}
                                >
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <AgentAvatar agent={item.id} size={40} ring={false} />
                                        <Pill tone="ink">{common.teams[item.team]}</Pill>
                                        <Pill>{common.monthlyContract}</Pill>
                                    </div>

                                    <div>
                                        <p className="text-sm text-grey-300">
                                            {formatText(t.meet, { name: item.name })}
                                        </p>
                                        <h3 className="font-display text-5xl font-semibold tracking-[-0.04em] mt-1 max-mobile:text-4xl">
                                            {item.role}
                                        </h3>
                                        <p className="font-display text-xl mt-3 text-grey-300">
                                            &ldquo;{item.tagline}&rdquo;
                                        </p>
                                    </div>

                                    <p className="text-grey-300 leading-relaxed max-w-lg">
                                        {item.description}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between gap-4 pt-4 border-t border-grey-100 max-mobile:flex-col max-mobile:items-start">
                                        <p className="text-sm">
                                            <span className="text-grey-200">{t.knownFor} </span>
                                            {item.quirk}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <a
                                                href={agentLink(lang, item.page)}
                                                className="text-sm font-medium text-grey-300 hover:text-ink underline-offset-4 hover:underline smooth px-2"
                                            >
                                                {t.profile}
                                            </a>
                                            <BetaButton size="sm" variant="secondary" interest={item.team === "marketing" ? "marketing" : "sales"}>
                                                {formatText(t.hire, { name: item.name })}
                                            </BetaButton>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <TaskTicket key={agent.id} agent={agent} t={t} />
                </div>
            </div>
        </section>
    )
}
