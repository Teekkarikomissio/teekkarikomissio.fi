import Error from 'next/error';
import fetch from 'isomorphic-unfetch';
import React from 'react';

import { withTranslation } from '../i18n';

const Page = ({ errorCode, t }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} title={t('error-with-status')} />;
  }

  return <Error title={t('error-without-status')} />;
};

Page.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/repos/zeit/next.js');
  const errorCode = res.statusCode > 200 ? res.statusCode : false;

  return { namespacesRequired: ['common'], errorCode };
};

export default withTranslation('common')(Page);
