import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { IconGlobal } from '@/components/icons/Global';
import styles from '@/components/pages/v2/Header/pc/Navigation/LocaleDropdown/index.module.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';

import type { FC } from 'react';

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
  const { t } = useTranslation('common');

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
    <div className={styles.localeDropdown} ref={ref}>
      <button
        className={styles.button}
        onClick={openTooltip}
        aria-label={t('header.navigation.localButtonLabel') || ''}
        aria-expanded={isOpen}
        aria-haspopup
      >
        <IconGlobal width={14} height={14} />
        {buttonLabel}
        <span className={styles.arrow}></span>
      </button>

      {isOpen && (
        <div role='tooltip' className={styles.dropdown}>
          <ul className={styles.menu}>
            {menus.map((menu) => (
              <li key={menu.locale} className={styles.list}>
                <a className={styles.item} href={`/${menu.locale}`}>
                  {menu.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
