# Grovio landing page

Marketing site for Grovio, an AI workforce for sales and marketing. Next.js 16 (App Router), Tailwind CSS v4 and framer-motion.

## Getting started

```bash
yarn
cp .env.example .env.local
yarn dev
```

Open [http://localhost:3000](http://localhost:3000). You'll be redirected to your browser's language, for example `/en`.

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Development server |
| `yarn build` | Production build |
| `yarn lint` | ESLint |
| `yarn typecheck` | TypeScript, no emit |

## Routes and languages

| Route | Page |
| --- | --- |
| `/{lang}` | Home |
| `/{lang}/agents/{slug}` | Agent pages: `sales-agent`, `seo-agent`, `writer-agent`, `graphic-designer`, `video-agent`, and the upcoming `hot-leads-caller`, `concierge`, `community-growth` |
| `/{lang}/industries/{slug}` | Industry pages: `hotels`, `restaurants`, `ecommerce`, `retail`, `real-estate`, `property-management`, `car-dealerships`, `law-firms`, `tax-advisors`, `self-employed`, `tradespeople` |

`{lang}` is one of `en`, `de`, `de-at`, `it`, `fr`, `hu`. `proxy.ts` redirects paths without a locale using the `Accept-Language` header, falling back to `en`. Every page sets `hreflang` alternates.

Copy lives in `dictionaries/{lang}/`, typed against the English dictionary, so a missing or extra key fails the type check. `de-at` reuses `de` with Austrian overrides.

> The German, Austrian, Italian, French and Hungarian copy was machine-written and needs a review by native speakers before launch.

Product mockups (hero board, platform screens, pipeline logs, Slack preview) intentionally show an English sample workspace in every language.

Indicative beta prices live in `data/pricing.ts`.

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_CORE_BASE_URL` | Yes | Base URL of the core API |
| `NEXT_PUBLIC_APP_URL` | No | Public site URL, used for canonical and `hreflang` links |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Shows a contact link in the footer |
| `NEXT_PUBLIC_PRIVACY_URL` | No | Links the privacy policy from the beta consent checkbox and the footer. Without it, no privacy link is rendered. |
| `NEXT_PUBLIC_INVESTOR_EMAIL` | No | Address behind the investors section's brief card (a `mailto:` link). Defaults to `vshon447@gmail.com`. |

## Beta registration backend

The "Join the Beta" modal submits through a server action (`components/Forms/Beta/action.ts` → `lib/api/beta.ts`). There is no backend in this repo.

If the base URL is missing, the form shows an error and logs a warning on the server. It never reports a fake success.

### Endpoint contract

`POST {NEXT_PUBLIC_API_CORE_BASE_URL}/api/v1/beta_registration`

```json
{
    "full_name": "Maya Patel",
    "work_email": "maya@northwind.co",
    "company_name": "Northwind",
    "website": "https://northwind.co",
    "company_size": "11-50",
    "primary_interest": "sales",
    "consent": true,
    "language": "de-at",
    "source": "landing"
}
```

- `company_size`: one of `1-10`, `11-50`, `51-200`, `201-1000`, `1000+`
- `primary_interest`: one of `sales`, `marketing`, `both`, `exploring`. Pricing and agent buttons preselect it.
- `consent`: always `true`. The applicant must tick "I agree that Grovio may store these details to contact me about the beta. You can ask us to delete them at any time." (or its translation). The checkbox is validated on the client and again in the server action, so nothing is sent without it.
- `language`: the site locale the applicant used, one of `en`, `de`, `de-at`, `it`, `fr`, `hu`.
- `2xx` means registered.
- `409` means the email is already registered. The modal shows a friendly "you're already on the list" state.
- Any other status shows the error state, using the response's `error`, `message` or `detail` field when one is present.

## Notes

- `public/agent.md` (served at `/agent.md`) describes Grovio for AI assistants and crawlers. Update it when agents, prices or integrations change.
- The integrations section lists tools in the sales and marketing flow; connections are set up per workspace at onboarding. Logos are vendored in `icons/brands.ts` from Simple Icons (CC0), Devicon (MIT, Slack), theSVG (MIT, Pipedrive) and Lucide (ISC, CSV and MCP).
- The Slack collaboration section, the walkthrough demo and the "brief your agents" chat are visual previews, labelled as such where relevant. They are not wired to live systems.
- The hero board recreates the product video as a live, animated component instead of embedding the video file.
- Upcoming agents (Hot Leads Caller, Concierge, Community Growth) are marked "Coming soon" and their buttons join the waitlist.
- Animations respect `prefers-reduced-motion`. Nothing hijacks scrolling.
