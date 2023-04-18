import type { FC } from 'react';

import { HeaderPc } from './pc';
import { HeaderSp } from './sp';

import { useDevice } from '../../../../hooks/useDevice';

export const Header: FC = () => {
  const { isSp } = useDevice();

  return isSp ? <HeaderSp /> : <HeaderPc />;
};
