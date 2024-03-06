import classNames from 'classnames';

import styles from '@/components/pages/v2/sections/SkillSection/Bar/index.module.css';
import { STACK_DATA } from '@/components/pages/v2/sections/SkillSection/const';

import type { Stack } from '@/components/pages/v2/sections/SkillSection/type';
import type { FC } from 'react';

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

const getStackClassName = (stack: Stack): string => {
  switch (stack) {
    case 'frontend':
      return styles.frontend;
    case 'backend':
      return styles.backend;
    case 'infrastructure':
      return styles.infrastructure;
    case 'other':
      return styles.other;
  }
};

export const Bar: FC<Props> = ({ stack, onMouseOver }) => {
  return (
    <div
      className={classNames(styles.barContainer, getStackClassName(stack))}
      onMouseOver={(): void => onMouseOver(stack)}
    >
      <div className={styles.contents}>
        {STACK_DATA[stack].map((data) => (
          <div className={styles.icon} key={data.key}>
            <img className={styles.image} src={`icons/${data.key}.svg`} alt={data.label} />
          </div>
        ))}
      </div>

      <div className={styles.label}>{getLabel(stack)}</div>
    </div>
  );
};
