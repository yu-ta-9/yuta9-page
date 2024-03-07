import { Html, Head, Main, NextScript } from 'next/document';

import type { FC } from 'react';

export const Document: FC = () => {
  return (
    <Html>
      <Head>
        {/* font */}
        <link rel='stylesheet' href='http://fonts.googleapis.com/earlyaccess/notosansjp.css' type='text/css' />
        <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Ubuntu&display=optional' type='text/css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};
