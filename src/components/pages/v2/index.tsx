import type { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { AboutSection } from './sections/AboutSection';
import { TopSection } from './sections/TopSection';

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
