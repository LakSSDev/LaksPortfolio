import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static', // Asegúrate de que el valor sea 'static' o 'server'
  base: '/LaksPortfolio', // Ajusta según tu repositorio
  outDir: 'dist', // Directorio de salida para los archivos generados
});