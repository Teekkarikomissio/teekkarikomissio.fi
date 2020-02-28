const NextI18Next = require('next-i18next').default;

module.exports = new NextI18Next({
  defaultLanguage: 'fi',
  otherLanguages: ['sv'],
  localePath: typeof window === 'undefined' ? 'public/locales' : 'locales',
});
