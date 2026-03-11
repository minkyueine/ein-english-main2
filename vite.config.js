import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // 개발: 루트(/) | 배포: GitHub Pages 경로
  base: command === 'build' ? '/ein-english-main/' : '/',
}))
