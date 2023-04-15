import type { NextPage } from 'next';

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

export default Home;
