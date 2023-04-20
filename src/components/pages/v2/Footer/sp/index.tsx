import type { FC } from 'react';

import styles from './style.module.scss';

import { Author } from '../common/Author';
import { Links } from '../common/Links';

export const FooterSp: FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['left']}>
        <h2 className={styles['text']}>
          YU-TA-9
          <br />
          portfolio site
        </h2>

        <Links />

        <div className={styles['wrapper']}>
          <small className={styles['author']}>© YU-TA-9</small>

          <Author />
        </div>
      </div>

      <div className={styles['right']}>
        <a className={styles['text']} href='#'>
          ← PAGE TOP
        </a>
      </div>
    </footer>
  );
};
