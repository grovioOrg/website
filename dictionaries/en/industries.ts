export const industries = {
    page: {
        icp: "Who we sell to",
        dm: "A sample smart hook",
        dmNote: "Written from a public buying-intent signal. You approve before it sends.",
        faq: "Questions",
        others: "Other industries",
        ctaTitle: "Grovio for {industry}",
        ctaBody: "Paste your website and we'll show you the buying-intent signals we'd act on.",
        segment: "Segment",
        fit: "Fit",
        useCases: "What your agents do",
        useCasesBody: "Sales starts from public buying-intent signals. Marketing keeps you visible. You approve what goes out.",
        toolsTitle: "Works with the tools you already use",
    },
    list: {
        hotels: {
            name: "Hotels",
            short: "Event planners, sports clubs, tour operators",
            metaTitle: "AI sales and marketing for hotels",
            metaDescription: "Grovio finds public buying-intent signals for hotels — sold-out congress blocks, training camps with no venue, tour catalogues with no partner hotel — and drafts the outreach. You approve every DM.",
            title: "More direct bookings. Fewer portal fees.",
            pitch: "Grovio watches public business data for buying-intent signals: a congress whose hotel block is sold out, a sports club planning a camp with no venue, a coach tour routing through your region with no partner hotel. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "Sold-out congress blocks nearby never reach your sales desk",
                "Sports clubs announce camps without naming a hotel",
                "Tour operators pass through your region with no partner listed",
            ],
            agents: [
                "Finds event planners, sports clubs and tour operators from public signals, then drafts a personal DM",
                "Writes seasonal guides and posts that bring guests to your site",
                "Answers guests and books rooms through your tools",
            ],
            useCases: [
                {
                    title: "Act on group-booking signals",
                    points: [
                        "Watches congress calendars, club sites and tour catalogues",
                        "Flags sold-out hotel blocks, camps with no venue and routes with no partner hotel",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 group-booking DMs ready"
                },
                {
                    title: "Keep guests coming back to your site",
                    points: [
                        "Seasonal guides for your region and events",
                        "Posts for Instagram and Facebook in your voice",
                        "Newsletters that point to direct booking",
                    ],
                    output: "Weekly content ready for review",
                },
                {
                    title: "Answer guests around the clock",
                    points: [
                        "Answers questions on rooms, extras and directions",
                        "Books through your MCP-enabled tools",
                        "Hands tricky requests to your team",
                    ],
                    output: "Coming soon",
                },
            ],
            icp: [
                {"name": "Event planners with a sold-out hotel block", "fit": 91},
                {"name": "Sports clubs planning a training camp", "fit": 85},
                {"name": "Coach tour operators routing through the region", "fit": 78},
            ],
            dm: "The spring congress hotel block shows sold out. We have 40 rooms 20 minutes from the venue — want me to hold them for your attendees?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for hotels?",
                    a: "Sold-out official hotel blocks on nearby congresses and trade fairs. Sports clubs announcing a training camp without a venue. Coach tour catalogues that route through your region with no partner hotel listed."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can Grovio talk to guests?", a: "The Concierge agent for hotels and restaurants is coming soon. Today, Grovio's sales and marketing agents help you win groups and direct bookings." },
                { q: "Is guest and prospect data handled under GDPR?", a: "Yes. Grovio is built for the EU and GDPR compliant." },
            ],
        },
        restaurants: {
            name: "Restaurants",
            short: "Companies, productions, conference organisers",
            metaTitle: "AI sales and marketing for restaurants",
            metaDescription: "Grovio finds public buying-intent signals for restaurants — a Christmas venue that closed, a film permit on your street, a conference with no in-house catering — and drafts the outreach.",
            title: "Full tables on a Tuesday, too.",
            pitch: "Grovio watches public data for buying-intent signals: a company's Christmas venue that just closed, a film permit issued in your district, a conference next door with no in-house catering. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "The venue a company used last year has closed, and nobody tells you",
                "Productions film on your street and eat elsewhere",
                "Nearby conferences have no in-house catering",
            ],
            agents: [
                "Finds companies, productions and conference organisers from public signals, then drafts a personal invite",
                "Writes posts about new menus and events in your voice",
                "Answers guests and books tables through your tools",
            ],
            useCases: [
                {
                    title: "Fill private dining from public signals",
                    points: [
                        "Watches closures, filming notices and conference programmes",
                        "Flags closed party venues, on-set crews and events with no catering",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 event DMs ready"
                },
                {
                    title: "Stay in front of locals",
                    points: [
                        "Posts about new menus, specials and events",
                        "Stories written in your voice",
                        "A calendar planned weeks ahead",
                    ],
                    output: "Posts scheduled for the week",
                },
                {
                    title: "Take bookings while you cook",
                    points: [
                        "Answers questions on menus and opening hours",
                        "Books tables through your MCP-enabled tools",
                        "Suggests the tasting menu when it fits",
                    ],
                    output: "Coming soon",
                },
            ],
            icp: [
                {"name": "Companies whose party venue just closed", "fit": 90},
                {"name": "Productions filming in the district", "fit": 82},
                {"name": "Conference organisers with no in-house catering", "fit": 74},
            ],
            dm: "Your team's Christmas party venue closed this year. We seat 60 privately and still have December dates. Want me to send the menu?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for restaurants?",
                    a: "A company's past Christmas party venue marked closed. Film permits issued in your district. Conferences at a nearby venue with no in-house catering."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Do you take reservations for us?", a: "Bell, our Concierge agent, will book tables through MCP-enabled reservation tools. It's coming soon; join the waitlist." },
            ],
        },
        ecommerce: {
            name: "E-commerce",
            short: "Stockists whose shelves just opened up",
            metaTitle: "AI sales and marketing for e-commerce brands",
            metaDescription: "Grovio finds public buying-intent signals for e-commerce brands — a competitor that stopped wholesale, a retailer out of stock for weeks, a concept store buying its first range — and drafts the outreach.",
            title: "Grow beyond paid ads.",
            pitch: "Grovio watches public data for stockist signals: a competitor brand that stopped wholesale, a retailer out of stock in your category for three weeks, a concept store opening and buying its first range. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "A competitor stops wholesale and their stockists have an empty shelf",
                "Retailers sit out of stock in your category for weeks",
                "New concept stores buy their first range without you",
            ],
            agents: [
                "Finds stockists from public signals — empty shelves, openings, brands leaving wholesale — then drafts a pitch",
                "Finds the keywords your product pages should win",
                "Writes guides, product stories and short videos",
            ],
            useCases: [
                {
                    title: "Land stockists from empty-shelf signals",
                    points: [
                        "Watches brand announcements, stockist pages and shop stock",
                        "Flags brands leaving wholesale, 3+ week stock-outs and stores buying a first range",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 partner DMs ready"
                },
                {
                    title: "Win the searches that sell",
                    points: [
                        "Audits your product and category pages",
                        "Finds the keywords competitors win",
                        "Ranks fixes by expected impact",
                    ],
                    output: "Keyword brief for the content team",
                },
                {
                    title: "Tell your product stories",
                    points: [
                        "Buying guides and product stories from the SEO brief",
                        "Social posts cut from every article",
                        "Copy in your brand voice",
                    ],
                    output: "Article and posts ready for review",
                },
            ],
            icp: [
                {"name": "Stockists of a brand that stopped wholesale", "fit": 89},
                {"name": "Retailers out of stock in your category", "fit": 83},
                {"name": "Concept stores buying their first range", "fit": 76},
            ],
            dm: "That brand stopped wholesale — your shop still lists six of their products. Ours sit at the same price point. Want a sample box before the shelf goes empty?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for e-commerce brands?",
                    a: "A competitor brand that stops wholesale, leaving stockists with an empty shelf. A retailer out of stock in your category for three or more weeks. A concept store announcing an opening and buying its first range."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Does it work for small catalogues?", a: "Yes. The ICP campaign is built from your website, whatever its size." },
            ],
        },
        retail: {
            name: "Retail",
            short: "Clubs, events, new businesses",
            metaTitle: "AI sales and marketing for retail",
            metaDescription: "Grovio finds public buying-intent signals for retailers — a club promoted to a higher league, a race selling participant packs, a hotel or restaurant opening that needs fit-out — and drafts the outreach.",
            title: "Win the accounts your shop floor can't.",
            pitch: "Grovio watches public data for bulk-buy signals: a club promoted to a higher league, a local race or festival selling participant packs, a hotel or restaurant opening nearby that needs fit-out. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "Clubs get promoted and order kits from whoever calls first",
                "Races and festivals sell participant packs without you",
                "New hotels and restaurants fit out without a local supplier",
            ],
            agents: [
                "Finds clubs, events and new businesses from public signals, then drafts a personal DM",
                "Plans seasonal content ahead of time",
                "Creates visuals for every campaign",
            ],
            useCases: [
                {
                    title: "Open B2B orders from public signals",
                    points: [
                        "Watches league tables, event registrations and opening notices",
                        "Flags promotions, participant packs and nearby fit-outs",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 B2B DMs ready"
                },
                {
                    title: "Plan every season early",
                    points: [
                        "A content plan for sales, holidays and launches",
                        "Posts and newsletters in your voice",
                        "Drafts ready weeks ahead",
                    ],
                    output: "Seasonal plan ready for review",
                },
                {
                    title: "On-brand visuals for every campaign",
                    points: [
                        "Applies your brand style",
                        "Creates social images and carousels",
                        "Builds variants for each channel",
                    ],
                    output: "Campaign visuals in the pipeline",
                },
            ],
            icp: [
                {"name": "Clubs promoted to a higher league", "fit": 87},
                {"name": "Local races and festivals", "fit": 80},
                {"name": "Hotels and restaurants opening nearby", "fit": 72},
            ],
            dm: "Congrats on promotion to the higher league. New league usually means new kits — we deliver in 3 weeks. Want a mock-up with your crest?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for retailers?",
                    a: "A club promoted to a higher league that needs new kits. A local race or festival that has registered its date and started selling participant packs. A hotel or restaurant opening nearby that needs fit-out supplies."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I run local and online campaigns?", a: "Yes. Each Sales Agent runs as many campaigns as you need, each with its own ICP, across up to 5 industries and 3,000 leads a month." },
            ],
        },
        "real-estate": {
            name: "Real estate agents",
            short: "Owners and developers with stalled listings",
            metaTitle: "AI sales and marketing for real estate agents",
            metaDescription: "Grovio finds public buying-intent signals for estate agents — listings live 45+ days with price drops, completed units still marked available, rentals re-posted every few weeks — and drafts the outreach.",
            title: "More listings, without more cold calls.",
            pitch: "Grovio watches listing portals for stall signals: a private listing live 45+ days with two price drops, a developer's units still marked available six months after completion, the same rental re-posted every few weeks. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "Listings sit live for weeks with price drops, and the owner is ready to switch",
                "Completed developments still show units available",
                "The same rental is re-posted every few weeks",
            ],
            agents: [
                "Finds owners and developers from stalled listings and vacant units, then drafts a personal DM",
                "Writes local market updates in your voice",
                "Creates listing visuals and short property videos",
            ],
            useCases: [
                {
                    title: "Reach owners when a listing stalls",
                    points: [
                        "Watches listing portals for age, price drops and re-posts",
                        "Flags 45-day listings, unfinished sales after completion and repeating rentals",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 owner DMs ready"
                },
                {
                    title: "Be the local market expert",
                    points: [
                        "Monthly market updates for your area",
                        "Posts about sold and new listings",
                        "Newsletters for past clients",
                    ],
                    output: "Market update ready for review",
                },
                {
                    title: "Show every listing at its best",
                    points: [
                        "Storyboards a short tour from your photos",
                        "Cuts vertical and square versions",
                        "Adds captions in house style",
                    ],
                    output: "2 listing videos ready",
                },
            ],
            icp: [
                {"name": "Owners with listings live 45+ days", "fit": 88},
                {"name": "Developers with unsold completed units", "fit": 81},
                {"name": "Landlords re-posting the same rental", "fit": 73},
            ],
            dm: "Your flat has been listed two months with two price drops. We sold four similar units nearby this year. Want the comparable prices?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for estate agents?",
                    a: "Private listings live 45 days or more with two or more price drops. A developer's units still marked available six months after completion. The same rental flat re-posted every few weeks."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Is outreach to owners allowed?", a: "Grovio is GDPR compliant: every contact needs a lawful basis and opt-outs are honoured right away." },
            ],
        },
        "property-management": {
            name: "Property management",
            short: "Owner associations and developers at handover",
            metaTitle: "AI sales and marketing for property managers",
            metaDescription: "Grovio finds public buying-intent signals for property managers — reviews that say management doesn't answer, a new build near handover with no named manager, rental ads re-posted at the same address — and drafts the outreach.",
            title: "Win the next building before your competitor does.",
            pitch: "Grovio watches public data for switch-intent: reviews that say management doesn't answer, a new build near handover with no named manager, the same address re-posting rental ads. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "Tenants review slow repairs, and owners start looking for a new manager",
                "New builds near handover have no named manager",
                "The same address keeps re-posting rental ads",
            ],
            agents: [
                "Finds owner associations and developers from public switch-intent, then drafts a formal DM",
                "Writes guides on costs, regulations and maintenance",
                "Keeps your website and profiles up to date",
            ],
            useCases: [
                {
                    title: "Win buildings from switch-intent signals",
                    points: [
                        "Watches reviews, permit completions and rental re-posts",
                        "Flags slow-repair reviews, unnamed managers at handover and repeating vacancies",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 owner DMs ready"
                },
                {
                    title: "Answer owners before they ask",
                    points: [
                        "Guides on costs, regulations and maintenance",
                        "Newsletters for owners and tenants",
                        "Posts that show how you work",
                    ],
                    output: "Owner guide ready for review",
                },
                {
                    title: "Get found when owners search",
                    points: [
                        "Audits your website and public profiles",
                        "Finds the local searches you miss",
                        "Recommends the fixes worth doing first",
                    ],
                    output: "Local SEO brief ready",
                },
            ],
            icp: [
                {"name": "Owner associations with slow-repair reviews", "fit": 86},
                {"name": "Developers at handover with no named manager", "fit": 82},
                {"name": "Owners re-posting vacant rentals", "fit": 70},
            ],
            dm: "Tenants at this address keep reviewing slow repairs. We answer within 24 hours with a fixed technician network. Want our handover plan for the owners' meeting?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for property managers?",
                    a: "Reviews on a building that mention management doesn't answer. A new build near handover with no named manager. The same address re-posting rental ads."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can the agents write about regulations?", a: "Quill writes in your voice from your input and briefs. You review every piece before it's published." },
            ],
        },
        "car-dealerships": {
            name: "Car dealerships",
            short: "Companies hiring with a company car",
            metaTitle: "AI sales and marketing for car dealerships",
            metaDescription: "Grovio finds public buying-intent signals for dealerships — job ads that include a company car, a home-care or delivery firm expanding into new districts, a driving school opening a branch — and drafts the outreach.",
            title: "Sell fleets, not just cars.",
            pitch: "Grovio watches job boards and openings for fleet signals: ten or more ads saying company car included, a home-care or delivery firm expanding into new districts, a driving school opening a branch. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "Companies hire field staff with a company car, and nobody quotes the fleet",
                "Home-care and delivery firms expand district by district without a dealer",
                "Driving schools open branches and buy cars elsewhere",
            ],
            agents: [
                "Finds companies hiring with a company car from public job ads, then drafts a fleet DM",
                "Writes offer pages and service guides",
                "Cuts short videos of new stock",
            ],
            useCases: [
                {
                    title: "Close fleets from hiring signals",
                    points: [
                        "Watches job boards for company-car lines and new branches",
                        "Flags 10+ ads with a car, expanding delivery firms and new driving schools",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 fleet DMs ready"
                },
                {
                    title: "Turn offers into traffic",
                    points: [
                        "Offer pages for new and used stock",
                        "Service guides for every season",
                        "Posts for every new arrival",
                    ],
                    output: "Offer pages ready for review",
                },
                {
                    title: "Show new stock in seconds",
                    points: [
                        "Storyboards a walkaround from your photos",
                        "Cuts videos for Instagram, TikTok and YouTube",
                        "Adds captions in house style",
                    ],
                    output: "New-stock videos ready",
                },
            ],
            icp: [
                {"name": "Companies hiring with a company car", "fit": 88},
                {"name": "Home-care and delivery firms expanding", "fit": 84},
                {"name": "Driving schools opening a new branch", "fit": 75},
            ],
            dm: "You're hiring 12 field technicians, all with a company car. We can deliver 12 identical vans with service in one contract. Want a fleet quote?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for dealerships?",
                    a: "Job ads that say company car included, especially ten or more at once. A home-care or delivery firm expanding into new districts. A driving school opening a new branch."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Does it work with my CRM?", a: "Positive replies sync to your CRM so your sales team can take over." },
            ],
        },
        "law-firms": {
            name: "Law firms",
            short: "Businesses with a filing, a hire or a first local job",
            metaTitle: "AI marketing and business development for law firms",
            metaDescription: "Grovio finds public buying-intent signals for law firms — an EU trademark filing with no representative, an in-house counsel role open 60+ days, a foreign company posting its first local jobs — and drafts measured outreach.",
            title: "Business development, done properly.",
            pitch: "Grovio watches public registers and job ads for legal-need signals: an EU trademark filing with no representative, an in-house counsel role open 60+ days, a foreign company posting its first local jobs. Each signal becomes a formal smart hook you approve before it sends.",
            pains: [
                "EU trademark filings go in with no representative listed",
                "In-house counsel roles stay open for months",
                "Foreign companies post their first local jobs without local counsel",
            ],
            agents: [
                "Finds businesses from public filings and hires, then drafts a formal DM you approve one by one",
                "Turns your expertise into articles and newsletters",
                "Finds the searches your clients actually make",
            ],
            useCases: [
                {
                    title: "Win corporate clients from public filings",
                    points: [
                        "Watches EUIPO filings, counsel jobs and first local job ads",
                        "Flags marks with no representative, roles open 60+ days and foreign firms hiring locally",
                        "Drafts a formal smart hook from each signal"
                    ],
                    output: "5 formal DMs ready"
                },
                {
                    title: "Turn expertise into authority",
                    points: [
                        "Articles on rulings and regulation changes",
                        "Newsletters for clients and contacts",
                        "LinkedIn posts for partners",
                    ],
                    output: "Article ready for partner review",
                },
                {
                    title: "Be found for the right questions",
                    points: [
                        "Finds the searches your clients make",
                        "Audits your practice area pages",
                        "Briefs the Writer on what to cover",
                    ],
                    output: "Search brief for the content team",
                },
            ],
            icp: [
                {"name": "Businesses filing an EU trademark with no representative", "fit": 87},
                {"name": "Companies whose in-house counsel role stays open", "fit": 83},
                {"name": "Foreign firms posting their first local jobs", "fit": 79},
            ],
            dm: "Your EU trademark filing has no representative listed. Opposition windows open in three months. Want us to watch it for you?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for law firms?",
                    a: "An EU trademark filing with no representative listed. An in-house counsel job open 60 days or more. A foreign company posting its first local job ads. Check bar rules on direct outreach in your jurisdiction before you send."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I control tone and wording?", a: "Yes. Set tone, formality and words to avoid in plain language. You approve every message." },
            ],
        },
        "self-employed": {
            name: "Small businesses",
            short: "B2B clients with a role they cannot fill",
            metaTitle: "AI sales and marketing for small businesses",
            metaDescription: "Grovio finds public buying-intent signals for small businesses — a freelance-able role re-posted for 60+ days, a business asking for recommendations, a site with a broken contact form — and drafts the outreach.",
            title: "A sales and marketing team for one.",
            pitch: "Grovio watches public data for client signals: the same freelance-able role re-posted for 60+ days, a business asking for recommendations in local groups, a prospect's site with no mobile booking or a broken contact form. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "The same designer or bookkeeper role stays open for months",
                "Businesses ask for recommendations in local groups, and you never see it",
                "Prospect sites have a broken contact form",
            ],
            agents: [
                "Finds B2B clients from open roles, local asks and broken forms, then drafts a DM",
                "Writes posts and articles in your voice",
                "Starts with one agent, adds more when it pays off",
            ],
            useCases: [
                {
                    title: "Find clients from unfilled roles",
                    points: [
                        "Watches job ads, local groups and prospect sites",
                        "Flags roles open 60+ days, public asks and broken contact forms",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 client DMs ready"
                },
                {
                    title: "Show up without the hours",
                    points: [
                        "Posts and articles in your voice",
                        "A simple weekly content plan",
                        "Drafts ready for a quick review",
                    ],
                    output: "Week of posts ready",
                },
                {
                    title: "Grow at your pace",
                    points: [
                        "Start with one Sales Agent",
                        "Add a second when the pipeline fills",
                        "Pause anytime, month to month",
                    ],
                    output: "A team that grows with you",
                },
            ],
            icp: [
                {"name": "Businesses re-posting a freelance-able role", "fit": 88},
                {"name": "Owners asking for recommendations locally", "fit": 82},
                {"name": "Sites with a broken contact form", "fit": 76},
            ],
            dm: "Your designer role has been open since September. I can cover it on a monthly retainer starting next week. Want three samples from your sector?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for small businesses?",
                    a: "The same freelance-able role re-posted for 60 days or more. A business asking for recommendations in local LinkedIn groups. A prospect's site with no mobile booking or a broken contact form."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I start with just one agent?", a: "Yes. Hire one Sales Agent or the Writer and add more when it pays off." },
            ],
        },
        tradespeople: {
            name: "Tradespeople",
            short: "Property managers, hotels, developers",
            metaTitle: "AI sales and marketing for tradespeople",
            metaDescription: "Grovio finds public buying-intent signals for trades — a renovation permit in your district, a public tender in your trade, a hotel announcing a seasonal closure for works — and drafts the outreach.",
            title: "Steady work, all year round.",
            pitch: "Grovio watches permits, tenders and hotel notices: a renovation permit approved in your district, a public tender in your trade, a hotel announcing a seasonal closure for renovation. Each signal becomes a smart hook you approve before it sends.",
            pains: [
                "Renovation permits go through in your district, and another firm gets the job",
                "Public tenders in your trade close before you see them",
                "Hotels announce a seasonal closure for works without a quote from you",
            ],
            agents: [
                "Finds property managers, hotels and developers from permits and tenders, then drafts a personal DM",
                "Turns job photos into posts and short videos",
                "Writes service pages that rank locally",
            ],
            useCases: [
                {
                    title: "Land commercial jobs from permits and tenders",
                    points: [
                        "Watches renovation permits, procurement portals and hotel notices",
                        "Flags approved permits, open tenders and seasonal closures for works",
                        "Drafts a smart hook from each signal"
                    ],
                    output: "5 commercial DMs ready"
                },
                {
                    title: "Turn finished jobs into proof",
                    points: [
                        "Cuts short videos from job photos",
                        "Formats for Instagram, TikTok and YouTube",
                        "Adds captions in house style",
                    ],
                    output: "Job videos ready",
                },
                {
                    title: "Rank for local searches",
                    points: [
                        "Audits your service pages and profiles",
                        "Finds what locals search for",
                        "Recommends the pages worth adding",
                    ],
                    output: "Local SEO brief ready",
                },
            ],
            icp: [
                {"name": "Property managers with a renovation permit", "fit": 89},
                {"name": "Public tenders in your trade", "fit": 83},
                {"name": "Hotels closing for seasonal renovation", "fit": 77},
            ],
            dm: "Saw the renovation permit for that address. We do electrical for similar projects in the district and have Q1 crews free. Want availability?",
            faq: [
                {
                    q: "What buying-intent signals does Grovio find for tradespeople?",
                    a: "A renovation permit approved in your district. A public tender on a procurement portal in your trade. A hotel announcing a seasonal closure for renovation."
                },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website and Grovio reads it to learn who you sell to. It also watches public business data for buying-intent signals, then writes a smart hook from each one. You approve every lead and DM before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "I'm not on social media. Does that matter?", a: "No. Your Sales Agent works from your website and public information. Content is optional." },
            ],
        },
    },
}
