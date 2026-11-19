export const pricing = {
    title: "Hire by the month. Bundle as you grow.",
    description: "Start with one contractor and add more when the work grows. Prices are indicative while we're in private beta.",
    beta: "Beta pricing, subject to change",
    perMonth: "/ month",
    currency: "€",
    popular: "Most popular",
    tabs: {
        sales: "Sales",
        marketing: "Marketing",
        enterprise: "Enterprise",
    },
    enterpriseNote: "Custom agent counts, industries, lead volume and daily email limits. Sales and marketing are scoped and priced separately, with dedicated onboarding for your team.",
    salesNote: "Every Sales Agent runs the whole flow: leads, research, DMs, booked meetings and offers sent from your CRM. Each agent covers up to 5 industries and 3,000 leads a month, split across as many campaigns as you like. Bundling adds more agents for more reach and a faster flow.",
    marketingNote: "Each marketing agent does its own job. Bundles start with the Writer and add the Graphic Designer and Video Agent. SEO intelligence is included in every bundle.",
    salesLimits: [
        "5 industries · 3k leads/mo per agent",
        "100 emails/day per agent",
        "Unlimited campaigns",
        "Every DM needs approval",
    ],
    enterprisePrice: "Custom",
    enterprise: {
        sales: {
            name: "Enterprise Sales",
            summary: "More agents, higher limits and hands-on onboarding for larger teams.",
            features: [
                "Custom industries & leads",
                "Higher email limits",
                "Dedicated onboarding",
            ],
            cta: "Contact sales",
            mailSubject: "Grovio Enterprise — Sales",
            mailBody: "Hi,\n\nI'm interested in a Grovio Enterprise sales plan.\n\nCompany name:\nWebsite:\nApprox. team size:\nWhat we're selling:\n\nThanks,",
        },
        marketing: {
            name: "Enterprise Marketing",
            summary: "A custom marketing workforce with the agents and volume you need.",
            features: [
                "Custom agent mix",
                "Brand & channels at scale",
                "Dedicated onboarding",
            ],
            cta: "Contact us",
            mailSubject: "Grovio Enterprise — Marketing",
            mailBody: "Hi,\n\nI'm interested in a Grovio Enterprise marketing plan.\n\nCompany name:\nWebsite:\nChannels we publish on:\nWhat we need help with:\n\nThanks,",
        },
    },
    plans: {
        "sales-1": {
            name: "1 Sales Agent",
            summary: "One full-flow agent for focused outbound.",
            features: ["Up to 5 industries", "3,000 leads a month", "100 emails a day", "Unlimited campaigns"],
        },
        "sales-2": {
            name: "2 Sales Agents",
            summary: "Two agents in parallel, up to 10 industries.",
            features: ["Up to 10 industries", "6,000 leads a month", "100 emails a day", "Faster flow"],
        },
        "sales-3": {
            name: "3 Sales Agents",
            summary: "The full sales team, up to 15 industries.",
            features: ["Up to 15 industries", "9,000 leads a month", "100 emails a day", "Fastest flow"],
        },
        writer: {
            name: "Writer",
            summary: "Articles, posts and newsletters in your voice.",
            features: ["SEO intelligence included", "Content pipeline and schedule", "Brand voice config"],
        },
        "writer-graphic": {
            name: "Writer + Graphic Designer",
            summary: "Words and on-brand visuals for every piece.",
            features: ["Everything in Writer", "Covers, carousels and social visuals", "Style config"],
        },
        "marketing-all": {
            name: "Writer + Graphic + Video",
            summary: "The full content team, video included.",
            features: ["Everything in Writer + Graphic", "Short-form video for each channel", "Captions in house style"],
        },
    },
    cta: "Apply for this plan",
    caller: "Hot Leads Caller is coming soon, priced per qualified call.",
}
