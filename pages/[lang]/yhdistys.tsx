import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import useTranslation from '../../hooks/useTranslation';

const Yhdistys: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout titleKey="Yhdistys" imageSrc="">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{t('associationHeading')}</div>
            <p className="text-left text-gray-700 text-base mb-2">{t('associationContent')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(Yhdistys);
