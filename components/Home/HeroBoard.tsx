"use client"

// #region imports
import {
    useEffect,
    useRef,
    useState
} from "react"

import {
    AnimatePresence,
    LayoutGroup,
    motion,
    useInView,
    useReducedMotion
} from "framer-motion"

import { IAgentId } from "@/lib/types"
import { getAgent } from "@/data"
import { Check, Plus } from "@/icons"
import {
    AgentAvatar,
    AgentCursor,
    ICursorOwner
} from "@/components/Mascots"

import {
    AppWindow,
    Glyph,
    Pill,
    IPillTone
} from "@/components/Mockups"
// #endregion

type IColumn = "todo" | "doing" | "review" | "done"
type ICarrier = ICursorOwner

interface ITask {
    id: string
    title: string
    agent: IAgentId
    tag: string
    tone: IPillTone
    archived?: boolean
}

const POOL: Omit<ITask, "id">[] = [
    { title: "Find 60 fintech founders in London", agent: "sales", tag: "Leads", tone: "yellow" },
    { title: "Write: Bookkeeping for seed startups", agent: "writer", tag: "Content", tone: "green" },
    { title: "Refresh pricing page CTAs", agent: "seo", tag: "SEO", tone: "blue" },
    { title: "Qualify webinar sign-ups", agent: "researcher", tag: "Research", tone: "blue" },
    { title: "30s teaser for the launch post", agent: "video", tag: "Video", tone: "pink" },
    { title: "Follow-up for warm replies", agent: "signal", tag: "Outreach", tone: "green" },
    { title: "Cover art for October newsletter", agent: "graphic", tag: "Design", tone: "purple" },
    { title: "Keyword gap audit vs. 3 competitors", agent: "seo", tag: "SEO", tone: "blue" },
    { title: "Sync 18 positive replies to CRM", agent: "signal", tag: "CRM", tone: "green" },
    { title: "Personalised intro for Lumen Labs", agent: "researcher", tag: "Drafts", tone: "blue" },
    { title: "Source leads from Comment Sniffer", agent: "sales", tag: "Leads", tone: "yellow" },
    { title: "LinkedIn carousel: 5 hiring myths", agent: "graphic", tag: "Design", tone: "purple" },
]

const seed = (indexes: number[]) =>
    indexes.map(index => ({ ...POOL[index], id: `s${index}` }))

const INITIAL: Record<IColumn, ITask[]> = {
    todo: seed([0, 1, 2]),
    doing: seed([3, 4]),
    review: seed([5, 6]),
    done: seed([7, 8]),
}

const COLUMNS: {
    id: IColumn
    name: string
    tone: IPillTone
    surface: string
}[] = [
    { id: "todo", name: "To do", tone: "purple", surface: "bg-[#FAF8FE]" },
    { id: "doing", name: "In progress", tone: "yellow", surface: "bg-[#FFFCF0]" },
    { id: "review", name: "Needs approval", tone: "blue", surface: "bg-[#F6F8FF]" },
    { id: "done", name: "Done", tone: "green", surface: "bg-[#F4FBF7]" },
]

const NEXT: Record<IColumn, IColumn> = {
    todo: "doing",
    doing: "review",
    review: "done",
    done: "done",
}

const CYCLE: (IColumn | "create")[] = ["todo", "review", "create", "doing"]

const TypingText = ({ text }: { text: string }) => {
    const [length, setLength] = useState(0)

    useEffect(() => {
        const timer = setInterval(
            () => setLength(current => {
                if (current >= text.length)
                    clearInterval(timer)
                return Math.min(text.length, current + 1)
            }),
            1100 / text.length
        )

        return () => clearInterval(timer)
    }, [text])

    return (
        <>
            {text.slice(0, length)}
            <span className="inline-block w-px h-3.5 -mb-0.5 ml-px bg-ink animate-caret" />
        </>
    )
}

const TaskCard = ({
    task,
    column,
    carrier,
    typing,
}: {
    task: ITask
    column: IColumn
    carrier?: ICarrier
    typing: boolean
}) => {
    const agent = getAgent(task.agent)
    const carried = !!carrier && !typing
    const approving = carrier === "you"

    return (
        <motion.div
            layout
            layoutId={task.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{
                opacity: task.archived ? 0 : 1,
                y: 0,
                rotate: carried ? 2.5 : 0,
                scale: carried ? 1.035 : 1,
            }}
            transition={{
                layout: { type: "spring", stiffness: 120, damping: 19 },
                default: { duration: 0.3 },
            }}
            style={{ zIndex: carrier ? 20 : 1 }}
            className={`
                relative rounded-[10px] bg-white px-3 py-2.5 text-[13px]
                ring-1 ring-ink/6 smooth
                ${carried ? "shadow-lift" : "shadow-card"}
            `}
        >
            <p className="font-medium text-ink leading-snug min-h-[18px]">
                {typing ? <TypingText text={task.title} /> : task.title}
            </p>

            <div className="flex items-center gap-1.5 mt-2 text-[11px] text-grey-300">
                <AgentAvatar agent={task.agent} size={18} ring={false} />
                <span className="truncate">{agent.role}</span>
                <Pill tone={task.tone} className="ml-auto">{task.tag}</Pill>
            </div>

            {column === "review" && (
                <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-grey-100">
                    <span className={`
                        inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[11px] font-semibold smooth
                        ${approving ? "bg-success text-white" : "bg-ink text-white"}
                    `}>
                        {approving && <Check size={11} />}
                        {approving ? "Approved" : "Approve"}
                    </span>
                    <span className="rounded-md px-2 py-0.5 text-[11px] font-medium ring-1 ring-grey-100 text-grey-300">
                        Edit
                    </span>
                </div>
            )}

            {column === "done" && (
                <span className="absolute top-2.5 right-2.5 grid place-items-center size-4 rounded-full bg-success text-white">
                    <Check size={10} />
                </span>
            )}

            <AnimatePresence>
                {carrier && (
                    <motion.span
                        key={carrier}
                        initial={{ opacity: 0, scale: 0.6, x: 10, y: 10 }}
                        animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="absolute -right-3 -bottom-5 z-30"
                    >
                        <AgentCursor by={carrier} size="sm" />
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export const HeroBoard = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const inView = useInView(ref, { margin: "-10% 0px" })
    const reduced = useReducedMotion()

    const [board, setBoard] = useState(INITIAL)
    const [carry, setCarry] = useState<{ id: string, by: ICarrier } | null>(null)
    const [typing, setTyping] = useState<string | null>(null)
    const [activity, setActivity] = useState("Sunny started sourcing leads for Q4 Fintech")

    const boardRef = useRef(board)
    const cycle = useRef(0)
    const pool = useRef(9)
    const counter = useRef(0)

    useEffect(() => {
        boardRef.current = board
    }, [board])

    useEffect(() => {
        if (!inView || reduced)
            return

        const timers: ReturnType<typeof setTimeout>[] = []
        const later = (fn: () => void, ms: number) =>
            timers.push(setTimeout(fn, ms))

        const run = () => {
            const step = CYCLE[cycle.current++ % CYCLE.length]

            if (step === "create") {
                const onBoard = Object.values(boardRef.current)
                    .flat()
                    .map(item => item.title)

                let base = POOL[pool.current++ % POOL.length]
                while (onBoard.includes(base.title))
                    base = POOL[pool.current++ % POOL.length]

                const task: ITask = {
                    ...base,
                    id: `t${counter.current++}`,
                }

                setBoard(current => ({ ...current, todo: [...current.todo, task] }))
                setCarry({ id: task.id, by: "you" })
                setTyping(task.id)
                setActivity(`You briefed ${getAgent(task.agent).role}: “${task.title}”`)

                later(() => {
                    setTyping(null)
                    setCarry(null)
                }, 1700)
            }
            else {
                const task = boardRef.current[step].find(item => !item.archived)
                const to = NEXT[step]

                if (task) {
                    const by: ICarrier = step === "review" ? "you" : task.agent

                    setCarry({ id: task.id, by })
                    setActivity(by === "you"
                        ? `You approved “${task.title}”`
                        : `${getAgent(task.agent).name} moved “${task.title}” to ${COLUMNS.find(c => c.id === to)?.name}`
                    )

                    later(() => setBoard(current => {
                        const moving = current[step].find(item => item.id === task.id)
                        if (!moving)
                            return current

                        const target = [...current[to], moving]
                        const live = target.filter(item => !item.archived)
                        const retired = to === "done" && live.length > 3
                            ? live[0].id
                            : undefined

                        return {
                            ...current,
                            [step]: current[step].filter(item => item.id !== task.id),
                            [to]: target.map(item => item.id === retired
                                ? { ...item, archived: true }
                                : item
                            ),
                        }
                    }), by === "you" ? 900 : 650)

                    later(() => setCarry(null), 1800)
                    later(() => setBoard(current => ({
                        ...current,
                        done: current.done.filter(item => !item.archived),
                    })), 2300)
                }
            }

            later(run, 2700)
        }

        later(run, 900)
        return () => timers.forEach(clearTimeout)
    }, [inView, reduced])

    return (
        <div ref={ref}>
            <AppWindow
                active="epic"
                title="Northwind · Epic Board"
                className="h-[720px]"
            >
                <div className="px-8 pt-7 pb-4 border-b border-grey-100">
                    <div className="flex items-center gap-3">
                        <span className="grid place-items-center size-11 rounded-xl bg-yellow-100">
                            <Glyph name="bolt" size={22} className="text-ink" />
                        </span>
                        <div>
                            <h3 className="font-display text-[26px] font-semibold tracking-tight leading-none">
                                Q4 Growth Sprint
                            </h3>
                            <p className="text-[12px] text-grey-200 mt-1">
                                7 agents · 2 campaigns · Sprint ends Friday
                            </p>
                        </div>

                        <div className="ml-auto flex items-center gap-3">
                            <span className="flex -space-x-1.5">
                                {(["sales", "researcher", "signal", "seo", "writer"] as IAgentId[]).map(id => (
                                    <AgentAvatar key={id} agent={id} size={24} />
                                ))}
                            </span>
                            <span className="
                                inline-flex items-center gap-1 rounded-lg bg-ink text-white
                                text-[12px] font-medium px-3 py-1.5
                            ">
                                <Plus size={13} /> New task
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-5 mt-5 text-[13px] text-grey-300">
                        <span className="flex items-center gap-1.5 text-ink font-medium">
                            <Glyph name="board" size={15} /> Board
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Glyph name="timeline" size={15} /> Timeline
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Glyph name="filter" size={15} /> By agent
                        </span>

                        <span className="ml-auto flex items-center gap-2 text-[12px] max-w-[440px]">
                            <span className="relative flex size-2">
                                <span className="absolute inset-0 rounded-full bg-success animate-ping opacity-60" />
                                <span className="relative size-2 rounded-full bg-success" />
                            </span>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={activity}
                                    initial={{ opacity: 0, y: 6 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -6 }}
                                    transition={{ duration: 0.25 }}
                                    className="truncate"
                                >
                                    {activity}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </div>
                </div>

                <LayoutGroup>
                    <div className="grid grid-cols-4 gap-3 p-5 flex-1 min-h-0 overflow-hidden">
                        {COLUMNS.map(({ id, name, tone, surface }) => (
                            <div
                                key={id}
                                className={`flex flex-col gap-2 rounded-xl p-2 ${surface}`}
                            >
                                <div className="flex items-center gap-2 px-1 py-1">
                                    <Pill tone={tone} dot>{name}</Pill>
                                    <span className="text-[12px] text-grey-200">
                                        {board[id].filter(task => !task.archived).length}
                                    </span>
                                </div>

                                {board[id].map(task => (
                                    <TaskCard
                                        key={task.id}
                                        task={task}
                                        column={id}
                                        carrier={carry?.id === task.id ? carry.by : undefined}
                                        typing={typing === task.id}
                                    />
                                ))}

                                {id === "todo" && (
                                    <span className="flex items-center gap-1.5 px-2 py-1 text-[12px] text-grey-200">
                                        <Plus size={12} /> Brief an agent
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </LayoutGroup>
            </AppWindow>
        </div>
    )
}
