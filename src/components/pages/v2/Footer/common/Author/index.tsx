import type { FC } from 'react';

import styles from './style.module.scss';

export const Author: FC = () => {
  return (
    <div className={styles['author-container']}>
      <div>CREATED BY</div>
      <div className={styles['detail']}>
        <span className={styles['role']}>DESIGN</span>
        <a
          className={styles['link']}
          href='https://twitter.com/yanwary_life?s=21&t=wNA-HKgDfalYD-EQxz06uw'
          target='_blank'
          rel='noreferrer'
        >
          YAMA
        </a>
        <span className={styles['role']}>FRONT-END</span>
        <a className={styles['link']} href='#'>
          YU-TA-9
        </a>
      </div>
    </div>
  );
};
