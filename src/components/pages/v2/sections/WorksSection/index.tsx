import classNames from 'classnames';
import { useState } from 'react';

import type { FC } from 'react';

import { Slider } from './Slider';
import styles from './style.module.scss';

import musicData from '../../../../../../data/musics.json';
import workData from '../../../../../../data/works.json';

type Menu = 'work' | 'music' | 'photo';

export const WorksSection: FC = () => {
  const [activeMenu, setActiveMenu] = useState<Menu>('work');

  const handleSelectMenu = (menu: Menu): void => {
    setActiveMenu(menu);
  };

  return (
    <div className={styles['section-works']}>
      <ul className={styles['navbar']}>
        <li
          className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'work' })}
          role='button'
          onClick={(): void => handleSelectMenu('work')}
        >
          <span className={styles['label']}>Works</span>
          <span className={styles['number']}>{workData.length}</span>
        </li>

        <div className={styles['connector']}></div>

        <li
          className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'music' })}
          role='button'
          onClick={(): void => handleSelectMenu('music')}
        >
          <span className={styles['label']}>Music</span>
          <span className={styles['number']}>{musicData.length}</span>
        </li>

        <div className={styles['connector']}></div>

        <li
          className={classNames(styles['item'], { [styles['-focus']]: activeMenu === 'photo' })}
          role='button'
          onClick={(): void => handleSelectMenu('photo')}
        >
          <span className={styles['label']}>Photo</span>
          <span className={styles['number']}>0</span>
        </li>
      </ul>

      <div className={styles['contents']}>
        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'work' })}>
          <Slider id='works' data={workData} />
        </div>

        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'music' })}>
          <Slider id='musics' data={musicData} />
        </div>

        <div className={classNames(styles['wrapper'], { [styles['-show']]: activeMenu === 'photo' })}>
          <p>Coming soon・・・</p>
        </div>
      </div>
    </div>
  );
};
