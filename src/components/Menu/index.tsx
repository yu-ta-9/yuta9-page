import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

import type { FC } from 'react';

import { MenuArea } from './MenuArea';
import { MENU } from './menus';
import styles from './style.module.scss';

import { useDevice } from '../../hooks/useDevice';
import { MenuButton } from '../MenuButton';

type Props = Record<string, unknown>;

export const Menu: FC<Props> = () => {
  const isSp = useDevice();
  const [isActive, setIsActive] = useState(false);

  const handleMenuButton = (): void => {
    setIsActive((prev) => !prev);
  };

  if (isSp) {
    return (
      <>
        <MenuButton isActive={isActive} onClick={handleMenuButton} />
        <MenuArea isActive={isActive} onClose={(): void => setIsActive(false)} />
      </>
    );
  }

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
