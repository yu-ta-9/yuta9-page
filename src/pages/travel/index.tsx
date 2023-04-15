import type { NextPage } from 'next';

import { HeadTemplate } from '../../components/HeadTemplate';
import { Travel } from '../../components/pages/v2/travel';

const TravelPage: NextPage = () => {
  return (
    <>
      <HeadTemplate />
      <Travel />
    </>
  );
};

export default TravelPage;
