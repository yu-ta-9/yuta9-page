import classNames from 'classnames';

import type { Stack } from '../type';
import type { FC } from 'react';

import styles from './style.module.scss';

import { STACK_DATA } from '../const';

type Props = {
  stack: Stack;
  onMouseOver: (stack: Stack) => void;
};

const getLabel = (stack: Stack): string => {
  switch (stack) {
    case 'frontend':
      return 'Frontend';
    case 'backend':
      return 'Backend';
    case 'infrastructure':
      return 'Infrastructure';
    case 'other':
      return 'Other';
  }
};

export const Bar: FC<Props> = ({ stack, onMouseOver }) => {
  return (
    <div
      className={classNames(styles['bar-container'], styles[`-${stack}`])}
      onMouseOver={(): void => onMouseOver(stack)}
    >
      <div className={styles['contents']}>
        {STACK_DATA[stack].map((data) => (
          <div className={styles['icon']} key={data.key}>
            <img className={styles['image']} src={`icons/${data.key}.svg`} alt={data.label} />
          </div>
        ))}
      </div>

      <div className={styles['label']}>{getLabel(stack)}</div>
    </div>
  );
};
