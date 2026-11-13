import type { IDictionary } from "@/dictionaries"

import { de } from "../de"

export const deAt: IDictionary = {
    ...de,
    home: {
        ...de.home,
        meta: {
            ...de.home.meta,
            description: "Geben Sie Ihre Website ein, und Grovio erstellt Ihre ICP-Kampagne, findet die besten Leads und setzt KI-Fachkräfte für Vertrieb und Marketing ein, für Unternehmen in Österreich und der ganzen EU. Sie geben frei, was hinausgeht. Für die EU gebaut und DSGVO-konform.",
        },
    },
    industries: {
        ...de.industries,
        list: {
            ...de.industries.list,
            restaurants: {
                ...de.industries.list.restaurants,
                dm: "Hallo Julia, Ihr Team ist gerade ins Büro in der Mariahilfer Straße gezogen – willkommen in der Nachbarschaft! Unser Extrazimmer bietet Platz für 24 Personen, ideal für Mittag- und Abendessen im Team. Darf ich Ihnen unsere Menüs schicken?",
            },
            "real-estate": {
                ...de.industries.list["real-estate"],
                dm: "Hallo Andreas, die Mieten für 2-Zimmer-Wohnungen in der Leopoldstadt sind heuer um 6 % gestiegen. Falls Sie überlegen, Ihre Wohnungen zu verkaufen oder neu zu vermieten, zeige ich Ihnen gern, was vergleichbare Wohnungen erzielt haben. Interesse?",
            },
            "property-management": {
                ...de.industries.list["property-management"],
                dm: "Hallo Petra, viele Eigentümergemeinschaften in Linz prüfen nach den heurigen Betriebskostenabrechnungen ihre Hausverwaltung. Wir legen jede Kostenposition einzeln offen. Lohnt sich ein Vergleich?",
            },
            "car-dealerships": {
                ...de.industries.list["car-dealerships"],
                dm: "Hallo Stefan, Ihr Team in Salzburg ist heuer auf 40 Personen gewachsen. Wir betreuen Firmenautos von der Bestellung bis zum Service, mit einem fixen Ansprechpartner. Darf ich Ihnen unsere Flottenkonditionen schicken?",
            },
            "tax-advisors": {
                ...de.industries.list["tax-advisors"],
                dm: "Hallo Lukas, herzlichen Glückwunsch zur Firmenbuch-Eintragung Ihrer GmbH. Beim ersten Jahresabschluss verlieren die meisten Gründer viel Zeit. Wir betreuen 40 junge Unternehmen in Wien. Möchten Sie unsere Checkliste für das erste Jahr?",
            },
        },
    },
}
