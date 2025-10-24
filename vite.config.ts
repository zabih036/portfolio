// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Set base to '/portfolio/' if your repo is github.com/username/portfolio
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
});
