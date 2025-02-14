import classNames from 'classnames';
import { useCallback } from 'react';

import styles from '@/components/common/DivButton/index.module.css';

import type { ComponentProps, FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tabIndex?: number;
  onClick: () => void;
} & ComponentProps<'div'>;

export const DivButton: FC<Props> = ({ children, tabIndex = 0, onClick, ...divProps }) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onClick();
      }
    },
    [onClick],
  );

  return (
    <div
      {...divProps}
      className={classNames(styles.divButton, divProps.className)}
      tabIndex={tabIndex}
      role='button'
      onClick={onClick}
      onKeyDown={handleKeyDown}
    >
      {children}
    </div>
  );
};
