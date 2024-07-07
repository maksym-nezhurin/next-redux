import 'server-only'

import { AvailableLocales as Locales } from "@/configs/i18n";
import type {LocaleType} from "@/configs/i18n";

const dictionaries = {
  [Locales.English]: () => import((`../../dictionaries/${Locales.English}.json`)).then((module) => module.default),
  [Locales.French]: () => import((`../../dictionaries/${Locales.French}.json`)).then((module) => module.default),
  [Locales.German]: () => import((`../../dictionaries/${Locales.German}.json`)).then((module) => module.default),
  [Locales.Russian]: () => import((`../../dictionaries/${Locales.Russian}.json`)).then((module) => module.default),
}

export const getDictionary = async (locale: LocaleType) => dictionaries[locale]()