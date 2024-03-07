import { useDevice } from '@/hooks/useDevice';

import type { FC } from 'react';

import { WorksSectionPc } from './pc';
import { WorksSectionSp } from './sp';

export const WorksSection: FC = () => {
  const { isSp } = useDevice();

  return isSp ? <WorksSectionSp /> : <WorksSectionPc />;
};
