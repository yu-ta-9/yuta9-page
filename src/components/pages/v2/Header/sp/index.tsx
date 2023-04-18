import { useState } from 'react';

import type { FC } from 'react';

import { Contents } from './Contents';
import { Opener } from './Opener';

export const HeaderSp: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Opener isOpen={isOpen} onToggleOpen={toggleOpen} />
      {isOpen && <Contents />}
    </>
  );
};
