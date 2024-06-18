import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

import { IconGlobal } from '@/components/icons/Global';
import styles from '@/components/pages/v2/Header/sp/Contents/index.module.css';

import type { FC } from 'react';

export const Contents: FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  return (
    <nav className={styles.contentsContainer} aria-label={t('header.navigation.label') || ''}>
      <ul className={styles.menu}>
        <li className={styles.list}>
          <a href='#about'>{t('header.navigation.about')}</a>
        </li>
        <li className={styles.list}>
          <a href='#articles'>{t('header.navigation.articles')}</a>
        </li>
        <li className={styles.list}>
          <a href='#skill'>{t('header.navigation.skill')}</a>
        </li>
        <li className={styles.list}>
          <a href='#works'>{t('header.navigation.works')}</a>
        </li>
      </ul>
      <div className={styles.locale}>
        <IconGlobal width={14} height={14} />
        <a className={locale === 'ja' ? styles.selected : ''} href='/ja'>
          Ja
        </a>
        <a className={locale === 'en' ? styles.selected : ''} href='/en'>
          En
        </a>
      </div>
    </nav>
  );
};
