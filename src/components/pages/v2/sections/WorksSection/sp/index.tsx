import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import type { Data } from '../../../../../../@types/data';
import type { FC } from 'react';

import { SliderSp } from './Slider';
import styles from './style.module.scss';

type Menu = 'work' | 'music' | 'photo';

export const WorksSectionSp: FC = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('common');

  const [activeMenu, setActiveMenu] = useState<Menu>('work');
  const [workData, setWorkData] = useState<Data[]>();
  const [musicData, setMusicData] = useState<Data[]>();

  useEffect(() => {
    (async (): Promise<void> => {
      const workData = await import(`../../../../../../../data/${locale || 'ja'}/works.json`);
      const musicData = await import(`../../../../../../../data/${locale || 'ja'}/musics.json`);
      setWorkData(workData.default);
      setMusicData(musicData.default);
    })();
  }, [locale]);

  const handleSelectMenu = (menu: Menu): void => {
    setActiveMenu(menu);
  };

  return (
    <div className={styles['section-works']}>
      {/* TODO: refactor */}
      <nav aria-label={t('works.navigation.label') || ''}>
        <ul className={styles['navbar']}>
          <li
            className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'work' })}
            role='button'
            onClick={(): void => handleSelectMenu('work')}
          >
            <button
              className={classNames(styles['button'], { [styles['-focus']]: activeMenu === 'work' })}
              onClick={(): void => handleSelectMenu('work')}
            >
              <span className={styles['label']}>Works</span>
              <span className={styles['number']}>{workData?.length}</span>
            </button>
          </li>

          <li className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'music' })}>
            <button
              className={classNames(styles['button'], { [styles['-focus']]: activeMenu === 'music' })}
              onClick={(): void => handleSelectMenu('music')}
            >
              <span className={styles['label']}>Music</span>
              <span className={styles['number']}>{musicData?.length}</span>
            </button>
          </li>

          <li className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'photo' })}>
            <button
              className={classNames(styles['button'], { [styles['-focus']]: activeMenu === 'photo' })}
              onClick={(): void => handleSelectMenu('photo')}
            >
              <span className={styles['label']}>Photo</span>
              <span className={styles['number']}>0</span>
            </button>
          </li>
        </ul>
      </nav>

      <div className={styles['contents']}>
        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'work' })}>
          {workData && <SliderSp id='works' data={workData} />}
        </div>

        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'music' })}>
          {musicData && <SliderSp id='musics' data={musicData} />}
        </div>

        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'photo' })}>
          <p>Coming soon・・・</p>
        </div>
      </div>
    </div>
  );
};
