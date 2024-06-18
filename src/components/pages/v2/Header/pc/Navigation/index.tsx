import { useTranslation } from 'react-i18next';

import styles from '@/components/pages/v2/Header/pc/Navigation/index.module.css';
import { LocaleDropdown } from '@/components/pages/v2/Header/pc/Navigation/LocaleDropdown';

import type { FC } from 'react';

export const Navigation: FC = () => {
  const { t } = useTranslation('common');

  return (
    <nav className={styles.navigationContainer} aria-label={t('header.navigation.label') || ''}>
      <ul className={styles.menu}>
        <li className={styles.list}>
          <a className={styles.text} href='#about' tabIndex={0}>
            {t('header.navigation.about')}
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.text} href='#articles' tabIndex={0}>
            {t('header.navigation.articles')}
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.text} href='#skill' tabIndex={0}>
            {t('header.navigation.skill')}
          </a>
        </li>
        <li className={styles.list}>
          <a className={styles.text} href='#works' tabIndex={0}>
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
