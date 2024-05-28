// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     proxy: {
//       "/remove": {
//         target: "http://localhost:9196/app",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/remove/, "/remove"),
//       },
//       "/read": {
//         target: "http://localhost:9196/app",
//         changeOrigin: true,
//         rewrite: (path) => path.replace(/^\/read/, "/read"),
//       },
//     },
//   },
// });
// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9196/app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
