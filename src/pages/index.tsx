import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation } from 'react-i18next';

import { HeadTemplate } from '@/components/HeadTemplate';
import { HomeContext } from '@/contexts/HomeContext';

import type { ZennArticle } from '@/@types/zenn';
import type { GetStaticProps, NextPage } from 'next';

const DynamicV2 = dynamic(() => import('@/components/pages/v2').then((module) => module.V2), { ssr: false });

type Props = {
  zennArticles: ZennArticle[];
};

const Home: NextPage<Props> = ({ zennArticles }) => {
  return (
    <>
      <HeadTemplate />

      <HomeContext.Provider value={{ zennArticles }}>
        <DynamicV2 />
      </HomeContext.Provider>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default withTranslation('common')(Home);

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const zennArticlesRes = await fetch('https://zenn.dev/api/articles?username=yu_ta_9&order=latest');
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const zennArticlesJson = await zennArticlesRes.json();

  return {
    props: {
      ...(await serverSideTranslations(locale || 'ja', ['common'])),
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      zennArticles: zennArticlesJson.articles,
    },
    revalidate: 3600,
  };
};
