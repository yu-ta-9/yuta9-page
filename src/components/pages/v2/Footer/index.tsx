import type { FC } from 'react';

import styles from './style.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <h2 className={styles['heading']}>
        YU-TA-9
        <br />
        portfolio site
      </h2>

      <ul className={styles['links']}>
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

      <div className={styles['go']}>
        <a className={styles['text']} href='#'>
          ← PAGE TOP
        </a>
      </div>
    </footer>
  );
};
