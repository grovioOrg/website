// #region imports
import { cn } from "@/utils"
// #endregion

export type IGlyph =
    | "playbooks"
    | "campaigns"
    | "epic"
    | "seo"
    | "marketing"
    | "playground"
    | "account"
    | "search"
    | "inbox"
    | "chat"
    | "board"
    | "timeline"
    | "filter"
    | "bolt"

const PATHS: Record<IGlyph, string> = {
    playbooks: "M3 2.5h7.5a2 2 0 0 1 2 2V14H5a2 2 0 0 1-2-2V2.5ZM3 12a2 2 0 0 1 2-2h7.5",
    campaigns: "M2.5 6.5v3l7 3v-9l-7 3ZM9.5 3.5l4-1.5v12l-4-1.5M4.5 10l1 3.5",
    epic: "M2.5 2.5h3v11h-3zM6.5 2.5h3v7h-3zM10.5 2.5h3v9h-3z",
    seo: "M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM10.6 10.6 14 14",
    marketing: "M2.5 4h11M2.5 8h7M2.5 12h9M11.5 6.5 13.5 8l-2 1.5",
    playground: "M8 2v2M8 12v2M2 8h2M12 8h2M4 4l1.5 1.5M10.5 10.5 12 12M12 4l-1.5 1.5M5.5 10.5 4 12M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    account: "M8 8a2.75 2.75 0 1 0 0-5.5A2.75 2.75 0 0 0 8 8ZM2.75 14c.5-2.7 2.6-4 5.25-4s4.75 1.3 5.25 4",
    search: "M7 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM10.6 10.6 14 14",
    inbox: "M2.5 9.5 4 3h8l1.5 6.5V13h-11V9.5Zm0 0H6l.5 1.5h3l.5-1.5h3.5",
    chat: "M2.5 3.5h11v7.5H7l-3 2.5V11H2.5V3.5Z",
    board: "M2.5 3h11v10h-11zM6.25 3v10M9.75 3v10",
    timeline: "M2.5 4h6M5 8h7M3.5 12h5",
    filter: "M2.5 4h11M4.5 8h7M6.5 12h3",
    bolt: "M9 1.5 3.5 9H8l-1 5.5L12.5 7H8l1-5.5Z",
}

export const Glyph = ({
    name,
    size = 16,
    className = "",
}: {
    name: IGlyph
    size?: number
    className?: string
}) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn("shrink-0", className)}
        aria-hidden
    >
        <path d={PATHS[name]} />
    </svg>
)
