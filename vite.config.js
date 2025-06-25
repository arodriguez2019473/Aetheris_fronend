// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "./", // importante si está fallando en Vercel
});
// Este archivo configura Vite para usar React y establece la base del proyecto.
// Asegúrate de que el archivo esté en la raíz del proyecto y que Vite
