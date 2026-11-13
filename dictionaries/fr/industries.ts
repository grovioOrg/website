import type { IDictionary } from "@/dictionaries"

export const industries: IDictionary["industries"] = {
    page: {
        icp: "Exemple de campagne ICP",
        dm: "Exemple de DM",
        dmNote: "Rédigé selon votre configuration de DM. Vous validez avant l'envoi.",
        faq: "Questions",
        others: "Autres secteurs",
        ctaTitle: "Grovio · {industry}",
        ctaBody: "Collez l'adresse de votre site et nous vous montrerons la campagne ICP que nous créerions.",
        segment: "Segment",
        fit: "Pertinence",
        useCases: "Ce que font vos agents",
        useCasesBody: "Trois missions que vos agents Grovio prennent en charge, étape par étape. Vous validez ce qui part.",
        toolsTitle: "Fonctionne avec les outils que vous utilisez déjà",
    },
    list: {
        hotels: {
            name: "Hôtels",
            short: "Remplir les chambres avec des réservations directes et des groupes",
            metaTitle: "Vente et marketing par IA pour les hôtels",
            metaDescription: "Les agents IA de Grovio décrochent des réservations d'entreprises et de groupes, alimentent votre calendrier éditorial et répondent aux clients, pour que votre hôtel dépende moins des plateformes de réservation.",
            title: "Plus de réservations directes. Moins de commissions.",
            pitch: "Les agents de Grovio contactent les entreprises, organisateurs d'événements et travel managers qui réservent des chambres en nombre, et gardent votre hôtel visible grâce à des contenus bien référencés.",
            pains: [
                "Les plateformes de réservation prélèvent une commission sur chaque chambre",
                "Les ventes entreprises et groupes reposent sur une seule personne débordée",
                "Votre site et vos réseaux sociaux s'endorment hors saison",
            ],
            agents: [
                "Contacte travel managers et organisateurs d'événements avec des DM personnalisés",
                "Rédige guides saisonniers et posts qui attirent les clients sur votre site",
                "Répond aux clients et réserve des chambres via vos outils",
            ],
            useCases: [
                {
                    title: "Décrocher des réservations de groupes et d'entreprises",
                    points: [
                        "Trouve agences événementielles, organisateurs et travel managers près de chez vous",
                        "Repère les séminaires, conférences et mariages à venir",
                        "Rédige un DM personnalisé pour chacun, cinq à la fois",
                    ],
                    output: "5 DM de réservation de groupe prêts",
                },
                {
                    title: "Faire revenir les clients sur votre site",
                    points: [
                        "Guides saisonniers sur votre région et ses événements",
                        "Posts Instagram et Facebook avec votre ton",
                        "Newsletters qui renvoient vers la réservation directe",
                    ],
                    output: "Contenus de la semaine prêts à relire",
                },
                {
                    title: "Répondre aux clients jour et nuit",
                    points: [
                        "Répond aux questions sur les chambres, les extras et l'accès",
                        "Réserve via vos outils compatibles MCP",
                        "Transmet les demandes délicates à votre équipe",
                    ],
                    output: "Bientôt disponible",
                },
            ],
            icp: [
                { name: "Agences événementielles à moins de 200 km", fit: 91 },
                { name: "Travel managers d'entreprise", fit: 85 },
                { name: "Wedding planners", fit: 78 },
            ],
            dm: "Bonjour Marco, j'ai vu que votre équipe prépare la saison des séminaires de printemps. Nous accueillons des groupes de 20 à 80 personnes, avec salles de réunion et vue sur le lac, à 40 minutes de Vienne. Nos tarifs groupes vous intéressent ?",
            faq: [
                { q: "Quels défis les hôtels rencontrent-ils sur les réservations directes et groupes ?", a: "Les plateformes de réservation prélèvent une commission sur chaque chambre. Les ventes entreprises et groupes reposent sur une seule personne débordée. Votre site et vos réseaux sociaux s'endorment hors saison." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Grovio peut-il échanger avec les clients ?", a: "L'agent Concierge pour hôtels et restaurants arrive bientôt. Aujourd'hui, les agents commerciaux et marketing de Grovio vous aident à décrocher des groupes et des réservations directes." },
                { q: "Les données des clients et prospects sont-elles traitées conformément au RGPD ?", a: "Oui. Grovio est conçu pour l'UE et conforme au RGPD." },
            ],
        },
        restaurants: {
            name: "Restaurants",
            short: "Salons privés, événements et habitués",
            metaTitle: "Vente et marketing par IA pour les restaurants",
            metaDescription: "Les agents IA de Grovio remplissent vos salons privés et événements, animent vos réseaux sociaux et, bientôt, répondent aux clients et prennent les réservations.",
            title: "Complet, même un mardi.",
            pitch: "Les agents de Grovio contactent les entreprises et organisateurs qui réservent des salons privés, et gardent votre carte, vos événements et votre histoire sous les yeux des habitants du quartier.",
            pains: [
                "Les soirs de semaine et les salons privés restent vides",
                "Personne n'a le temps de publier chaque semaine",
                "Les demandes d'événements arrivent dans cinq boîtes différentes",
            ],
            agents: [
                "Contacte les office managers et organisateurs d'événements du quartier",
                "Rédige des posts sur vos nouvelles cartes et événements, avec votre ton",
                "Répond aux clients et réserve des tables via vos outils",
            ],
            useCases: [
                {
                    title: "Remplir salons privés et événements",
                    points: [
                        "Trouve les entreprises et organisateurs d'événements du quartier",
                        "Repère événements d'équipe, lancements et célébrations",
                        "Rédige un DM d'invitation personnalisé pour chacun",
                    ],
                    output: "5 DM événementiels prêts",
                },
                {
                    title: "Rester visible auprès des habitants du quartier",
                    points: [
                        "Posts sur vos nouvelles cartes, suggestions et événements",
                        "Stories rédigées avec votre ton",
                        "Un calendrier planifié des semaines à l'avance",
                    ],
                    output: "Posts de la semaine programmés",
                },
                {
                    title: "Prendre les réservations pendant que vous cuisinez",
                    points: [
                        "Répond aux questions sur la carte et les horaires",
                        "Réserve des tables via vos outils compatibles MCP",
                        "Propose le menu dégustation quand c'est pertinent",
                    ],
                    output: "Bientôt disponible",
                },
            ],
            icp: [
                { name: "Bureaux à moins de 3 km", fit: 90 },
                { name: "Organisateurs d'événements et de fêtes", fit: 82 },
                { name: "Clubs d'affaires locaux", fit: 74 },
            ],
            dm: "Bonjour Julia, votre équipe vient d'emménager dans les bureaux de la Mariahilfer Straße : bienvenue dans le quartier ! Notre salon privé accueille 24 personnes pour vos déjeuners et dîners d'équipe. Je vous envoie nos menus de groupe ?",
            faq: [
                { q: "Quels défis les restaurants ont-ils pour remplir les semaines et les événements privés ?", a: "Les soirs de semaine et les salons privés restent vides. Personne n'a le temps de publier chaque semaine. Les demandes d'événements arrivent dans cinq boîtes différentes." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Prenez-vous les réservations pour nous ?", a: "Bell, notre agent Concierge, réservera des tables via des outils de réservation compatibles MCP. Il arrive bientôt : rejoignez la liste d'attente." },
            ],
        },
        ecommerce: {
            name: "E-commerce",
            short: "Revendeurs, créateurs et contenus",
            metaTitle: "Vente et marketing par IA pour les marques e-commerce",
            metaDescription: "Les agents IA de Grovio trouvent des revendeurs et des créateurs, et font avancer vos contenus produits et votre SEO.",
            title: "Grandissez au-delà de la publicité payante.",
            pitch: "Les agents de Grovio trouvent les boutiques, grossistes et créateurs qui devraient proposer vos produits, et développent un trafic de recherche qui ne s'arrête pas avec votre budget publicitaire.",
            pains: [
                "Les coûts publicitaires augmentent chaque trimestre",
                "La prospection de revendeurs et de partenaires n'est jamais faite",
                "Vos pages produits ne sont pas bien référencées",
            ],
            agents: [
                "Trouve et contacte revendeurs, grossistes et créateurs",
                "Repère les mots-clés que vos pages produits devraient remporter",
                "Rédige guides, histoires produits et vidéos courtes",
            ],
            useCases: [
                {
                    title: "Décrocher revendeurs et créateurs",
                    points: [
                        "Trouve boutiques, grossistes et créateurs en phase avec votre marque",
                        "Analyse ce qu'ils vendent et qui ils touchent",
                        "Rédige une proposition sur mesure pour chacun",
                    ],
                    output: "5 DM partenaires prêts",
                },
                {
                    title: "Gagner les recherches qui font vendre",
                    points: [
                        "Audite vos pages produits et catégories",
                        "Repère les mots-clés que vos concurrents remportent",
                        "Classe les corrections par impact attendu",
                    ],
                    output: "Brief mots-clés pour l'équipe contenu",
                },
                {
                    title: "Raconter l'histoire de vos produits",
                    points: [
                        "Guides d'achat et histoires produits à partir du brief SEO",
                        "Posts sociaux tirés de chaque article",
                        "Des textes avec la voix de votre marque",
                    ],
                    output: "Article et posts prêts à relire",
                },
            ],
            icp: [
                { name: "Concept stores indépendants", fit: 89 },
                { name: "Créateurs de niche, 10k à 100k abonnés", fit: 83 },
                { name: "Grossistes régionaux", fit: 76 },
            ],
            dm: "Bonjour Sophie, votre sélection de déco durable est vraiment juste. Notre gamme en lin s'écoule en 6 semaines dans des boutiques similaires à Munich. Puis-je vous envoyer une box d'échantillons ?",
            faq: [
                { q: "Quels défis les marques e-commerce ont-elles quand la pub coûte plus cher ?", a: "Les coûts publicitaires augmentent chaque trimestre. La prospection de revendeurs et de partenaires n'est jamais faite. Vos pages produits ne sont pas bien référencées." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Est-ce adapté aux petits catalogues ?", a: "Oui. La campagne ICP est créée à partir de votre site web, quelle que soit sa taille." },
            ],
        },
        retail: {
            name: "Commerce de détail",
            short: "Comptes B2B, partenariats et visibilité locale",
            metaTitle: "Vente et marketing par IA pour le commerce de détail",
            metaDescription: "Les agents IA de Grovio décrochent des comptes B2B et des partenariats locaux pour les commerçants, et font travailler vos contenus entre deux campagnes.",
            title: "Décrochez les comptes que votre magasin ne peut pas atteindre.",
            pitch: "Les agents de Grovio contactent les entreprises, écoles et bureaux qui achètent en volume, et gardent votre magasin visible en ligne entre deux saisons.",
            pains: [
                "Les commandes d'entreprise et en gros sont laissées au hasard",
                "Les partenariats locaux demandent un temps que personne n'a",
                "Les campagnes saisonnières démarrent trop tard",
            ],
            agents: [
                "Contacte acheteurs et office managers pour les commandes en volume",
                "Planifie les contenus saisonniers à l'avance",
                "Crée des visuels pour chaque campagne",
            ],
            useCases: [
                {
                    title: "Ouvrir des comptes B2B et en volume",
                    points: [
                        "Trouve les entreprises et services achats du secteur",
                        "Repère les périodes de cadeaux et les besoins en volume",
                        "Rédige un DM personnalisé pour chacun",
                    ],
                    output: "5 DM B2B prêts",
                },
                {
                    title: "Préparer chaque saison en avance",
                    points: [
                        "Un plan de contenus pour les soldes, les fêtes et les lancements",
                        "Posts et newsletters avec votre ton",
                        "Des brouillons prêts des semaines à l'avance",
                    ],
                    output: "Plan saisonnier prêt à relire",
                },
                {
                    title: "Des visuels fidèles à votre marque pour chaque campagne",
                    points: [
                        "Applique votre charte graphique",
                        "Crée images et carrousels pour les réseaux sociaux",
                        "Décline des variantes pour chaque canal",
                    ],
                    output: "Visuels de campagne en préparation",
                },
            ],
            icp: [
                { name: "Entreprises commandant cadeaux et fournitures", fit: 87 },
                { name: "Écoles et associations", fit: 80 },
                { name: "Organisateurs d'événements locaux", fit: 72 },
            ],
            dm: "Bonjour Thomas, à l'approche des cadeaux de fin d'année, de nombreuses équipes à Graz commandent chez nous pour plus de 20 personnes. Nous nous occupons de l'emballage et de la livraison. Voulez-vous notre catalogue entreprises ?",
            faq: [
                { q: "Quels défis les retailers ont-ils pour développer le B2B et le local ?", a: "Les commandes d'entreprise et en gros sont laissées au hasard. Les partenariats locaux demandent un temps que personne n'a. Les campagnes saisonnières démarrent trop tard." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Puis-je mener des campagnes locales et en ligne ?", a: "Oui. Chaque Sales Agent mène jusqu'à trois campagnes, chacune avec son propre ICP." },
            ],
        },
        "real-estate": {
            name: "Agents immobiliers",
            short: "Vendeurs, bailleurs et investisseurs",
            metaTitle: "Vente et marketing par IA pour les agents immobiliers",
            metaDescription: "Les agents IA de Grovio trouvent des vendeurs et des bailleurs, relancent les demandes et gardent vos annonces et analyses de marché visibles.",
            title: "Plus de mandats, sans plus de prospection à froid.",
            pitch: "Les agents de Grovio trouvent propriétaires, bailleurs et investisseurs dans votre secteur, relancent chaque demande et publient les analyses de marché qui font de vous la référence locale.",
            pains: [
                "Ce sont les mandats qui manquent, pas les acheteurs",
                "Les demandes refroidissent pendant vos visites",
                "Les analyses de marché, c'est toujours pour la semaine prochaine",
            ],
            agents: [
                "Contacte bailleurs et investisseurs avec des DM personnalisés",
                "Rédige des analyses du marché local avec votre ton",
                "Crée des visuels d'annonces et de courtes vidéos de biens",
            ],
            useCases: [
                {
                    title: "Toucher vendeurs, bailleurs et investisseurs",
                    points: [
                        "Trouve propriétaires et investisseurs dans votre secteur",
                        "Analyse leurs portefeuilles et leur activité récente",
                        "Rédige un DM personnalisé pour chacun",
                    ],
                    output: "5 DM propriétaires prêts",
                },
                {
                    title: "Devenir l'expert du marché local",
                    points: [
                        "Analyses mensuelles du marché de votre secteur",
                        "Posts sur les biens vendus et les nouvelles annonces",
                        "Newsletters pour vos anciens clients",
                    ],
                    output: "Analyse de marché prête à relire",
                },
                {
                    title: "Présenter chaque bien sous son meilleur jour",
                    points: [
                        "Scénarise une courte visite à partir de vos photos",
                        "Monte des versions verticales et carrées",
                        "Ajoute des sous-titres selon votre charte",
                    ],
                    output: "2 vidéos d'annonces prêtes",
                },
            ],
            icp: [
                { name: "Bailleurs privés, 3 lots ou plus", fit: 88 },
                { name: "Petits investisseurs immobiliers", fit: 81 },
                { name: "Promoteurs de petits projets", fit: 73 },
            ],
            dm: "Bonjour Andreas, les loyers des deux-pièces à Leopoldstadt ont augmenté de 6\u00A0% cette année. Si vous pensez vendre ou relouer vos biens, je peux vous montrer ce qu'ont obtenu des appartements similaires. Ça vous intéresse ?",
            faq: [
                { q: "Quels défis les agents immobiliers ont-ils quand les mandats manquent ?", a: "Ce sont les mandats qui manquent, pas les acheteurs. Les demandes refroidissent pendant vos visites. Les analyses de marché, c'est toujours pour la semaine prochaine." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "La prospection auprès des propriétaires est-elle autorisée ?", a: "Grovio est conforme au RGPD : chaque contact doit reposer sur une base légale et les désinscriptions sont prises en compte immédiatement." },
            ],
        },
        "property-management": {
            name: "Gestion immobilière",
            short: "Gagner de nouveaux immeubles et propriétaires",
            metaTitle: "Vente et marketing par IA pour les gestionnaires immobiliers",
            metaDescription: "Les agents IA de Grovio trouvent les propriétaires et copropriétés en quête d'un meilleur gestionnaire, et gardent votre cabinet visible.",
            title: "Gagnez le prochain immeuble avant votre concurrent.",
            pitch: "Les agents de Grovio trouvent les propriétaires et copropriétés qui ont besoin d'un meilleur gestionnaire, et vous gardent en tête grâce à des contenus utiles.",
            pains: [
                "Les nouveaux mandats ne viennent que du bouche-à-oreille",
                "Les propriétaires ne savent pas ce que vous faites mieux",
                "Le marketing passe toujours après",
            ],
            agents: [
                "Contacte propriétaires et copropriétés",
                "Rédige des guides sur les charges, la réglementation et l'entretien",
                "Tient votre site web et vos profils à jour",
            ],
            useCases: [
                {
                    title: "Gagner de nouveaux immeubles et propriétaires",
                    points: [
                        "Trouve propriétaires et copropriétés du secteur",
                        "Analyse les immeubles et leurs gestionnaires actuels",
                        "Rédige un DM formel et personnalisé pour chacun",
                    ],
                    output: "5 DM propriétaires prêts",
                },
                {
                    title: "Répondre aux propriétaires avant qu'ils ne demandent",
                    points: [
                        "Guides sur les charges, la réglementation et l'entretien",
                        "Newsletters pour propriétaires et locataires",
                        "Posts qui montrent votre façon de travailler",
                    ],
                    output: "Guide propriétaires prêt à relire",
                },
                {
                    title: "Être trouvé quand les propriétaires cherchent",
                    points: [
                        "Audite votre site web et vos profils publics",
                        "Repère les recherches locales qui vous échappent",
                        "Recommande les corrections prioritaires",
                    ],
                    output: "Brief SEO local prêt",
                },
            ],
            icp: [
                { name: "Copropriétés de 10 à 60 lots", fit: 86 },
                { name: "Propriétaires privés d'immeubles locatifs", fit: 82 },
                { name: "Family offices avec patrimoine immobilier", fit: 70 },
            ],
            dm: "Bonjour Petra, après les décomptes de charges de cette année, de nombreuses copropriétés à Linz réexaminent leur gestionnaire. Nous publions chaque coût, ligne par ligne. Ça vaut le coup de comparer ?",
            faq: [
                { q: "Quels défis les syndics ont-ils au-delà du bouche-à-oreille ?", a: "Les nouveaux mandats ne viennent que du bouche-à-oreille. Les propriétaires ne savent pas ce que vous faites mieux. Le marketing passe toujours après." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Les agents peuvent-ils écrire sur la réglementation ?", a: "Quill écrit avec votre ton, à partir de vos informations et de vos briefs. Vous relisez chaque contenu avant publication." },
            ],
        },
        "car-dealerships": {
            name: "Concessions automobiles",
            short: "Flottes, reprises et entretien",
            metaTitle: "Vente et marketing par IA pour les concessions automobiles",
            metaDescription: "Les agents IA de Grovio gagnent des clients flottes et professionnels pour les concessions, et gardent votre stock et vos offres d'entretien visibles.",
            title: "Vendez des flottes, pas seulement des voitures.",
            pitch: "Les agents de Grovio contactent les entreprises qui ont besoin de véhicules de fonction et d'entretien de flotte, et gardent votre stock, vos offres et votre atelier visibles en ligne.",
            pains: [
                "Les ventes de flottes reposent sur quelques contacts",
                "Les clients de l'atelier partent chez les indépendants",
                "Le stock et les offres changent plus vite que votre site",
            ],
            agents: [
                "Contacte gestionnaires de flotte et chefs d'entreprise",
                "Rédige pages d'offres et guides d'entretien",
                "Monte de courtes vidéos des nouveaux véhicules",
            ],
            useCases: [
                {
                    title: "Conclure des contrats flottes et professionnels",
                    points: [
                        "Trouve gestionnaires de flotte et entreprises en croissance",
                        "Analyse la taille des flottes et les dates de renouvellement",
                        "Rédige un DM personnalisé pour chacun",
                    ],
                    output: "5 DM flottes prêts",
                },
                {
                    title: "Transformer vos offres en trafic",
                    points: [
                        "Pages d'offres pour véhicules neufs et d'occasion",
                        "Guides d'entretien pour chaque saison",
                        "Posts pour chaque nouvel arrivage",
                    ],
                    output: "Pages d'offres prêtes à relire",
                },
                {
                    title: "Montrer les nouveaux véhicules en quelques secondes",
                    points: [
                        "Scénarise un tour du véhicule à partir de vos photos",
                        "Monte des vidéos pour Instagram, TikTok et YouTube",
                        "Ajoute des sous-titres selon votre charte",
                    ],
                    output: "Vidéos des nouveaux véhicules prêtes",
                },
            ],
            icp: [
                { name: "Entreprises de 10 à 200 salariés", fit: 88 },
                { name: "Entreprises de livraison et de services", fit: 84 },
                { name: "Décideurs leasing", fit: 75 },
            ],
            dm: "Bonjour Stefan, votre équipe à Salzbourg est passée à 40 personnes cette année. Nous gérons vos véhicules de fonction de la commande à l'entretien, avec un seul interlocuteur. Je vous envoie nos conditions flotte ?",
            faq: [
                { q: "Quels défis les concessions ont-elles sur flottes et après-vente ?", a: "Les ventes de flottes reposent sur quelques contacts. Les clients de l'atelier partent chez les indépendants. Le stock et les offres changent plus vite que votre site." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Est-ce compatible avec mon CRM ?", a: "Les réponses positives sont synchronisées avec votre CRM pour que votre équipe commerciale prenne le relais." },
            ],
        },
        "law-firms": {
            name: "Cabinets d'avocats",
            short: "Clients entreprises et leadership d'opinion",
            metaTitle: "Marketing et développement commercial par IA pour les cabinets d'avocats",
            metaDescription: "Les agents IA de Grovio aident les cabinets d'avocats à toucher les entreprises qui ont besoin de leurs domaines d'expertise, et à publier des analyses qui inspirent confiance.",
            title: "Le développement commercial, fait dans les règles.",
            pitch: "Les agents de Grovio contactent les entreprises qui ont besoin de vos domaines d'expertise, avec des messages mesurés et professionnels, et publient des analyses qui démontrent votre savoir-faire.",
            pains: [
                "Les associés n'ont pas de temps pour le développement commercial",
                "L'expertise reste enfouie dans les dossiers",
                "Chaque message doit être mesuré et professionnel",
            ],
            agents: [
                "Contacte directeurs juridiques et fondateurs, avec formalité et soin",
                "Transforme votre expertise en articles et newsletters",
                "Repère les recherches que font réellement vos clients",
            ],
            useCases: [
                {
                    title: "Gagner des clients entreprises, avec soin",
                    points: [
                        "Trouve directeurs juridiques et fondateurs dans vos domaines d'expertise",
                        "Analyse opérations, recrutements et actualité réglementaire",
                        "Rédige des DM formels que vous validez un par un",
                    ],
                    output: "5 DM formels prêts",
                },
                {
                    title: "Faire de votre expertise une référence",
                    points: [
                        "Articles sur les décisions de justice et les évolutions réglementaires",
                        "Newsletters pour vos clients et contacts",
                        "Posts LinkedIn pour les associés",
                    ],
                    output: "Article prêt pour la relecture des associés",
                },
                {
                    title: "Être trouvé sur les bonnes questions",
                    points: [
                        "Repère les recherches que font vos clients",
                        "Audite vos pages de domaines d'expertise",
                        "Indique au Writer les sujets à traiter",
                    ],
                    output: "Brief de recherche pour l'équipe contenu",
                },
            ],
            icp: [
                { name: "Scale-ups en expansion dans l'UE", fit: 87 },
                { name: "Entreprises sans juriste interne", fit: 83 },
                { name: "Fondateurs préparant une levée de fonds", fit: 79 },
            ],
            dm: "Madame Weber, toutes nos félicitations pour votre série A. À ce stade, de nombreux fondateurs revoient leurs contrats de travail et leurs cessions de propriété intellectuelle. Un bref échange sur les points qui demandent généralement de l'attention vous serait-il utile ?",
            faq: [
                { q: "Quels défis les cabinets ont-ils pour convertir l'expertise en nouveaux clients ?", a: "Les associés n'ont pas de temps pour le développement commercial. L'expertise reste enfouie dans les dossiers. Chaque message doit être mesuré et professionnel." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Puis-je contrôler le ton et la formulation ?", a: "Oui. Définissez simplement le ton, le niveau de formalité et les mots à éviter. Vous validez chaque message." },
            ],
        },
        "tax-advisors": {
            name: "Conseillers fiscaux",
            short: "Fondateurs, indépendants et PME",
            metaTitle: "Vente et marketing par IA pour les conseillers fiscaux",
            metaDescription: "Les agents IA de Grovio apportent aux conseillers fiscaux les bons clients : fondateurs, indépendants et PME, avec des contenus utiles à chaque échéance.",
            title: "Les bons clients, avant chaque échéance.",
            pitch: "Les agents de Grovio contactent fondateurs, indépendants et entreprises en croissance au moment où ils ont besoin d'un conseiller fiscal, et publient des guides clairs à chaque échéance.",
            pains: [
                "Les demandes arrivent toutes en même temps, juste avant les échéances",
                "Les clients mal ciblés prennent le plus de temps",
                "Les contenus clairs et utiles ne sont jamais rédigés",
            ],
            agents: [
                "Contacte les fondateurs et PME qui correspondent à votre client idéal",
                "Rédige guides des échéances et newsletters",
                "Crée des explications simples pour les réseaux sociaux",
            ],
            useCases: [
                {
                    title: "Remplir votre portefeuille avec les bons clients",
                    points: [
                        "Trouve les fondateurs, indépendants et PME qui vous correspondent",
                        "Repère les nouvelles immatriculations et les signaux de croissance",
                        "Rédige un DM personnalisé pour chacun",
                    ],
                    output: "5 DM clients prêts",
                },
                {
                    title: "Ne manquer aucun post d'échéance",
                    points: [
                        "Guides et rappels des échéances",
                        "Newsletters sur les évolutions fiscales",
                        "Posts qui répondent aux questions fréquentes",
                    ],
                    output: "Guide des échéances prêt à relire",
                },
                {
                    title: "Rendre la fiscalité simple à partager",
                    points: [
                        "Transforme vos guides en explications simples",
                        "Crée des carrousels pour LinkedIn et Instagram",
                        "Respecte votre charte graphique",
                    ],
                    output: "Carrousel explicatif prêt",
                },
            ],
            icp: [
                { name: "GmbH nouvellement créées", fit: 90 },
                { name: "Indépendants au CA supérieur à 50k €", fit: 84 },
                { name: "E-commerçants vendant à l'international", fit: 78 },
            ],
            dm: "Bonjour Lukas, félicitations pour l'immatriculation de votre GmbH. C'est sur les premiers comptes annuels que la plupart des fondateurs perdent du temps. Nous accompagnons 40 jeunes entreprises à Vienne. Voulez-vous notre checklist de la première année ?",
            faq: [
                { q: "Quels défis les experts-comptables ont-ils quand les demandes affluent avant les échéances ?", a: "Les demandes arrivent toutes en même temps, juste avant les échéances. Les clients mal ciblés prennent le plus de temps. Les contenus clairs et utiles ne sont jamais rédigés." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Puis-je cibler uniquement certains types de clients ?", a: "Oui. Votre campagne ICP définit précisément qui le Sales Agent contacte et qui il écarte." },
            ],
        },
        "self-employed": {
            name: "Indépendants et petites entreprises",
            short: "Une équipe commerciale et marketing pour vous seul",
            metaTitle: "Vente et marketing par IA pour les indépendants et petites entreprises",
            metaDescription: "Grovio offre aux indépendants et petites entreprises une équipe commerciale et marketing : leads, DM et contenus, validés par vous.",
            title: "Une équipe commerciale et marketing rien que pour vous.",
            pitch: "Vous faites le travail. Les agents de Grovio trouvent les clients, rédigent les DM et alimentent vos contenus, et vous validez tout en quelques minutes par jour.",
            pains: [
                "Vendre prend du temps sur le travail facturé",
                "Le marketing ne se fait que quand les missions se raréfient",
                "Les agences et les gros outils coûtent trop cher",
            ],
            agents: [
                "Trouve des clients et rédige des DM, cinq à la fois",
                "Rédige posts et articles avec votre ton",
                "Commence avec un agent, en ajoute quand c'est rentable",
            ],
            useCases: [
                {
                    title: "Trouver vos prochains clients",
                    points: [
                        "Trouve des clients qui correspondent à votre offre",
                        "Analyse chacun d'eux avant de le contacter",
                        "Rédige des DM, cinq à la fois, pour votre validation",
                    ],
                    output: "5 DM clients prêts",
                },
                {
                    title: "Être visible sans y passer des heures",
                    points: [
                        "Posts et articles avec votre ton",
                        "Un plan de contenus hebdomadaire simple",
                        "Des brouillons prêts pour une relecture rapide",
                    ],
                    output: "Une semaine de posts prête",
                },
                {
                    title: "Grandir à votre rythme",
                    points: [
                        "Commencez avec un Sales Agent",
                        "Ajoutez-en un second quand le pipeline se remplit",
                        "Mettez en pause à tout moment, au mois",
                    ],
                    output: "Une équipe qui grandit avec vous",
                },
            ],
            icp: [
                { name: "Petites entreprises de votre ville", fit: 88 },
                { name: "Agences qui sous-traitent votre compétence", fit: 82 },
                { name: "Pairs de vos anciens clients", fit: 76 },
            ],
            dm: "Bonjour Clara, j'ai adoré le rebranding que vous avez lancé le mois dernier. Je suis copywriter freelance et je travaille avec des studios de design à Vienne sur leurs textes web. Ce serait utile d'avoir quelqu'un sous la main pour vos lancements ?",
            faq: [
                { q: "Quels défis les indépendants et TPE ont-ils entre vente et travail client ?", a: "Vendre prend du temps sur le travail facturé. Le marketing ne se fait que quand les missions se raréfient. Les agences et les gros outils coûtent trop cher." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Puis-je commencer avec un seul agent ?", a: "Oui. Recrutez un Sales Agent ou le Writer, et ajoutez-en d'autres quand c'est rentable." },
            ],
        },
        tradespeople: {
            name: "Artisans",
            short: "Chantiers professionnels et travail régulier",
            metaTitle: "Vente et marketing par IA pour les artisans",
            metaDescription: "Les agents IA de Grovio décrochent des chantiers professionnels et des contrats de maintenance pour les artisans, et gardent vos avis et réalisations visibles en ligne.",
            title: "Du travail régulier, toute l'année.",
            pitch: "Les agents de Grovio contactent gestionnaires immobiliers, entreprises du bâtiment et sociétés qui ont besoin d'artisans fiables, et mettent en valeur vos réalisations en ligne.",
            pains: [
                "Le travail arrive par vagues",
                "Les clients professionnels sont difficiles à atteindre",
                "Vos plus belles réalisations ne sont jamais en ligne",
            ],
            agents: [
                "Contacte gestionnaires immobiliers et entreprises générales",
                "Transforme vos photos de chantier en posts et vidéos courtes",
                "Rédige des pages de services bien référencées localement",
            ],
            useCases: [
                {
                    title: "Décrocher des chantiers professionnels réguliers",
                    points: [
                        "Trouve gestionnaires immobiliers et entreprises générales du secteur",
                        "Analyse les immeubles et les projets à venir",
                        "Rédige un DM personnalisé pour chacun",
                    ],
                    output: "5 DM professionnels prêts",
                },
                {
                    title: "Faire de vos chantiers terminés une preuve",
                    points: [
                        "Monte de courtes vidéos à partir de vos photos de chantier",
                        "Formats pour Instagram, TikTok et YouTube",
                        "Ajoute des sous-titres selon votre charte",
                    ],
                    output: "Vidéos de chantier prêtes",
                },
                {
                    title: "Se positionner sur les recherches locales",
                    points: [
                        "Audite vos pages de services et vos profils",
                        "Repère ce que recherchent les gens du coin",
                        "Recommande les pages à ajouter en priorité",
                    ],
                    output: "Brief SEO local prêt",
                },
            ],
            icp: [
                { name: "Gestionnaires immobiliers de votre région", fit: 89 },
                { name: "Entreprises générales du bâtiment", fit: 83 },
                { name: "Hôtels et restaurants ayant besoin de maintenance", fit: 77 },
            ],
            dm: "Bonjour Martin, j'ai vu que vous gérez 12 immeubles à Innsbruck. Nous sommes une entreprise d'électricité locale et proposons des contrats de maintenance avec intervention sous 24 heures. Puis-je vous envoyer nos conditions ?",
            faq: [
                { q: "Quels défis les artisans ont-ils pour trouver du travail commercial régulier ?", a: "Le travail arrive par vagues. Les clients professionnels sont difficiles à atteindre. Vos plus belles réalisations ne sont jamais en ligne." },
                { q: "Comment passer de mon site à des rendez-vous pris avec Grovio ?", a: "Vous collez le lien de votre site et Grovio le lit pour comprendre qui achète chez vous. Vous recevez une campagne ICP avec des segments d'acheteurs classés par adéquation. Vous validez leads et DM par lots de cinq avant tout envoi. Les réponses chaudes atterrissent dans votre CRM et votre calendrier." },

                { q: "Je ne suis pas sur les réseaux sociaux. Est-ce un problème ?", a: "Non. Votre Sales Agent travaille à partir de votre site web et des informations publiques. Les contenus sont facultatifs." },
            ],
        },
    },
}
