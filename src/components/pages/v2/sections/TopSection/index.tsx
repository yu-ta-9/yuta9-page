import styles from '@/components/pages/v2/sections/TopSection/index.module.css';

import type { FC } from 'react';

export const TopSection: FC = () => {
  console.log('styles:', styles);

  return (
    <section className={styles.sectionTop}>
      <video className={styles.video} src='/videos/sample_video.mp4' autoPlay loop muted></video>

      <h1 className={styles.title}>
        YU-TA-9
        <br />
        portfolio site
      </h1>

      <div className={styles.scrollBar}>
        <span>scroll</span>
        <div className={styles.wrapper}>
          <div className={styles.bar}></div>
        </div>
      </div>
    </section>
  );
};
