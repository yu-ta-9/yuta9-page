import 'reset-css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '@/styles/global.css';
import '@/styles/tokens/index.css';

import { appWithTranslation } from 'next-i18next';

import type { AppProps } from 'next/app';
import type { ReactNode } from 'react';

export const App = ({ Component, pageProps }: AppProps): ReactNode => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
