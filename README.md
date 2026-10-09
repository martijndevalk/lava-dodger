# Lava Dodger (web)

De Spline-game in Chrome, gebouwd met Vite + pnpm.

## Starten

```bash
pnpm install
pnpm dev        # http://localhost:5173 (ontwikkelen)
pnpm build      # productiebuild naar dist/
pnpm preview    # de gebouwde versie lokaal testen
```

Open de game via een server (dev/preview of een static host), niet door
`dist/index.html` te dubbelklikken: `file://` blokkeert module-scripts.
`dist/` kan als geheel naar Netlify, Vercel, Cloudflare Pages of een eigen
static host (de paden zijn relatief).

## Gamepad

Sluit de controller aan en druk één keer op een knop terwijl het tabblad
open is (Chrome toont een controller pas na de eerste knopdruk). Je ziet dan
"CONTROLLER VERBONDEN". Staat het niet goed? Check `chrome://gamepad`.

De besturing zelf zit in de scène (HTML/JS in Spline) en werkt hier dus
hetzelfde als in Spline.

## Waarom `htmlContentMode: 'inline'`

Je hele game (HUD, menu, lavaballen, Gamepad API) is HTML/JS dat in de
Spline-scène zit. De standaard `<Spline />` React/Next.js-component draait dat
in een afgeschermde iframe (`sandbox`), waar de Gamepad API geblokkeerd is en
de toetsen niet bij de robot aankomen. `src/main.ts` laadt de scène daarom
direct met `@splinetool/runtime` en `htmlContentMode: 'inline'`. Alleen
doen voor je eigen scènes (inline scripts draaien met de rechten van de pagina).

## Scène bijwerken

Pas je iets aan in Spline: kies **Export → Code Export → Update Code Export**
en ververs de pagina. De publieke URL blijft hetzelfde. Zonder die stap
draait de browser de oude versie.

## Scène lokaal hosten (optioneel)

Het `.spline`-bestand is het bronbestand van de editor en kan de browser niet
laden. Voor lokaal hosten: download de `.splinecode` (downloadicoon naast de
URL in Code Export, of **Self-Hosted → Download Assets**), zet hem in
`public/scene.splinecode` en maak `.env.local` aan:

```
VITE_SPLINE_SCENE=/scene.splinecode
```
