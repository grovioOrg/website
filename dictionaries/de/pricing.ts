import type { IDictionary } from "@/dictionaries"

export const pricing: IDictionary["pricing"] = {
    title: "Monatlich buchen. Bündeln, wenn Sie wachsen.",
    description: "Starten Sie mit einer Fachkraft und ergänzen Sie weitere, wenn die Arbeit wächst. Während der privaten Beta sind die Preise unverbindlich.",
    beta: "Beta-Preise, Änderungen vorbehalten",
    perMonth: "/ Monat",
    currency: "€",
    popular: "Am beliebtesten",
    tabs: {
        sales: "Vertrieb",
        marketing: "Marketing",
    },
    salesNote: "Jeder Sales Agent übernimmt den gesamten Ablauf: Leads finden, klassifizieren, recherchieren und DMs schreiben. Im Bündel arbeiten mehr Agents parallel, nicht an anderen Aufgaben.",
    marketingNote: "Jeder Marketing-Agent hat seine eigene Aufgabe. Bündel starten mit dem Writer und ergänzen Graphic Designer und Video Agent. SEO-Analyse ist in jedem Bündel enthalten.",
    salesLimits: [
        "Bis zu 3 Kampagnen pro Agent",
        "Läuft rund um die Uhr",
        "5 Leads zur Freigabe, dann die nächsten 5",
    ],
    plans: {
        "sales-1": {
            name: "1 Sales Agent",
            summary: "Ein Agent für den gesamten Ablauf, für gezieltes Outbound.",
            features: ["Bis zu 3 Kampagnen", "Leads finden, klassifizieren, recherchieren und DMs", "DM-Einstellungen in Alltagssprache"],
        },
        "sales-2": {
            name: "2 Sales Agents",
            summary: "Zwei Agents parallel, bis zu 6 Kampagnen.",
            features: ["Bis zu 6 Kampagnen", "Zwei 5er-Batches gleichzeitig", "Gemeinsame Recherche aller Agents"],
        },
        "sales-3": {
            name: "3 Sales Agents",
            summary: "Das komplette Vertriebsteam, bis zu 9 Kampagnen.",
            features: ["Bis zu 9 Kampagnen", "Drei 5er-Batches gleichzeitig", "Bevorzugtes Onboarding"],
        },
        writer: {
            name: "Writer",
            summary: "Artikel, Posts und Newsletter in Ihrem Ton.",
            features: ["SEO-Analyse inklusive", "Content-Pipeline und Zeitplan", "Konfiguration Ihrer Markenstimme"],
        },
        "writer-graphic": {
            name: "Writer + Graphic Designer",
            summary: "Texte und passende Visuals für jeden Beitrag.",
            features: ["Alles aus Writer", "Cover, Karussells und Social-Visuals", "Style-Konfiguration"],
        },
        "marketing-all": {
            name: "Writer + Graphic + Video",
            summary: "Das komplette Content-Team, inklusive Video.",
            features: ["Alles aus Writer + Graphic", "Kurzvideos für jeden Kanal", "Untertitel im Hausstil"],
        },
    },
    cta: "Diesen Plan anfragen",
    caller: "Der Hot Leads Caller kommt bald, abgerechnet pro qualifiziertem Anruf.",
}
