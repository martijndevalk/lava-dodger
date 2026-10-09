import { Application } from '@splinetool/runtime';

/**
 * Scene-URL. Standaard de gepubliceerde Spline-scène; zet VITE_SPLINE_SCENE
 * in een .env-bestand (of kies "Download Assets" in Spline en zet de
 * .splinecode in /public, bv. VITE_SPLINE_SCENE=/scene.splinecode) om dit te overschrijven.
 */
const SCENE_URL: string =
  import.meta.env.VITE_SPLINE_SCENE ??
  'https://prod.spline.design/yN4JM2Oi9meuFXGT/scene.splinecode';

const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;

/**
 * BELANGRIJK voor de gamepad:
 * De volledige game (HUD, menu, lavaballen, Gamepad API) zit als HTML/JS in de
 * Spline-scène. Standaard ('sandbox') draait die in een iframe zonder
 * gamepad-rechten en zonder toegang tot de pagina. Met 'inline' draait dezelfde
 * code als gewone paginacode, precies zoals in Spline zelf.
 * Alleen veilig omdat jij de auteur van de scène bent.
 */
const app = new Application(canvas, { htmlContentMode: 'inline' });

app
  .load(SCENE_URL)
  .then(() => {
    // Handig om in de browserconsole te testen: window.app.getVariables()
    (window as unknown as { app: Application }).app = app;
  })
  .catch((err) => {
    console.error('Kon de Spline-scène niet laden:', err);
  });
