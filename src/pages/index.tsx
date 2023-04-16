import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation } from 'react-i18next';

import type { GetStaticProps, NextPage } from 'next';

import { HeadTemplate } from '../components/HeadTemplate';
import { V2 } from '../components/pages/v2';

const Home: NextPage = () => {
  return (
    <>
      <HeadTemplate />
      <V2 />
    </>
  );
};

export default withTranslation('common')(Home);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};
