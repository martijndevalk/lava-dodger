import { defineConfig } from 'vite';

export default defineConfig({
  // Relatieve paden: de build werkt vanuit elke map/host (bv. /lava-dodger/).
  base: './',
  build: {
    target: 'esnext',
    // De Spline-runtime is groot (wasm + shaders); dit voorkomt een nutteloze waarschuwing.
    chunkSizeWarningLimit: 4000,
  },
});
