export const industries = {
    page: {
        icp: "A sample ICP campaign",
        dm: "A sample DM",
        dmNote: "Written from your DM setup. You approve before it sends.",
        faq: "Questions",
        others: "Other industries",
        ctaTitle: "Grovio for {industry}",
        ctaBody: "Paste your website and we'll show you the ICP campaign we'd build.",
        segment: "Segment",
        fit: "Fit",
        useCases: "What your agents do",
        useCasesBody: "Three jobs your Grovio agents take on, step by step. You approve what goes out.",
        toolsTitle: "Works with the tools you already use",
    },
    list: {
        hotels: {
            name: "Hotels",
            short: "Fill rooms with direct bookings and groups",
            metaTitle: "AI sales and marketing for hotels",
            metaDescription: "Grovio's AI agents win corporate and group bookings, keep your content calendar full and answer guests, so your hotel relies less on booking portals.",
            title: "More direct bookings. Fewer portal fees.",
            pitch: "Grovio's agents reach the companies, event planners and travel managers who book rooms in bulk, and keep your hotel visible with content that ranks.",
            pains: [
                "Booking portals take a cut of every room",
                "Corporate and group sales depend on one busy person",
                "Your website and socials go quiet in the off-season",
            ],
            agents: [
                "Reaches travel managers and event planners with personal DMs",
                "Writes seasonal guides and posts that bring guests to your site",
                "Answers guests and books rooms through your tools",
            ],
            useCases: [
                {
                    title: "Win group and corporate bookings",
                    points: [
                        "Finds event agencies, planners and travel managers near you",
                        "Researches upcoming offsites, conferences and weddings",
                        "Drafts a personal DM for each, five at a time",
                    ],
                    output: "5 group-booking DMs ready",
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
                { name: "Event agencies within 200 km", fit: 91 },
                { name: "Corporate travel managers", fit: 85 },
                { name: "Wedding planners", fit: 78 },
            ],
            dm: "Hi Marco, saw your team is planning the spring offsite season. We host groups of 20–80 with meeting rooms and a lake view, 40 minutes from Vienna. Worth a look at our group rates?",
            faq: [
                { q: "What challenges do hotel teams face with direct and group bookings?", a: "Booking portals take a cut of every room. Corporate and group sales depend on one busy person. Your website and socials go quiet in the off-season." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can Grovio talk to guests?", a: "The Concierge agent for hotels and restaurants is coming soon. Today, Grovio's sales and marketing agents help you win groups and direct bookings." },
                { q: "Is guest and prospect data handled under GDPR?", a: "Yes. Grovio is built for the EU and GDPR compliant." },
            ],
        },
        restaurants: {
            name: "Restaurants",
            short: "Private dining, events and regulars",
            metaTitle: "AI sales and marketing for restaurants",
            metaDescription: "Grovio's AI agents fill private dining and events, keep your socials fresh and, soon, answer guests and take bookings.",
            title: "Full tables on a Tuesday, too.",
            pitch: "Grovio's agents reach the offices and planners who book private dining, and keep your menu, events and story in front of locals.",
            pains: [
                "Weeknights and private rooms sit empty",
                "Nobody has time to post every week",
                "Event enquiries arrive in five different inboxes",
            ],
            agents: [
                "Reaches office managers and event planners nearby",
                "Writes posts about new menus and events in your voice",
                "Answers guests and books tables through your tools",
            ],
            useCases: [
                {
                    title: "Fill private dining and events",
                    points: [
                        "Finds offices and event planners nearby",
                        "Spots team events, launches and celebrations",
                        "Drafts a personal invite DM for each",
                    ],
                    output: "5 event DMs ready",
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
                { name: "Offices within 3 km", fit: 90 },
                { name: "Event and party planners", fit: 82 },
                { name: "Local business clubs", fit: 74 },
            ],
            dm: "Hi Julia, your team just moved into the Mariahilfer Straße office, so welcome to the neighbourhood. Our private room seats 24 for team lunches and dinners. Shall I send our set menus?",
            faq: [
                { q: "What challenges do restaurants face filling weeknights and private events?", a: "Weeknights and private rooms sit empty. Nobody has time to post every week. Event enquiries arrive in five different inboxes." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Do you take reservations for us?", a: "Bell, our Concierge agent, will book tables through MCP-enabled reservation tools. It's coming soon; join the waitlist." },
            ],
        },
        ecommerce: {
            name: "E-commerce",
            short: "Wholesale partners, creators and content",
            metaTitle: "AI sales and marketing for e-commerce brands",
            metaDescription: "Grovio's AI agents find wholesale partners and creators, and keep your product content and SEO moving.",
            title: "Grow beyond paid ads.",
            pitch: "Grovio's agents find the shops, wholesalers and creators who should carry your products, and build the search traffic that doesn't stop when ad spend does.",
            pains: [
                "Ad costs rise every quarter",
                "Wholesale and partnership outreach never gets done",
                "Product pages don't rank",
            ],
            agents: [
                "Finds and reaches stockists, wholesalers and creators",
                "Finds the keywords your product pages should win",
                "Writes guides, product stories and short videos",
            ],
            useCases: [
                {
                    title: "Land stockists and creators",
                    points: [
                        "Finds shops, wholesalers and creators that fit your brand",
                        "Researches what they sell and who they reach",
                        "Drafts a tailored pitch for each",
                    ],
                    output: "5 partner DMs ready",
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
                { name: "Independent concept stores", fit: 89 },
                { name: "Niche creators, 10k–100k followers", fit: 83 },
                { name: "Regional wholesalers", fit: 76 },
            ],
            dm: "Hi Sophie, your store's edit of sustainable homeware is spot on. Our linen range sells through in 6 weeks at similar shops in Munich. Can I send a sample box?",
            faq: [
                { q: "What challenges do e-commerce brands face as ad costs rise?", a: "Ad costs rise every quarter. Wholesale and partnership outreach never gets done. Product pages don't rank." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Does it work for small catalogues?", a: "Yes. The ICP campaign is built from your website, whatever its size." },
            ],
        },
        retail: {
            name: "Retail",
            short: "B2B accounts, partnerships and local reach",
            metaTitle: "AI sales and marketing for retail",
            metaDescription: "Grovio's AI agents win B2B accounts and local partnerships for retailers, and keep your content working between campaigns.",
            title: "Win the accounts your shop floor can't.",
            pitch: "Grovio's agents reach the businesses, schools and offices that buy in volume, and keep your store visible online between seasons.",
            pains: [
                "Corporate and bulk orders are left to chance",
                "Local partnerships take time nobody has",
                "Seasonal campaigns start too late",
            ],
            agents: [
                "Reaches procurement and office managers for bulk orders",
                "Plans seasonal content ahead of time",
                "Creates visuals for every campaign",
            ],
            useCases: [
                {
                    title: "Open B2B and bulk accounts",
                    points: [
                        "Finds offices and procurement teams nearby",
                        "Researches gifting seasons and bulk needs",
                        "Drafts a personal DM for each",
                    ],
                    output: "5 B2B DMs ready",
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
                { name: "Offices ordering gifts and supplies", fit: 87 },
                { name: "Schools and associations", fit: 80 },
                { name: "Local event organisers", fit: 72 },
            ],
            dm: "Hi Thomas, with year-end gifting coming up, many teams in Graz order through us for 20+ people. We handle wrapping and delivery. Want our corporate catalogue?",
            faq: [
                { q: "What challenges do retailers face growing B2B and local accounts?", a: "Corporate and bulk orders are left to chance. Local partnerships take time nobody has. Seasonal campaigns start too late." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I run local and online campaigns?", a: "Yes. Each Sales Agent runs up to three campaigns, each with its own ICP." },
            ],
        },
        "real-estate": {
            name: "Real estate agents",
            short: "Sellers, landlords and investor leads",
            metaTitle: "AI sales and marketing for real estate agents",
            metaDescription: "Grovio's AI agents find seller and landlord leads, follow up on enquiries and keep your listings and market updates visible.",
            title: "More listings, without more cold calls.",
            pitch: "Grovio's agents find owners, landlords and investors in your area, follow up on every enquiry and publish the market updates that make you the local name.",
            pains: [
                "Listings are the bottleneck, not buyers",
                "Enquiries go cold while you're at viewings",
                "Market updates are always next week",
            ],
            agents: [
                "Reaches landlords and investors with personal DMs",
                "Writes local market updates in your voice",
                "Creates listing visuals and short property videos",
            ],
            useCases: [
                {
                    title: "Reach sellers, landlords and investors",
                    points: [
                        "Finds owners and investors in your area",
                        "Researches portfolios and recent activity",
                        "Drafts a personal DM for each",
                    ],
                    output: "5 owner DMs ready",
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
                { name: "Private landlords, 3+ units", fit: 88 },
                { name: "Small property investors", fit: 81 },
                { name: "Developers of small projects", fit: 73 },
            ],
            dm: "Hi Andreas, rents for 2-room flats in Leopoldstadt rose 6% this year. If you're thinking about selling or re-letting your units, I can share what similar flats achieved. Interested?",
            faq: [
                { q: "What challenges do estate agents face when listings are the bottleneck?", a: "Listings are the bottleneck, not buyers. Enquiries go cold while you're at viewings. Market updates are always next week." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Is outreach to owners allowed?", a: "Grovio is GDPR compliant: every contact needs a lawful basis and opt-outs are honoured right away." },
            ],
        },
        "property-management": {
            name: "Property management",
            short: "Win new buildings and owners",
            metaTitle: "AI sales and marketing for property managers",
            metaDescription: "Grovio's AI agents find owners and associations looking for a better property manager, and keep your firm visible.",
            title: "Win the next building before your competitor does.",
            pitch: "Grovio's agents find owners and owner associations who need a better manager, and keep your firm top of mind with useful content.",
            pains: [
                "New mandates come only from referrals",
                "Owners don't know what you do better",
                "Marketing is an afterthought",
            ],
            agents: [
                "Reaches owners and owner associations",
                "Writes guides on costs, regulations and maintenance",
                "Keeps your website and profiles up to date",
            ],
            useCases: [
                {
                    title: "Win new buildings and owners",
                    points: [
                        "Finds owners and owner associations nearby",
                        "Researches buildings and current managers",
                        "Drafts a formal, personal DM for each",
                    ],
                    output: "5 owner DMs ready",
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
                { name: "Owner associations, 10–60 units", fit: 86 },
                { name: "Private owners of rental buildings", fit: 82 },
                { name: "Family offices with real estate", fit: 70 },
            ],
            dm: "Hi Petra, many owner associations in Linz are reviewing their manager after this year's service-charge statements. We publish every cost, line by line. Worth comparing?",
            faq: [
                { q: "What challenges do property managers face growing beyond referrals?", a: "New mandates come only from referrals. Owners don't know what you do better. Marketing is an afterthought." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can the agents write about regulations?", a: "Quill writes in your voice from your input and briefs. You review every piece before it's published." },
            ],
        },
        "car-dealerships": {
            name: "Car dealerships",
            short: "Fleet deals, trade-ins and service",
            metaTitle: "AI sales and marketing for car dealerships",
            metaDescription: "Grovio's AI agents win fleet and business customers for dealerships, and keep your stock and service offers visible.",
            title: "Sell fleets, not just cars.",
            pitch: "Grovio's agents reach the businesses that need company cars and fleet service, and keep your stock, offers and service visible online.",
            pains: [
                "Fleet sales depend on a few contacts",
                "Service customers drift to independents",
                "Stock and offers change faster than your website",
            ],
            agents: [
                "Reaches fleet managers and business owners",
                "Writes offer pages and service guides",
                "Cuts short videos of new stock",
            ],
            useCases: [
                {
                    title: "Close fleet and business deals",
                    points: [
                        "Finds fleet managers and growing companies",
                        "Researches fleet size and renewal timing",
                        "Drafts a personal DM for each",
                    ],
                    output: "5 fleet DMs ready",
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
                { name: "Companies with 10–200 staff", fit: 88 },
                { name: "Delivery and service businesses", fit: 84 },
                { name: "Leasing decision makers", fit: 75 },
            ],
            dm: "Hi Stefan, your team in Salzburg grew to 40 this year. We handle company cars from order to service, with one contact. Shall I send our fleet terms?",
            faq: [
                { q: "What challenges do dealerships face winning fleet and service business?", a: "Fleet sales depend on a few contacts. Service customers drift to independents. Stock and offers change faster than your website." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Does it work with my CRM?", a: "Positive replies sync to your CRM so your sales team can take over." },
            ],
        },
        "law-firms": {
            name: "Law firms",
            short: "Corporate clients and thought leadership",
            metaTitle: "AI marketing and business development for law firms",
            metaDescription: "Grovio's AI agents help law firms reach the companies that need their practice areas, and publish the insights that build trust.",
            title: "Business development, done properly.",
            pitch: "Grovio's agents reach the companies that need your practice areas, with measured, professional messages, and publish insights that show your expertise.",
            pains: [
                "Partners have no time for business development",
                "Expertise stays hidden in case files",
                "Every message must be measured and professional",
            ],
            agents: [
                "Reaches general counsels and founders, formally and carefully",
                "Turns your expertise into articles and newsletters",
                "Finds the searches your clients actually make",
            ],
            useCases: [
                {
                    title: "Win corporate clients, carefully",
                    points: [
                        "Finds general counsels and founders in your practice areas",
                        "Researches deals, hires and regulatory news",
                        "Drafts formal DMs you approve one by one",
                    ],
                    output: "5 formal DMs ready",
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
                { name: "Scale-ups expanding into the EU", fit: 87 },
                { name: "Companies without in-house counsel", fit: 83 },
                { name: "Founders preparing a funding round", fit: 79 },
            ],
            dm: "Dear Ms Weber, congratulations on your Series A. Many founders at this stage review their employment contracts and IP assignments. Would a short call about what usually needs attention be useful?",
            faq: [
                { q: "What challenges do law firms face turning expertise into new clients?", a: "Partners have no time for business development. Expertise stays hidden in case files. Every message must be measured and professional." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I control tone and wording?", a: "Yes. Set tone, formality and words to avoid in plain language. You approve every message." },
            ],
        },
        "tax-advisors": {
            name: "Tax advisors",
            short: "Founders, freelancers and SMB clients",
            metaTitle: "AI sales and marketing for tax advisors",
            metaDescription: "Grovio's AI agents bring tax advisors the right clients: founders, freelancers and SMBs, with timely content around every deadline.",
            title: "The right clients, before every deadline.",
            pitch: "Grovio's agents reach founders, freelancers and growing businesses at the moment they need a tax advisor, and publish clear guides around every deadline.",
            pains: [
                "Enquiries arrive all at once, right before deadlines",
                "The wrong-fit clients take the most time",
                "Clear, useful content never gets written",
            ],
            agents: [
                "Reaches founders and SMBs that fit your ideal client",
                "Writes deadline guides and newsletters",
                "Creates simple explainers for social media",
            ],
            useCases: [
                {
                    title: "Fill your client list with the right fit",
                    points: [
                        "Finds founders, freelancers and SMBs that fit",
                        "Researches new registrations and growth signals",
                        "Drafts a personal DM for each",
                    ],
                    output: "5 client DMs ready",
                },
                {
                    title: "Never miss a deadline post",
                    points: [
                        "Deadline guides and reminders",
                        "Newsletters on tax changes",
                        "Posts that answer common questions",
                    ],
                    output: "Deadline guide ready for review",
                },
                {
                    title: "Make tax simple to share",
                    points: [
                        "Turns guides into simple explainers",
                        "Creates carousels for LinkedIn and Instagram",
                        "Uses your brand style",
                    ],
                    output: "Explainer carousel ready",
                },
            ],
            icp: [
                { name: "Newly founded GmbHs", fit: 90 },
                { name: "Freelancers over €50k revenue", fit: 84 },
                { name: "E-commerce sellers going cross-border", fit: 78 },
            ],
            dm: "Hi Lukas, congratulations on registering your GmbH. The first annual accounts are where most founders lose time. We work with 40 young companies in Vienna. Want our first-year checklist?",
            faq: [
                { q: "What challenges do tax advisors face when enquiries peak before deadlines?", a: "Enquiries arrive all at once, right before deadlines. The wrong-fit clients take the most time. Clear, useful content never gets written." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I target only certain client types?", a: "Yes. Your ICP campaign defines exactly who the Sales Agent contacts and who it discards." },
            ],
        },
        "self-employed": {
            name: "Self-employed & small businesses",
            short: "A sales and marketing team for one",
            metaTitle: "AI sales and marketing for the self-employed and small businesses",
            metaDescription: "Grovio gives self-employed people and small businesses a sales and marketing team: leads, DMs and content, approved by you.",
            title: "A sales and marketing team for one.",
            pitch: "You do the work. Grovio's agents find the clients, write the DMs and keep your content going, and you approve everything in minutes a day.",
            pains: [
                "Selling takes time away from paid work",
                "Marketing happens only when work dries up",
                "Agencies and big tools cost too much",
            ],
            agents: [
                "Finds clients and drafts DMs, five at a time",
                "Writes posts and articles in your voice",
                "Starts with one agent, adds more when it pays off",
            ],
            useCases: [
                {
                    title: "Find your next clients",
                    points: [
                        "Finds clients who match what you offer",
                        "Researches each one before reaching out",
                        "Drafts DMs, five at a time, for your approval",
                    ],
                    output: "5 client DMs ready",
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
                { name: "Small businesses in your city", fit: 88 },
                { name: "Agencies that outsource your skill", fit: 82 },
                { name: "Past clients' peers", fit: 76 },
            ],
            dm: "Hi Clara, I loved the rebrand you launched last month. I'm a freelance copywriter working with design studios in Vienna on website copy. Would it help to have someone on call for launches?",
            faq: [
                { q: "What challenges do freelancers and small businesses face balancing sales with client work?", a: "Selling takes time away from paid work. Marketing happens only when work dries up. Agencies and big tools cost too much." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "Can I start with just one agent?", a: "Yes. Hire one Sales Agent or the Writer and add more when it pays off." },
            ],
        },
        tradespeople: {
            name: "Tradespeople",
            short: "Commercial jobs and steady work",
            metaTitle: "AI sales and marketing for tradespeople",
            metaDescription: "Grovio's AI agents win commercial jobs and maintenance contracts for tradespeople, and keep your reviews and work visible online.",
            title: "Steady work, all year round.",
            pitch: "Grovio's agents reach property managers, builders and businesses who need reliable trades, and show off your finished work online.",
            pains: [
                "Work comes in waves",
                "Commercial clients are hard to reach",
                "Your best work never makes it online",
            ],
            agents: [
                "Reaches property managers and contractors",
                "Turns job photos into posts and short videos",
                "Writes service pages that rank locally",
            ],
            useCases: [
                {
                    title: "Land steady commercial jobs",
                    points: [
                        "Finds property managers and contractors nearby",
                        "Researches buildings and upcoming projects",
                        "Drafts a personal DM for each",
                    ],
                    output: "5 commercial DMs ready",
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
                { name: "Property managers in your region", fit: 89 },
                { name: "General contractors", fit: 83 },
                { name: "Hotels and restaurants needing maintenance", fit: 77 },
            ],
            dm: "Hi Martin, I saw you manage 12 buildings in Innsbruck. We're a local electrical firm offering maintenance contracts with a 24-hour call-out. Can I send our terms?",
            faq: [
                { q: "What challenges do trades businesses face finding steady commercial work?", a: "Work comes in waves. Commercial clients are hard to reach. Your best work never makes it online." },
                { q: "How does Grovio take me from my website to booked meetings?", a: "Paste your website link and Grovio reads your site to learn who buys from you. You get an ICP campaign with buyer segments ranked by fit. You approve leads and DMs in batches of five before anything is sent. Warm replies land in your CRM and calendar." },

                { q: "I'm not on social media. Does that matter?", a: "No. Your Sales Agent works from your website and public information. Content is optional." },
            ],
        },
    },
}
