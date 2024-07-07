export enum AvailableLocales {
  English = 'en',
  French = 'fr',
  German = 'de',
  Russian = 'ru'
  // Add more locales as needed
}

export type LocaleKeys = keyof typeof AvailableLocales;

export type LangDirection = 'ltr' | 'rtl';
export type LocaleType = `${AvailableLocales}`;

export interface Ii18n {
  defaultLocale: AvailableLocales.English,
  locales: LocaleType[],
  langDirection: { [key in LocaleType]: LangDirection }
}

// export type LocaleNames = keyof typeof AvailableLocales;

export const i18n: Ii18n = {
  defaultLocale: AvailableLocales.English,
  locales: Object.values(AvailableLocales),
  langDirection: {
    en: 'ltr',
    fr: 'ltr',
    de: 'ltr',
    ru: 'ltr'
  }
} as const

export type Locale = (typeof i18n)['locales'][number]
