module.exports = {
  experimental: {
    redirects() {
      return [
        {
          source: '/:lang((?!fi|sv))/:path*',
          destination: '/fi/:path*',
          permanent: true,
        },
      ];
    },
  },
};
