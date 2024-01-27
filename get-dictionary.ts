import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  fi: () => import("./dictionaries/fi.json").then((module) => module.default),
  sv: () => import("./dictionaries/sv.json").then((module) => module.default),
  //en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) =>
  dictionaries[locale]?.() ?? dictionaries.fi();