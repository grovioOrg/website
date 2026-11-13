import type { IDictionary } from "@/dictionaries"

export const pricing: IDictionary["pricing"] = {
    title: "Havi felvétel. Bővíts, ahogy nősz.",
    description: "Kezdj egy szerződővel, és bővíts, ahogy nő a munka. A zárt béta alatt az árak tájékoztató jellegűek.",
    beta: "Béta-árak, változhatnak",
    perMonth: "/ hó",
    currency: "€",
    popular: "Legnépszerűbb",
    tabs: {
        sales: "Értékesítés",
        marketing: "Marketing",
    },
    salesNote: "Minden Sales Agent a teljes folyamatot viszi: leadgyűjtés, besorolás, kutatás és DM-ek. A csomagok több, párhuzamosan dolgozó ügynököt jelentenek, nem eltérő feladatokat.",
    marketingNote: "Minden marketingügynök a saját feladatát végzi. A csomagok a Writerrel kezdődnek, és a Graphic Designerrel, valamint a Video Agenttel bővülnek. Az SEO-elemzés minden csomag része.",
    salesLimits: [
        "Ügynökönként legfeljebb 3 kampány",
        "0–24-ben dolgozik",
        "Egyszerre 5 lead jóváhagyásra, utána a következő 5",
    ],
    plans: {
        "sales-1": {
            name: "1 Sales Agent",
            summary: "Egy teljes folyamatot vivő ügynök a fókuszált megkeresésekhez.",
            features: ["Legfeljebb 3 kampány", "Leadgyűjtés, besorolás, kutatás és DM-ek", "DM-beállítás egyszerű szavakkal"],
        },
        "sales-2": {
            name: "2 Sales Agent",
            summary: "Két ügynök párhuzamosan, legfeljebb 6 kampány.",
            features: ["Legfeljebb 6 kampány", "Egyszerre két 5-ös adag", "Közös kutatás az ügynökök között"],
        },
        "sales-3": {
            name: "3 Sales Agent",
            summary: "A teljes értékesítési csapat, legfeljebb 9 kampány.",
            features: ["Legfeljebb 9 kampány", "Egyszerre három 5-ös adag", "Elsőbbségi bevezetés"],
        },
        writer: {
            name: "Writer",
            summary: "Cikkek, posztok és hírlevelek a te hangodon.",
            features: ["SEO-elemzéssel", "Tartalomfolyamat és ütemezés", "Márkahang-beállítások"],
        },
        "writer-graphic": {
            name: "Writer + Graphic Designer",
            summary: "Szöveg és márkahű vizuál minden tartalomhoz.",
            features: ["A Writer csomag minden eleme", "Borítók, karusszelek és közösségimédia-vizuálok", "Stílusbeállítások"],
        },
        "marketing-all": {
            name: "Writer + Graphic + Video",
            summary: "A teljes tartalomcsapat, videóval együtt.",
            features: ["A Writer + Graphic csomag minden eleme", "Rövid videók minden csatornára", "Feliratok a márkád stílusában"],
        },
    },
    cta: "Ezt a csomagot kérem",
    caller: "A Hot Leads Caller hamarosan érkezik, minősített hívásonkénti árazással.",
}
