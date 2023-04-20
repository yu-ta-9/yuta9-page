import type { FC } from 'react';

import { WorksSectionPc } from './pc';
import { WorksSectionSp } from './sp';

import { useDevice } from '../../../../../hooks/useDevice';

export const WorksSection: FC = () => {
  const { isSp } = useDevice();

  return isSp ? <WorksSectionSp /> : <WorksSectionPc />;
};
