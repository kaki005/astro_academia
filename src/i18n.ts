import { define } from '@i18n-tiny/astro'
import enMessages from './messages/en'
import jaMessages from './messages/ja'
import type { AstroComponentFactory } from "astro";
import IntroJa from "@/components/ja/Introduction.astro"
import IntroEn from "@/components/en/Introduction.astro"

export const locales = ['en', 'ja'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'en'

export const { getMessages, getTranslations } = define({
    locales,
    defaultLocale,
    messages: { en: enMessages, ja: jaMessages }
})
// getStaticPaths用の形式で返す関数
export function _getStaticPaths() {
    return locales.map((locale) => ({ params: { locale } }));
}


export function GetIntroduction(locale: Locale): AstroComponentFactory {
    return locale == 'ja' ? IntroJa : IntroEn
}
