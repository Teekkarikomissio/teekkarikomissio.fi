import React from 'react';
import Head from 'next/head';

import Navigation from './Navigation';
import Footer from './footer';
import useTranslation from '../hooks/useTranslation';

interface Props {
  titleKey: string;
  imageSrc: string;
}

const Layout: React.FC<Props> = ({ titleKey, imageSrc, children }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col text-center">
      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <Navigation />
      <div
        style={{
          backgroundImage: `url("${imageSrc}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <div className="container mx-auto px-8">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
