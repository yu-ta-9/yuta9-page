import type { FC } from 'react';

import { LocaleDropdown } from './LocaleDropdown';
import styles from './style.module.scss';

export const Navigation: FC = () => {
  return (
    <nav className={styles['navigation-container']} aria-label='Main menu'>
      <ul className={styles['menu']}>
        <li className={styles['list']}>
          <a className={styles['text']} href='#about' tabIndex={0}>
            ABOUT
          </a>
        </li>
        <li className={styles['list']}>
          <a className={styles['text']} href='#skill' tabIndex={0}>
            SKILL
          </a>
        </li>
        <li className={styles['list']}>
          <a className={styles['text']} href='#works' tabIndex={0}>
            WORKS
          </a>
        </li>
        <li>
          <LocaleDropdown />
        </li>
      </ul>
    </nav>
  );
};
