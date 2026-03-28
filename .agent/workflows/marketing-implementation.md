---
description: Marketing og tracking implementering spilleregler
---

# Marketing & Performance Implementering Workflow

Når du som AI-agent bliver bedt om at udvikle og implementere en marketingopgave, kampagne, tracking, SEO-optimering eller lignende konverteringshandlinger, **SKAL** du trippel-tjekke din egen kode mod dette stramme regelsæt. Formålet er at sikre lynhurtig performance (Core Web Vitals), TypeScript-sikkerhed, fejlfri arkitektur, fuld SEO-venlighed og vandtæt konverteringssporing.

## 1. Tracking & GTM Arkitektur (Den Gyldne Standard)
*   **GTM som Master:** Hardcode ALDRIG 3. parts scripts (Meta Pixel, GA4, LinkedIn, Hotjar osv.) direkte i koden, medmindre brugeren eksplicit tvinger dig. Al tracking foregår centralt via opsætning i Google Tag Manager (GTM).
*   **DataLayer Events (Single Source of Truth):** Opsaml adfærd via eksplisitte `window.dataLayer.push()` events bundet direkte på komponenternes logik (f.eks. ved API-succes eller specifikke onClicks).
    *   *Regel:* Brug standardiserede GA4/GTM event-navne hvor muligt (f.eks. `generate_lead`, `purchase`, `sign_up`, `login`).
    *   *Regel:* Send altid relevant kontekst med (f.eks. `form_id`, `button_text`, `plan_name`).
    *   *TypeScript:* Husk at deklarere dataLayer globalt i TSX-filer for at undgå fatale linting-fejl. Gør det f.eks. via `declare global { interface Window { dataLayer: any[]; } }` og initiér altid defensivt: `window.dataLayer = window.dataLayer || [];`.
*   **Formularer & Asynkrone Kald:** Tracking for formularindsendelser (AJAX/fetch) må **KUN** fyre success-events op i dataLayer i en `.then()` blok eller efter en `if (response.ok)` validering. Spor aldrig en "submit" succes udelukkende på et fysisk knap-klik. Overvej også at tracke fejlstater (`form_error`) for at hjælpe marketing med at finde drop-offs.
*   **Samtykke (Consent Mode) & Adblockers:** Skriv defensiv kode. Antag altid, at brugere kan have adblockers eller har afvist cookies. Tracking-koden må ikke være bundet så tæt til state, at applikationen crasher, hvis scripts udefra blokeres, eller hvis `window.dataLayer` opfører sig uventet.
*   **Client-Side Navigation (SPA / Next.js):** Vær proaktiv omkring SPA routing (React/Vite applikationer genindlæser ikke fysisk). Hvis brugeren beder om at tracke sidevisninger, skal du huske at implementere logik til "Virtual Pageviews" i routerens cyklus (f.eks. `useEffect` på URL-ændring) eller informere brugeren om "History Change" events i GTM.

## 2. Performance & Vercel Opsætning
*   **Ingen "Render-Blocking":** Tunge scripts, eksterne iframes (HubSpot, Calendly) eller styling må ikke ødelægge LCP (Largest Contentful Paint) eller forårsage CLS (Cumulative Layout Shift). Brug lazy-loading (`loading="lazy"`, dynamisk import, eller Intersection Observers) til tredjeparts-widgets.
*   **Redirects & Server-logik:** Hvis du bliver bedt om at opsætte redirects (301/302), bevar kampagne-parametre (UTM'er), og konfigurer det via Vercel-native metoder (`vercel.json` eller `next.config.js`) frem for langsomme klientside redirects if/else logik.
*   **Kode-genbrug & Bundle Size:** Ved oprettelse af nye landingpages, genbrug altid de eksisterende Tailwind/CSS/UI komponenter for at holde bundle-størrelsen minimal. Undgå at skrive store in-line styles eller nye custom klasser til midlertidige kampagner, hvis vi kan bruge dry-principper (Don't Repeat Yourself).

## 3. SEO & Metadata
*   **Dynamisk SEO:** Mangler opgaven SEO-hensyn? Tænk et skridt frem. Sørg altid for, at hver ny side har (eller kan understøtte) unikke `<title>`, `<meta name="description">`, canonical tags og Open Graph tags (`og:title`, `og:image`) af hensyn til SoMe deling.
*   **Structured Data (JSON-LD):** Ved nye vigtige sider/sektioner (f.eks. Services, Blog, FAQ), implementer dynamisk Schema.org markup. Indsæt det korrekt i DOM'en som et `<script type="application/ld+json">` tag for at sikre indeksering med "Rich Snippets" i Google.

## 4. Agentens Svar-Format (Din Tjekliste)
Når du svarer brugeren efter en marketing/tracking implementering, SKAL dit svar struktureres præcist således:
1.  **System & Fejl-Tjek:** En kort forsikring om, at TS-typer er overholdt, formularer valideres ordentligt før event pushes, og SEO/Performance er intakt.
2.  **Kode-eksporter:** Fremvis eller udfør kodeændringerne.
3.  **DataLayer Variabler (Vigtig!):** En præcis liste over de dataLayer navne og data-struktur din kode nu udsender, så marketing nemt kan sætte tags op via "copy-paste".
4.  **Handling påkrævet (GTM/Vercel/Platforme):** En punktopstilling over præcis hvad brugeren MANUELT skal sætte op i GTM-interfacet, Vercel eller DNS.
5.  **Risikovurdering:** Nævn eventuelle fallback-scenarier (f.eks. "hvis brugeren bouncer for hurtigt, når eventet ikke at skyde fordi vi sender brugeren til en ny URL").
