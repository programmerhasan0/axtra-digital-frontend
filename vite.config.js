import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

console.log(fileURLToPath(new URL("./src", import.meta.url)));

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@components": fileURLToPath(
                new URL("./src/components", import.meta.url)
            ),
            "@pages": fileURLToPath(new URL("./src/pages", import.meta.url)),
            "@hooks": fileURLToPath(new URL("./src/hooks", import.meta.url)),
            "@styles": fileURLToPath(new URL("./src/styles", import.meta.url)),
        },
    },
    base: "/",
});
