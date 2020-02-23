import Layout from '../components/layout';

export default () => {
  return (
    <Layout title="Yrityksille">
      <div className="max-w-sm w-full lg:max-w-full lg:flex">
        <div className="border-b border-blue-700 lg:border-blue-700 bg-white rounded-b lg:rounded-b-none  p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="text-gray-900 font-bold text-xl mb-2">Yrityksille</div>
            <p className="text-gray-700 text-base">
              Teekkarikomission jäseniä ovat kaikkien jäsenyhdistysten jäsenet. Kauttamme yrityksesi voi tavoittaa
              opiskelijoita ja työssäkäyviä teekkareita sekä muodostaa positiivisen vaikutelman verkostomme jäsenille.
              Teemme mielellämme yhteistyötä esimerkiksi tapahtumanäkyvyyden muodossa ja meidät voi tavoittaa
              osoitteesta{' '}
              <a className="underline" href="mailto:teekkarikomissio@lists.utu.fi">
                teekkarikomissio@lists.utu.fi
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
