import type { FC } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';
import { AboutSection } from './sections/AboutSection';
import { ContentsLayout } from './sections/layouts/ContentsLayout';
import { SkillSection } from './sections/SkillSection';
import { TopSection } from './sections/TopSection';
import { WorksSection } from './sections/WorksSection';

export const V2: FC = () => {
  return (
    <>
      <Header />
      <main>
        <TopSection />
        <ContentsLayout id='about' heading='ABOUT' theme='primary'>
          <AboutSection />
        </ContentsLayout>
        <ContentsLayout id='skill' heading='SKILL' theme='primary'>
          <SkillSection />
        </ContentsLayout>
        <ContentsLayout id='works' heading='WORKS' theme='secondary'>
          <WorksSection />
        </ContentsLayout>
      </main>
      <Footer />
    </>
  );
};
