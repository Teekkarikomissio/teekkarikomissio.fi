import React from 'react';
import { withTranslation } from '../i18n';

import Layout from '../components/layout';

const Homepage = ({ t }) => {
  return (
    <Layout>
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{t('homepage:h1')}</div>
            <p className="text-left text-gray-700 text-base mb-2">{t('homepage:p')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Homepage.getInitialProps = async () => ({
  namespacesRequired: ['homepage', 'nav'],
});

export default withTranslation('homepage')(Homepage);
