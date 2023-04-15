import type { NextPage } from 'next';

import V2 from './v2';

import { HeadTemplate } from '../components/HeadTemplate';

const Home: NextPage = () => {
  return (
    <>
      <HeadTemplate />
      <V2 />
    </>
  );
};

export default Home;
