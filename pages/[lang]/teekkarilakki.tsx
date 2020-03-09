import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import useTranslation from '../../hooks/useTranslation';

const Cap: React.FC = () => {
  const { t } = useTranslation();

  const TextBox = ({ heading = '', body = '' }) => {
    return (
      <div className="bg-white p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <h1 className="text-gray-900 font-bold text-xl mb-2">{heading}</h1>
          <p className="text-left text-gray-700 text-base mb-2">{body}</p>
        </div>
      </div>
    );
  };

  return (
    <Layout titleKey="Teekkarilakki" imageSrc="">
      <img className="rounded-lg mt-16 mb-8" src="/teekkarihattu.jpg" alt="Teekkarilakki" />
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <TextBox heading={t('capHeadingOne')} body={t('capBodyOne')} />
            <TextBox heading={t('capHeadingTwo')} body={t('capBodyTwo')} />
            <TextBox heading={t('capHeadingThree')} body={t('capBodyThree')} />
            <TextBox heading={t('capHeadingFour')} body={t('capBodyFour')} />
            <TextBox heading={t('capHeadingFive')} body={t('capBodyFive')} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(Cap);
