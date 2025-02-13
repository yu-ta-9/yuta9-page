import { useState } from 'react';

import { Contents } from '@/components/pages/v2/Header/sp/Contents';
import styles from '@/components/pages/v2/Header/sp/index.module.css';
import { Opener } from '@/components/pages/v2/Header/sp/Opener';

import type { FC } from 'react';

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
          <Contents onHeaderClose={closeOpen} />
          <div className={styles.overlayContainer} onClick={closeOpen} />
        </>
      )}
    </>
  );
};
