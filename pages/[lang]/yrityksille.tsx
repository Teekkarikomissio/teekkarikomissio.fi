import React from 'react';
import withLocale from '../../hocs/withLocale';

import Layout from '../../components/Layout';
import HeaderPicture from '../../components/HeaderPicture';
import { H1, LongText } from '../../components/Typography';
import useTranslation from '../../hooks/useTranslation';

const ForCompanies = () => {
  const { t } = useTranslation();

  return (
    <Layout titleKey="yrityksille">
      <HeaderPicture img="/yrityksille-paavo.jpg" alt="Paavon lakitus" />
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <H1>{t('forCompaniesHeading')}</H1>
            <LongText>
              {t('forCompaniesBody')}{' '}
              <a className="underline" href="mailto:teekkarikomissio@lists.utu.fi">
                teekkarikomissio@lists.utu.fi
              </a>
            </LongText>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default withLocale(ForCompanies);
