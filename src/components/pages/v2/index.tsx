import type { FC } from 'react';

import { Header } from './Header';
import { SECTIONS } from './sections/const';

import { Footer } from '../../Footer';

export const V2: FC = () => {
  return (
    <>
      <Header />
      <main>{SECTIONS.map((section) => section.content)}</main>
      <Footer />
    </>
  );
};
