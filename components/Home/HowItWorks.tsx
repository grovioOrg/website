"use client"

// #region imports
import {
    ReactNode,
    useRef,
    useState
} from "react"

import {
    motion,
    useMotionValueEvent,
    useReducedMotion,
    useScroll
} from "framer-motion"

import { ScaledFrame } from "@/base"
import { Reveal } from "@/animation"
import { Check } from "@/icons"
import { IAgentId } from "@/lib/types"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"

import { Pill } from "@/components/Mockups"

import { SectionHeading } from "./SectionHeading"
// #endregion

interface IStep {
    title: string
    description: string
    visual: (active: boolean) => ReactNode
}

const appear = (active: boolean, delay = 0) => ({
    initial: false,
    animate: { opacity: active ? 1 : 0.4, y: active ? 0 : 4 },
    transition: { duration: 0.4, delay: active ? delay : 0 },
}) as const

const STEPS: IStep[] = [
    {
        title: "Tell GORVIO about your business",
        description: "Share your website, your offer and who you sell to.",
        visual: (active) => (
            <div className="flex flex-col gap-1.5">
                <span className="flex items-center gap-2 rounded-lg bg-white ring-1 ring-grey-100 px-2.5 py-1.5 text-[12px]">
                    <span className="text-grey-200">https://</span>
                    <span className="font-medium">northwind.co</span>
                    {active && <span className="w-px h-3 bg-ink animate-caret" />}
                </span>
                <motion.div {...appear(active, 0.2)} className="flex gap-1 flex-wrap">
                    <Pill>B2B SaaS</Pill>
                    <Pill>Seed–Series A</Pill>
                    <Pill>UK</Pill>
                </motion.div>
            </div>
        ),
    },
    {
        title: "GORVIO reads your digital presence",
        description: "The Signal Analyser studies your site and identity for missed signals.",
        visual: (active) => (
            <div className="flex flex-col gap-1.5 text-[12px]">
                {["Website", "Digital identity", "Positive intent"].map((label, index) => (
                    <motion.span
                        key={label}
                        {...appear(active, index * 0.15)}
                        className="flex items-center gap-2"
                    >
                        <span className="grid place-items-center size-4 rounded-full bg-success text-white">
                            <Check size={9} />
                        </span>
                        {label}
                        <span className="ml-auto text-grey-200">{["148 pages", "6 profiles", "1.2k people"][index]}</span>
                    </motion.span>
                ))}
            </div>
        ),
    },
    {
        title: "GORVIO recommends your workforce",
        description: "Growth opportunities, matched to the agents who can act on them.",
        visual: (active) => (
            <div className="flex items-center gap-2">
                {(["sales", "researcher", "seo"] as IAgentId[]).map((id, index) => (
                    <motion.span
                        key={id}
                        initial={false}
                        animate={{ scale: active ? 1 : 0.85, opacity: active ? 1 : 0.5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 14, delay: active ? index * 0.12 : 0 }}
                    >
                        <AgentAvatar agent={id} size={36} />
                    </motion.span>
                ))}
                <Pill tone="yellow" className="ml-1">Recommended</Pill>
            </div>
        ),
    },
    {
        title: "Hire the agents you need",
        description: "Monthly contracts. Add or pause contractors as you grow.",
        visual: (active) => (
            <div className="flex flex-col gap-1.5 text-[12px]">
                {["Sales Agent", "Lead Researcher"].map((label, index) => (
                    <span key={label} className="flex items-center justify-between">
                        {label}
                        <span className={cn(
                            "relative w-7 h-4 rounded-full smooth",
                            active ? "bg-ink" : "bg-grey-150"
                        )}>
                            <motion.span
                                initial={false}
                                animate={{ x: active ? 12 : 0 }}
                                transition={{ delay: active ? 0.2 + index * 0.2 : 0 }}
                                className="absolute top-0.5 left-0.5 size-3 rounded-full bg-white"
                            />
                        </span>
                    </span>
                ))}
            </div>
        ),
    },
    {
        title: "Agents run your campaigns",
        description: "Sourcing, research, outreach and content move on their own.",
        visual: (active) => (
            <div className="flex flex-col gap-2 text-[11px]">
                {[["Lead sourcing", 0.82], ["Drafting outreach", 0.56]].map(([label, value], index) => (
                    <span key={label as string} className="flex flex-col gap-1">
                        <span className="flex justify-between">
                            {label}
                            <span className="text-grey-200">{Math.round((value as number) * 100)}%</span>
                        </span>
                        <span className="h-1.5 rounded-full bg-grey-100 overflow-hidden">
                            <motion.span
                                initial={false}
                                animate={{ width: active ? `${(value as number) * 100}%` : "8%" }}
                                transition={{ duration: 1, delay: active ? index * 0.2 : 0 }}
                                className="block h-full rounded-full bg-yellow-100"
                            />
                        </span>
                    </span>
                ))}
            </div>
        ),
    },
    {
        title: "Review, approve, collaborate",
        description: "Nothing important ships without you. Edit, accept or send it back.",
        visual: (active) => (
            <div className="rounded-lg bg-white ring-1 ring-grey-100 p-2 text-[11px]">
                <p className="text-grey-300 leading-snug">
                    &ldquo;Hi Priya, saw Lumen just opened a London office…&rdquo;
                </p>
                <div className="flex gap-1 mt-1.5">
                    <span className={cn(
                        "rounded px-1.5 py-0.5 font-semibold smooth",
                        active ? "bg-success text-white" : "bg-ink text-white"
                    )}>
                        {active ? "Approved" : "Approve"}
                    </span>
                    <span className="rounded px-1.5 py-0.5 ring-1 ring-grey-100">Edit</span>
                </div>
            </div>
        ),
    },
    {
        title: "Track the work and results",
        description: "Every task, reply and meeting in one place, synced to your CRM.",
        visual: (active) => (
            <svg viewBox="0 0 160 44" className="w-full h-11">
                <motion.path
                    d="M2 40 C 24 36, 34 30, 50 30 S 78 20, 96 18 S 130 8, 158 4"
                    fill="none"
                    stroke="var(--color-ink)"
                    strokeWidth={2.2}
                    strokeLinecap="round"
                    initial={false}
                    animate={{ pathLength: active ? 1 : 0.15 }}
                    transition={{ duration: 1.1 }}
                />
                <circle cx={158} cy={4} r={3.5} fill="var(--color-yellow-100)" stroke="var(--color-ink)" strokeWidth={1.5} />
            </svg>
        ),
    },
]

const NODE_POSITIONS: [number, number][] = [
    [30, 40], [335, 40], [640, 40], [945, 40],
    [945, 360], [640, 360], [335, 360],
]

const THRESHOLDS = [0, 0.16, 0.32, 0.49, 0.66, 0.82, 0.96]

const StepNode = ({
    step,
    index,
    active,
    className = "",
    style,
}: {
    step: IStep
    index: number
    active: boolean
    className?: string
    style?: React.CSSProperties
}) => (
    <motion.div
        initial={false}
        animate={{ opacity: active ? 1 : 0.55, scale: active ? 1 : 0.97 }}
        transition={{ duration: 0.4 }}
        style={style}
        className={cn(
            "rounded-2xl bg-white p-4 flex flex-col gap-3 smooth",
            active ? "shadow-lift ring-2 ring-ink" : "shadow-card ring-1 ring-ink/6",
            className
        )}
    >
        <div className="flex items-center gap-2">
            <span className={cn(
                "grid place-items-center size-6 rounded-full text-[12px] font-bold smooth",
                active ? "bg-yellow-100 text-ink" : "bg-grey-50 text-grey-300"
            )}>
                {index + 1}
            </span>
            <p className="font-semibold text-[14px] leading-tight">{step.title}</p>
        </div>
        <p className="text-[12px] text-grey-300 leading-snug">{step.description}</p>
        <div className="mt-auto rounded-xl bg-paper p-2.5">
            {step.visual(active)}
        </div>
    </motion.div>
)

export const HowItWorks = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const reduced = useReducedMotion()
    const [progress, setProgress] = useState(reduced ? 1 : 0)

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "center 50%"],
    })

    useMotionValueEvent(scrollYProgress, "change", value =>
        setProgress(reduced ? 1 : value)
    )

    return (
        <section
            id="how-it-works"
            className="relative bg-white py-32 max-mobile:py-20"
        >
            <div className="max-w-7xl mx-auto px-6 max-mobile:px-4">
                <SectionHeading
                    align="center"
                    title="From a URL to a working team."
                    description="Tell GORVIO about your business once. It finds the opportunities, recommends the contractors, and gets them working — with you approving along the way."
                />

                <div
                    ref={ref}
                    className="
                        relative mt-16 rounded-[28px] bg-paper dot-grid
                        ring-1 ring-ink/5 p-6 max-mobile:hidden
                    "
                >
                    <ScaledFrame width={1200} height={600}>
                        <div className="relative w-[1200px] h-[600px]">
                            <svg
                                aria-hidden
                                viewBox="0 0 1200 600"
                                className="absolute inset-0 w-full h-full"
                            >
                                <path
                                    d="M145 145 H1040 Q1060 145 1060 165 V445 Q1060 465 1040 465 H450"
                                    fill="none"
                                    stroke="var(--color-grey-150)"
                                    strokeWidth={2}
                                    strokeDasharray="6 7"
                                />
                                <motion.path
                                    d="M145 145 H1040 Q1060 145 1060 165 V445 Q1060 465 1040 465 H450"
                                    fill="none"
                                    stroke="var(--color-ink)"
                                    strokeWidth={2.5}
                                    strokeLinecap="round"
                                    style={{ pathLength: reduced ? 1 : scrollYProgress }}
                                />
                            </svg>

                            {STEPS.map((step, index) => (
                                <StepNode
                                    key={step.title}
                                    step={step}
                                    index={index}
                                    active={progress >= THRESHOLDS[index]}
                                    className="absolute w-[230px] min-h-[210px]"
                                    style={{
                                        left: NODE_POSITIONS[index][0],
                                        top: NODE_POSITIONS[index][1],
                                    }}
                                />
                            ))}

                            <div className="absolute left-[30px] top-[420px] flex flex-col items-start gap-3 w-[250px]">
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                    className="flex items-start gap-2.5 rounded-2xl bg-ink text-white text-[13px] px-4 py-3 shadow-lift"
                                >
                                    <AgentAvatar agent="signal" size={24} ring={false} />
                                    <span>
                                        {progress < 0.49
                                            ? "Give me a minute — I'm reading your website."
                                            : progress < 0.84
                                                ? "Your team's on it. I'll ping you when something needs a yes."
                                                : "Here's what shipped this week."
                                        }
                                    </span>
                                </motion.div>
                            </div>
                        </div>
                    </ScaledFrame>
                </div>

                <ol className="mobile:hidden mt-12 relative flex flex-col gap-4 pl-6">
                    <span aria-hidden className="absolute left-2 top-3 bottom-3 w-px bg-grey-150" />
                    {STEPS.map((step, index) => (
                        <Reveal as="li" key={step.title} className="relative">
                            <span aria-hidden className="absolute -left-[22px] top-5 size-3 rounded-full bg-yellow-100 ring-2 ring-white" />
                            <StepNode step={step} index={index} active />
                        </Reveal>
                    ))}
                </ol>
            </div>
        </section>
    )
}
