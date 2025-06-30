import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()],
    base: "week-3-react-js-assignment-AngelNelly,"
});

// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // 👇 Replace with your repo name
// export default defineConfig({
//   plugins: [react()],
//   base: "/your-repo-name/", 
// })
