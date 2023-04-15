import type { FC } from 'react';

import styles from './style.module.scss';

export const Menu: FC = () => {
  return (
    <div className={styles['menu-container']}>
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

      <div className={styles['author']}>
        <div>CREATED BY</div>
        <div className={styles['detail']}>
          <span className={styles['role']}>DESIGN</span>
          <a className={styles['link']} href='#' target='_blank' rel='noreferrer'>
            YAMA
          </a>
          <span className={styles['role']}>FRONT-END</span>
          <a className={styles['link']} href='#'>
            YU-TA-9
          </a>
        </div>
      </div>
    </div>
  );
};
