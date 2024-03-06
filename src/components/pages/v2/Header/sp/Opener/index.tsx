import classNames from 'classnames';

import styles from '@/components/pages/v2/Header/sp/Opener/index.module.css';

import type { FC } from 'react';

type Props = {
  isOpen: boolean;
  onToggleOpen: () => void;
};

export const Opener: FC<Props> = ({ isOpen, onToggleOpen }) => {
  return (
    // TODO: button要素に変更する
    <div
      className={classNames(styles.openerContainer, { [styles.open]: isOpen })}
      onClick={onToggleOpen}
      aria-expanded={isOpen}
      aria-haspopup
      role='button'
    >
      <span className={styles.line}></span>
      <span className={styles.line}></span>
    </div>
  );
};
