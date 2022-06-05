import type { FC } from 'react';

import styles from './style.module.scss';

type Props = Record<string, unknown>;

type Menu = {
  label: string;
};

const MENU: Menu[] = [
  {
    label: 'Profile',
  },
  {
    label: 'Work',
  },
  {
    label: 'Music',
  },
];

export const Menu: FC<Props> = () => {
  return (
    <ul className={styles['menu-wrapper']}>
      {MENU.map((e, i) => {
        return (
          <li key={i} className={styles['menu']}>
            {e.label}
          </li>
        );
      })}
    </ul>
  );
};
