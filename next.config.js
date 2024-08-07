/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  async rewrites() {
    return [
      {
        source: "/sv/dokument",
        destination: "/sv/dokumentit",
      },
      {
        source: "/sv/gulis",
        destination: "/sv/fukseille",
      },
      {
        source: "/sv/jaynatavlingen",
        destination: "/sv/jaynakilpailut",
      },
      {
        source: "/sv/kultur",
        destination: "/sv/kulttuuri",
      },
      {
        source: "/sv/evenemang",
        destination: "/sv/tapahtumat",
      },
      {
        source: "/sv/teknologmossa",
        destination: "/sv/teekkarilakki",
      },
      {
        source: "/sv/foreningen",
        destination: "/sv/yhdistys",
      },
      {
        source: "/sv/till-foretag",
        destination: "/sv/yrityksille",
      },
      {
        source: "/sv/trakasserianmalan",
        destination:"/sv/ongelmatilannelomake",
      },
    ];
  },
};

module.exports = nextConfig