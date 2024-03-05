import { useTranslation } from 'react-i18next';

import type { FC } from 'react';

import { LocaleDropdown } from './LocaleDropdown';
import styles from './style.module.scss';

export const Navigation: FC = () => {
  const { t } = useTranslation('common');

  return (
    <nav className={styles['navigation-container']} aria-label={t('header.navigation.label') || ''}>
      <ul className={styles['menu']}>
        <li className={styles['list']}>
          <a className={styles['text']} href='#about' tabIndex={0}>
            {t('header.navigation.about')}
          </a>
        </li>
        <li className={styles['list']}>
          <a className={styles['text']} href='#skill' tabIndex={0}>
            {t('header.navigation.skill')}
          </a>
        </li>
        <li className={styles['list']}>
          <a className={styles['text']} href='#works' tabIndex={0}>
            {t('header.navigation.works')}
          </a>
        </li>
        <li>
          <LocaleDropdown />
        </li>
      </ul>
    </nav>
  );
};
