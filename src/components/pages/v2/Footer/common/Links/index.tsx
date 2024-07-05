import styles from '@/components/pages/v2/Footer/common/Links/index.module.css';

import type { FC } from 'react';

export const Links: FC = () => {
  return (
    <ul className={styles.linksContainer}>
      <li className={styles.link}>
        <a className={styles.text} href='#about'>
          ABOUT
        </a>
      </li>
      <li className={styles.link}>
        <a className={styles.text} href='#articles'>
          ARTICLES
        </a>
      </li>
      <li className={styles.link}>
        <a className={styles.text} href='#skill'>
          SKILL
        </a>
      </li>
      <li className={styles.link}>
        <a className={styles.text} href='#works'>
          WORKS
        </a>
      </li>
    </ul>
  );
};
