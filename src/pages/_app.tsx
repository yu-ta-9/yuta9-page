import 'reset-css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import '@/styles/global.css';
import '@/styles/variables.css';

import { appWithTranslation } from 'next-i18next';

import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
