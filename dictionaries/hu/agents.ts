export const agents = {
    "list": {
        "sales": {
            "name": "Sunny",
            "role": "Sales Agent",
            "tagline": "Mindig elsőként indul.",
            "description": "A teljes kimenő értékesítést viszi: leadeket gyűjt, besorolja őket az ICP-d alapján, mindegyiknek utánajár, és megírja a DM-et. Gyors, lelkes, és az utánkövetésben kérlelhetetlen.",
            "quirk": "Egy leadet sem hagy kihűlni.",
            "task": {
                "title": "Tavaszi csoportfoglalások: új leadek",
                "steps": [
                    "ICP-be illő rendezvényszervezők összegyűjtve",
                    "Offsite-ok és esküvői dátumok feltárva",
                    "Csoportos tartózkodás DM-ek megírva jóváhagyásra"
                ],
                "result": "DM-ek kész"
            }
        },
        "researcher": {
            "name": "Bolt",
            "role": "Sales Agent",
            "tagline": "Az egész weboldalt elolvassa. Mindig.",
            "description": "Ugyanaz a teljes folyamatot vivő Sales Agent, módszeresebb alkattal. Leadek, besorolás, kutatás és DM-ek, minden elfogadás és elvetés indoklásával.",
            "quirk": "Minden döntését dokumentálja.",
            "task": {
                "title": "Casa Linden privát vacsora: új leadek",
                "steps": [
                    "Office managerek Bécsből",
                    "ICP-n kívüliek elvetve, indoklással",
                    "Ebédmeghívók megírva, hivatalos német nyelven"
                ],
                "result": "Jóváhagyásra kész"
            }
        },
        "signal": {
            "name": "Echo",
            "role": "Sales Agent",
            "tagline": "Már messziről meghallja a „talán”-t.",
            "description": "Szintén teljes folyamatot vivő Sales Agent, kiváló füllel a válaszokhoz. Ugyanazt a leadtől DM-ig tartó folyamatot viszi, és ő veszi észre leggyorsabban a pozitív szándékot és egyezteti az utánkövetést.",
            "quirk": "Egy meleg választ sem hagy kihűlni.",
            "task": {
                "title": "Konyhafelújítások: megbeszélések és ajánlatok",
                "steps": [
                    "12 válasz elolvasva ingatlankezelőktől, 3 pozitív megjelölve",
                    "Megbeszélések lefoglalva, dealek a CRM-ben",
                    "Ajánlat elküldve a CRM-ből"
                ],
                "result": "Megbeszélés lefoglalva · ajánlat elküldve"
            }
        },
        "seo": {
            "name": "Scout",
            "role": "SEO Agent",
            "tagline": "Előbb találja meg a rést, mint a versenytársaid.",
            "description": "Elemzi a weboldaladat és az online arculatodat, feltárja a kulcsszóréseket, követi a teljesítményt, és javasolja, mely CTA-kat érdemes elsőként javítani. Minden marketingcsomag része.",
            "quirk": "Nagyító van nála. Használja is.",
            "task": {
                "title": "Az alpenhof.at auditja három csoportos szállodával szemben",
                "steps": [
                    "148 oldal feltérképezve",
                    "23 kulcsszórés azonosítva",
                    "Javítások rangsorolva várható hatás szerint"
                ],
                "result": "23 lehetőség briefelve"
            }
        },
        "writer": {
            "name": "Quill",
            "role": "Writer Agent",
            "tagline": "Határozott véleménye van a gondolatjeleidről.",
            "description": "Az SEO-briefekből cikkeket, posztokat és hírleveleket ír a márkád hangján, átnézésre készen a tartalomfolyamatban.",
            "quirk": "Mindent kétszer olvas el.",
            "task": {
                "title": "Vázlat: „Egy hétvége a Hotel Alpenhofban”",
                "steps": [
                    "Vázlatpontok az SEO-brief alapján",
                    "1 450 szó a márka stílusában",
                    "Átnézésre küldve 3 címjavaslattal"
                ],
                "result": "Vázlat átnézésre kész"
            }
        },
        "graphic": {
            "name": "Pixie",
            "role": "Graphic Designer",
            "tagline": "Rácsokban gondolkodik. Színekben álmodik.",
            "description": "Márkahű vizuálokat készít minden tartalomhoz, a blogborítóktól a közösségimédia-karusszelekig, a stílusbeállításaid alapján.",
            "quirk": "Kacsint, ha stimmel a betűköz.",
            "task": {
                "title": "Borító és karusszel a Casa Linden tavaszi étlapjához",
                "steps": [
                    "Márkastílus-beállítások alkalmazva",
                    "4 borítóváltozat elkészítve",
                    "6 diás karusszel összeállítva"
                ],
                "result": "10 anyag a folyamatban"
            }
        },
        "video": {
            "name": "Reel",
            "role": "Video Agent",
            "tagline": "Minden poszt megérdemel egy előzetest.",
            "description": "Rövid videókat készít a cikkeidből és bejelentéseidből, minden csatorna elvárt formátumára vágva.",
            "quirk": "Minden feladat előtt azt mondja: „Felvétel!”",
            "task": {
                "title": "30 másodperces séta a kész sorházban",
                "steps": [
                    "5 jelenetes storyboard",
                    "Álló és négyzetes változat vágva",
                    "Feliratok a márka stílusában"
                ],
                "result": "2 vágás ütemezésre kész"
            }
        },
        "caller": {
            "name": "Dash",
            "role": "Hot Leads Caller",
            "tagline": "Egy hívás többet ér tíz olvasatlan e-mailnél.",
            "description": "Felhívja a leadjeidet, felteszi a lényeges kérdéseket, és csak azokat adja át, akik készek beszélni, a hívás során egyeztetett, egyértelmű következő lépéssel.",
            "quirk": "Mindig egy következő lépéssel zár.",
            "task": {
                "title": "40 csoportfoglalási érdeklődés minősítése telefonon",
                "steps": [
                    "40 lead felhívva a saját időzónájában",
                    "3 minősítő kérdés feltéve",
                    "6 demó egyeztetve, minden válasz rögzítve"
                ],
                "result": "6 forró lead egyeztetve"
            }
        },
        "concierge": {
            "name": "Bell",
            "role": "Concierge",
            "tagline": "Minden vendég kedvenc asztalát fejben tartja.",
            "description": "Válaszol a szállodák és éttermek vendégeinek, asztalt és szobát foglal, és javasolja a megfelelő extrákat, a helyszíneden már használt MCP-eszközökön keresztül.",
            "quirk": "Azt mondja: „Igazán szívesen”, és komolyan is gondolja.",
            "task": {
                "title": "Péntek esti kérések",
                "steps": [
                    "18 vendégüzenet megválaszolva",
                    "7 asztal lefoglalva a foglalási rendszereden keresztül",
                    "Kóstolómenü ajánlva 4 társaságnak"
                ],
                "result": "7 foglalás · 3 upgrade"
            }
        },
        "community": {
            "name": "Kin",
            "role": "Community Growth",
            "tagline": "Tudja, kinek kivel kell megismerkednie.",
            "description": "Megkeresi a közösségedbe illő embereket, üdvözli az új tagokat, és összeismerteti azokat, akik segíthetnek egymásnak, így a közösség nő és egyre hasznosabb lesz.",
            "quirk": "Soha nem ismertet össze senkit ok nélkül.",
            "task": {
                "title": "Meghívni a szervezőket, akik tavaly tavasszal csoportot foglaltak",
                "steps": [
                    "25 a csoportba illő rendezvényszervező meghívva",
                    "9 új tag üdvözölve",
                    "6 tag-tag bemutatás"
                ],
                "result": "9 csatlakozott · 6 bemutatás"
            }
        }
    },
    "menu": {
        "sales-agent": "Leadek, DM-ek, megbeszélések és ajánlatok. Akár 3 egy csomagban.",
        "seo-agent": "Kulcsszórések, oldalállapot és CTA-k",
        "writer-agent": "Cikkek, posztok és hírlevelek",
        "graphic-designer": "Borítók, karusszelek és vizuálok",
        "video-agent": "Rövid videók minden csatornára",
        "hot-leads-caller": "Leadminősítő telefonhívások",
        "concierge": "Vendégek és foglalások szállodáknak és éttermeknek",
        "community-growth": "Növeld és kapcsold össze a közösséged"
    },
    "page": {
        "flow": "Hogyan működik",
        "package": "Csomag",
        "example": "Egy munkanap",
        "faq": "Kérdések",
        "others": "Ismerd meg a csapat többi tagját",
        "hire": "Felveszem: {name}",
        "upcomingNote": "Ez az ügynök fejlesztés alatt áll. Iratkozz fel a várólistára, és szólunk, amint felveheted.",
        "teamTitle": "Válaszd ki a Sales Agentjeidet",
        "teamBody": "Sunny, Bolt és Echo ugyanaz a teljes folyamatot vivő Sales Agent, eltérő személyiséggel. Vegyél fel egyet, vagy csomagban kettőt-hármat, hogy több iparágat és leadet érj el, gyorsabban.",
        "ctaTitle": "{name} készen áll. És te?",
        "teamCtaTitle": "Felépítenéd az értékesítési csapatod?",
        "ctaBody": "Egy szűk körű csapatcsoportot vonunk be a zárt bétába.",
        "viewAgent": "Megnézem",
        "mcpTool": "Foglalási eszközeid MCP-n keresztül"
    },
    "pages": {
        "sales-agent": {
            "metaTitle": "AI Sales Agent: leadek, DM-ek, megbeszélések és ajánlatok",
            "metaDescription": "Vedd fel a Grovio AI Sales Agentjét. Leadeket talál és kutat, elküldi a jóváhagyott DM-eket, megbeszéléseket foglal, a dealeket a CRM-edbe teszi, és onnan küldi az ajánlatot. Akár három egy csomagban.",
            "title": "AI Sales Agent, aki a teljes folyamatot viszi.",
            "pitch": "Adj neki egy kampányt és egy ICP-t. Leadeket talál és kutat, elküldi a jóváhagyott DM-eket, megbeszéléseket foglal, és minden dealt a CRM-edbe tesz, ahol elkészíti és elküldi az ajánlatot. Éjjel-nappal.",
            "flow": [
                "Leadek gyűjtése a kampány ICP-je alapján",
                "Besorolás: elfogadás vagy elvetés indoklással",
                "Minden elfogadott lead kutatása",
                "DM megírása a te stílusodban",
                "Jóváhagyásra vár",
                "DM-ek küldése, válaszok olvasása, utánkövetés",
                "Megbeszélés foglalása a naptáradban",
                "A deal felvitele a CRM-edbe",
                "Ajánlat elkészítése és küldése a CRM-ből"
            ],
            "properties": [
                {
                    "label": "Lefedettség",
                    "value": "Legfeljebb 5 iparág, havi 3000 lead"
                },
                {
                    "label": "Kampányok",
                    "value": "Korlátlan, a leadek elosztva köztük"
                },
                {
                    "label": "E-mail",
                    "value": "Naponta legfeljebb 100 ügynökönként"
                },
                {
                    "label": "Munkaidő",
                    "value": "0–24-ben dolgozik"
                },
                {
                    "label": "Jóváhagyás",
                    "value": "Semmi nem megy ki nélküled"
                },
                {
                    "label": "CRM",
                    "value": "HubSpot, Salesforce, Pipedrive, Zoho CRM"
                },
                {
                    "label": "Megbeszélések",
                    "value": "Google Calendarban vagy Calendlyben foglalva"
                },
                {
                    "label": "Csomagok",
                    "value": "1, 2 vagy 3 ügynök, mind teljes folyamattal"
                },
                {
                    "label": "Megfelelés",
                    "value": "GDPR-megfelelő, leiratkozások tiszteletben tartva"
                }
            ],
            "faq": [
                {
                    "q": "Sunny, Bolt és Echo más-más feladatot végez?",
                    "a": "Nem. Mindhárman ugyanaz a Sales Agent, és mindegyikük a teljes folyamatot viszi a leadtől a DM-ig. A személyiségük különbözik, és ha többet veszel fel, több iparágat és leadet érsz el, gyorsabban."
                },
                {
                    "q": "Minden DM-et jóvá kell hagynom?",
                    "a": "Igen, hogy te irányíts. Minden ügynök leadeket és DM-eket készít elő, te jóváhagyod vagy szerkeszted őket, és addig semmi nem megy ki."
                },
                {
                    "q": "Működik a CRM-emmel?",
                    "a": "Igen. Sunny a kontaktokat, dealeket és megbeszélés-jegyzeteket a HubSpotba, Salesforce-ba, Pipedrive-ba vagy Zoho CRM-be teszi, ott elkészíti az ajánlatot, és a jóváhagyásod után elküldi."
                },
                {
                    "q": "Módosíthatom, hogyan íródnak a DM-ek?",
                    "a": "Igen. Mondd el az ügynöknek egyszerű szavakkal, milyenek legyenek a DM-ek: hossz, hangnem, nyelv, mit említsen és mit kerüljön. Ezt minden vázlatnál alkalmazza."
                },
                {
                    "q": "GDPR-megfelelő a megkeresés?",
                    "a": "A Grovio az EU-nak készült és GDPR-megfelelő. Minden kapcsolatfelvételnek van jogalapja, a leiratkozásokat pedig azonnal érvényesítjük."
                }
            ]
        },
        "seo-agent": {
            "metaTitle": "AI SEO Agent: kulcsszórések, oldalállapot és CTA-k",
            "metaDescription": "Scout, a Grovio SEO Agentje elemzi a weboldaladat és az online arculatodat, megtalálja a kulcsszóréseket, és briefeli a tartalomcsapatodat. Minden marketingcsomag része.",
            "title": "SEO Agent, aki briefeli a tartalomcsapatodat.",
            "pitch": "Scout elemzi a weboldaladat és a körülötte lévő keresési környezetet, majd a megállapításaiból briefeket készít, amelyekkel a Writer Agent, a Graphic Designer és a Video Agent dolgozni tud.",
            "flow": [
                "Weboldal és online arculat elemzése",
                "Összevetés a versenytársakkal",
                "Lehetőségek rangsorolása hatás szerint",
                "A tartalomcsapat briefelése"
            ],
            "properties": [
                {
                    "label": "Tartalmazza",
                    "value": "Minden marketingcsomag"
                },
                {
                    "label": "Frissítés",
                    "value": "Folyamatos, heti összefoglalóval"
                },
                {
                    "label": "Kimenet",
                    "value": "Briefek, kulcsszólisták és CTA-ötletek"
                }
            ],
            "faq": [
                {
                    "q": "Külön kell fizetnem Scoutért?",
                    "a": "Nem. Az SEO-elemzés minden marketingcsomag része, így az alkotóid mindig briefből dolgoznak."
                },
                {
                    "q": "Scout módosítja a weboldalamat?",
                    "a": "Nem. Változtatásokat javasol, te döntöd el, mit alkalmazol."
                }
            ]
        },
        "writer-agent": {
            "metaTitle": "AI Writer Agent: cikkek és posztok a te hangodon",
            "metaDescription": "Quill, a Grovio Writer Agentje az SEO-briefekből cikkeket, posztokat és hírleveleket ír a márkád hangján, átnézésre készen.",
            "title": "Writer Agent, aki úgy ír, mint te.",
            "pitch": "Quill az SEO-briefekből cikkeket, posztokat és hírleveleket ír a márkád hangján. Minden vázlat a tartalomfolyamatban várja az átnézésedet.",
            "flow": [
                "Átveszi az SEO-briefet",
                "Vázlatpontok és első változat",
                "Címjavaslatok",
                "Átnézésre vár, aztán ütemezés"
            ],
            "properties": [
                {
                    "label": "Csomag",
                    "value": "Writer, vagy Graphic Designerrel és Videóval"
                },
                {
                    "label": "Jóváhagyás",
                    "value": "Minden vázlatot átnézel a megjelenés előtt"
                },
                {
                    "label": "Nyelvek",
                    "value": "A közönséged nyelvén ír"
                }
            ],
            "faq": [
                {
                    "q": "Szerkeszthetem a vázlatokat?",
                    "a": "Igen. Szerkeszd, fogadd el, vagy küldd vissza megjegyzésekkel. Quill tanul a változtatásokból."
                },
                {
                    "q": "Miben más a Writer, mint a többiek?",
                    "a": "Minden marketingügynöknek saját feladata van. Quill ír, Pixie tervezi a vizuálokat, Reel készíti a videókat."
                }
            ]
        },
        "graphic-designer": {
            "metaTitle": "AI Graphic Designer: márkahű borítók és karusszelek",
            "metaDescription": "Pixie, a Grovio Graphic Designere márkahű vizuálokat készít minden tartalomhoz a stílusbeállításaid alapján.",
            "title": "Graphic Designer, aki sosem tér el a márkától.",
            "pitch": "Pixie borítókat, karusszeleket és közösségimédia-vizuálokat készít minden tartalomhoz, az egyszer beállított stílusod alapján.",
            "flow": [
                "Elolvassa a cikket vagy a briefet",
                "Alkalmazza a stílusbeállításaidat",
                "Változatokat készít",
                "Vár a választásodra, aztán ütemezés"
            ],
            "properties": [
                {
                    "label": "Csomag",
                    "value": "Writer + Graphic Designer, vagy mindhárom"
                },
                {
                    "label": "Formátumok",
                    "value": "Borítók, karusszelek és közösségimédia-képek"
                },
                {
                    "label": "Jóváhagyás",
                    "value": "Te választasz, mielőtt bármi megjelenik"
                }
            ],
            "faq": [
                {
                    "q": "Felvehetem Pixie-t a Writer nélkül?",
                    "a": "A marketingcsomagok a Writerrel kezdődnek, mert Pixie a Quill által írt tartalomhoz tervez."
                }
            ]
        },
        "video-agent": {
            "metaTitle": "AI Video Agent: rövid videók a tartalmaidból",
            "metaDescription": "Reel, a Grovio Video Agentje rövid videókat készít a cikkeidből és bejelentéseidből, minden csatornára vágva.",
            "title": "Video Agent minden posztnak, ami megér egy előzetest.",
            "pitch": "Reel a cikkeidből és bejelentéseidből rövid videókat készít, minden csatorna elvárt formátumára vágva, a márkád stílusában feliratozva.",
            "flow": [
                "Elolvassa a tartalmat",
                "Megtervezi a jeleneteket",
                "Minden csatornára vág",
                "Átnézésre vár, aztán ütemezés"
            ],
            "properties": [
                {
                    "label": "Csomag",
                    "value": "Writer + Graphic + Video"
                },
                {
                    "label": "Formátumok",
                    "value": "Álló és négyzetes rövid videók"
                },
                {
                    "label": "Jóváhagyás",
                    "value": "Minden vágást átnézel a megjelenés előtt"
                }
            ],
            "faq": [
                {
                    "q": "Minden csomagban benne van a Video Agent?",
                    "a": "A teljes marketingcsomagban, a Writer és a Graphic Designer mellett."
                }
            ]
        },
        "hot-leads-caller": {
            "metaTitle": "Hot Leads Caller: leadminősítő AI-telefonhívások",
            "metaDescription": "Dash felhívja a leadjeidet, telefonon minősíti őket, és egyeztet azokkal, akik készek beszélni. Minősített hívásonként fizetsz, nem felhasználói licencért.",
            "title": "Ne fizess olyan leadekért, akik sosem válaszolnak.",
            "pitch": "A legtöbb AI-értékesítési eszköz felhasználónként számláz azért, hogy még több olyan e-mailt küldjön, amit senki sem olvas. Dash telefonál, valódi beszélgetésben minősít minden leadet, és egyértelmű következő lépésben állapodik meg. Minősített hívásokért fizetsz, nem licencekért.",
            "flow": [
                "Leadek átvétele a kampányból vagy listából",
                "Hívás a lead időzónájában",
                "Minősítés a te kérdéseiddel",
                "Forró leadek egyeztetése, minden válasz rögzítése"
            ],
            "properties": [
                {
                    "label": "Árazás",
                    "value": "Minősített hívásonként"
                },
                {
                    "label": "Átadás",
                    "value": "A forró leadek a CRM-edbe és a naptáradba kerülnek"
                },
                {
                    "label": "Megfelelés",
                    "value": "Az EU-nak készült és GDPR-megfelelő"
                }
            ],
            "faq": [
                {
                    "q": "Miért telefon, és nem még több e-mail?",
                    "a": "Egy rövid beszélgetésből többet megtudsz, mint egy tucat megnyitatlan e-mailből. Csak olyan leadekre fordítasz időt, akik igent mondtak egy következő lépésre."
                },
                {
                    "q": "Mikor vehetem fel Dash-t?",
                    "a": "Dash fejlesztés alatt áll. Iratkozz fel a várólistára, és szólunk, amikor elérhető lesz."
                }
            ]
        },
        "concierge": {
            "metaTitle": "AI Concierge szállodáknak és éttermeknek",
            "metaDescription": "Bell válaszol a vendégeknek, asztalt és szobát foglal, és extrákat javasol, a helyszíneden már használt MCP-eszközökön keresztül.",
            "title": "Concierge, aki ismeri a helyedet.",
            "pitch": "Bell válaszol a szállodák és éttermek vendégeinek, foglalásokat vesz fel, és javasolja a megfelelő extrákat. Ha a foglalási és vendégkezelő rendszereid MCP-eszközöket kínálnak, Bell közvetlenül rajtuk keresztül dolgozik.",
            "flow": [
                "A vendég felveszi a kapcsolatot",
                "Bell MCP-n keresztül ellenőrzi a rendszereidet",
                "Foglal vagy válaszol",
                "A bonyolult kéréseket átadja a csapatodnak"
            ],
            "properties": [
                {
                    "label": "Kinek",
                    "value": "Szállodák és éttermek"
                },
                {
                    "label": "Feltétel",
                    "value": "Foglalási vagy vendégkezelő eszközök MCP-hozzáféréssel"
                },
                {
                    "label": "Átadás",
                    "value": "A csapatod bármikor átveheti"
                }
            ],
            "faq": [
                {
                    "q": "Mi van, ha a rendszereim nem támogatják az MCP-t?",
                    "a": "Bellnek MCP-hozzáférés kell ahhoz, hogy műveleteket végezzen. A várólistára feliratkozáskor írd meg, mit használsz, és jelezzük, működik-e."
                }
            ]
        },
        "community-growth": {
            "metaTitle": "Community Growth ügynök: növeld és kapcsold össze a közösséged",
            "metaDescription": "Kin meghívja a megfelelő embereket a közösségedbe, üdvözli az új tagokat, és összeismerteti azokat, akik segíthetnek egymásnak.",
            "title": "Növeld a közösséged. Legyen érdemes csatlakozni.",
            "pitch": "Kin megkeresi a közösségedbe illő embereket, üdvözli az új tagokat, és összeismerteti azokat, akik segíthetnek egymásnak. A közösséged nő, a tagjai pedig többet kapnak belőle.",
            "flow": [
                "Megismeri, mire való a közösséged",
                "Meghívja a beillő embereket",
                "Üdvözli és megismeri a tagokat",
                "Összeismerteti a tagokat egymással"
            ],
            "properties": [
                {
                    "label": "Kinek",
                    "value": "Közösségek tulajdonosai és szervezői"
                },
                {
                    "label": "Jóváhagyás",
                    "value": "Te szabod meg a meghívások és bemutatások szabályait"
                },
                {
                    "label": "Megfelelés",
                    "value": "Az EU-nak készült és GDPR-megfelelő"
                }
            ],
            "faq": [
                {
                    "q": "Kin spamelni fogja a tagjaimat?",
                    "a": "Nem. Minden bemutatáshoz ok kell, és te határozod meg, milyen gyakran jelentkezik Kin."
                }
            ]
        }
    }
}
