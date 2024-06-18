import { Footer } from '@/components/pages/v2/Footer';
import { Header } from '@/components/pages/v2/Header';
import { AboutSection } from '@/components/pages/v2/sections/AboutSection';
import { ArticlesSection } from '@/components/pages/v2/sections/ArticlesSection';
import { ContentsLayout } from '@/components/pages/v2/sections/layouts/ContentsLayout';
import { SkillSection } from '@/components/pages/v2/sections/SkillSection';
import { TopSection } from '@/components/pages/v2/sections/TopSection';
import { WorksSection } from '@/components/pages/v2/sections/WorksSection';

import type { FC } from 'react';

export const V2: FC = () => {
  return (
    <>
      <Header />

      <main>
        <TopSection />

        <ContentsLayout id='about' heading='ABOUT' theme='primary'>
          <AboutSection />
        </ContentsLayout>

        <ContentsLayout id='articles' heading='ARTICLES' theme='secondary'>
          <ArticlesSection />
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
