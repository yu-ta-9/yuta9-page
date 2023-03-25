import type { FC } from 'react';

import styles from './style.module.scss';

export const AboutSection: FC = () => {
  return (
    <section className={styles['section-about']}>
      <h2 className={styles['header']}>ABOUT</h2>
      <div className={styles['contents']}>
        <h3 className={styles['title']}>Profile</h3>
        <p className={styles['description']}>
          はじめまして、私はエンジニアの〇〇です。主に〇〇の開発に携わっており、〇〇を得意としています。趣味は〇〇で、〇〇にも興味があります。どうぞよろしくお願いいたします。ここにテキストが入ります。
        </p>

        <h3 className={styles['title']}>Certification</h3>
        <p className={styles['description']}>
          応用情報技術者試験 / システムアーキテクト試験/ ITサービスマネージャ試験 / ここにテキストが入ります。
        </p>
      </div>
      <img className={styles['image']} src='/images/sample_profile.png' alt='profile' />
    </section>
  );
};
