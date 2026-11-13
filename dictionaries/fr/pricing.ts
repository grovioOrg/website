import type { IDictionary } from "@/dictionaries"

export const pricing: IDictionary["pricing"] = {
    title: "Recrutez au mois. Élargissez votre pack en grandissant.",
    description: "Commencez avec un prestataire et ajoutez-en quand le travail augmente. Les prix sont indicatifs pendant la bêta privée.",
    beta: "Tarifs bêta, susceptibles d'évoluer",
    perMonth: "/ mois",
    currency: "€",
    popular: "Le plus populaire",
    tabs: {
        sales: "Vente",
        marketing: "Marketing",
    },
    salesNote: "Chaque Sales Agent gère tout le processus : recherche de leads, qualification, analyse et DM. Un pack ajoute des agents qui travaillent en parallèle, pas des rôles différents.",
    marketingNote: "Chaque agent marketing a son propre métier. Les packs commencent par le Writer, puis ajoutent le Graphic Designer et le Video Agent. L'analyse SEO est incluse dans chaque pack.",
    salesLimits: [
        "Jusqu'à 3 campagnes par agent",
        "Actif 24 h/24, 7 j/7",
        "5 leads à la fois soumis à votre validation, puis les 5 suivants",
    ],
    plans: {
        "sales-1": {
            name: "1 Sales Agent",
            summary: "Un agent complet pour une prospection ciblée.",
            features: ["Jusqu'à 3 campagnes", "Recherche de leads, qualification, analyse et DM", "Configuration des DM en langage courant"],
        },
        "sales-2": {
            name: "2 Sales Agents",
            summary: "Deux agents en parallèle, jusqu'à 6 campagnes.",
            features: ["Jusqu'à 6 campagnes", "Deux lots de 5 en simultané", "Recherches partagées entre agents"],
        },
        "sales-3": {
            name: "3 Sales Agents",
            summary: "L'équipe commerciale complète, jusqu'à 9 campagnes.",
            features: ["Jusqu'à 9 campagnes", "Trois lots de 5 en simultané", "Onboarding prioritaire"],
        },
        writer: {
            name: "Writer",
            summary: "Articles, posts et newsletters à votre image.",
            features: ["Analyse SEO incluse", "Pipeline et planning de contenu", "Configuration de la voix de marque"],
        },
        "writer-graphic": {
            name: "Writer + Graphic Designer",
            summary: "Des textes et des visuels fidèles à votre marque pour chaque contenu.",
            features: ["Tout le pack Writer", "Couvertures, carrousels et visuels pour les réseaux", "Configuration de style"],
        },
        "marketing-all": {
            name: "Writer + Graphic + Video",
            summary: "L'équipe contenu complète, vidéo incluse.",
            features: ["Tout le pack Writer + Graphic", "Vidéos courtes pour chaque canal", "Sous-titres dans votre style maison"],
        },
    },
    cta: "Demander cette formule",
    caller: "Hot Leads Caller arrive bientôt, facturé par appel qualifié.",
}
