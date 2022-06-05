import Head from 'next/head';

export const HeadTemplate: React.FC = () => {
  return (
    <Head>
      <title>YU-TA-9&apos;s PAGE</title>
      <meta name='description' content='This is a home page of YU-TA-9.' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  );
};
