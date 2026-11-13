import type { IDictionary } from "@/dictionaries"

export const industries: IDictionary["industries"] = {
    page: {
        icp: "Eine beispielhafte ICP-Kampagne",
        dm: "Eine beispielhafte DM",
        dmNote: "Geschrieben nach Ihren DM-Einstellungen. Sie geben frei, bevor sie gesendet wird.",
        faq: "Fragen",
        others: "Weitere Branchen",
        ctaTitle: "Grovio für {industry}",
        ctaBody: "Fügen Sie Ihre Website ein, und wir zeigen Ihnen die ICP-Kampagne, die wir erstellen würden.",
        segment: "Segment",
        fit: "Passung",
        useCases: "Was Ihre Agents erledigen",
        useCasesBody: "Drei Aufgaben, die Ihre Grovio-Agents Schritt für Schritt übernehmen. Sie geben frei, was rausgeht.",
        toolsTitle: "Funktioniert mit den Tools, die Sie bereits nutzen",
    },
    list: {
        hotels: {
            name: "Hotels",
            short: "Zimmer mit Direkt- und Gruppenbuchungen füllen",
            metaTitle: "KI für Vertrieb und Marketing in Hotels",
            metaDescription: "Die KI-Agents von Grovio gewinnen Firmen- und Gruppenbuchungen, halten Ihren Content-Kalender voll und beantworten Gästeanfragen, damit Ihr Hotel weniger von Buchungsportalen abhängt.",
            title: "Mehr Direktbuchungen. Weniger Portalgebühren.",
            pitch: "Die Agents von Grovio erreichen Unternehmen, Eventplaner und Travel Manager, die Zimmer im großen Stil buchen, und halten Ihr Hotel mit Inhalten sichtbar, die gut ranken.",
            pains: [
                "Buchungsportale verdienen an jedem Zimmer mit",
                "Firmen- und Gruppenvertrieb hängt an einer viel beschäftigten Person",
                "Website und Social Media verstummen in der Nebensaison",
            ],
            agents: [
                "Erreicht Travel Manager und Eventplaner mit persönlichen DMs",
                "Schreibt saisonale Guides und Posts, die Gäste auf Ihre Website bringen",
                "Beantwortet Gästeanfragen und bucht Zimmer über Ihre Tools",
            ],
            useCases: [
                {
                    title: "Gruppen- und Firmenbuchungen gewinnen",
                    points: [
                        "Findet Eventagenturen, Planer und Travel Manager in Ihrer Nähe",
                        "Recherchiert anstehende Offsites, Konferenzen und Hochzeiten",
                        "Entwirft für jeden eine persönliche DM, immer fünf auf einmal",
                    ],
                    output: "5 DMs für Gruppenbuchungen bereit",
                },
                {
                    title: "Gäste immer wieder auf Ihre Website holen",
                    points: [
                        "Saisonale Guides zu Ihrer Region und Ihren Events",
                        "Posts für Instagram und Facebook in Ihrem Ton",
                        "Newsletter, die zur Direktbuchung führen",
                    ],
                    output: "Wöchentlicher Content zur Prüfung bereit",
                },
                {
                    title: "Gäste rund um die Uhr beantworten",
                    points: [
                        "Beantwortet Fragen zu Zimmern, Extras und Anfahrt",
                        "Bucht über Ihre MCP-fähigen Tools",
                        "Übergibt knifflige Anfragen an Ihr Team",
                    ],
                    output: "Demnächst",
                },
            ],
            icp: [
                { name: "Eventagenturen im Umkreis von 200 km", fit: 91 },
                { name: "Travel Manager in Unternehmen", fit: 85 },
                { name: "Hochzeitsplaner", fit: 78 },
            ],
            dm: "Hallo Marco, wie ich sehe, plant Ihr Team gerade die Offsite-Saison im Frühjahr. Wir empfangen Gruppen von 20–80 Personen, mit Tagungsräumen und Seeblick, 40 Minuten von Wien. Lohnt sich ein Blick auf unsere Gruppenpreise?",
            faq: [
                { q: "Welche Herausforderungen haben Hotelteams bei Direkt- und Gruppenbuchungen?", a: "Buchungsportale verdienen an jedem Zimmer mit. Firmen- und Gruppenvertrieb hängt an einer viel beschäftigten Person. Website und Social Media verstummen in der Nebensaison." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Kann Grovio mit Gästen kommunizieren?", a: "Der Concierge-Agent für Hotels und Restaurants kommt demnächst. Schon heute helfen Ihnen die Vertriebs- und Marketing-Agents von Grovio, Gruppen und Direktbuchungen zu gewinnen." },
                { q: "Werden Gäste- und Interessentendaten DSGVO-konform verarbeitet?", a: "Ja. Grovio ist für die EU gebaut und DSGVO-konform." },
            ],
        },
        restaurants: {
            name: "Restaurants",
            short: "Private Dining, Events und Stammgäste",
            metaTitle: "KI für Vertrieb und Marketing in Restaurants",
            metaDescription: "Die KI-Agents von Grovio füllen Private Dining und Events, halten Ihre Social-Media-Kanäle aktuell und beantworten bald auch Gästeanfragen und Reservierungen.",
            title: "Volle Tische, auch am Dienstag.",
            pitch: "Die Agents von Grovio erreichen Büros und Planer, die Private Dining buchen, und bringen Ihre Speisekarte, Events und Geschichte vor die Menschen in Ihrer Umgebung.",
            pains: [
                "Unter der Woche bleiben Tische und Nebenräume leer",
                "Niemand hat Zeit, jede Woche zu posten",
                "Eventanfragen landen in fünf verschiedenen Postfächern",
            ],
            agents: [
                "Erreicht Office Manager und Eventplaner in der Nähe",
                "Schreibt Posts zu neuen Menüs und Events in Ihrem Ton",
                "Beantwortet Gästeanfragen und reserviert Tische über Ihre Tools",
            ],
            useCases: [
                {
                    title: "Private Dining und Events füllen",
                    points: [
                        "Findet Büros und Eventplaner in der Nähe",
                        "Erkennt Teamevents, Produktlaunches und Feiern",
                        "Entwirft für jeden eine persönliche Einladungs-DM",
                    ],
                    output: "5 Event-DMs bereit",
                },
                {
                    title: "Bei den Menschen vor Ort präsent bleiben",
                    points: [
                        "Posts zu neuen Menüs, Specials und Events",
                        "Stories in Ihrem Ton",
                        "Ein Kalender, der Wochen im Voraus geplant ist",
                    ],
                    output: "Posts für die Woche eingeplant",
                },
                {
                    title: "Reservierungen annehmen, während Sie kochen",
                    points: [
                        "Beantwortet Fragen zu Menüs und Öffnungszeiten",
                        "Reserviert Tische über Ihre MCP-fähigen Tools",
                        "Empfiehlt das Degustationsmenü, wenn es passt",
                    ],
                    output: "Demnächst",
                },
            ],
            icp: [
                { name: "Büros im Umkreis von 3 km", fit: 90 },
                { name: "Event- und Partyplaner", fit: 82 },
                { name: "Lokale Unternehmerclubs", fit: 74 },
            ],
            dm: "Hallo Julia, Ihr Team ist gerade ins Büro in der Mariahilfer Straße gezogen – willkommen in der Nachbarschaft! Unser Nebenraum bietet Platz für 24 Personen, ideal für Mittag- und Abendessen im Team. Darf ich Ihnen unsere Menüs schicken?",
            faq: [
                { q: "Welche Herausforderungen haben Restaurants, um unter der Woche und bei Events voll zu sein?", a: "Unter der Woche bleiben Tische und Nebenräume leer. Niemand hat Zeit, jede Woche zu posten. Eventanfragen landen in fünf verschiedenen Postfächern." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Nehmen Sie Reservierungen für uns an?", a: "Bell, unser Concierge-Agent, wird Tische über MCP-fähige Reservierungstools buchen. Bell kommt demnächst; tragen Sie sich in die Warteliste ein." },
            ],
        },
        ecommerce: {
            name: "E-Commerce",
            short: "Handelspartner, Creator und Content",
            metaTitle: "KI für Vertrieb und Marketing von E-Commerce-Marken",
            metaDescription: "Die KI-Agents von Grovio finden Handelspartner und Creator und bringen Ihre Produktinhalte und Ihr SEO voran.",
            title: "Wachsen Sie über bezahlte Anzeigen hinaus.",
            pitch: "Die Agents von Grovio finden die Shops, Großhändler und Creator, die Ihre Produkte führen sollten, und bauen Suchtraffic auf, der nicht endet, wenn das Werbebudget endet.",
            pains: [
                "Die Werbekosten steigen jedes Quartal",
                "Ansprache von Großhändlern und Partnern bleibt liegen",
                "Produktseiten ranken nicht",
            ],
            agents: [
                "Findet und erreicht Händler, Großhändler und Creator",
                "Findet die Keywords, für die Ihre Produktseiten ranken sollten",
                "Schreibt Guides, Produktgeschichten und Kurzvideos",
            ],
            useCases: [
                {
                    title: "Händler und Creator gewinnen",
                    points: [
                        "Findet Shops, Großhändler und Creator, die zu Ihrer Marke passen",
                        "Recherchiert, was sie verkaufen und wen sie erreichen",
                        "Entwirft für jeden einen passgenauen Pitch",
                    ],
                    output: "5 Partner-DMs bereit",
                },
                {
                    title: "Die Suchanfragen gewinnen, die verkaufen",
                    points: [
                        "Prüft Ihre Produkt- und Kategorieseiten",
                        "Findet die Keywords, die Wettbewerber gewinnen",
                        "Sortiert Verbesserungen nach erwarteter Wirkung",
                    ],
                    output: "Keyword-Briefing für das Content-Team",
                },
                {
                    title: "Ihre Produktgeschichten erzählen",
                    points: [
                        "Kaufratgeber und Produktgeschichten aus dem SEO-Briefing",
                        "Social-Posts aus jedem Artikel",
                        "Texte im Ton Ihrer Marke",
                    ],
                    output: "Artikel und Posts zur Prüfung bereit",
                },
            ],
            icp: [
                { name: "Unabhängige Concept Stores", fit: 89 },
                { name: "Nischen-Creator, 10k–100k Follower", fit: 83 },
                { name: "Regionale Großhändler", fit: 76 },
            ],
            dm: "Hallo Sophie, Ihre Auswahl an nachhaltigen Wohnaccessoires trifft genau ins Schwarze. Unsere Leinenkollektion ist in ähnlichen Läden in München nach 6 Wochen abverkauft. Darf ich Ihnen eine Musterbox schicken?",
            faq: [
                { q: "Welche Herausforderungen haben E-Commerce-Marken, wenn die Werbekosten steigen?", a: "Die Werbekosten steigen jedes Quartal. Ansprache von Großhändlern und Partnern bleibt liegen. Produktseiten ranken nicht." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Funktioniert das auch mit kleinem Sortiment?", a: "Ja. Die ICP-Kampagne entsteht aus Ihrer Website, egal wie groß sie ist." },
            ],
        },
        retail: {
            name: "Einzelhandel",
            short: "B2B-Kunden, Partnerschaften und lokale Reichweite",
            metaTitle: "KI für Vertrieb und Marketing im Einzelhandel",
            metaDescription: "Die KI-Agents von Grovio gewinnen B2B-Kunden und lokale Partnerschaften für Händler und halten Ihre Inhalte auch zwischen Kampagnen am Laufen.",
            title: "Gewinnen Sie Kunden, die nicht in den Laden kommen.",
            pitch: "Die Agents von Grovio erreichen Unternehmen, Schulen und Büros, die in großen Mengen kaufen, und halten Ihr Geschäft auch zwischen den Saisons online sichtbar.",
            pains: [
                "Firmen- und Großbestellungen bleiben dem Zufall überlassen",
                "Lokale Partnerschaften kosten Zeit, die niemand hat",
                "Saisonale Kampagnen starten zu spät",
            ],
            agents: [
                "Erreicht Einkauf und Office Manager für Großbestellungen",
                "Plant saisonale Inhalte rechtzeitig",
                "Gestaltet Visuals für jede Kampagne",
            ],
            useCases: [
                {
                    title: "B2B- und Großkunden gewinnen",
                    points: [
                        "Findet Büros und Einkaufsteams in der Nähe",
                        "Recherchiert Geschenksaisons und Mengenbedarf",
                        "Entwirft für jeden eine persönliche DM",
                    ],
                    output: "5 B2B-DMs bereit",
                },
                {
                    title: "Jede Saison früh planen",
                    points: [
                        "Ein Content-Plan für Sales, Feiertage und Launches",
                        "Posts und Newsletter in Ihrem Ton",
                        "Entwürfe Wochen im Voraus fertig",
                    ],
                    output: "Saisonplan zur Prüfung bereit",
                },
                {
                    title: "Markengerechte Visuals für jede Kampagne",
                    points: [
                        "Wendet Ihren Markenstil an",
                        "Erstellt Social-Media-Bilder und Karussells",
                        "Baut Varianten für jeden Kanal",
                    ],
                    output: "Kampagnen-Visuals in Arbeit",
                },
            ],
            icp: [
                { name: "Büros, die Geschenke und Bedarf bestellen", fit: 87 },
                { name: "Schulen und Vereine", fit: 80 },
                { name: "Lokale Eventveranstalter", fit: 72 },
            ],
            dm: "Hallo Thomas, bald stehen die Firmengeschenke zum Jahresende an. Viele Teams in Graz bestellen bei uns für 20+ Personen, Verpackung und Lieferung inklusive. Darf ich Ihnen unseren Firmenkatalog schicken?",
            faq: [
                { q: "Welche Herausforderungen haben Einzelhändler beim Ausbau von B2B- und lokalen Kunden?", a: "Firmen- und Großbestellungen bleiben dem Zufall überlassen. Lokale Partnerschaften kosten Zeit, die niemand hat. Saisonale Kampagnen starten zu spät." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Kann ich lokale und Online-Kampagnen fahren?", a: "Ja. Jeder Sales Agent führt bis zu drei Kampagnen, jede mit eigenem ICP." },
            ],
        },
        "real-estate": {
            name: "Immobilienmakler",
            short: "Verkäufer, Vermieter und Investoren",
            metaTitle: "KI für Vertrieb und Marketing von Immobilienmaklern",
            metaDescription: "Die KI-Agents von Grovio finden Verkäufer und Vermieter, fassen bei Anfragen nach und halten Ihre Objekte und Marktberichte sichtbar.",
            title: "Mehr Objekte, ohne mehr Kaltakquise.",
            pitch: "Die Agents von Grovio finden Eigentümer, Vermieter und Investoren in Ihrer Region, fassen bei jeder Anfrage nach und veröffentlichen die Marktberichte, die Sie vor Ort bekannt machen.",
            pains: [
                "Es fehlen Objekte, nicht Käufer",
                "Anfragen werden kalt, während Sie bei Besichtigungen sind",
                "Der Marktbericht ist immer erst nächste Woche dran",
            ],
            agents: [
                "Erreicht Vermieter und Investoren mit persönlichen DMs",
                "Schreibt lokale Marktberichte in Ihrem Ton",
                "Erstellt Objekt-Visuals und kurze Immobilienvideos",
            ],
            useCases: [
                {
                    title: "Verkäufer, Vermieter und Investoren erreichen",
                    points: [
                        "Findet Eigentümer und Investoren in Ihrer Region",
                        "Recherchiert Portfolios und jüngste Aktivitäten",
                        "Entwirft für jeden eine persönliche DM",
                    ],
                    output: "5 Eigentümer-DMs bereit",
                },
                {
                    title: "Die Experten für Ihren lokalen Markt sein",
                    points: [
                        "Monatliche Marktberichte für Ihre Region",
                        "Posts zu verkauften und neuen Objekten",
                        "Newsletter für frühere Kunden",
                    ],
                    output: "Marktbericht zur Prüfung bereit",
                },
                {
                    title: "Jedes Objekt von seiner besten Seite zeigen",
                    points: [
                        "Erstellt aus Ihren Fotos ein Storyboard für eine kurze Tour",
                        "Schneidet Hoch- und Quadratformate",
                        "Fügt Untertitel im Hausstil hinzu",
                    ],
                    output: "2 Objektvideos bereit",
                },
            ],
            icp: [
                { name: "Private Vermieter, ab 3 Einheiten", fit: 88 },
                { name: "Kleine Immobilieninvestoren", fit: 81 },
                { name: "Bauträger kleiner Projekte", fit: 73 },
            ],
            dm: "Hallo Andreas, die Mieten für 2-Zimmer-Wohnungen in der Leopoldstadt sind dieses Jahr um 6 % gestiegen. Falls Sie überlegen, Ihre Wohnungen zu verkaufen oder neu zu vermieten, zeige ich Ihnen gern, was vergleichbare Wohnungen erzielt haben. Interesse?",
            faq: [
                { q: "Welche Herausforderungen haben Makler, wenn Objekte der Engpass sind?", a: "Es fehlen Objekte, nicht Käufer. Anfragen werden kalt, während Sie bei Besichtigungen sind. Der Marktbericht ist immer erst nächste Woche dran." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Ist die Ansprache von Eigentümern erlaubt?", a: "Grovio ist DSGVO-konform: Jeder Kontakt braucht eine Rechtsgrundlage, und Widersprüche werden sofort umgesetzt." },
            ],
        },
        "property-management": {
            name: "Hausverwaltung",
            short: "Neue Objekte und Eigentümer gewinnen",
            metaTitle: "KI für Vertrieb und Marketing von Hausverwaltungen",
            metaDescription: "Die KI-Agents von Grovio finden Eigentümer und Eigentümergemeinschaften, die eine bessere Hausverwaltung suchen, und halten Ihr Unternehmen sichtbar.",
            title: "Gewinnen Sie das nächste Objekt vor der Konkurrenz.",
            pitch: "Die Agents von Grovio finden Eigentümer und Eigentümergemeinschaften, die eine bessere Verwaltung brauchen, und halten Ihr Unternehmen mit hilfreichen Inhalten im Gedächtnis.",
            pains: [
                "Neue Mandate kommen nur über Empfehlungen",
                "Eigentümer wissen nicht, was Sie besser machen",
                "Marketing läuft nebenbei",
            ],
            agents: [
                "Erreicht Eigentümer und Eigentümergemeinschaften",
                "Schreibt Ratgeber zu Kosten, Vorschriften und Instandhaltung",
                "Hält Ihre Website und Profile aktuell",
            ],
            useCases: [
                {
                    title: "Neue Objekte und Eigentümer gewinnen",
                    points: [
                        "Findet Eigentümer und Eigentümergemeinschaften in der Nähe",
                        "Recherchiert Gebäude und aktuelle Verwaltungen",
                        "Entwirft für jeden eine förmliche, persönliche DM",
                    ],
                    output: "5 Eigentümer-DMs bereit",
                },
                {
                    title: "Eigentümerfragen beantworten, bevor sie entstehen",
                    points: [
                        "Ratgeber zu Kosten, Vorschriften und Instandhaltung",
                        "Newsletter für Eigentümer und Mieter",
                        "Posts, die zeigen, wie Sie arbeiten",
                    ],
                    output: "Eigentümer-Ratgeber zur Prüfung bereit",
                },
                {
                    title: "Gefunden werden, wenn Eigentümer suchen",
                    points: [
                        "Prüft Ihre Website und öffentlichen Profile",
                        "Findet die lokalen Suchanfragen, die Ihnen entgehen",
                        "Empfiehlt die Verbesserungen, die sich zuerst lohnen",
                    ],
                    output: "Lokales SEO-Briefing bereit",
                },
            ],
            icp: [
                { name: "Eigentümergemeinschaften, 10–60 Einheiten", fit: 86 },
                { name: "Private Eigentümer von Mietshäusern", fit: 82 },
                { name: "Family Offices mit Immobilien", fit: 70 },
            ],
            dm: "Hallo Petra, viele Eigentümergemeinschaften in Linz prüfen nach den diesjährigen Nebenkostenabrechnungen ihre Hausverwaltung. Wir legen jede Kostenposition einzeln offen. Lohnt sich ein Vergleich?",
            faq: [
                { q: "Welche Herausforderungen haben Verwalter jenseits von Empfehlungen?", a: "Neue Mandate kommen nur über Empfehlungen. Eigentümer wissen nicht, was Sie besser machen. Marketing läuft nebenbei." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Können die Agents über Vorschriften schreiben?", a: "Quill schreibt in Ihrem Ton auf Basis Ihrer Vorgaben und Briefings. Sie prüfen jeden Beitrag, bevor er veröffentlicht wird." },
            ],
        },
        "car-dealerships": {
            name: "Autohäuser",
            short: "Flottengeschäft, Inzahlungnahme und Service",
            metaTitle: "KI für Vertrieb und Marketing von Autohäusern",
            metaDescription: "Die KI-Agents von Grovio gewinnen Flotten- und Geschäftskunden für Autohäuser und halten Ihren Bestand und Ihre Serviceangebote sichtbar.",
            title: "Verkaufen Sie Flotten, nicht nur Autos.",
            pitch: "Die Agents von Grovio erreichen Unternehmen, die Firmenwagen und Flottenservice brauchen, und halten Ihren Bestand, Ihre Angebote und Ihren Service online sichtbar.",
            pains: [
                "Das Flottengeschäft hängt an wenigen Kontakten",
                "Servicekunden wandern zu freien Werkstätten ab",
                "Bestand und Angebote ändern sich schneller als Ihre Website",
            ],
            agents: [
                "Erreicht Fuhrparkleiter und Geschäftsführer",
                "Schreibt Angebotsseiten und Service-Ratgeber",
                "Schneidet Kurzvideos zu neuen Fahrzeugen",
            ],
            useCases: [
                {
                    title: "Flotten- und Geschäftskunden abschließen",
                    points: [
                        "Findet Fuhrparkleiter und wachsende Unternehmen",
                        "Recherchiert Flottengröße und Erneuerungszeitpunkt",
                        "Entwirft für jeden eine persönliche DM",
                    ],
                    output: "5 Flotten-DMs bereit",
                },
                {
                    title: "Aus Angeboten Traffic machen",
                    points: [
                        "Angebotsseiten für Neu- und Gebrauchtwagen",
                        "Service-Ratgeber für jede Jahreszeit",
                        "Posts zu jedem Neuzugang",
                    ],
                    output: "Angebotsseiten zur Prüfung bereit",
                },
                {
                    title: "Neue Fahrzeuge in Sekunden zeigen",
                    points: [
                        "Erstellt aus Ihren Fotos ein Storyboard für einen Rundgang ums Fahrzeug",
                        "Schneidet Videos für Instagram, TikTok und YouTube",
                        "Fügt Untertitel im Hausstil hinzu",
                    ],
                    output: "Videos zu Neuzugängen bereit",
                },
            ],
            icp: [
                { name: "Unternehmen mit 10–200 Mitarbeitenden", fit: 88 },
                { name: "Liefer- und Servicebetriebe", fit: 84 },
                { name: "Leasing-Entscheider", fit: 75 },
            ],
            dm: "Hallo Stefan, Ihr Team in Salzburg ist dieses Jahr auf 40 Personen gewachsen. Wir betreuen Firmenwagen von der Bestellung bis zum Service, mit einem festen Ansprechpartner. Darf ich Ihnen unsere Flottenkonditionen schicken?",
            faq: [
                { q: "Welche Herausforderungen haben Autohäuser bei Flotten- und Servicegeschäft?", a: "Das Flottengeschäft hängt an wenigen Kontakten. Servicekunden wandern zu freien Werkstätten ab. Bestand und Angebote ändern sich schneller als Ihre Website." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Funktioniert das mit meinem CRM?", a: "Positive Antworten werden mit Ihrem CRM synchronisiert, damit Ihr Vertrieb übernehmen kann." },
            ],
        },
        "law-firms": {
            name: "Kanzleien",
            short: "Unternehmensmandanten und Fachexpertise",
            metaTitle: "KI für Marketing und Mandantengewinnung in Kanzleien",
            metaDescription: "Die KI-Agents von Grovio helfen Kanzleien, die Unternehmen zu erreichen, die ihre Rechtsgebiete brauchen, und veröffentlichen Fachbeiträge, die Vertrauen schaffen.",
            title: "Mandantengewinnung, aber mit Stil.",
            pitch: "Die Agents von Grovio erreichen Unternehmen, die Ihre Rechtsgebiete brauchen, mit sachlichen, professionellen Nachrichten, und veröffentlichen Fachbeiträge, die Ihre Expertise zeigen.",
            pains: [
                "Partner haben keine Zeit für Mandantengewinnung",
                "Fachwissen bleibt in den Akten verborgen",
                "Jede Nachricht muss sachlich und professionell sein",
            ],
            agents: [
                "Erreicht Rechtsabteilungen und Gründer, förmlich und mit Bedacht",
                "Macht aus Ihrer Expertise Artikel und Newsletter",
                "Findet die Suchanfragen, die Ihre Mandanten tatsächlich stellen",
            ],
            useCases: [
                {
                    title: "Unternehmensmandanten gewinnen, mit Bedacht",
                    points: [
                        "Findet Rechtsabteilungen und Gründer in Ihren Rechtsgebieten",
                        "Recherchiert Deals, Neueinstellungen und regulatorische Neuigkeiten",
                        "Entwirft förmliche DMs, die Sie einzeln freigeben",
                    ],
                    output: "5 förmliche DMs bereit",
                },
                {
                    title: "Aus Expertise Autorität machen",
                    points: [
                        "Artikel zu Urteilen und Gesetzesänderungen",
                        "Newsletter für Mandanten und Kontakte",
                        "LinkedIn-Posts für Partner",
                    ],
                    output: "Artikel zur Prüfung durch Partner bereit",
                },
                {
                    title: "Für die richtigen Fragen gefunden werden",
                    points: [
                        "Findet die Suchanfragen Ihrer Mandanten",
                        "Prüft Ihre Seiten zu den Rechtsgebieten",
                        "Gibt dem Writer vor, welche Themen er behandeln soll",
                    ],
                    output: "Such-Briefing für das Content-Team",
                },
            ],
            icp: [
                { name: "Scale-ups mit Expansion in die EU", fit: 87 },
                { name: "Unternehmen ohne eigene Rechtsabteilung", fit: 83 },
                { name: "Gründer vor einer Finanzierungsrunde", fit: 79 },
            ],
            dm: "Sehr geehrte Frau Weber, herzlichen Glückwunsch zu Ihrer Series A. Viele Gründer prüfen in dieser Phase ihre Arbeitsverträge und IP-Übertragungen. Wäre ein kurzes Gespräch darüber hilfreich, worauf es dabei meist ankommt?",
            faq: [
                { q: "Welche Herausforderungen haben Kanzleien, Expertise in neue Mandate zu verwandeln?", a: "Partner haben keine Zeit für Mandantengewinnung. Fachwissen bleibt in den Akten verborgen. Jede Nachricht muss sachlich und professionell sein." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Kann ich Ton und Wortwahl steuern?", a: "Ja. Legen Sie Ton, Förmlichkeit und zu vermeidende Begriffe in einfachen Worten fest. Sie geben jede Nachricht frei." },
            ],
        },
        "tax-advisors": {
            name: "Steuerberatung",
            short: "Gründer, Freelancer und KMU",
            metaTitle: "KI für Vertrieb und Marketing in der Steuerberatung",
            metaDescription: "Die KI-Agents von Grovio bringen Steuerberatern die richtigen Mandanten: Gründer, Freelancer und KMU, mit passenden Inhalten zu jeder Frist.",
            title: "Die richtigen Mandanten, vor jeder Frist.",
            pitch: "Die Agents von Grovio erreichen Gründer, Freelancer und wachsende Unternehmen genau dann, wenn sie eine Steuerberatung brauchen, und veröffentlichen verständliche Ratgeber zu jeder Frist.",
            pains: [
                "Anfragen kommen alle auf einmal, kurz vor den Fristen",
                "Unpassende Mandanten kosten die meiste Zeit",
                "Klare, nützliche Inhalte werden nie geschrieben",
            ],
            agents: [
                "Erreicht Gründer und KMU, die zu Ihren Wunschmandanten passen",
                "Schreibt Fristen-Ratgeber und Newsletter",
                "Erstellt einfache Erklärstücke für Social Media",
            ],
            useCases: [
                {
                    title: "Ihre Mandantenliste mit den Richtigen füllen",
                    points: [
                        "Findet passende Gründer, Freelancer und KMU",
                        "Recherchiert Neueintragungen und Wachstumssignale",
                        "Entwirft für jeden eine persönliche DM",
                    ],
                    output: "5 Mandanten-DMs bereit",
                },
                {
                    title: "Keinen Fristen-Post mehr verpassen",
                    points: [
                        "Fristen-Ratgeber und Erinnerungen",
                        "Newsletter zu steuerlichen Änderungen",
                        "Posts, die häufige Fragen beantworten",
                    ],
                    output: "Fristen-Ratgeber zur Prüfung bereit",
                },
                {
                    title: "Steuern einfach teilbar machen",
                    points: [
                        "Macht aus Ratgebern einfache Erklärstücke",
                        "Erstellt Karussells für LinkedIn und Instagram",
                        "Nutzt Ihren Markenstil",
                    ],
                    output: "Erklär-Karussell bereit",
                },
            ],
            icp: [
                { name: "Neu gegründete GmbHs", fit: 90 },
                { name: "Freelancer mit über 50.000 € Umsatz", fit: 84 },
                { name: "Onlinehändler mit Verkauf ins Ausland", fit: 78 },
            ],
            dm: "Hallo Lukas, herzlichen Glückwunsch zur Eintragung Ihrer GmbH. Beim ersten Jahresabschluss verlieren die meisten Gründer viel Zeit. Wir betreuen 40 junge Unternehmen in Wien. Möchten Sie unsere Checkliste für das erste Jahr?",
            faq: [
                { q: "Welche Herausforderungen haben Steuerberater, wenn Anfragen vor Fristen explodieren?", a: "Anfragen kommen alle auf einmal, kurz vor den Fristen. Unpassende Mandanten kosten die meiste Zeit. Klare, nützliche Inhalte werden nie geschrieben." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Kann ich gezielt bestimmte Mandanten ansprechen?", a: "Ja. Ihre ICP-Kampagne legt genau fest, wen der Sales Agent kontaktiert und wen er verwirft." },
            ],
        },
        "self-employed": {
            name: "Selbstständige & Kleinunternehmen",
            short: "Ein Vertriebs- und Marketingteam für eine Person",
            metaTitle: "KI für Vertrieb und Marketing von Selbstständigen und Kleinunternehmen",
            metaDescription: "Grovio gibt Selbstständigen und Kleinunternehmen ein Vertriebs- und Marketingteam: Leads, DMs und Content, von Ihnen freigegeben.",
            title: "Ein Vertriebs- und Marketingteam für eine Person.",
            pitch: "Sie machen die Arbeit. Die Agents von Grovio finden die Kunden, schreiben die DMs und halten Ihren Content am Laufen, und Sie geben alles in wenigen Minuten am Tag frei.",
            pains: [
                "Verkaufen kostet Zeit, die für bezahlte Arbeit fehlt",
                "Marketing passiert erst, wenn die Aufträge ausbleiben",
                "Agenturen und große Tools sind zu teuer",
            ],
            agents: [
                "Findet Kunden und schreibt DMs, immer fünf auf einmal",
                "Schreibt Posts und Artikel in Ihrem Ton",
                "Startet mit einem Agent, mehr kommen dazu, wenn es sich lohnt",
            ],
            useCases: [
                {
                    title: "Ihre nächsten Kunden finden",
                    points: [
                        "Findet Kunden, die zu Ihrem Angebot passen",
                        "Recherchiert jeden, bevor er angesprochen wird",
                        "Entwirft DMs, immer fünf auf einmal, zur Freigabe",
                    ],
                    output: "5 Kunden-DMs bereit",
                },
                {
                    title: "Präsent sein, ohne Stunden zu investieren",
                    points: [
                        "Posts und Artikel in Ihrem Ton",
                        "Ein einfacher Wochenplan für Content",
                        "Entwürfe bereit für eine schnelle Prüfung",
                    ],
                    output: "Posts für eine Woche bereit",
                },
                {
                    title: "In Ihrem Tempo wachsen",
                    points: [
                        "Starten Sie mit einem Sales Agent",
                        "Ergänzen Sie einen zweiten, wenn die Pipeline voll ist",
                        "Jederzeit pausieren, monatlich kündbar",
                    ],
                    output: "Ein Team, das mit Ihnen wächst",
                },
            ],
            icp: [
                { name: "Kleine Unternehmen in Ihrer Stadt", fit: 88 },
                { name: "Agenturen, die Ihre Leistung auslagern", fit: 82 },
                { name: "Umfeld früherer Kunden", fit: 76 },
            ],
            dm: "Hallo Clara, Ihr Rebrand vom letzten Monat hat mir sehr gefallen. Ich bin freiberuflicher Texter und schreibe für Designstudios in Wien Website-Texte. Wäre es hilfreich, für Launches jemanden auf Abruf zu haben?",
            faq: [
                { q: "Welche Herausforderungen haben Freelancer und KMU zwischen Vertrieb und Kundenarbeit?", a: "Verkaufen kostet Zeit, die für bezahlte Arbeit fehlt. Marketing passiert erst, wenn die Aufträge ausbleiben. Agenturen und große Tools sind zu teuer." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Kann ich mit nur einem Agent starten?", a: "Ja. Stellen Sie einen Sales Agent oder den Writer ein und ergänzen Sie weitere, wenn es sich lohnt." },
            ],
        },
        tradespeople: {
            name: "Handwerk",
            short: "Gewerbeaufträge und volle Auftragsbücher",
            metaTitle: "KI für Vertrieb und Marketing im Handwerk",
            metaDescription: "Die KI-Agents von Grovio gewinnen Gewerbeaufträge und Wartungsverträge für Handwerksbetriebe und machen Ihre Bewertungen und Arbeiten online sichtbar.",
            title: "Volle Auftragsbücher, das ganze Jahr.",
            pitch: "Die Agents von Grovio erreichen Hausverwaltungen, Bauunternehmen und Betriebe, die zuverlässige Handwerker brauchen, und zeigen Ihre fertigen Arbeiten online.",
            pains: [
                "Aufträge kommen in Wellen",
                "Gewerbekunden sind schwer zu erreichen",
                "Ihre besten Arbeiten landen nie online",
            ],
            agents: [
                "Erreicht Hausverwaltungen und Bauunternehmen",
                "Macht aus Baustellenfotos Posts und Kurzvideos",
                "Schreibt Leistungsseiten, die lokal ranken",
            ],
            useCases: [
                {
                    title: "Regelmäßige Gewerbeaufträge sichern",
                    points: [
                        "Findet Hausverwaltungen und Bauunternehmen in der Nähe",
                        "Recherchiert Gebäude und anstehende Projekte",
                        "Entwirft für jeden eine persönliche DM",
                    ],
                    output: "5 Gewerbe-DMs bereit",
                },
                {
                    title: "Fertige Aufträge als Referenz zeigen",
                    points: [
                        "Schneidet Kurzvideos aus Baustellenfotos",
                        "Formatiert für Instagram, TikTok und YouTube",
                        "Fügt Untertitel im Hausstil hinzu",
                    ],
                    output: "Auftragsvideos bereit",
                },
                {
                    title: "Bei lokalen Suchanfragen ranken",
                    points: [
                        "Prüft Ihre Leistungsseiten und Profile",
                        "Findet, wonach Menschen vor Ort suchen",
                        "Empfiehlt die Seiten, die sich lohnen",
                    ],
                    output: "Lokales SEO-Briefing bereit",
                },
            ],
            icp: [
                { name: "Hausverwaltungen in Ihrer Region", fit: 89 },
                { name: "Generalunternehmer", fit: 83 },
                { name: "Hotels und Restaurants mit Wartungsbedarf", fit: 77 },
            ],
            dm: "Hallo Martin, wie ich sehe, verwalten Sie 12 Gebäude in Innsbruck. Wir sind ein Elektrobetrieb aus der Region und bieten Wartungsverträge mit 24-Stunden-Notdienst. Darf ich Ihnen unsere Konditionen schicken?",
            faq: [
                { q: "Welche Herausforderungen haben Handwerksbetriebe bei gewerblichen Aufträgen?", a: "Aufträge kommen in Wellen. Gewerbekunden sind schwer zu erreichen. Ihre besten Arbeiten landen nie online." },
                { q: "Wie bringe ich mit Grovio von meiner Website zu gebuchten Terminen?", a: "Sie fügen Ihren Link ein: Grovio liest Ihre Website und ermittelt, wer bei Ihnen kauft. Sie erhalten eine ICP-Kampagne mit nach Passung sortierten Käufersegmenten. Sie genehmigen Leads und DMs in Fünfer-Paketen, bevor etwas versendet wird. Warme Antworten landen in Ihrem CRM und Kalender." },

                { q: "Ich bin nicht auf Social Media. Ist das ein Problem?", a: "Nein. Ihr Sales Agent arbeitet mit Ihrer Website und öffentlichen Informationen. Content ist optional." },
            ],
        },
    },
}
