import type { IDictionary } from "@/dictionaries"

export const industries: IDictionary["industries"] = {
    page: {
        icp: "Un esempio di campagna ICP",
        dm: "Un esempio di DM",
        dmNote: "Scritto secondo la tua configurazione dei DM. Lo approvi prima dell'invio.",
        faq: "Domande",
        others: "Altri settori",
        ctaTitle: "Grovio per il settore {industry}",
        ctaBody: "Incolla il tuo sito web e ti mostreremo la campagna ICP che creeremmo.",
        segment: "Segmento",
        fit: "Affinità",
        useCases: "Cosa fanno i tuoi agenti",
        useCasesBody: "Tre attività di cui si occupano i tuoi agenti Grovio, passo dopo passo. Tu approvi ciò che parte.",
        toolsTitle: "Funziona con gli strumenti che usi già",
    },
    list: {
        hotels: {
            name: "Hotel",
            short: "Riempi le camere con prenotazioni dirette e gruppi",
            metaTitle: "Vendite e marketing con l'AI per hotel",
            metaDescription: "Gli agenti AI di Grovio conquistano prenotazioni aziendali e di gruppo, tengono pieno il tuo calendario editoriale e rispondono agli ospiti, così il tuo hotel dipende meno dai portali di prenotazione.",
            title: "Più prenotazioni dirette. Meno commissioni ai portali.",
            pitch: "Gli agenti di Grovio raggiungono le aziende, gli organizzatori di eventi e i travel manager che prenotano camere in blocco, e mantengono visibile il tuo hotel con contenuti che si posizionano.",
            pains: [
                "I portali di prenotazione si prendono una fetta di ogni camera",
                "Le vendite aziendali e di gruppo dipendono da una sola persona oberata",
                "In bassa stagione sito e social tacciono",
            ],
            agents: [
                "Raggiunge travel manager e organizzatori di eventi con DM personalizzati",
                "Scrive guide stagionali e post che portano ospiti sul tuo sito",
                "Risponde agli ospiti e prenota camere tramite i tuoi strumenti",
            ],
            useCases: [
                {
                    title: "Conquista prenotazioni di gruppo e aziendali",
                    points: [
                        "Trova agenzie di eventi, organizzatori e travel manager nella tua zona",
                        "Individua offsite, conferenze e matrimoni in programma",
                        "Scrive un DM personalizzato per ciascuno, cinque alla volta",
                    ],
                    output: "5 DM per prenotazioni di gruppo pronti",
                },
                {
                    title: "Fai tornare gli ospiti sul tuo sito",
                    points: [
                        "Guide stagionali sulla tua regione e sui suoi eventi",
                        "Post per Instagram e Facebook con la tua voce",
                        "Newsletter che portano alla prenotazione diretta",
                    ],
                    output: "Contenuti settimanali pronti per la revisione",
                },
                {
                    title: "Rispondi agli ospiti a qualsiasi ora",
                    points: [
                        "Risponde a domande su camere, extra e indicazioni stradali",
                        "Prenota tramite i tuoi strumenti compatibili con MCP",
                        "Passa le richieste complesse al tuo team",
                    ],
                    output: "In arrivo",
                },
            ],
            icp: [
                { name: "Agenzie di eventi entro 200 km", fit: 91 },
                { name: "Travel manager aziendali", fit: 85 },
                { name: "Wedding planner", fit: 78 },
            ],
            dm: "Buongiorno Marco, ho visto che il Suo team sta pianificando la stagione degli offsite primaverili. Ospitiamo gruppi da 20 a 80 persone, con sale riunioni e vista lago, a 40 minuti da Vienna. Le interessa dare un'occhiata alle nostre tariffe per gruppi?",
            faq: [
                { q: "Quali sfide hanno gli hotel su prenotazioni dirette e di gruppo?", a: "I portali di prenotazione si prendono una fetta di ogni camera. Le vendite aziendali e di gruppo dipendono da una sola persona oberata. In bassa stagione sito e social tacciono." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Grovio può parlare con gli ospiti?", a: "L'agente Concierge per hotel e ristoranti è in arrivo. Oggi gli agenti di vendita e marketing di Grovio ti aiutano a conquistare gruppi e prenotazioni dirette." },
                { q: "I dati di ospiti e prospect sono trattati secondo il GDPR?", a: "Sì. Grovio è pensato per l'UE e conforme al GDPR." },
            ],
        },
        restaurants: {
            name: "Ristoranti",
            short: "Sale private, eventi e clienti abituali",
            metaTitle: "Vendite e marketing con l'AI per ristoranti",
            metaDescription: "Gli agenti AI di Grovio riempiono sale private ed eventi, tengono vivi i tuoi social e presto risponderanno agli ospiti e gestiranno le prenotazioni.",
            title: "Tavoli pieni anche di martedì.",
            pitch: "Gli agenti di Grovio raggiungono gli uffici e gli organizzatori che prenotano sale private, e tengono menu, eventi e la tua storia sotto gli occhi della gente del posto.",
            pains: [
                "Le sere infrasettimanali e le sale private restano vuote",
                "Nessuno ha tempo di pubblicare ogni settimana",
                "Le richieste per eventi arrivano in cinque caselle diverse",
            ],
            agents: [
                "Raggiunge office manager e organizzatori di eventi della zona",
                "Scrive post su nuovi menu ed eventi con la tua voce",
                "Risponde agli ospiti e prenota tavoli tramite i tuoi strumenti",
            ],
            useCases: [
                {
                    title: "Riempi sale private ed eventi",
                    points: [
                        "Trova uffici e organizzatori di eventi della zona",
                        "Individua eventi aziendali, lanci e celebrazioni",
                        "Scrive un DM di invito personalizzato per ciascuno",
                    ],
                    output: "5 DM per eventi pronti",
                },
                {
                    title: "Resta sotto gli occhi della gente del posto",
                    points: [
                        "Post su nuovi menu, piatti del giorno ed eventi",
                        "Storie scritte con la tua voce",
                        "Un calendario pianificato con settimane di anticipo",
                    ],
                    output: "Post programmati per la settimana",
                },
                {
                    title: "Ricevi prenotazioni mentre cucini",
                    points: [
                        "Risponde a domande su menu e orari di apertura",
                        "Prenota tavoli tramite i tuoi strumenti compatibili con MCP",
                        "Suggerisce il menu degustazione quando è il caso",
                    ],
                    output: "In arrivo",
                },
            ],
            icp: [
                { name: "Uffici entro 3 km", fit: 90 },
                { name: "Organizzatori di eventi e feste", fit: 82 },
                { name: "Club di imprenditori locali", fit: 74 },
            ],
            dm: "Buongiorno Julia, il Suo team si è appena trasferito nell'ufficio di Mariahilfer Straße: benvenuti nel quartiere. La nostra sala privata ospita 24 persone per pranzi e cene di team. Posso inviarLe i nostri menu fissi?",
            faq: [
                { q: "Quali sfide hanno i ristoranti nel riempire i feriali e gli eventi privati?", a: "Le sere infrasettimanali e le sale private restano vuote. Nessuno ha tempo di pubblicare ogni settimana. Le richieste per eventi arrivano in cinque caselle diverse." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Gestite le prenotazioni per noi?", a: "Bell, il nostro agente Concierge, prenoterà tavoli tramite sistemi di prenotazione compatibili con MCP. È in arrivo: iscriviti alla lista d'attesa." },
            ],
        },
        ecommerce: {
            name: "E-commerce",
            short: "Partner all'ingrosso, creator e contenuti",
            metaTitle: "Vendite e marketing con l'AI per brand e-commerce",
            metaDescription: "Gli agenti AI di Grovio trovano partner all'ingrosso e creator, e fanno avanzare i contenuti di prodotto e la SEO.",
            title: "Cresci oltre la pubblicità a pagamento.",
            pitch: "Gli agenti di Grovio trovano i negozi, i grossisti e i creator che dovrebbero proporre i tuoi prodotti, e costruiscono traffico organico che non si ferma quando si ferma il budget pubblicitario.",
            pains: [
                "I costi pubblicitari salgono ogni trimestre",
                "L'outreach verso grossisti e partner non si fa mai",
                "Le pagine prodotto non si posizionano",
            ],
            agents: [
                "Trova e contatta rivenditori, grossisti e creator",
                "Trova le keyword su cui le tue pagine prodotto dovrebbero vincere",
                "Scrive guide, storie di prodotto e video brevi",
            ],
            useCases: [
                {
                    title: "Conquista rivenditori e creator",
                    points: [
                        "Trova negozi, grossisti e creator in linea con il tuo brand",
                        "Analizza cosa vendono e chi raggiungono",
                        "Scrive una proposta su misura per ciascuno",
                    ],
                    output: "5 DM per partner pronti",
                },
                {
                    title: "Vinci le ricerche che portano vendite",
                    points: [
                        "Analizza le tue pagine prodotto e di categoria",
                        "Trova le keyword su cui vincono i concorrenti",
                        "Ordina gli interventi per impatto previsto",
                    ],
                    output: "Brief keyword per il team contenuti",
                },
                {
                    title: "Racconta le storie dei tuoi prodotti",
                    points: [
                        "Guide all'acquisto e storie di prodotto dal brief SEO",
                        "Post social ricavati da ogni articolo",
                        "Testi con la voce del tuo brand",
                    ],
                    output: "Articolo e post pronti per la revisione",
                },
            ],
            icp: [
                { name: "Concept store indipendenti", fit: 89 },
                { name: "Creator di nicchia, 10k–100k follower", fit: 83 },
                { name: "Grossisti regionali", fit: 76 },
            ],
            dm: "Buongiorno Sophie, la selezione di articoli per la casa sostenibili del Suo negozio è perfetta. La nostra linea in lino si esaurisce in 6 settimane in negozi simili a Monaco. Posso inviarLe una scatola di campioni?",
            faq: [
                { q: "Quali sfide hanno i brand e-commerce con i costi ads in crescita?", a: "I costi pubblicitari salgono ogni trimestre. L'outreach verso grossisti e partner non si fa mai. Le pagine prodotto non si posizionano." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Funziona anche con cataloghi piccoli?", a: "Sì. La campagna ICP viene creata a partire dal tuo sito, qualunque sia la sua dimensione." },
            ],
        },
        retail: {
            name: "Retail",
            short: "Clienti B2B, partnership e presenza locale",
            metaTitle: "Vendite e marketing con l'AI per il retail",
            metaDescription: "Gli agenti AI di Grovio conquistano clienti B2B e partnership locali per i negozi, e mantengono attivi i tuoi contenuti tra una campagna e l'altra.",
            title: "Conquista i clienti che il tuo negozio non raggiunge.",
            pitch: "Gli agenti di Grovio raggiungono le aziende, le scuole e gli uffici che acquistano in grandi quantità, e mantengono il tuo negozio visibile online tra una stagione e l'altra.",
            pains: [
                "Gli ordini aziendali e all'ingrosso sono lasciati al caso",
                "Le partnership locali richiedono tempo che nessuno ha",
                "Le campagne stagionali partono troppo tardi",
            ],
            agents: [
                "Raggiunge buyer e office manager per ordini all'ingrosso",
                "Pianifica i contenuti stagionali in anticipo",
                "Crea visual per ogni campagna",
            ],
            useCases: [
                {
                    title: "Apri clienti B2B e all'ingrosso",
                    points: [
                        "Trova uffici e team acquisti della zona",
                        "Analizza stagioni dei regali ed esigenze di grandi quantità",
                        "Scrive un DM personalizzato per ciascuno",
                    ],
                    output: "5 DM B2B pronti",
                },
                {
                    title: "Pianifica ogni stagione in anticipo",
                    points: [
                        "Un piano editoriale per saldi, festività e lanci",
                        "Post e newsletter con la tua voce",
                        "Bozze pronte con settimane di anticipo",
                    ],
                    output: "Piano stagionale pronto per la revisione",
                },
                {
                    title: "Visual in linea con il brand per ogni campagna",
                    points: [
                        "Applica lo stile del tuo brand",
                        "Crea immagini e caroselli per i social",
                        "Prepara varianti per ogni canale",
                    ],
                    output: "Visual della campagna in lavorazione",
                },
            ],
            icp: [
                { name: "Uffici che ordinano regali e forniture", fit: 87 },
                { name: "Scuole e associazioni", fit: 80 },
                { name: "Organizzatori di eventi locali", fit: 72 },
            ],
            dm: "Buongiorno Thomas, con l'arrivo dei regali di fine anno molti team di Graz ordinano da noi per oltre 20 persone. Ci occupiamo noi di confezione e consegna. Desidera ricevere il nostro catalogo aziendale?",
            faq: [
                { q: "Quali sfide hanno i retailer nell'aprire clienti B2B e locali?", a: "Gli ordini aziendali e all'ingrosso sono lasciati al caso. Le partnership locali richiedono tempo che nessuno ha. Le campagne stagionali partono troppo tardi." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Posso gestire campagne locali e online?", a: "Sì. Ogni Sales Agent gestisce fino a tre campagne, ciascuna con il proprio ICP." },
            ],
        },
        "real-estate": {
            name: "Agenti immobiliari",
            short: "Lead di venditori, proprietari e investitori",
            metaTitle: "Vendite e marketing con l'AI per agenti immobiliari",
            metaDescription: "Gli agenti AI di Grovio trovano lead di venditori e proprietari, seguono le richieste e mantengono visibili i tuoi annunci e aggiornamenti di mercato.",
            title: "Più incarichi, senza più chiamate a freddo.",
            pitch: "Gli agenti di Grovio trovano proprietari, locatori e investitori nella tua zona, seguono ogni richiesta e pubblicano gli aggiornamenti di mercato che ti rendono il punto di riferimento locale.",
            pains: [
                "Il collo di bottiglia sono gli immobili, non gli acquirenti",
                "Le richieste si raffreddano mentre sei alle visite",
                "Gli aggiornamenti di mercato slittano sempre alla settimana dopo",
            ],
            agents: [
                "Raggiunge proprietari e investitori con DM personalizzati",
                "Scrive aggiornamenti sul mercato locale con la tua voce",
                "Crea visual per gli annunci e brevi video degli immobili",
            ],
            useCases: [
                {
                    title: "Raggiungi venditori, locatori e investitori",
                    points: [
                        "Trova proprietari e investitori nella tua zona",
                        "Analizza portafogli e attività recenti",
                        "Scrive un DM personalizzato per ciascuno",
                    ],
                    output: "5 DM per proprietari pronti",
                },
                {
                    title: "Diventa l'esperto del mercato locale",
                    points: [
                        "Aggiornamenti mensili sul mercato della tua zona",
                        "Post su immobili venduti e nuovi annunci",
                        "Newsletter per gli ex clienti",
                    ],
                    output: "Aggiornamento di mercato pronto per la revisione",
                },
                {
                    title: "Mostra ogni immobile al meglio",
                    points: [
                        "Crea lo storyboard di un breve tour dalle tue foto",
                        "Monta versioni verticali e quadrate",
                        "Aggiunge didascalie nello stile della casa",
                    ],
                    output: "2 video degli annunci pronti",
                },
            ],
            icp: [
                { name: "Proprietari privati, 3+ unità", fit: 88 },
                { name: "Piccoli investitori immobiliari", fit: 81 },
                { name: "Sviluppatori di piccoli progetti", fit: 73 },
            ],
            dm: "Buongiorno Andreas, quest'anno gli affitti dei bilocali a Leopoldstadt sono saliti del 6%. Se sta pensando di vendere o riaffittare i Suoi appartamenti, posso mostrarLe quanto hanno ottenuto immobili simili. Le interessa?",
            faq: [
                { q: "Quali sfide hanno gli agenti quando mancano gli incarichi?", a: "Il collo di bottiglia sono gli immobili, non gli acquirenti. Le richieste si raffreddano mentre sei alle visite. Gli aggiornamenti di mercato slittano sempre alla settimana dopo." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "È consentito contattare i proprietari?", a: "Grovio è conforme al GDPR: ogni contatto richiede una base giuridica e le richieste di opt-out vengono rispettate subito." },
            ],
        },
        "property-management": {
            name: "Gestione immobiliare",
            short: "Acquisisci nuovi stabili e proprietari",
            metaTitle: "Vendite e marketing con l'AI per amministratori immobiliari",
            metaDescription: "Gli agenti AI di Grovio trovano proprietari e condomini in cerca di un amministratore migliore, e mantengono visibile il tuo studio.",
            title: "Acquisisci il prossimo stabile prima della concorrenza.",
            pitch: "Gli agenti di Grovio trovano proprietari e condomini che hanno bisogno di un amministratore migliore, e mantengono il tuo studio sempre presente con contenuti utili.",
            pains: [
                "I nuovi incarichi arrivano solo dal passaparola",
                "I proprietari non sanno cosa fai meglio degli altri",
                "Il marketing passa sempre in secondo piano",
            ],
            agents: [
                "Raggiunge proprietari e condomini",
                "Scrive guide su costi, normative e manutenzione",
                "Mantiene aggiornati il tuo sito e i tuoi profili",
            ],
            useCases: [
                {
                    title: "Acquisisci nuovi stabili e proprietari",
                    points: [
                        "Trova proprietari e condomini della zona",
                        "Analizza gli stabili e gli amministratori attuali",
                        "Scrive un DM formale e personalizzato per ciascuno",
                    ],
                    output: "5 DM per proprietari pronti",
                },
                {
                    title: "Rispondi ai proprietari prima che chiedano",
                    points: [
                        "Guide su costi, normative e manutenzione",
                        "Newsletter per proprietari e inquilini",
                        "Post che mostrano come lavori",
                    ],
                    output: "Guida per proprietari pronta per la revisione",
                },
                {
                    title: "Fatti trovare quando i proprietari cercano",
                    points: [
                        "Analizza il tuo sito e i tuoi profili pubblici",
                        "Trova le ricerche locali che ti sfuggono",
                        "Consiglia gli interventi da fare per primi",
                    ],
                    output: "Brief SEO locale pronto",
                },
            ],
            icp: [
                { name: "Condomini, 10–60 unità", fit: 86 },
                { name: "Proprietari privati di immobili in affitto", fit: 82 },
                { name: "Family office con immobili", fit: 70 },
            ],
            dm: "Buongiorno Petra, molti condomini di Linz stanno valutando il proprio amministratore dopo i rendiconti delle spese di quest'anno. Noi pubblichiamo ogni costo, voce per voce. Vale la pena fare un confronto?",
            faq: [
                { q: "Quali sfide hanno gli amministratori oltre al passaparola?", a: "I nuovi incarichi arrivano solo dal passaparola. I proprietari non sanno cosa fai meglio degli altri. Il marketing passa sempre in secondo piano." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Gli agenti possono scrivere di normative?", a: "Quill scrive con la tua voce a partire dai tuoi input e brief. Rivedi ogni contenuto prima della pubblicazione." },
            ],
        },
        "car-dealerships": {
            name: "Concessionarie auto",
            short: "Flotte, permute e assistenza",
            metaTitle: "Vendite e marketing con l'AI per concessionarie auto",
            metaDescription: "Gli agenti AI di Grovio conquistano clienti business e flotte per le concessionarie, e mantengono visibili il tuo stock e le offerte di assistenza.",
            title: "Vendi flotte, non solo auto.",
            pitch: "Gli agenti di Grovio raggiungono le aziende che hanno bisogno di auto aziendali e servizi per flotte, e mantengono visibili online il tuo stock, le offerte e l'assistenza.",
            pains: [
                "Le vendite di flotte dipendono da pochi contatti",
                "I clienti dell'assistenza passano alle officine indipendenti",
                "Stock e offerte cambiano più in fretta del tuo sito",
            ],
            agents: [
                "Raggiunge fleet manager e titolari d'azienda",
                "Scrive pagine offerta e guide all'assistenza",
                "Monta brevi video delle nuove auto in stock",
            ],
            useCases: [
                {
                    title: "Chiudi contratti per flotte e aziende",
                    points: [
                        "Trova fleet manager e aziende in crescita",
                        "Analizza dimensioni delle flotte e tempi di rinnovo",
                        "Scrive un DM personalizzato per ciascuno",
                    ],
                    output: "5 DM per flotte pronti",
                },
                {
                    title: "Trasforma le offerte in traffico",
                    points: [
                        "Pagine offerta per auto nuove e usate",
                        "Guide all'assistenza per ogni stagione",
                        "Post per ogni nuovo arrivo",
                    ],
                    output: "Pagine offerta pronte per la revisione",
                },
                {
                    title: "Mostra le nuove auto in pochi secondi",
                    points: [
                        "Crea lo storyboard di un walkaround dalle tue foto",
                        "Monta video per Instagram, TikTok e YouTube",
                        "Aggiunge didascalie nello stile della casa",
                    ],
                    output: "Video delle nuove auto pronti",
                },
            ],
            icp: [
                { name: "Aziende con 10–200 dipendenti", fit: 88 },
                { name: "Aziende di consegne e servizi", fit: 84 },
                { name: "Decisori sul leasing", fit: 75 },
            ],
            dm: "Buongiorno Stefan, quest'anno il Suo team a Salisburgo è cresciuto fino a 40 persone. Gestiamo le auto aziendali dall'ordine all'assistenza, con un unico referente. Posso inviarLe le nostre condizioni per le flotte?",
            faq: [
                { q: "Quali sfide hanno le concessionarie su flotte e officina?", a: "Le vendite di flotte dipendono da pochi contatti. I clienti dell'assistenza passano alle officine indipendenti. Stock e offerte cambiano più in fretta del tuo sito." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Funziona con il mio CRM?", a: "Le risposte positive si sincronizzano con il tuo CRM, così il tuo team vendite può subentrare." },
            ],
        },
        "law-firms": {
            name: "Studi legali",
            short: "Clienti aziendali e thought leadership",
            metaTitle: "Marketing e business development con l'AI per studi legali",
            metaDescription: "Gli agenti AI di Grovio aiutano gli studi legali a raggiungere le aziende che hanno bisogno delle loro aree di competenza, e a pubblicare approfondimenti che creano fiducia.",
            title: "Business development, fatto come si deve.",
            pitch: "Gli agenti di Grovio raggiungono le aziende che hanno bisogno delle tue aree di competenza, con messaggi misurati e professionali, e pubblicano approfondimenti che dimostrano la tua esperienza.",
            pains: [
                "I partner non hanno tempo per il business development",
                "Le competenze restano nascoste nei fascicoli",
                "Ogni messaggio deve essere misurato e professionale",
            ],
            agents: [
                "Raggiunge general counsel e founder, con formalità e attenzione",
                "Trasforma le tue competenze in articoli e newsletter",
                "Trova le ricerche che i tuoi clienti fanno davvero",
            ],
            useCases: [
                {
                    title: "Conquista clienti aziendali, con attenzione",
                    points: [
                        "Trova general counsel e founder nelle tue aree di competenza",
                        "Analizza operazioni, assunzioni e novità normative",
                        "Scrive DM formali che approvi uno per uno",
                    ],
                    output: "5 DM formali pronti",
                },
                {
                    title: "Trasforma le competenze in autorevolezza",
                    points: [
                        "Articoli su sentenze e modifiche normative",
                        "Newsletter per clienti e contatti",
                        "Post LinkedIn per i partner",
                    ],
                    output: "Articolo pronto per la revisione dei partner",
                },
                {
                    title: "Fatti trovare per le domande giuste",
                    points: [
                        "Trova le ricerche che fanno i tuoi clienti",
                        "Analizza le pagine delle tue aree di competenza",
                        "Indica al Writer quali temi trattare",
                    ],
                    output: "Brief di ricerca per il team contenuti",
                },
            ],
            icp: [
                { name: "Scale-up in espansione nell'UE", fit: 87 },
                { name: "Aziende senza ufficio legale interno", fit: 83 },
                { name: "Founder che preparano un round di finanziamento", fit: 79 },
            ],
            dm: "Gentile Sig.ra Weber, congratulazioni per il Suo round Series A. In questa fase molti founder rivedono i contratti di lavoro e le cessioni di proprietà intellettuale. Le sarebbe utile una breve chiamata sugli aspetti che di solito richiedono attenzione?",
            faq: [
                { q: "Quali sfide hanno gli studi nel trasformare competenze in nuovi clienti?", a: "I partner non hanno tempo per il business development. Le competenze restano nascoste nei fascicoli. Ogni messaggio deve essere misurato e professionale." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Posso controllare tono e formulazioni?", a: "Sì. Imposta tono, livello di formalità e parole da evitare con parole semplici. Approvi tu ogni messaggio." },
            ],
        },
        "tax-advisors": {
            name: "Commercialisti",
            short: "Founder, freelance e PMI",
            metaTitle: "Vendite e marketing con l'AI per commercialisti",
            metaDescription: "Gli agenti AI di Grovio portano ai commercialisti i clienti giusti: founder, freelance e PMI, con contenuti tempestivi per ogni scadenza.",
            title: "I clienti giusti, prima di ogni scadenza.",
            pitch: "Gli agenti di Grovio raggiungono founder, freelance e aziende in crescita nel momento in cui hanno bisogno di un commercialista, e pubblicano guide chiare per ogni scadenza.",
            pains: [
                "Le richieste arrivano tutte insieme, a ridosso delle scadenze",
                "I clienti meno adatti richiedono più tempo",
                "I contenuti chiari e utili non vengono mai scritti",
            ],
            agents: [
                "Raggiunge founder e PMI in linea con il tuo cliente ideale",
                "Scrive guide alle scadenze e newsletter",
                "Crea spiegazioni semplici per i social",
            ],
            useCases: [
                {
                    title: "Riempi il portafoglio con i clienti giusti",
                    points: [
                        "Trova founder, freelance e PMI in linea con te",
                        "Analizza nuove registrazioni e segnali di crescita",
                        "Scrive un DM personalizzato per ciascuno",
                    ],
                    output: "5 DM per clienti pronti",
                },
                {
                    title: "Non perdere mai un post sulle scadenze",
                    points: [
                        "Guide e promemoria sulle scadenze",
                        "Newsletter sulle novità fiscali",
                        "Post che rispondono alle domande più comuni",
                    ],
                    output: "Guida alle scadenze pronta per la revisione",
                },
                {
                    title: "Rendi il fisco semplice da condividere",
                    points: [
                        "Trasforma le guide in spiegazioni semplici",
                        "Crea caroselli per LinkedIn e Instagram",
                        "Usa lo stile del tuo brand",
                    ],
                    output: "Carosello esplicativo pronto",
                },
            ],
            icp: [
                { name: "GmbH di nuova costituzione", fit: 90 },
                { name: "Freelance con oltre 50.000 € di fatturato", fit: 84 },
                { name: "Venditori e-commerce che vendono all'estero", fit: 78 },
            ],
            dm: "Buongiorno Lukas, congratulazioni per la registrazione della Sua GmbH. Il primo bilancio annuale è dove la maggior parte dei founder perde tempo. Lavoriamo con 40 giovani aziende a Vienna. Desidera ricevere la nostra checklist per il primo anno?",
            faq: [
                { q: "Quali sfide hanno i commercialisti quando le richieste esplodono prima delle scadenze?", a: "Le richieste arrivano tutte insieme, a ridosso delle scadenze. I clienti meno adatti richiedono più tempo. I contenuti chiari e utili non vengono mai scritti." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Posso rivolgermi solo a certi tipi di clienti?", a: "Sì. La tua campagna ICP definisce esattamente chi il Sales Agent contatta e chi scarta." },
            ],
        },
        "self-employed": {
            name: "Liberi professionisti e piccole imprese",
            short: "Un team vendite e marketing tutto per te",
            metaTitle: "Vendite e marketing con l'AI per liberi professionisti e piccole imprese",
            metaDescription: "Grovio offre a liberi professionisti e piccole imprese un team vendite e marketing: lead, DM e contenuti, approvati da te.",
            title: "Un team vendite e marketing tutto per te.",
            pitch: "Tu fai il lavoro. Gli agenti di Grovio trovano i clienti, scrivono i DM e portano avanti i tuoi contenuti, e tu approvi tutto in pochi minuti al giorno.",
            pains: [
                "Vendere toglie tempo al lavoro pagato",
                "Il marketing si fa solo quando il lavoro scarseggia",
                "Agenzie e grandi strumenti costano troppo",
            ],
            agents: [
                "Trova clienti e scrive DM, cinque alla volta",
                "Scrive post e articoli con la tua voce",
                "Si parte con un agente e se ne aggiungono altri quando conviene",
            ],
            useCases: [
                {
                    title: "Trova i tuoi prossimi clienti",
                    points: [
                        "Trova clienti in linea con ciò che offri",
                        "Analizza ciascuno prima di contattarlo",
                        "Scrive DM, cinque alla volta, da sottoporre alla tua approvazione",
                    ],
                    output: "5 DM per clienti pronti",
                },
                {
                    title: "Fatti vedere senza perderci ore",
                    points: [
                        "Post e articoli con la tua voce",
                        "Un semplice piano editoriale settimanale",
                        "Bozze pronte per una revisione veloce",
                    ],
                    output: "Una settimana di post pronta",
                },
                {
                    title: "Cresci al tuo ritmo",
                    points: [
                        "Inizia con un Sales Agent",
                        "Aggiungine un secondo quando la pipeline si riempie",
                        "Metti in pausa quando vuoi, mese per mese",
                    ],
                    output: "Un team che cresce con te",
                },
            ],
            icp: [
                { name: "Piccole imprese nella tua città", fit: 88 },
                { name: "Agenzie che esternalizzano la tua competenza", fit: 82 },
                { name: "Realtà simili ai tuoi ex clienti", fit: 76 },
            ],
            dm: "Buongiorno Clara, mi è piaciuto molto il rebranding che avete lanciato il mese scorso. Sono un copywriter freelance e scrivo testi per siti web con studi di design a Vienna. Le sarebbe utile avere qualcuno a disposizione per i lanci?",
            faq: [
                { q: "Quali sfide hanno liberi professionisti e PMI tra vendite e lavoro cliente?", a: "Vendere toglie tempo al lavoro pagato. Il marketing si fa solo quando il lavoro scarseggia. Agenzie e grandi strumenti costano troppo." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Posso iniziare con un solo agente?", a: "Sì. Assumi un Sales Agent o il Writer e aggiungine altri quando conviene." },
            ],
        },
        tradespeople: {
            name: "Artigiani",
            short: "Commesse aziendali e lavoro costante",
            metaTitle: "Vendite e marketing con l'AI per artigiani",
            metaDescription: "Gli agenti AI di Grovio conquistano commesse aziendali e contratti di manutenzione per gli artigiani, e mantengono visibili online le tue recensioni e i tuoi lavori.",
            title: "Lavoro costante, tutto l'anno.",
            pitch: "Gli agenti di Grovio raggiungono amministratori immobiliari, imprese edili e aziende che cercano artigiani affidabili, e mettono in mostra online i tuoi lavori finiti.",
            pains: [
                "Il lavoro arriva a ondate",
                "I clienti aziendali sono difficili da raggiungere",
                "I tuoi lavori migliori non finiscono mai online",
            ],
            agents: [
                "Raggiunge amministratori immobiliari e imprese",
                "Trasforma le foto dei lavori in post e video brevi",
                "Scrive pagine di servizio che si posizionano a livello locale",
            ],
            useCases: [
                {
                    title: "Ottieni commesse aziendali costanti",
                    points: [
                        "Trova amministratori immobiliari e imprese della zona",
                        "Analizza stabili e progetti in programma",
                        "Scrive un DM personalizzato per ciascuno",
                    ],
                    output: "5 DM per clienti aziendali pronti",
                },
                {
                    title: "Trasforma i lavori finiti in referenze",
                    points: [
                        "Monta video brevi dalle foto dei lavori",
                        "Adatta i formati per Instagram, TikTok e YouTube",
                        "Aggiunge didascalie nello stile della casa",
                    ],
                    output: "Video dei lavori pronti",
                },
                {
                    title: "Posizionati nelle ricerche locali",
                    points: [
                        "Analizza le tue pagine di servizio e i tuoi profili",
                        "Trova cosa cercano le persone della zona",
                        "Consiglia le pagine da aggiungere",
                    ],
                    output: "Brief SEO locale pronto",
                },
            ],
            icp: [
                { name: "Amministratori immobiliari nella tua regione", fit: 89 },
                { name: "Imprese generali", fit: 83 },
                { name: "Hotel e ristoranti che necessitano di manutenzione", fit: 77 },
            ],
            dm: "Buongiorno Martin, ho visto che gestisce 12 stabili a Innsbruck. Siamo una ditta di impianti elettrici della zona e offriamo contratti di manutenzione con intervento entro 24 ore. Posso inviarLe le nostre condizioni?",
            faq: [
                { q: "Quali sfide hanno gli artigiani nel trovare lavori commerciali stabili?", a: "Il lavoro arriva a ondate. I clienti aziendali sono difficili da raggiungere. I tuoi lavori migliori non finiscono mai online." },
                { q: "Come passo dal mio sito a meeting prenotati con Grovio?", a: "Incolli il link del sito e Grovio legge le pagine per capire chi compra da te. Ricevi una campagna ICP con segmenti di acquirenti ordinati per aderenza. Approvi lead e DM a gruppi di cinque prima che parta qualsiasi messaggio. Le risposte interessate arrivano nel CRM e nel calendario." },

                { q: "Non sono sui social. È un problema?", a: "No. Il tuo Sales Agent lavora a partire dal tuo sito e dalle informazioni pubbliche. I contenuti sono facoltativi." },
            ],
        },
    },
}
