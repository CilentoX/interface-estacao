import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Escuta em todos os endereços IP
    port: 5000, // Ou a porta que você está utilizando
  },
});
