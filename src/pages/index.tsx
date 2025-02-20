import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { withTranslation } from 'react-i18next';

import { HeadTemplate } from '@/components/HeadTemplate';
import { HomeContext } from '@/contexts/HomeContext';

import type { ZennArticle } from '@/@types/zenn';
import type { GetStaticProps, NextPage } from 'next';
import type { Data } from '@/@types/data';

const DynamicV2 = dynamic(() => import('@/components/pages/v2').then((module) => module.V2), { ssr: false });

type Props = {
  data: {
    zenn: ZennArticle[];
    works: Data[];
    musics: Data[];
  };
};

const Home: NextPage<Props> = ({ data }) => {
  return (
    <>
      <HeadTemplate />

      <HomeContext.Provider value={{ data }}>
        <DynamicV2 />
      </HomeContext.Provider>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default withTranslation('common')(Home);

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const zennArticlesRes = await fetch('https://zenn.dev/api/articles?username=yu_ta_9&order=latest');

  const zennArticlesJson = await zennArticlesRes.json();

  const { default: works } = (await import(`/data/${locale || 'ja'}/works.json`, {
    assert: {
      type: 'json',
    },
  })) as { default: Data[] };
  const { default: musics } = (await import(`/data/${locale || 'ja'}/musics.json`, {
    assert: {
      type: 'json',
    },
  })) as { default: Data[] };

  return {
    props: {
      ...(await serverSideTranslations(locale || 'ja', ['common'])),
      data: {
        zenn: zennArticlesJson.articles,
        works,
        musics,
      },
    },
    revalidate: 3600,
  };
};
