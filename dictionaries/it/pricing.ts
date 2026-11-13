import type { IDictionary } from "@/dictionaries"

export const pricing: IDictionary["pricing"] = {
    title: "Assumi al mese. Amplia il team quando cresci.",
    description: "Inizia con un collaboratore e aggiungine altri quando il lavoro aumenta. Durante la beta privata i prezzi sono indicativi.",
    beta: "Prezzi beta, soggetti a modifiche",
    perMonth: "/ mese",
    currency: "€",
    popular: "Il più scelto",
    tabs: {
        sales: "Vendite",
        marketing: "Marketing",
    },
    salesNote: "Ogni Sales Agent gestisce l'intero flusso: ricerca dei lead, classificazione, analisi e DM. Con i pacchetti aggiungi altri agenti che lavorano in parallelo, non mansioni diverse.",
    marketingNote: "Ogni agente di marketing ha il suo compito. I pacchetti partono dal Writer e aggiungono Graphic Designer e Video Agent. L'analisi SEO è inclusa in ogni pacchetto.",
    salesLimits: [
        "Fino a 3 campagne per agente",
        "Attivo 24/7",
        "5 lead alla volta da approvare, poi i 5 successivi",
    ],
    plans: {
        "sales-1": {
            name: "1 Sales Agent",
            summary: "Un agente completo per un outbound mirato.",
            features: ["Fino a 3 campagne", "Ricerca, classificazione e analisi dei lead, più DM", "Configurazione dei DM in parole semplici"],
        },
        "sales-2": {
            name: "2 Sales Agent",
            summary: "Due agenti in parallelo, fino a 6 campagne.",
            features: ["Fino a 6 campagne", "Due blocchi da 5 in contemporanea", "Ricerche condivise tra gli agenti"],
        },
        "sales-3": {
            name: "3 Sales Agent",
            summary: "Il team vendite completo, fino a 9 campagne.",
            features: ["Fino a 9 campagne", "Tre blocchi da 5 in contemporanea", "Onboarding prioritario"],
        },
        writer: {
            name: "Writer",
            summary: "Articoli, post e newsletter con la tua voce.",
            features: ["Analisi SEO inclusa", "Pipeline e calendario dei contenuti", "Configurazione della voce del brand"],
        },
        "writer-graphic": {
            name: "Writer + Graphic Designer",
            summary: "Testi e visual coerenti con il brand per ogni contenuto.",
            features: ["Tutto ciò che include Writer", "Copertine, caroselli e visual social", "Configurazione dello stile"],
        },
        "marketing-all": {
            name: "Writer + Graphic + Video",
            summary: "Il team contenuti completo, video inclusi.",
            features: ["Tutto ciò che include Writer + Graphic", "Video brevi per ogni canale", "Sottotitoli nello stile del brand"],
        },
    },
    cta: "Candidati per questo piano",
    caller: "Hot Leads Caller è in arrivo, con prezzo per chiamata qualificata.",
}
