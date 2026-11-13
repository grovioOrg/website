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
    | "bed"
    | "dish"
    | "cart"
    | "bag"
    | "key"
    | "building"
    | "car"
    | "scale"
    | "receipt"
    | "person"
    | "wrench"
    | "globe"
    | "chevron"
    | "phone"
    | "people"

const PATHS: Record<IGlyph, string> = {
    bed: "M2 12.5V4M2 9.5h12v3M14 12.5V9.5a2 2 0 0 0-2-2H7.5v2M4.5 7.5a1 1 0 1 0 0-.01",
    dish: "M2 11h12M3.5 11a4.5 4.5 0 0 1 9 0M8 4.5v2M2.5 13.5h11",
    cart: "M1.5 2.5h2l1.6 7.5h7.4l1.5-5.5H4.3M6.5 13a.75.75 0 1 0 0-.01M12 13a.75.75 0 1 0 0-.01",
    bag: "M3 5.5h10l-.8 8H3.8L3 5.5ZM5.75 5.5V4.5a2.25 2.25 0 0 1 4.5 0v1",
    key: "M5.5 10.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8 8.5l5.5 5M11.5 11.5l1.5-1.5",
    building: "M3 14V2.5h7V14M10 6h3v8M1.5 14h13M5 5h2M5 8h2M5 11h2",
    car: "M2 11V8.5l1.5-4h9L14 8.5V11H2ZM2 8.5h12M4.5 13v-2M11.5 13v-2",
    scale: "M8 2v12M4.5 14h7M3 4.5h10M3 4.5 1.5 9a1.75 1.75 0 0 0 3 0L3 4.5ZM13 4.5 11.5 9a1.75 1.75 0 0 0 3 0L13 4.5Z",
    receipt: "M3.5 1.5h9v13l-1.5-1-1.5 1-1.5-1-1.5 1-1.5-1-1.5 1v-13ZM6 5h4M6 8h4M6 11h2",
    person: "M8 7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 14a5 5 0 0 1 10 0",
    wrench: "M10 2a3.5 3.5 0 0 0-3.3 4.6L2.3 11a1.5 1.5 0 0 0 2.1 2.1l4.4-4.4A3.5 3.5 0 0 0 13.4 5L11.5 7 9.5 6.5 9 4.5 11 2.6A3.5 3.5 0 0 0 10 2Z",
    globe: "M8 14.5a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13ZM1.5 8h13M8 1.5c1.8 1.8 2.6 4 2.6 6.5S9.8 12.7 8 14.5C6.2 12.7 5.4 10.5 5.4 8S6.2 3.3 8 1.5Z",
    chevron: "M4 6l4 4 4-4",
    phone: "M3 2h3l1.2 3-1.7 1.2a8 8 0 0 0 4.3 4.3L11 8.8l3 1.2v3a1 1 0 0 1-1 1A11 11 0 0 1 2 3a1 1 0 0 1 1-1Z",
    people: "M5.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM1.5 13a4 4 0 0 1 8 0M9.5 9.2A4 4 0 0 1 14.5 13",
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
