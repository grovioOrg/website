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
                dm: "Die Location für die Weihnachtsfeier Ihres Teams in der Mariahilfer Straße ist heuer geschlossen. Wir setzen 60 Personen privat und haben noch Dezember-Termine. Soll ich die Speisekarte schicken?",
            },
            "real-estate": {
                ...de.industries.list["real-estate"],
                dm: "Ihre Wohnung in der Leopoldstadt ist seit zwei Monaten inseriert, mit zwei Preisnachlässen. Wir haben heuer vier vergleichbare Einheiten in der Nähe verkauft. Soll ich die Vergleichspreise schicken?",
            },
            "property-management": {
                ...de.industries.list["property-management"],
                dm: "Mieter in Linz bewerten an dieser Adresse immer wieder langsame Reparaturen. Wir antworten innerhalb von 24 Stunden mit festem Techniker-Netz. Soll ich den Übergabeplan für die Eigentümerversammlung schicken?",
            },
            "car-dealerships": {
                ...de.industries.list["car-dealerships"],
                dm: "Sie stellen in Salzburg 12 Außendienst-Techniker ein, alle mit Firmenwagen. Wir liefern 12 baugleiche Transporter mit Service in einem Vertrag. Soll ich ein Flottenangebot schicken?",
            },
        },
    },
}
