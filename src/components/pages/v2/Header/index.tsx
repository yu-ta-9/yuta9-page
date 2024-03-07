import { useDevice } from '@/hooks/useDevice';

import type { FC } from 'react';

import { HeaderPc } from './pc';
import { HeaderSp } from './sp';

export const Header: FC = () => {
  const { isSp } = useDevice();

  return isSp ? <HeaderSp /> : <HeaderPc />;
};
