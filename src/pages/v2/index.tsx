import type { NextPage } from 'next';

import { HeadTemplate } from '../../components/HeadTemplate';
import { V2 } from '../../components/pages/v2';

const V2Page: NextPage = () => {
  return (
    <>
      <HeadTemplate />
      <V2 />
    </>
  );
};

export default V2Page;
