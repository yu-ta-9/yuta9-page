import type { FC } from 'react';

import { LocaleDropdown } from './LocaleDropdown';
import styles from './style.module.scss';

export const Header: FC = () => {
  return (
    <header className={styles['header-container']}>
      <ul className={styles['menu']}>
        <li className={styles['list']}>
          <a className={styles['text']} href='#about'>
            ABOUT
          </a>
        </li>
        <li className={styles['list']}>
          <a className={styles['text']} href='#skill'>
            SKILL
          </a>
        </li>
        <li className={styles['list']}>
          <a className={styles['text']} href='#works'>
            WORKS
          </a>
        </li>
        <li>
          <LocaleDropdown />
        </li>
      </ul>
    </header>
  );
};
