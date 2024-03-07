import { useTranslation } from 'next-i18next';

import { IconGithub } from '@/components/icons/Github';
import { IconQiita } from '@/components/icons/Qiita';
import { IconStorybook } from '@/components/icons/Storybook';
import { IconTwitter } from '@/components/icons/Twitter';
import { IconZenn } from '@/components/icons/Zenn';
import styles from '@/components/pages/v2/sections/AboutSection/index.module.css';

import type { FC } from 'react';

export const AboutSection: FC = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className={styles.aboutWrapper}>
        <img
          className={styles.image}
          src='/images/profile.jpg'
          alt='profile'
          // MEMO: 画像保存を防ぐ
          onSelect={(): boolean => {
            return false;
          }}
          onMouseDown={(): boolean => {
            return false;
          }}
          onContextMenu={(): boolean => {
            return false;
          }}
        />
        {/* MEMO: 画像保存を防ぐ */}
        <div className={styles.dummy}></div>

        <div className={styles.about}>
          <h3 className={styles.title}>Profile</h3>
          <p className={styles.description} dangerouslySetInnerHTML={{ __html: t('top.about.introduction') }}></p>
          <div className={styles.links}>
            <a href='https://twitter.com/yuta9_drumming' target='_blank' rel='noreferrer'>
              <IconTwitter width={24} height={24} />
            </a>
            <a href='https://github.com/yu-ta-9' target='_blank' rel='noreferrer'>
              <IconGithub width={24} height={24} />
            </a>
            <a href='https://zenn.dev/yu_ta_9' target='_blank' rel='noreferrer'>
              <IconZenn width={24} height={24} />
            </a>
            <a href='https://qiita.com/YU-TA-9' target='_blank' rel='noreferrer'>
              <IconQiita width={24} height={24} />
            </a>
            <a href='https://storybook.yu-ta-9.com' target='_blank' rel='noreferrer'>
              <IconStorybook width={24} height={24} color='#fff' />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.certificationWrapper}>
        <h3 className={styles.title}>Certification</h3>
        <ul className={styles.list}>
          <li className={styles.item}>AWS Certified Solutions Architect - Associate (SAA-C02) (since 2020/11/19)</li>
          <li className={styles.item}>AWS Certified Developer - Associate (DVA-C01) (since 2021/4/6)</li>
          <li className={styles.item}>AWS Certified SysOps Administrator – Associate (SOA-C01) (since 2021/4/22)</li>
          <li className={styles.item}>TOEIC - 680</li>
        </ul>
      </div>
    </>
  );
};
