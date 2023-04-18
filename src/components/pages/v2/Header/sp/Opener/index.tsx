import classNames from 'classnames';

import type { FC } from 'react';

import styles from './style.module.scss';

type Props = {
  isOpen: boolean;
  onToggleOpen: () => void;
};
export const Opener: FC<Props> = ({ isOpen, onToggleOpen }) => {
  return (
    <div className={classNames(styles['opener-container'], { [styles['-open']]: isOpen })} onClick={onToggleOpen}>
      <span className={styles['line']}></span>
      <span className={styles['line']}></span>
    </div>
  );
};
