import type { FC } from 'react';

import styles from './style.module.scss';

export const Links: FC = () => {
  return (
    <ul className={styles['links-container']}>
      <li className={styles['link']}>
        <a className={styles['text']} href='#about'>
          ABOUT
        </a>
      </li>
      <li className={styles['link']}>
        <a className={styles['text']} href='#skill'>
          SKILL
        </a>
      </li>
      <li className={styles['link']}>
        <a className={styles['text']} href='#works'>
          WORKS
        </a>
      </li>
    </ul>
  );
};
