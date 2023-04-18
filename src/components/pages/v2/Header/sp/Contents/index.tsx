import { useRouter } from 'next/router';

import type { FC } from 'react';

import styles from './style.module.scss';

import { IconGlobal } from '../../../../../icons/Global';

export const Contents: FC = () => {
  const { locale } = useRouter();

  return (
    <div className={styles['contents-container']}>
      <ul className={styles['menu']}>
        <li className={styles['list']}>
          <a href='#about'>ABOUT</a>
        </li>
        <li className={styles['list']}>
          <a href='#skill'>SKILL</a>
        </li>
        <li className={styles['list']}>
          <a href='#works'>WORKS</a>
        </li>
      </ul>
      <div className={styles['locale']}>
        <IconGlobal width={14} height={14} />
        <a className={locale === 'ja' ? styles['selected'] : ''} href='/ja'>
          Ja
        </a>
        <a className={locale === 'en' ? styles['selected'] : ''} href='/en'>
          En
        </a>
      </div>
    </div>
  );
};
