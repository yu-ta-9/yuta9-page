import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import styles from '@/components/pages/v2/sections/WorksSection/pc/index.module.css';

import type { FC } from 'react';

import { SliderPc } from './Slider';
import { useHomeContext } from '@/hooks/useHomeContext';

type Menu = 'work' | 'music' | 'photo';

export const WorksSectionPc: FC = () => {
  const { t } = useTranslation('common');
  const {
    data: { works, musics },
  } = useHomeContext();

  const [activeMenu, setActiveMenu] = useState<Menu>('work');

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
              <span className={styles.number}>{works.length}</span>
            </button>
          </li>

          <li className={classNames(styles.item, { [styles.focus]: activeMenu === 'music' })}>
            <button type='button' className={styles.button} onClick={(): void => handleSelectMenu('music')}>
              <span className={styles.label}>Music</span>
              <span className={styles.number}>{musics.length}</span>
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
          <SliderPc id='works' data={works} />
        </div>

        <div className={classNames(styles.wrapper, { [styles.show]: activeMenu === 'music' })}>
          <SliderPc id='musics' data={musics} />
        </div>

        <div className={classNames(styles.wrapper, { [styles.show]: activeMenu === 'photo' })}>
          <p>Coming soon・・・</p>
        </div>
      </div>
    </div>
  );
};
