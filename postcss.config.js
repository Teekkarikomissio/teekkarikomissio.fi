const isProd = process.env.NODE_ENV === 'production';
// https://nextjs.org/docs/advanced-features/customizing-postcss-config
module.exports = {
  plugins: {
    'postcss-import': {},
    tailwindcss: {},
    '@fullhuman/postcss-purgecss': isProd
      ? {
          content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
          defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
        }
      : false,
    'postcss-nested': {},
    'postcss-custom-properties': {},
    'postcss-flexbugs-fixes': {},
    'postcss-preset-env': {
      autoprefixer: {
        flexbox: 'no-2009',
      },
      stage: 3,
      features: {
        'custom-properties': false,
      },
    },
  },
};
