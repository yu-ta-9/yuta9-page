import type { FC } from 'react';

import { FooterPc } from './pc';
import { FooterSp } from './sp';

import { useDevice } from '../../../../hooks/useDevice';

export const Footer: FC = () => {
  const { isSp } = useDevice();

  return isSp ? <FooterSp /> : <FooterPc />;
};
