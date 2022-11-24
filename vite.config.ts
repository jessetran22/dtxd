/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'
import * as path from 'path'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false,
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
