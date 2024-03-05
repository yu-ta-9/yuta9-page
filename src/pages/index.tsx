import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation } from 'react-i18next';

import type { GetStaticProps, NextPage } from 'next';

import { HeadTemplate } from '../components/HeadTemplate';

const DynamicV2 = dynamic(() => import('../components/pages/v2').then((module) => module.V2), { ssr: false });

const Home: NextPage = () => {
  return (
    <>
      <HeadTemplate />
      <DynamicV2 />
    </>
  );
};

export default withTranslation('common')(Home);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || 'ja', ['common'])),
    },
  };
};
