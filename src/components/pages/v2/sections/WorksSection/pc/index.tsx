import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/components/pages/v2/sections/WorksSection/pc/index.module.css';

import type { Data } from '@/@types/data';
import type { FC } from 'react';

import { SliderPc } from './Slider';

type Menu = 'work' | 'music' | 'photo';

export const WorksSectionPc: FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  const [activeMenu, setActiveMenu] = useState<Menu>('work');
  const [workData, setWorkData] = useState<Data[]>();
  const [musicData, setMusicData] = useState<Data[]>();

  useEffect(() => {
    void (async (): Promise<void> => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const workData = await import(`../../../../../../../data/${locale || 'ja'}/works.json`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const musicData = await import(`../../../../../../../data/${locale || 'ja'}/musics.json`);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setWorkData(workData.default);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      setMusicData(musicData.default);
    })();
  }, [locale]);

  const handleSelectMenu = (menu: Menu): void => {
    setActiveMenu(menu);
  };

  return (
    <div className={styles.sectionWorks}>
      <nav aria-label={t('works.navigation.label') || ''}>
        <ul className={styles.navbar}>
          <li className={classNames(styles.item, { [styles.focus]: activeMenu === 'work' })}>
            <button type='button' className={styles.button} onClick={(): void => handleSelectMenu('work')}>
              <span className={styles.label}>Works</span>
              <span className={styles.number}>{workData?.length}</span>
            </button>
          </li>

          <li className={classNames(styles.item, { [styles.focus]: activeMenu === 'music' })}>
            <button type='button' className={styles.button} onClick={(): void => handleSelectMenu('music')}>
              <span className={styles.label}>Music</span>
              <span className={styles.number}>{musicData?.length}</span>
            </button>
          </li>

          <li className={classNames(styles.item, { [styles.focus]: activeMenu === 'photo' })}>
            <button type='button' className={styles.button} onClick={(): void => handleSelectMenu('photo')}>
              <span className={styles.label}>Photo</span>
              <span className={styles.number}>0</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles.contents}>
        <div className={classNames(styles.wrapper, { [styles.show]: activeMenu === 'work' })}>
          {workData && <SliderPc id='works' data={workData} />}
        </div>

        <div className={classNames(styles.wrapper, { [styles.show]: activeMenu === 'music' })}>
          {musicData && <SliderPc id='musics' data={musicData} />}
        </div>

        <div className={classNames(styles.wrapper, { [styles.show]: activeMenu === 'photo' })}>
          <p>Coming soon・・・</p>
        </div>
      </div>
    </div>
  );
};
