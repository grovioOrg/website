import type { IDictionary } from "@/dictionaries"

export const industries: IDictionary["industries"] = {
    page: {
        icp: "Minta ICP-kampány",
        dm: "Minta DM",
        dmNote: "A DM-beállításaid alapján írva. Küldés előtt te hagyod jóvá.",
        faq: "Kérdések",
        others: "További iparágak",
        ctaTitle: "Grovio – {industry}",
        ctaBody: "Másold be a weboldalad, és megmutatjuk, milyen ICP-kampányt építenénk.",
        segment: "Szegmens",
        fit: "Illeszkedés",
        useCases: "Mit csinálnak az ügynökeid",
        useCasesBody: "Három feladat, amelyet a Grovio ügynökei lépésről lépésre átvállalnak. Hogy mi megy ki, azt te hagyod jóvá.",
        toolsTitle: "Együttműködik a már használt eszközeiddel",
    },
    list: {
        hotels: {
            name: "Szállodák",
            short: "Közvetlen foglalások és csoportok",
            metaTitle: "AI értékesítés és marketing szállodáknak",
            metaDescription: "A Grovio AI-ügynökei céges és csoportos foglalásokat szereznek, teli tartják a tartalomnaptáradat és válaszolnak a vendégeknek, így a szállodád kevésbé függ a foglalási portáloktól.",
            title: "Több közvetlen foglalás. Kevesebb portáljutalék.",
            pitch: "A Grovio ügynökei elérik azokat a cégeket, rendezvényszervezőket és utazási menedzsereket, akik nagy tételben foglalnak szobát, és jól rangsorolt tartalommal tartják láthatóan a szállodádat.",
            pains: [
                "A foglalási portálok minden szobából levágnak egy részt",
                "A céges és csoportos értékesítés egyetlen túlterhelt emberen múlik",
                "Holtszezonban elcsendesedik a weboldalad és a közösségi médiád",
            ],
            agents: [
                "Személyes DM-ekkel éri el az utazási menedzsereket és rendezvényszervezőket",
                "Szezonális ajánlókat és posztokat ír, amelyek vendégeket hoznak az oldaladra",
                "Válaszol a vendégeknek és szobát foglal az eszközeiden keresztül",
            ],
            useCases: [
                {
                    title: "Csoportos és céges foglalások",
                    points: [
                        "Megtalálja a környékbeli rendezvényügynökségeket, szervezőket és utazási menedzsereket",
                        "Utánajár a közelgő offsite-oknak, konferenciáknak és esküvőknek",
                        "Mindegyiknek személyes DM-et ír, ötösével",
                    ],
                    output: "5 csoportfoglalási DM kész",
                },
                {
                    title: "Hozd vissza a vendégeket az oldaladra",
                    points: [
                        "Szezonális ajánlók a régiódról és a rendezvényekről",
                        "Instagram- és Facebook-posztok a te hangodon",
                        "Hírlevelek, amelyek a közvetlen foglalás felé terelnek",
                    ],
                    output: "Heti tartalom átnézésre készen",
                },
                {
                    title: "Válasz a vendégeknek éjjel-nappal",
                    points: [
                        "Válaszol a szobákkal, extrákkal és megközelítéssel kapcsolatos kérdésekre",
                        "Az MCP-képes eszközeiden keresztül foglal",
                        "A bonyolult kéréseket átadja a csapatodnak",
                    ],
                    output: "Hamarosan",
                },
            ],
            icp: [
                { name: "Rendezvényügynökségek 200 km-en belül", fit: 91 },
                { name: "Céges utazási menedzserek", fit: 85 },
                { name: "Esküvőszervezők", fit: 78 },
            ],
            dm: "Kedves Marco! Láttam, hogy a csapata a tavaszi offsite-szezont tervezi. Mi 20–80 fős csoportokat fogadunk tárgyalótermekkel és tóra néző kilátással, 40 percre Bécstől. Megnézné a csoportos árainkat?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek a szállodák a közvetlen és csoportos foglalásoknál?", a: "A foglalási portálok minden szobából levágnak egy részt. A céges és csoportos értékesítés egyetlen túlterhelt emberen múlik. Holtszezonban elcsendesedik a weboldalad és a közösségi médiád." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Tud a Grovio a vendégekkel kommunikálni?", a: "A szállodáknak és éttermeknek szóló Concierge ügynök hamarosan érkezik. Addig a Grovio értékesítési és marketingügynökei segítenek csoportos és közvetlen foglalásokat szerezni." },
                { q: "A vendég- és érdeklődői adatok kezelése GDPR-megfelelő?", a: "Igen. A Grovio az EU-nak készült és GDPR-megfelelő." },
            ],
        },
        restaurants: {
            name: "Éttermek",
            short: "Különtermek, rendezvények, törzsvendégek",
            metaTitle: "AI értékesítés és marketing éttermeknek",
            metaDescription: "A Grovio AI-ügynökei megtöltik a különtermet és a rendezvényeket, frissen tartják a közösségi médiádat, és hamarosan a vendégeknek is válaszolnak és foglalásokat vesznek fel.",
            title: "Teli asztalok keddenként is.",
            pitch: "A Grovio ügynökei elérik azokat az irodákat és szervezőket, akik különtermet foglalnak, és a helyiek szeme előtt tartják a menüdet, a rendezvényeidet és a történetedet.",
            pains: [
                "Hétköznap esténként üresek az asztalok és a különtermek",
                "Senkinek nincs ideje minden héten posztolni",
                "A rendezvényes megkeresések öt különböző postafiókba érkeznek",
            ],
            agents: [
                "Eléri a közeli irodavezetőket és rendezvényszervezőket",
                "A te hangodon ír posztokat az új menükről és rendezvényekről",
                "Válaszol a vendégeknek és asztalt foglal az eszközeiden keresztül",
            ],
            useCases: [
                {
                    title: "Teli különterem és rendezvények",
                    points: [
                        "Megtalálja a közeli irodákat és rendezvényszervezőket",
                        "Kiszúrja a csapatrendezvényeket, bemutatókat és ünnepségeket",
                        "Mindegyiknek személyes meghívó DM-et ír",
                    ],
                    output: "5 rendezvényes DM kész",
                },
                {
                    title: "Maradj a helyiek szeme előtt",
                    points: [
                        "Posztok az új menükről, ajánlatokról és rendezvényekről",
                        "Storyk a te hangodon",
                        "Hetekre előre megtervezett naptár",
                    ],
                    output: "A heti posztok ütemezve",
                },
                {
                    title: "Foglalások, amíg te főzöl",
                    points: [
                        "Válaszol a menüvel és a nyitvatartással kapcsolatos kérdésekre",
                        "Az MCP-képes eszközeiden keresztül foglal asztalt",
                        "Javasolja a kóstolómenüt, ha illik",
                    ],
                    output: "Hamarosan",
                },
            ],
            icp: [
                { name: "Irodák 3 km-en belül", fit: 90 },
                { name: "Rendezvény- és partiszervezők", fit: 82 },
                { name: "Helyi üzleti klubok", fit: 74 },
            ],
            dm: "Kedves Julia! Láttam, hogy a csapata nemrég beköltözött a Mariahilfer Straße-i irodába – üdvözöljük a környéken! Különtermünkben 24 fő fér el csapatebédekhez és -vacsorákhoz. Elküldjem a menüajánlatainkat?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek az éttermek a hétközi és rendezvényes forgalomnál?", a: "Hétköznap esténként üresek az asztalok és a különtermek. Senkinek nincs ideje minden héten posztolni. A rendezvényes megkeresések öt különböző postafiókba érkeznek." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Felveszitek helyettünk a foglalásokat?", a: "Bell, a Concierge ügynökünk MCP-képes foglalási eszközökön keresztül fog asztalt foglalni. Hamarosan érkezik; iratkozz fel a várólistára." },
            ],
        },
        ecommerce: {
            name: "E-kereskedelem",
            short: "Nagykereskedők, alkotók és tartalom",
            metaTitle: "AI értékesítés és marketing e-kereskedelmi márkáknak",
            metaDescription: "A Grovio AI-ügynökei nagykereskedelmi partnereket és alkotókat találnak, és folyamatosan viszik a termékes tartalmaidat és az SEO-t.",
            title: "Növekedj a fizetett hirdetéseken túl.",
            pitch: "A Grovio ügynökei megtalálják azokat a boltokat, nagykereskedőket és alkotókat, akiknek a termékeidet kellene forgalmazniuk, és olyan keresési forgalmat építenek, amely nem áll le, amikor a hirdetési költés igen.",
            pains: [
                "A hirdetési költségek minden negyedévben nőnek",
                "A nagykereskedelmi és partneri megkeresésekre sosem jut idő",
                "A termékoldalak nem rangsorolnak",
            ],
            agents: [
                "Megtalálja és eléri a viszonteladókat, nagykereskedőket és alkotókat",
                "Megtalálja a kulcsszavakat, amelyeken a termékoldalaidnak nyerniük kellene",
                "Útmutatókat, termékhistóriákat és rövid videókat készít",
            ],
            useCases: [
                {
                    title: "Viszonteladók és alkotók megszerzése",
                    points: [
                        "Megtalálja a márkádhoz illő boltokat, nagykereskedőket és alkotókat",
                        "Utánajár, mit árulnak és kiket érnek el",
                        "Mindegyiknek személyre szabott ajánlatot ír",
                    ],
                    output: "5 partneri DM kész",
                },
                {
                    title: "Nyerd meg a keresést, ami elad",
                    points: [
                        "Átvilágítja a termék- és kategóriaoldalaidat",
                        "Megtalálja a kulcsszavakat, amelyeken a versenytársak nyernek",
                        "Várható hatás szerint rangsorolja a javításokat",
                    ],
                    output: "Kulcsszóbrief a tartalomcsapatnak",
                },
                {
                    title: "Meséld el a termékeid történetét",
                    points: [
                        "Vásárlási útmutatók és termékhistóriák az SEO-briefből",
                        "Közösségimédia-posztok minden cikkből",
                        "Szövegek a márkád hangján",
                    ],
                    output: "Cikk és posztok átnézésre készen",
                },
            ],
            icp: [
                { name: "Független concept store-ok", fit: 89 },
                { name: "Niche alkotók, 10–100 ezer követő", fit: 83 },
                { name: "Regionális nagykereskedők", fit: 76 },
            ],
            dm: "Kedves Sophie! Az üzlete fenntartható lakberendezési kínálata telitalálat. Lenkollekciónk hasonló müncheni boltokban 6 hét alatt elfogy. Küldhetek egy mintadobozt?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek az e-kereskedők a dráguló hirdetéseknél?", a: "A hirdetési költségek minden negyedévben nőnek. A nagykereskedelmi és partneri megkeresésekre sosem jut idő. A termékoldalak nem rangsorolnak." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Kis termékkínálatnál is működik?", a: "Igen. Az ICP-kampány a weboldaladból épül fel, mérettől függetlenül." },
            ],
        },
        retail: {
            name: "Kiskereskedelem",
            short: "B2B ügyfelek, partnerségek, helyi elérés",
            metaTitle: "AI értékesítés és marketing kiskereskedőknek",
            metaDescription: "A Grovio AI-ügynökei B2B ügyfeleket és helyi partnerségeket szereznek a kiskereskedőknek, és a kampányok között is dolgoztatják a tartalmaidat.",
            title: "Szerezd meg azokat az ügyfeleket, akiket az üzlet nem ér el.",
            pitch: "A Grovio ügynökei elérik azokat a cégeket, iskolákat és irodákat, amelyek nagy tételben vásárolnak, és a szezonok között is láthatóan tartják az üzletedet online.",
            pains: [
                "A céges és nagy tételes rendelések a véletlenen múlnak",
                "A helyi partnerségekre senkinek sincs ideje",
                "A szezonális kampányok túl későn indulnak",
            ],
            agents: [
                "Eléri a beszerzőket és irodavezetőket nagy tételes rendelésekhez",
                "Előre megtervezi a szezonális tartalmakat",
                "Vizuálokat készít minden kampányhoz",
            ],
            useCases: [
                {
                    title: "B2B és nagy tételes ügyfelek",
                    points: [
                        "Megtalálja a közeli irodákat és beszerzési csapatokat",
                        "Utánajár az ajándékozási szezonoknak és a nagy tételes igényeknek",
                        "Mindegyiknek személyes DM-et ír",
                    ],
                    output: "5 B2B DM kész",
                },
                {
                    title: "Minden szezon időben megtervezve",
                    points: [
                        "Tartalomterv akciókra, ünnepekre és termékbevezetésekre",
                        "Posztok és hírlevelek a te hangodon",
                        "Vázlatok hetekkel előre",
                    ],
                    output: "Szezonális terv átnézésre készen",
                },
                {
                    title: "Márkahű vizuálok minden kampányhoz",
                    points: [
                        "Alkalmazza a márkád stílusát",
                        "Közösségimédia-képeket és karusszeleket készít",
                        "Csatornánként külön változatokat készít",
                    ],
                    output: "Kampányvizuálok a tartalomfolyamatban",
                },
            ],
            icp: [
                { name: "Ajándékot és kellékeket rendelő irodák", fit: 87 },
                { name: "Iskolák és egyesületek", fit: 80 },
                { name: "Helyi rendezvényszervezők", fit: 72 },
            ],
            dm: "Kedves Thomas! Közeleg az év végi ajándékozás, és sok grazi csapat rajtunk keresztül rendel 20+ főre. A csomagolást és a kiszállítást is intézzük. Elküldjem a céges katalógusunkat?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek a kiskereskedők a B2B és helyi ügyfeleknél?", a: "A céges és nagy tételes rendelések a véletlenen múlnak. A helyi partnerségekre senkinek sincs ideje. A szezonális kampányok túl későn indulnak." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Futtathatok helyi és online kampányokat is?", a: "Igen. Minden Sales Agent legfeljebb három kampányt visz, mindegyiket saját ICP-vel." },
            ],
        },
        "real-estate": {
            name: "Ingatlanközvetítők",
            short: "Eladók, bérbeadók és befektetők",
            metaTitle: "AI értékesítés és marketing ingatlanközvetítőknek",
            metaDescription: "A Grovio AI-ügynökei eladó és bérbeadó leadeket találnak, utánkövetik a megkereséseket, és láthatóan tartják a hirdetéseidet és piaci elemzéseidet.",
            title: "Több megbízás, több hideghívás nélkül.",
            pitch: "A Grovio ügynökei megtalálják a környékbeli tulajdonosokat, bérbeadókat és befektetőket, minden megkeresést utánkövetnek, és közzéteszik azokat a piaci elemzéseket, amelyektől te leszel a helyi név.",
            pains: [
                "A megbízás a szűk keresztmetszet, nem a vevő",
                "A megkeresések kihűlnek, amíg ingatlant mutatsz",
                "A piaci elemzés mindig jövő hétre csúszik",
            ],
            agents: [
                "Személyes DM-ekkel éri el a bérbeadókat és befektetőket",
                "A te hangodon írja a helyi piaci elemzéseket",
                "Hirdetési vizuálokat és rövid ingatlanvideókat készít",
            ],
            useCases: [
                {
                    title: "Eladók, bérbeadók és befektetők elérése",
                    points: [
                        "Megtalálja a környékbeli tulajdonosokat és befektetőket",
                        "Utánajár a portfólióiknak és a friss aktivitásuknak",
                        "Mindegyiknek személyes DM-et ír",
                    ],
                    output: "5 tulajdonosi DM kész",
                },
                {
                    title: "Légy a helyi piac szakértője",
                    points: [
                        "Havi piaci elemzések a környékedről",
                        "Posztok az eladott és az új ingatlanokról",
                        "Hírlevelek a korábbi ügyfeleknek",
                    ],
                    output: "Piaci elemzés átnézésre készen",
                },
                {
                    title: "Minden ingatlan a legjobb formájában",
                    points: [
                        "A fotóidból rövid bejárást tervez",
                        "Álló és négyzetes változatokat vág",
                        "A márkád stílusában feliratoz",
                    ],
                    output: "2 ingatlanvideó kész",
                },
            ],
            icp: [
                { name: "Magánbérbeadók, 3+ lakás", fit: 88 },
                { name: "Kisebb ingatlanbefektetők", fit: 81 },
                { name: "Kisebb projektek fejlesztői", fit: 73 },
            ],
            dm: "Kedves Andreas! A leopoldstadti kétszobás lakások bérleti díja idén 6%-kal nőtt. Ha az ingatlanai eladásán vagy újbóli kiadásán gondolkodik, szívesen megmutatom, mennyit értek el hasonló lakások. Érdekli?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek az ingatlanosok, ha az ingatlanok szűken vannak?", a: "A megbízás a szűk keresztmetszet, nem a vevő. A megkeresések kihűlnek, amíg ingatlant mutatsz. A piaci elemzés mindig jövő hétre csúszik." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Szabad megkeresni a tulajdonosokat?", a: "A Grovio GDPR-megfelelő: minden kapcsolatfelvételhez jogalap kell, a leiratkozásokat pedig azonnal érvényesítjük." },
            ],
        },
        "property-management": {
            name: "Ingatlankezelés",
            short: "Új épületek és tulajdonosok",
            metaTitle: "AI értékesítés és marketing ingatlankezelőknek",
            metaDescription: "A Grovio AI-ügynökei megtalálják azokat a tulajdonosokat és társasházakat, amelyek jobb kezelőt keresnek, és láthatóan tartják a cégedet.",
            title: "Nyerd meg a következő épületet a versenytársad előtt.",
            pitch: "A Grovio ügynökei megtalálják azokat a tulajdonosokat és társasházakat, amelyeknek jobb kezelő kell, és hasznos tartalommal tartják a cégedet a figyelem középpontjában.",
            pains: [
                "Új megbízás csak ajánlásból jön",
                "A tulajdonosok nem tudják, miben vagy jobb",
                "A marketing csak utólagos gondolat",
            ],
            agents: [
                "Eléri a tulajdonosokat és társasházakat",
                "Útmutatókat ír költségekről, szabályozásról és karbantartásról",
                "Naprakészen tartja a weboldaladat és profiljaidat",
            ],
            useCases: [
                {
                    title: "Új épületek és tulajdonosok megszerzése",
                    points: [
                        "Megtalálja a közeli tulajdonosokat és társasházakat",
                        "Utánajár az épületeknek és a jelenlegi kezelőknek",
                        "Mindegyiknek hivatalos, személyes DM-et ír",
                    ],
                    output: "5 tulajdonosi DM kész",
                },
                {
                    title: "Válaszolj, mielőtt a tulajdonosok kérdeznek",
                    points: [
                        "Útmutatók költségekről, szabályozásról és karbantartásról",
                        "Hírlevelek tulajdonosoknak és bérlőknek",
                        "Posztok, amelyek megmutatják, hogyan dolgozol",
                    ],
                    output: "Tulajdonosi útmutató átnézésre készen",
                },
                {
                    title: "Találjanak meg, amikor a tulajdonosok keresnek",
                    points: [
                        "Átvilágítja a weboldaladat és nyilvános profiljaidat",
                        "Megtalálja a helyi kereséseket, amelyekből kimaradsz",
                        "Javasolja, mely javításokkal érdemes kezdeni",
                    ],
                    output: "Helyi SEO-brief kész",
                },
            ],
            icp: [
                { name: "Társasházak, 10–60 lakás", fit: 86 },
                { name: "Bérházak magántulajdonosai", fit: 82 },
                { name: "Ingatlanos family office-ok", fit: 70 },
            ],
            dm: "Kedves Petra! Az idei közösköltség-elszámolások után sok linzi társasház felülvizsgálja a kezelőjét. Mi minden költséget tételesen közzéteszünk. Megérne egy összehasonlítást?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek a kezelők az ajánlásokon túl?", a: "Új megbízás csak ajánlásból jön. A tulajdonosok nem tudják, miben vagy jobb. A marketing csak utólagos gondolat." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Írhatnak az ügynökök szabályozásról?", a: "Quill a te hangodon ír, a te információid és briefjeid alapján. Minden anyagot átnézel, mielőtt megjelenik." },
            ],
        },
        "car-dealerships": {
            name: "Autókereskedések",
            short: "Flották, beszámítás és szerviz",
            metaTitle: "AI értékesítés és marketing autókereskedéseknek",
            metaDescription: "A Grovio AI-ügynökei flotta- és céges ügyfeleket szereznek a kereskedéseknek, és láthatóan tartják a készletedet és szervizajánlataidat.",
            title: "Flottát adj el, ne csak autót.",
            pitch: "A Grovio ügynökei elérik azokat a cégeket, amelyeknek céges autó és flottaszerviz kell, és online is láthatóan tartják a készletedet, ajánlataidat és szervizedet.",
            pains: [
                "A flottaértékesítés néhány kapcsolaton múlik",
                "A szervizügyfelek független műhelyekhez vándorolnak",
                "A készlet és az ajánlatok gyorsabban változnak, mint a weboldalad",
            ],
            agents: [
                "Eléri a flottamenedzsereket és cégtulajdonosokat",
                "Ajánlatoldalakat és szervizútmutatókat ír",
                "Rövid videókat vág az új készletről",
            ],
            useCases: [
                {
                    title: "Flotta- és céges üzletek lezárása",
                    points: [
                        "Megtalálja a flottamenedzsereket és a növekvő cégeket",
                        "Utánajár a flottaméretnek és a megújítás idejének",
                        "Mindegyiknek személyes DM-et ír",
                    ],
                    output: "5 flottás DM kész",
                },
                {
                    title: "Az ajánlatokból forgalom lesz",
                    points: [
                        "Ajánlatoldalak új és használt autókhoz",
                        "Szervizútmutatók minden évszakra",
                        "Posztok minden új érkezőről",
                    ],
                    output: "Ajánlatoldalak átnézésre készen",
                },
                {
                    title: "Az új készlet másodpercek alatt",
                    points: [
                        "A fotóidból körbejáró videót tervez",
                        "Videókat vág Instagramra, TikTokra és YouTube-ra",
                        "A márkád stílusában feliratoz",
                    ],
                    output: "Új készletes videók készen",
                },
            ],
            icp: [
                { name: "10–200 fős cégek", fit: 88 },
                { name: "Futár- és szolgáltatócégek", fit: 84 },
                { name: "Lízingdöntéshozók", fit: 75 },
            ],
            dm: "Kedves Stefan! Láttam, hogy a salzburgi csapatuk idén 40 főre bővült. Mi a rendeléstől a szervizig intézzük a céges autókat, egyetlen kapcsolattartóval. Elküldjem a flottafeltételeinket?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek a kereskedések a flotta és szerviz üzletnél?", a: "A flottaértékesítés néhány kapcsolaton múlik. A szervizügyfelek független műhelyekhez vándorolnak. A készlet és az ajánlatok gyorsabban változnak, mint a weboldalad." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Működik a CRM-emmel?", a: "A pozitív válaszok szinkronizálódnak a CRM-edbe, így az értékesítési csapatod átveheti őket." },
            ],
        },
        "law-firms": {
            name: "Ügyvédi irodák",
            short: "Céges ügyfelek és szakmai tartalom",
            metaTitle: "AI marketing és üzletfejlesztés ügyvédi irodáknak",
            metaDescription: "A Grovio AI-ügynökei segítenek az ügyvédi irodáknak elérni azokat a cégeket, amelyeknek szükségük van a szakterületeikre, és közzétenni a bizalmat építő szakmai tartalmakat.",
            title: "Üzletfejlesztés, ahogy kell.",
            pitch: "A Grovio ügynökei megfontolt, professzionális üzenetekkel érik el azokat a cégeket, amelyeknek szükségük van a szakterületeidre, és olyan szakmai tartalmakat tesznek közzé, amelyek megmutatják a szakértelmedet.",
            pains: [
                "A partnereknek nincs idejük üzletfejlesztésre",
                "A szakértelem az ügyiratokban marad",
                "Minden üzenetnek megfontoltnak és professzionálisnak kell lennie",
            ],
            agents: [
                "Hivatalosan és körültekintően éri el a jogi vezetőket és alapítókat",
                "Cikkekké és hírlevelekké alakítja a szakértelmedet",
                "Megtalálja, mire keresnek valójában az ügyfeleid",
            ],
            useCases: [
                {
                    title: "Céges ügyfelek, körültekintően",
                    points: [
                        "Megtalálja a szakterületeidhez illő jogi vezetőket és alapítókat",
                        "Utánajár a tranzakcióknak, felvételeknek és szabályozási híreknek",
                        "Hivatalos DM-eket ír, amelyeket egyenként hagysz jóvá",
                    ],
                    output: "5 hivatalos DM kész",
                },
                {
                    title: "A szakértelemből szakmai tekintély",
                    points: [
                        "Cikkek ítéletekről és jogszabályváltozásokról",
                        "Hírlevelek ügyfeleknek és kapcsolatoknak",
                        "LinkedIn-posztok a partnereknek",
                    ],
                    output: "Cikk partneri átnézésre készen",
                },
                {
                    title: "Találjanak meg a megfelelő kérdésekre",
                    points: [
                        "Megtalálja, mire keresnek az ügyfeleid",
                        "Átvilágítja a szakterületi oldalaidat",
                        "Briefeli a Writert, miről írjon",
                    ],
                    output: "Keresési brief a tartalomcsapatnak",
                },
            ],
            icp: [
                { name: "Az EU-ba terjeszkedő scale-upok", fit: 87 },
                { name: "Belső jogász nélküli cégek", fit: 83 },
                { name: "Befektetési körre készülő alapítók", fit: 79 },
            ],
            dm: "Tisztelt Weber Asszony! Gratulálok a Series A befektetési körhöz. Ebben a szakaszban sok alapító felülvizsgálja a munkaszerződéseit és a szellemi tulajdon átruházását. Hasznos lenne egy rövid beszélgetés arról, mire érdemes ilyenkor odafigyelni?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek az ügyvédi irodák az új ügyfeleknél?", a: "A partnereknek nincs idejük üzletfejlesztésre. A szakértelem az ügyiratokban marad. Minden üzenetnek megfontoltnak és professzionálisnak kell lennie." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Szabályozhatom a hangnemet és a megfogalmazást?", a: "Igen. Egyszerű szavakkal állítsd be a hangnemet, a formalitást és a kerülendő szavakat. Minden üzenetet te hagysz jóvá." },
            ],
        },
        "tax-advisors": {
            name: "Adótanácsadók",
            short: "Alapítók, szabadúszók és kkv-k",
            metaTitle: "AI értékesítés és marketing adótanácsadóknak",
            metaDescription: "A Grovio AI-ügynökei a megfelelő ügyfeleket hozzák az adótanácsadóknak: alapítókat, szabadúszókat és kkv-kat, minden határidőhöz időszerű tartalommal.",
            title: "A megfelelő ügyfelek, minden határidő előtt.",
            pitch: "A Grovio ügynökei akkor érik el az alapítókat, szabadúszókat és növekvő vállalkozásokat, amikor adótanácsadóra van szükségük, és minden határidőhöz érthető útmutatókat tesznek közzé.",
            pains: [
                "A megkeresések egyszerre, közvetlenül a határidők előtt érkeznek",
                "A nem illő ügyfelek viszik el a legtöbb időt",
                "Érthető, hasznos tartalom sosem készül",
            ],
            agents: [
                "Eléri az ideális ügyfélképedbe illő alapítókat és kkv-kat",
                "Határidő-útmutatókat és hírleveleket ír",
                "Egyszerű magyarázó anyagokat készít a közösségi médiára",
            ],
            useCases: [
                {
                    title: "Töltsd fel az ügyfélköröd a megfelelőkkel",
                    points: [
                        "Megtalálja az illő alapítókat, szabadúszókat és kkv-kat",
                        "Utánajár az új cégbejegyzéseknek és növekedési jeleknek",
                        "Mindegyiknek személyes DM-et ír",
                    ],
                    output: "5 ügyfél-DM kész",
                },
                {
                    title: "Egyetlen határidős poszt se maradjon el",
                    points: [
                        "Határidő-útmutatók és emlékeztetők",
                        "Hírlevelek az adóváltozásokról",
                        "Posztok, amelyek a gyakori kérdésekre válaszolnak",
                    ],
                    output: "Határidő-útmutató átnézésre készen",
                },
                {
                    title: "Az adó egyszerűen, megoszthatóan",
                    points: [
                        "Az útmutatókból egyszerű magyarázó anyagokat készít",
                        "Karusszeleket készít LinkedInre és Instagramra",
                        "A márkád stílusát használja",
                    ],
                    output: "Magyarázó karusszel kész",
                },
            ],
            icp: [
                { name: "Újonnan alapított GmbH-k", fit: 90 },
                { name: "Szabadúszók 50 ezer € bevétel felett", fit: 84 },
                { name: "Határon átnyúló e-kereskedők", fit: 78 },
            ],
            dm: "Kedves Lukas! Gratulálok a GmbH bejegyzéséhez. A legtöbb alapító az első éves beszámolónál veszít a legtöbb időt. 40 bécsi fiatal céggel dolgozunk. Elküldjem az első éves ellenőrzőlistánkat?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek az adótanácsadók a határidők előtti csúcsnál?", a: "A megkeresések egyszerre, közvetlenül a határidők előtt érkeznek. A nem illő ügyfelek viszik el a legtöbb időt. Érthető, hasznos tartalom sosem készül." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Célozhatok csak bizonyos ügyféltípusokat?", a: "Igen. Az ICP-kampányod pontosan meghatározza, kit keres meg a Sales Agent, és kit vet el." },
            ],
        },
        "self-employed": {
            name: "Egyéni vállalkozók és kisvállalkozások",
            short: "Értékesítési és marketingcsapat egy főre",
            metaTitle: "AI értékesítés és marketing egyéni vállalkozóknak és kisvállalkozásoknak",
            metaDescription: "A Grovio értékesítési és marketingcsapatot ad az egyéni vállalkozóknak és kisvállalkozásoknak: leadek, DM-ek és tartalom, a te jóváhagyásoddal.",
            title: "Értékesítési és marketingcsapat egy főre.",
            pitch: "Te végzed a munkát. A Grovio ügynökei megtalálják az ügyfeleket, megírják a DM-eket és viszik a tartalmaidat, te pedig napi néhány perc alatt mindent jóváhagysz.",
            pains: [
                "Az értékesítés elveszi az időt a fizetős munkától",
                "Marketing csak akkor van, amikor elfogy a munka",
                "Az ügynökségek és a nagy eszközök túl drágák",
            ],
            agents: [
                "Ügyfeleket talál és DM-eket ír, ötösével",
                "A te hangodon ír posztokat és cikkeket",
                "Egy ügynökkel indul, és bővül, amikor megtérül",
            ],
            useCases: [
                {
                    title: "Találd meg a következő ügyfeleidet",
                    points: [
                        "Olyan ügyfeleket talál, akikhez illik, amit kínálsz",
                        "Megkeresés előtt mindegyiknek utánajár",
                        "Ötösével ír DM-eket a jóváhagyásodra",
                    ],
                    output: "5 ügyfél-DM kész",
                },
                {
                    title: "Légy jelen órák ráfordítása nélkül",
                    points: [
                        "Posztok és cikkek a te hangodon",
                        "Egyszerű heti tartalomterv",
                        "Vázlatok egy gyors átnézésre",
                    ],
                    output: "Egy hétnyi poszt kész",
                },
                {
                    title: "Nőj a saját tempódban",
                    points: [
                        "Kezdj egyetlen Sales Agenttel",
                        "Vegyél fel egy másodikat, amikor megtelik a pipeline",
                        "Havonta bármikor szüneteltetheted",
                    ],
                    output: "Csapat, amely veled nő",
                },
            ],
            icp: [
                { name: "Kisvállalkozások a városodban", fit: 88 },
                { name: "A szakterületedet kiszervező ügynökségek", fit: 82 },
                { name: "Korábbi ügyfelek kollégái", fit: 76 },
            ],
            dm: "Kedves Clara! Nagyon tetszett a múlt hónapban bemutatott arculatváltásuk. Szabadúszó szövegíró vagyok, bécsi designstúdióknak írok weboldalszövegeket. Hasznos lenne, ha lenne valaki, akire bevezetéseknél számíthatnak?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek a freelancerek és kisvállalkozások az értékesítés és ügyfélmunka között?", a: "Az értékesítés elveszi az időt a fizetős munkától. Marketing csak akkor van, amikor elfogy a munka. Az ügynökségek és a nagy eszközök túl drágák." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Kezdhetek egyetlen ügynökkel?", a: "Igen. Vegyél fel egy Sales Agentet vagy a Writert, és bővíts, amikor megtérül." },
            ],
        },
        tradespeople: {
            name: "Szakiparosok",
            short: "Céges munkák és állandó megrendelések",
            metaTitle: "AI értékesítés és marketing szakiparosoknak",
            metaDescription: "A Grovio AI-ügynökei céges munkákat és karbantartási szerződéseket szereznek a szakiparosoknak, és online is láthatóvá teszik az értékeléseidet és munkáidat.",
            title: "Állandó munka, egész évben.",
            pitch: "A Grovio ügynökei elérik azokat az ingatlankezelőket, építőipari cégeket és vállalkozásokat, amelyeknek megbízható szakember kell, és online is megmutatják az elkészült munkáidat.",
            pains: [
                "A munka hullámokban jön",
                "A céges ügyfeleket nehéz elérni",
                "A legjobb munkáid sosem kerülnek fel online",
            ],
            agents: [
                "Eléri az ingatlankezelőket és generálkivitelezőket",
                "A munkafotókból posztokat és rövid videókat készít",
                "Helyi keresésben jól rangsoroló szolgáltatásoldalakat ír",
            ],
            useCases: [
                {
                    title: "Állandó céges munkák",
                    points: [
                        "Megtalálja a közeli ingatlankezelőket és kivitelezőket",
                        "Utánajár az épületeknek és a közelgő projekteknek",
                        "Mindegyiknek személyes DM-et ír",
                    ],
                    output: "5 céges DM kész",
                },
                {
                    title: "Az elkészült munkákból referencia lesz",
                    points: [
                        "A munkafotókból rövid videókat vág",
                        "Instagramra, TikTokra és YouTube-ra formáz",
                        "A márkád stílusában feliratoz",
                    ],
                    output: "Munkavideók készen",
                },
                {
                    title: "Jó helyezés a helyi keresésekben",
                    points: [
                        "Átvilágítja a szolgáltatásoldalaidat és profiljaidat",
                        "Megtalálja, mire keresnek a helyiek",
                        "Javasolja, milyen oldalakat érdemes hozzáadni",
                    ],
                    output: "Helyi SEO-brief kész",
                },
            ],
            icp: [
                { name: "Ingatlankezelők a régiódban", fit: 89 },
                { name: "Generálkivitelezők", fit: 83 },
                { name: "Karbantartást igénylő szállodák és éttermek", fit: 77 },
            ],
            dm: "Kedves Martin! Láttam, hogy 12 épületet kezel Innsbruckban. Helyi villanyszerelő cég vagyunk, karbantartási szerződést kínálunk 24 órás kiszállással. Elküldhetem a feltételeinket?",
            faq: [
                { q: "Milyen kihívásokkal szembesülnek a szakiparosok az állandó céges munkáknál?", a: "A munka hullámokban jön. A céges ügyfeleket nehéz elérni. A legjobb munkáid sosem kerülnek fel online." },
                { q: "Hogyan jutok a weboldalamtól a lefoglalt megbeszélésekig a Grovióval?", a: "Bemásolod a weboldalad linkjét, a Grovio elolvassa, és kitalálja, ki vásárol tőled. Kapsz egy ICP-kampányt, illeszkedés szerint rangsorolt vevői szegmensekkel. Ötösével hagyod jóvá a leadeket és a DM-eket, mielőtt bármi kimegy. A meleg válaszok a CRM-edbe és a naptáradba kerülnek." },

                { q: "Nem vagyok fent a közösségi médiában. Számít ez?", a: "Nem. A Sales Agent a weboldaladból és nyilvános információkból dolgozik. A tartalom opcionális." },
            ],
        },
    },
}
