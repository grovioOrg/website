"use client"

// #region imports
import {
    motion,
    useReducedMotion
} from "framer-motion"

import { Check } from "@/icons"
import { IAgentId } from "@/lib/types"
import { IToolId, TOOLS } from "@/data/integrations"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import { BrandMark } from "./BrandMark"
// #endregion

const ease = [0.2, 0.7, 0.2, 1] as const

/** Children animate in sequence once the graphic is a quarter visible. */
const useReveal = () => {
    const reduced = useReducedMotion()

    return {
        stage: {
            initial: "hidden",
            whileInView: "show",
            viewport: { once: true, amount: 0.25 },
        },
        item: (index: number) => ({
            custom: index,
            variants: {
                hidden: reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
                show: (i: number) => ({
                    opacity: 1,
                    y: 0,
                    transition: { duration: reduced ? 0 : 0.45, delay: reduced ? 0 : i * 0.15, ease },
                }),
            },
        }),
    }
}

/** A line between two nodes, with a dot travelling along it. */
const Connector = ({
    vertical = false,
    color,
    className = "",
}: {
    vertical?: boolean
    color: string
    className?: string
}) => {
    const reduced = useReducedMotion()

    return (
        <span
            aria-hidden
            className={cn(
                "relative shrink-0 bg-grey-100",
                vertical ? "w-0.5 h-7 mx-auto" : "h-0.5 w-12",
                className
            )}
        >
            {!reduced && (
                <motion.span
                    className="absolute size-2 rounded-full -translate-x-1/2 -translate-y-1/2"
                    style={{ background: color, left: vertical ? "50%" : 0, top: vertical ? 0 : "50%" }}
                    animate={vertical ? { top: ["0%", "100%"] } : { left: ["0%", "100%"] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                />
            )}
        </span>
    )
}

const AgentNode = ({
    agent,
    label,
    sublabel,
}: {
    agent: IAgentId
    label: string
    sublabel?: string
}) => (
    <span className="relative flex items-center gap-3 rounded-2xl bg-white ring-1 ring-ink/8 shadow-lift px-4 py-3">
        <AgentAvatar agent={agent} size={40} ring={false} live />
        <span className="flex flex-col leading-tight">
            <span className="font-semibold">{label}</span>
            {sublabel && <span className="text-xs text-grey-300">{sublabel}</span>}
        </span>
        <span
            className="ml-2 size-2 rounded-full animate-pulse motion-reduce:animate-none"
            style={{ background: `var(--color-agent-${agent})` }}
        />
    </span>
)

/** Tools feed an agent, which runs steps and produces an output. Top to bottom. */
export const UseCaseFlow = ({
    tools,
    agent,
    label,
    sublabel,
    steps,
    output,
    toolNames = {},
}: {
    tools: IToolId[]
    agent: IAgentId
    label: string
    sublabel?: string
    steps: string[]
    output: string
    /** Overrides for tool names that need translating. */
    toolNames?: Partial<Record<IToolId, string>>
}) => {
    const color = `var(--color-agent-${agent})`
    const sources = tools.slice(0, 3)
    const { stage, item } = useReveal()

    return (
        <div className="relative rounded-[28px] bg-paper ring-1 ring-ink/5 p-8 overflow-hidden max-mobile:p-5">
            <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />

            <motion.div {...stage} className="relative flex flex-col items-center">
                <motion.ul {...item(0)} className="flex flex-wrap justify-center gap-2">
                    {sources.map(tool => (
                        <li key={tool} className="flex items-center gap-2 rounded-xl bg-white ring-1 ring-ink/6 shadow-card pl-1 pr-3 py-1">
                            <BrandMark tool={tool} size={28} className="rounded-lg" />
                            <span className="text-xs font-medium">{toolNames[tool] ?? TOOLS[tool].name}</span>
                        </li>
                    ))}
                </motion.ul>

                <Connector vertical color={color} />

                <motion.div {...item(1)}>
                    <AgentNode agent={agent} label={label} sublabel={sublabel} />
                </motion.div>

                <Connector vertical color={color} />

                <ol className="flex flex-col gap-2 w-full max-w-sm">
                    {steps.map((step, index) => (
                        <motion.li
                            key={step}
                            {...item(2 + index)}
                            className="flex items-center gap-3 rounded-xl bg-white ring-1 ring-ink/6 px-3.5 py-2.5 text-sm"
                        >
                            <span
                                className="grid place-items-center size-5 shrink-0 rounded-full text-ink"
                                style={{ background: `color-mix(in srgb, ${color} 30%, white)` }}
                            >
                                <Check size={10} />
                            </span>
                            {step}
                        </motion.li>
                    ))}
                </ol>

                <Connector vertical color={color} />

                <motion.p
                    {...item(5)}
                    className="flex items-center gap-2.5 rounded-2xl bg-ink text-white px-4 py-3 text-sm font-semibold"
                >
                    <span className="grid place-items-center size-5 rounded-full bg-success">
                        <Check size={10} />
                    </span>
                    {output}
                </motion.p>
            </motion.div>
        </div>
    )
}

/** Tools on the left feed the agent in the middle, which delivers the result on the right. */
export const ToolHub = ({
    tools,
    agent,
    label,
    sublabel,
    result,
    toolNames = {},
}: {
    tools: IToolId[]
    agent: IAgentId
    label: string
    sublabel?: string
    result: string
    /** Overrides for tool names that need translating. */
    toolNames?: Partial<Record<IToolId, string>>
}) => {
    const color = `var(--color-agent-${agent})`
    const { stage, item } = useReveal()

    return (
        <div className="relative rounded-[28px] bg-white ring-1 ring-ink/5 p-10 overflow-hidden max-mobile:p-5">
            <div aria-hidden className="absolute inset-0 dot-grid opacity-60" />

            <motion.div {...stage} className="
                relative flex items-center justify-center gap-2
                max-tablet:flex-col
            ">
                <motion.ul
                    {...item(0)}
                    className={cn(
                        "grid gap-2",
                        tools.length > 4 ? "grid-cols-3" : "grid-cols-2"
                    )}
                >
                    {tools.map(tool => (
                        <li
                            key={tool}
                            className="flex flex-col items-center gap-2 rounded-2xl bg-white ring-1 ring-ink/6 shadow-card px-3 py-3 w-[104px] max-mobile:w-[88px] max-mobile:px-2"
                        >
                            <BrandMark tool={tool} size={36} />
                            <span className="text-[11px] font-medium text-center leading-tight">
                                {toolNames[tool] ?? TOOLS[tool].name}
                            </span>
                        </li>
                    ))}
                </motion.ul>

                <Connector color={color} className="max-tablet:hidden" />
                <Connector vertical color={color} className="tablet:hidden" />

                <motion.div {...item(1)}>
                    <AgentNode agent={agent} label={label} sublabel={sublabel} />
                </motion.div>

                <Connector color={color} className="max-tablet:hidden" />
                <Connector vertical color={color} className="tablet:hidden" />

                <motion.p
                    {...item(2)}
                    className="flex items-center gap-2.5 rounded-2xl bg-ink text-white px-4 py-3 text-sm font-semibold max-w-[220px]"
                >
                    <span className="grid place-items-center size-5 shrink-0 rounded-full bg-success">
                        <Check size={10} />
                    </span>
                    {result}
                </motion.p>
            </motion.div>
        </div>
    )
}
