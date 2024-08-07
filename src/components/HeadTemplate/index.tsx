import Head from 'next/head';

export const HeadTemplate: React.FC = () => {
  return (
    <Head>
      <title>YU-TA-9&apos;s PAGE</title>
      <meta name='description' content='This is a home page of YU-TA-9.' />
      <link rel='icon' href='/images/logo.png' />
      {/* OGP */}
      <meta property='og:url' content='https://www.yu-ta-9.com/' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content="YU-TA-9's PAGE" />
      <meta property='og:description' content='This is a home page of YU-TA-9.' />
      <meta property='og:site_name' content="YU-TA-9's PAGE" />
      <meta property='og:image' content='https://www.yu-ta-9.com/images/logo.png' />
      {/* Twitter OGP */}
      <meta name='twitter:card' content='summary' />
    </Head>
  );
};
