import 'reset-css';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import '../../styles/globals.scss';
import type { AppProps } from 'next/app';

export const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default App;
