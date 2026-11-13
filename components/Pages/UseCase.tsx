// #region imports
import Link from "next/link"

import { Arrow } from "@/icons"
import { IAgent } from "@/lib/types"
import { IToolId } from "@/data/integrations"
import { cn } from "@/utils"

import { AgentAvatar } from "@/components/Mascots"
import { Pill } from "@/components/Mockups"

import { UseCaseFlow } from "./Flow"
// #endregion

export const UseCase = ({
    agent,
    href,
    title,
    description,
    points,
    output,
    tools,
    soon,
    viewLabel,
    toolNames,
    flip = false,
}: {
    agent: IAgent
    href: string
    title: string
    description: string
    points: string[]
    output: string
    tools: IToolId[]
    soon?: string
    viewLabel: string
    toolNames?: Partial<Record<IToolId, string>>
    flip?: boolean
}) => (
    <article className={cn(
        "grid gap-16 items-center max-tablet:grid-cols-1 max-tablet:gap-8",
        flip ? "grid-cols-[7fr_5fr]" : "grid-cols-[5fr_7fr]"
    )}>
        <div className={cn("flex flex-col items-start gap-4", flip && "tablet:order-2")}>
            <h3 className="font-display text-[clamp(1.6rem,2.6vw,2.3rem)] font-semibold leading-[1.05] tracking-[-0.03em] max-w-[18ch]">
                {title}
            </h3>
            <p className="text-lg text-grey-300 leading-relaxed max-w-md max-mobile:text-base">
                {description}
            </p>
            <Link
                href={href}
                aria-label={`${viewLabel} ${agent.role}`}
                className="
                    group mt-3 inline-flex items-center gap-2.5 rounded-full bg-white ring-1 ring-ink/8 py-1.5 pl-1.5 pr-4
                    text-sm font-semibold hover:ring-ink/20 hover:shadow-card smooth
                    outline-none focus-visible:ring-2 focus-visible:ring-ink
                "
            >
                <AgentAvatar agent={agent.id} size={28} ring={false} />
                {agent.role}
                {soon && <Pill>{soon}</Pill>}
                <Arrow size={13} className="group-hover:translate-x-0.5 smooth" />
            </Link>
        </div>

        <UseCaseFlow
            tools={tools}
            agent={agent.id}
            label={agent.name}
            sublabel={agent.role}
            steps={points}
            output={output}
            toolNames={toolNames}
        />
    </article>
)
