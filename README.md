# GORVIO landing page

Marketing site for GORVIO, an AI workforce for sales and marketing. Next.js 16 (App Router), Tailwind CSS v4 and framer-motion.

## Getting started

```bash
yarn
cp .env.example .env.local
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `yarn dev` | Development server |
| `yarn build` | Production build |
| `yarn lint` | ESLint |
| `yarn typecheck` | TypeScript, no emit |

## Beta registration backend

The "Join the Beta" modal submits through a server action (`components/Forms/Beta/action.ts` → `lib/api/beta.ts`). There is no backend in this repo; point it at one with:

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_API_CORE_BASE_URL` | Yes | Base URL of the core API |
| `NEXT_PUBLIC_CONTACT_EMAIL` | No | Shows a contact link in the footer |
| `NEXT_PUBLIC_PRIVACY_URL` | No | Links the privacy policy from the beta consent checkbox and the footer. Without it, no privacy link is rendered. |

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
    "source": "landing"
}
```

- `company_size`: one of `1-10`, `11-50`, `51-200`, `201-1000`, `1000+`
- `primary_interest`: one of `sales`, `marketing`, `both`, `exploring`
- `consent`: always `true`. The applicant must tick "I agree that GORVIO may store these details to contact me about the beta. You can ask us to delete them at any time." The checkbox is validated on the client and again in the server action, so nothing is sent without it.
- `2xx` means registered.
- `409` means the email is already registered. The modal shows a friendly "you're already on the list" state.
- Any other status shows the error state, using the response's `error`, `message` or `detail` field when one is present.

## Notes

- The Slack collaboration section is a visual preview. The plugin is labelled as rolling out with the beta and is not wired to Slack.
- The hero board recreates the product video as a live, animated component instead of embedding the video file.
- Animations respect `prefers-reduced-motion`.
