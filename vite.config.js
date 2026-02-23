// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// export default defineConfig({
//   plugins: [react()],

//   // 👇 مهم جدًا لـ GitHub Pages
//   base: "/portfolio/",

//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "src"),
//     },
//   },
// });




import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => ({
  plugins: [react()],

  // 👇 base فقط في build
  base: mode === "production" ? "/portfolio/" : "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
}));