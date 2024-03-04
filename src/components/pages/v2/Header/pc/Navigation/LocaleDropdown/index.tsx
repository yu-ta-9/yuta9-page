import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import type { FC } from 'react';

import styles from './style.module.scss';

import { useOutsideClick } from '../../../../../../../hooks/useOutsideClick';
import { IconGlobal } from '../../../../../../icons/Global';

const ORIGIN_MENUS = [
  {
    locale: 'ja',
    label: 'Ja',
  },
  {
    locale: 'en',
    label: 'En',
  },
];

export const LocaleDropdown: FC = () => {
  const { locale } = useRouter();

  const buttonLabel = useMemo(() => {
    switch (locale) {
      case 'ja':
        return 'Ja';
      case 'en':
        return 'En';
      default:
        return 'Ja';
    }
  }, [locale]);

  const menus = useMemo(() => {
    return ORIGIN_MENUS.filter((menu) => menu.locale !== locale);
  }, [locale]);

  const [isOpen, setIsOpen] = useState(false);
  const openTooltip = (): void => setIsOpen(true);
  const closeTooltip = (): void => setIsOpen(false);

  const { ref } = useOutsideClick<HTMLDivElement>({
    onOutSideClick: () => isOpen && closeTooltip(),
  });

  return (
    <div className={styles['locale-dropdown']} ref={ref}>
      <button className={styles['button']} onClick={openTooltip}>
        <IconGlobal width={14} height={14} />
        {buttonLabel}
        <span className={styles['arrow']}></span>
      </button>
      {isOpen && (
        <div role='tooltip' className={styles['dropdown']}>
          <ul className={styles['menu']}>
            {menus.map((menu) => (
              <li key={menu.locale} className={styles['list']}>
                <a href={`/${menu.locale}`}>{menu.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
