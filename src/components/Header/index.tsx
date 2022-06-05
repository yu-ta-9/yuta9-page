import type { FC } from 'react';

import styles from './style.module.scss';

import { Menu } from '../Menu';

type Props = Record<string, unknown>;

export const Header: FC<Props> = () => {
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles['logo']}>
        {/** TODO: ロゴ写真に差し替える */}
        <p style={{ color: '#304556', fontSize: '24px', fontWeight: 700 }}>YU-TA-9&apos;s PAGE</p>
      </div>
      <Menu />
    </div>
  );
};
