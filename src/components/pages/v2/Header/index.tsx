import type { FC } from 'react';

import { LocaleDropdown } from './LocaleDropdown';
import styles from './style.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles['header-container']}>
      <ul className={styles['menu']}>
        <li className={styles['list']}>
          <span className={styles['text']}>ABOUT</span>
        </li>
        <li className={styles['list']}>
          <span className={styles['text']}>SKILL</span>
        </li>
        <li className={styles['list']}>
          <span className={styles['text']}>WORKS</span>
        </li>
        <li>
          <LocaleDropdown />
        </li>
      </ul>
    </header>
  );
};
