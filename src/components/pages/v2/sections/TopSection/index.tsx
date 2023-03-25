import type { FC } from 'react';

import styles from './style.module.scss';

export const TopSection: FC = () => {
  return (
    <section className={styles['section-top']}>
      <video className={styles['video']} src='/videos/sample_video.mp4' autoPlay loop muted></video>
      <h1 className={styles['title']}>
        YU-TA-9
        <br />
        portfolio site
      </h1>
    </section>
  );
};
