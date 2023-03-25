import { useState } from 'react';

import type { FC } from 'react';

import styles from './style.module.scss';

import { useOutsideClick } from '../../../../../hooks/useOutsideClick';

export const LocaleDropdown: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openTooltip = (): void => setIsOpen(true);

  const closeTooltip = (): void => setIsOpen(false);

  const { ref } = useOutsideClick<HTMLDivElement>({
    onOutSideClick: () => isOpen && closeTooltip(),
  });

  return (
    <div className={styles['locale-dropdown']} ref={ref}>
      <button className={styles['button']} onClick={openTooltip}>
        Ja↓
      </button>
      {isOpen && (
        <div role='tooltip' className={styles['dropdown']}>
          <ul className={styles['menu']}>
            <li className={styles['list']}>
              <a href='#'>En</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
