import { useState } from 'react';

import type { FC } from 'react';

import { Contents } from './Contents';
import { Opener } from './Opener';
import styles from './style.module.scss';

export const HeaderSp: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen((prev) => !prev);
  };

  const closeOpen = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Opener isOpen={isOpen} onToggleOpen={toggleOpen} />
      {isOpen && (
        <>
          <Contents />
          <div className={styles['overlay-container']} onClick={closeOpen}></div>
        </>
      )}
    </>
  );
};
