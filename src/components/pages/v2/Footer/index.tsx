import type { FC } from 'react';

import { Menu } from './Menu';
import styles from './style.module.scss';

export const Footer: FC = () => {
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

      <Menu />

      <div className={styles['go']}>
        <a className={styles['text']} href='#'>
          ← PAGE TOP
        </a>
      </div>
    </footer>
  );
};
