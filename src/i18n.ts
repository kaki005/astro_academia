import { define } from '@i18n-tiny/astro'
import enMessages from './messages/en'
import jaMessages from './messages/ja'

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
