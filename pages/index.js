import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import getInitialLocale from '../static-translations/getInitialLocale';

const Index = () => {
  const { asPath } = useRouter();

  useEffect(() => {
    Router.push(`/${getInitialLocale()}${asPath}`);
  }, [asPath]);
};

export default Index;
