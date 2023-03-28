import type { FC } from 'react';

import { Header } from './Header';
import { AboutSection } from './sections/AboutSection';
import { TopSection } from './sections/TopSection';

import { Footer } from '../../Footer';

export const V2: FC = () => {
  return (
    <>
      <Header />
      <main>
        <TopSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
};
