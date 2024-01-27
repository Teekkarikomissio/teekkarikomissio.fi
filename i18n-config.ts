export const i18n = {
    defaultLocale: "fi",
    locales: ["fi", "sv"], // "en"
  } as const;
  
  export type Locale = (typeof i18n)["locales"][number];