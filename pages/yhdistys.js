import { withTranslation } from '../i18n';

import Layout from '../components/layout';

const Association = ({ t }) => {
  return (
    <Layout title="Yhdistys">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">{t('association:heading')}</div>
            <p className="text-left text-gray-700 text-base mb-2">{t('association:content')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Association.getInitialProps = async () => ({
  namespacesRequired: ['association', 'nav'],
});

export default withTranslation('association')(Association);
