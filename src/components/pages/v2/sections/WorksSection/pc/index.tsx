import classNames from 'classnames';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import type { Data } from '../../../../../../@types/data';
import type { FC } from 'react';

import { SliderPc } from './Slider';
import styles from './style.module.scss';

type Menu = 'work' | 'music' | 'photo';

export const WorksSectionPc: FC = () => {
  const { locale } = useRouter();

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
      <ul className={styles['navbar']}>
        <li className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'work' })}>
          <button type='button' className={styles['button']} onClick={(): void => handleSelectMenu('work')}>
            <span className={styles['label']}>Works</span>
            <span className={styles['number']}>{workData?.length}</span>
          </button>
        </li>

        <div className={styles['connector']}></div>

        <li className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'music' })}>
          <button type='button' className={styles['button']} onClick={(): void => handleSelectMenu('music')}>
            <span className={styles['label']}>Music</span>
            <span className={styles['number']}>{musicData?.length}</span>
          </button>
        </li>

        <div className={styles['connector']}></div>

        <li className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'photo' })}>
          <button type='button' className={styles['button']} onClick={(): void => handleSelectMenu('photo')}>
            <span className={styles['label']}>Photo</span>
            <span className={styles['number']}>0</span>
          </button>
        </li>
      </ul>

      <div className={styles['contents']}>
        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'work' })}>
          {workData && <SliderPc id='works' data={workData} />}
        </div>

        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'music' })}>
          {musicData && <SliderPc id='musics' data={musicData} />}
        </div>

        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'photo' })}>
          <p>Coming soon・・・</p>
        </div>
      </div>
    </div>
  );
};
