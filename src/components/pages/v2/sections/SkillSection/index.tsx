import classNames from 'classnames';
import { useState } from 'react';

import type { FC } from 'react';

import styles from './style.module.scss';

type Stack = 'frontend' | 'backend' | 'infrastructure' | 'other';

// TODO: 更新する
const getDescription = (stack: Stack): string => {
  switch (stack) {
    case 'frontend':
      return 'HTML / CSS / JavaScript / TypeScript / accessibility';
    case 'backend':
      return 'Java / Ruby / Ruby on Rails';
    case 'infrastructure':
      return 'AWS / Terraform';
    case 'other':
      return 'git / Slack / Sentry / Rollbar / Google Tools / Notion / Backlog / Asana';
  }
};

export const SkillSection: FC = () => {
  const [hoverStack, setHoverStack] = useState<Stack>();

  const handleMouseOver = (stack: Stack): void => {
    setHoverStack(stack);
  };

  return (
    <div className={styles['section-skill']}>
      <div className={styles['wrapper']}>
        <div className={styles['graph']}>
          <div className={classNames(styles['axis'], styles['-origin'])}></div>
          <div className={classNames(styles['axis'], styles['-first'])}></div>
          <div className={classNames(styles['axis'], styles['-second'])}></div>
          <div className={classNames(styles['axis'], styles['-third'])}></div>
          <div className={styles['frontend']} onMouseOver={(): void => handleMouseOver('frontend')}>
            Frontend
          </div>
          <div className={styles['backend']} onMouseOver={(): void => handleMouseOver('backend')}>
            Backend
          </div>
          <div className={styles['infrastructure']} onMouseOver={(): void => handleMouseOver('infrastructure')}>
            Infrastructure
          </div>
          <div className={styles['other']} onMouseOver={(): void => handleMouseOver('other')}>
            Other
          </div>
        </div>
      </div>

      {hoverStack !== undefined && <div className={styles['description']}>{getDescription(hoverStack)}</div>}
    </div>
  );
};
