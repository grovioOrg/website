// #region imports
import {
    IAgent,
    IAgentId
} from "@/lib/types"
// #endregion

export const agents: IAgent[] = [
    {
        id: "sales",
        name: "Sunny",
        role: "Sales Agent",
        team: "sales",
        color: "var(--color-agent-sales)",
        tagline: "Always first out the door.",
        description:
            "Sources fresh prospects from your lead providers, matched against the ICP of each campaign, and keeps the top of your funnel full.",
        quirk: "Never lets a lead go cold.",
        task: {
            title: "Find 60 seed-stage fintech founders in London",
            steps: [
                "Pulled 412 profiles from Provider API",
                "Matched against campaign ICP",
                "Sent 60 to Lead Researcher",
            ],
            result: "60 leads queued",
        },
    },
    {
        id: "researcher",
        name: "Bolt",
        role: "Lead Researcher",
        team: "sales",
        color: "var(--color-agent-researcher)",
        tagline: "Reads the whole website. Every time.",
        description:
            "Researches and qualifies each prospect, accepts or discards them with reasons you can audit, and hands over the context that makes outreach personal.",
        quirk: "Keeps receipts for every decision.",
        task: {
            title: "Qualify 60 leads for the London fintech campaign",
            steps: [
                "Checked funding, headcount and hiring signals",
                "Discarded 9 outside ICP, with reasons",
                "Wrote research notes for 51",
            ],
            result: "51 accepted · 9 discarded",
        },
    },
    {
        id: "signal",
        name: "Echo",
        role: "Signal Analyst",
        team: "sales",
        color: "var(--color-agent-signal)",
        tagline: "Hears a 'maybe' from a mile away.",
        description:
            "Watches replies and CTA clicks, spots positive intent, decides when a follow-up is needed, and syncs every result to your CRM.",
        quirk: "Never lets a warm reply go cold.",
        task: {
            title: "Triage replies from this week's outreach",
            steps: [
                "Read 37 replies and 112 link clicks",
                "Flagged 6 positive signals",
                "Synced 6 deals to CRM, scheduled 11 follow-ups",
            ],
            result: "6 deals in CRM",
        },
    },
    {
        id: "seo",
        name: "Scout",
        role: "SEO Agent",
        team: "marketing",
        color: "var(--color-agent-seo)",
        tagline: "Finds the gap before your competitors do.",
        description:
            "Analyses your website and digital identity, surfaces keyword gaps, tracks performance and recommends the CTAs worth fixing first.",
        quirk: "Carries a magnifying glass. Uses it.",
        task: {
            title: "Audit acme.com against three competitors",
            steps: [
                "Crawled 148 pages",
                "Found 23 keyword gaps",
                "Ranked fixes by expected impact",
            ],
            result: "23 opportunities briefed",
        },
    },
    {
        id: "writer",
        name: "Quill",
        role: "Writer Agent",
        team: "marketing",
        color: "var(--color-agent-writer)",
        tagline: "Has opinions about your em dashes.",
        description:
            "Turns SEO briefs into articles, posts and newsletters in your brand voice, ready for your review in the content pipeline.",
        quirk: "Reads everything twice.",
        task: {
            title: "Draft: 'Bookkeeping for seed-stage startups'",
            steps: [
                "Outlined from SEO brief",
                "Wrote 1,450 words in house style",
                "Sent to review with 3 headline options",
            ],
            result: "Draft ready for review",
        },
    },
    {
        id: "graphic",
        name: "Pixie",
        role: "Graphic Designer",
        team: "marketing",
        color: "var(--color-agent-graphic)",
        tagline: "Thinks in grids. Dreams in colour.",
        description:
            "Creates on-brand visuals for every piece of content, from blog covers to social carousels, using your style configuration.",
        quirk: "Winks when the kerning is right.",
        task: {
            title: "Cover and carousel for the bookkeeping article",
            steps: [
                "Applied brand style config",
                "Generated 4 cover options",
                "Built a 6-slide carousel",
            ],
            result: "10 assets in pipeline",
        },
    },
    {
        id: "video",
        name: "Reel",
        role: "Video Agent",
        team: "marketing",
        color: "var(--color-agent-video)",
        tagline: "Every post deserves a trailer.",
        description:
            "Produces short-form video assets from your articles and launches, cut to the formats each channel expects.",
        quirk: "Says 'action' before every task.",
        task: {
            title: "30-second teaser for the bookkeeping article",
            steps: [
                "Storyboarded 5 scenes",
                "Cut vertical and square versions",
                "Added captions in house style",
            ],
            result: "2 cuts ready to schedule",
        },
    },
]

export const getAgent = (id: IAgentId): IAgent =>
    agents.find(agent => agent.id === id) ?? agents[0]
