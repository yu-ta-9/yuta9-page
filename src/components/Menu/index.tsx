import { Link as ScrollLink } from 'react-scroll';

import type { FC } from 'react';

import styles from './style.module.scss';

type Props = Record<string, unknown>;

type Menu = {
  label: string;
  to: string;
};

const MENU: Menu[] = [
  {
    label: 'Profile',
    to: 'profile',
  },
  {
    label: 'Work',
    to: 'work',
  },
  {
    label: 'Music',
    to: 'music',
  },
];

export const Menu: FC<Props> = () => {
  return (
    <ul className={styles['menu-wrapper']}>
      {MENU.map((e, i) => {
        return (
          <li key={i} className={styles['menu']}>
            <ScrollLink to={e.to} offset={-120} smooth={true} duration={500}>
              {e.label}
            </ScrollLink>
          </li>
        );
      })}
    </ul>
  );
};
