import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

const repoName = 'jajanin'
export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: `/${repoName}/`,
})
