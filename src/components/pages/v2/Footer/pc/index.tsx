import type { FC } from 'react';

import styles from './style.module.scss';

import { Author } from '../common/Author';
import { Links } from '../common/Links';

export const FooterPc: FC = () => {
  return (
    <footer className={styles['footer-container']}>
      <div className={styles['heading']}>
        <h2 className={styles['text']}>
          YU-TA-9
          <br />
          portfolio site
        </h2>

        <small className={styles['author']}>© YU-TA-9</small>
      </div>

      <div className={styles['menu']}>
        <Links />

        <Author />
      </div>

      <div className={styles['go']}>
        <a className={styles['text']} href='#'>
          ← PAGE TOP
        </a>
      </div>
    </footer>
  );
};
