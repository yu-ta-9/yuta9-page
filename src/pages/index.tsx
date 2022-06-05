import type { NextPage } from 'next';

import styles from './style.module.scss';

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { HeadTemplate } from '../components/HeadTemplate';
import { SECTIONS } from '../components/sections/sections';
import { SectionTemplate } from '../components/sections/SectionTemplate';

/**
 * TODO: ページ案
 * - 自作コンポーネントカタログ
 */
const Home: NextPage = () => {
  return (
    <div className={styles['container']}>
      <HeadTemplate />
      <Header />
      <main className={styles['main']}>
        {SECTIONS.map((section, i) => (
          <SectionTemplate key={i} title={section.title} bgColor={section.bgColor}>
            {section.content}
          </SectionTemplate>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
