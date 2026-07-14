// @ts-check
import { defineConfig } from "astro/config";
import { template } from "./src/settings";
import sitemap from "@astrojs/sitemap";
import tailwind from '@tailwindcss/vite'; // 新しいプラグイン


// https://astro.build/config
export default defineConfig({
    site: template.website_url,
    base: template.base,
    i18n: {
        defaultLocale: template.default_lang,
        locales: ["en", "ja"],
        routing: {
            prefixDefaultLocale: true,     // デフォルト言語にも /ja を付ける
            redirectToDefaultLocale: true, // ⭐ルート (/) から /ja へ自動リダイレクトする
        }
    },
    vite: {
        plugins: [tailwind()],
    }
});
