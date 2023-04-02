import type { FC } from 'react';

import styles from './style.module.scss';

import { IconGithub } from '../../../../icons/Github';
import { IconQiita } from '../../../../icons/Qiita';
import { IconTwitter } from '../../../../icons/Twitter';
import { IconZenn } from '../../../../icons/Zenn';

export const AboutSection: FC = () => {
  return (
    <>
      <div className={styles['about-wrapper']}>
        <img className={styles['image']} src='/images/sample_profile.png' alt='profile' />

        <div className={styles['about']}>
          <section className={styles['section']}>
            <h3 className={styles['title']}>Profile</h3>
            <p className={styles['description']}>
              はじめまして、私はエンジニアの〇〇です。主に〇〇の開発に携わっており、〇〇を得意としています。趣味は〇〇で、〇〇にも興味があります。どうぞよろしくお願いいたします。ここにテキストが入ります。
            </p>
            <div className={styles['links']}>
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
            </div>
          </section>
        </div>
      </div>

      <div className={styles['certification-wrapper']}>
        <h3 className={styles['title']}>Certification</h3>
        <ul className={styles['list']}>
          <li className={styles['item']}>AWS Certified Solutions Architect - Associate (SAA-C02) (since 2020/11/19)</li>
          <li className={styles['item']}>AWS Certified Developer - Associate (DVA-C01) (since 2021/4/6)</li>
          <li className={styles['item']}>AWS Certified SysOps Administrator – Associate (SOA-C01) (since 2021/4/22)</li>
          <li className={styles['item']}>TOEIC - 680</li>
        </ul>
      </div>
    </>
  );
};
