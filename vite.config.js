import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dotenv from 'dotenv';

dotenv.config(); // Cargar el archivo .env

export default defineConfig(({ mode }) => {
  const env = process.env;

  return {
    define: {
      __APP_ENV__: JSON.stringify(env.VITE_Open_AI_Key),
    },
    plugins: [react()],
  };
});
