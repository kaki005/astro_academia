// @ts-check
import { defineConfig } from "astro/config";
import { template } from "./src/settings";
import sitemap from "@astrojs/sitemap";
import tailwind from '@tailwindcss/vite'; // 新しいプラグイン


// https://astro.build/config
export default defineConfig({
    integrations: [sitemap(
        {
            i18n: {
                defaultLocale: template.default_lang,
                locales: {
                    ja: 'ja',
                    en: 'en',
                },
            },
        }
    )],
    site: template.website_url,
    base: template.base,
    i18n: {
        defaultLocale: template.default_lang,
        locales: ["en", "ja"],
    },
    vite: {
        plugins: [tailwind()],
    }
});
