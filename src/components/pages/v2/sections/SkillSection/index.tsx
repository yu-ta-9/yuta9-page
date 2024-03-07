import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Bar } from '@/components/pages/v2/sections/SkillSection/Bar';
import { STACK_DATA } from '@/components/pages/v2/sections/SkillSection/const';
import styles from '@/components/pages/v2/sections/SkillSection/index.module.css';

import type { Stack } from './type';
import type { FC } from 'react';

export const SkillSection: FC = () => {
  const { t } = useTranslation('common');

  // MEMO: https://github.com/vercel/next.js/discussions/17443#discussioncomment-637879
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const [hoverStack, setHoverStack] = useState<Stack>();

  const stackDescription = useMemo(
    () =>
      hoverStack !== undefined ? STACK_DATA[hoverStack].map((data) => data.label).join(' / ') : t('top.skill.noSelect'),
    [t, hoverStack],
  );

  const handleMouseOver = (stack: Stack): void => {
    setHoverStack(stack);
  };

  return (
    <div className={styles.sectionSkill}>
      <div className={styles.wrapper}>
        <div className={styles.graph}>
          <div className={classNames(styles.axis, styles.origin)}></div>
          <div className={classNames(styles.axis, styles.first)}></div>
          <div className={classNames(styles.axis, styles.second)}></div>
          <div className={classNames(styles.axis, styles.third)}></div>

          <Bar stack='frontend' onMouseOver={handleMouseOver} />

          <Bar stack='backend' onMouseOver={handleMouseOver} />

          <Bar stack='infrastructure' onMouseOver={handleMouseOver} />

          <Bar stack='other' onMouseOver={handleMouseOver} />
        </div>
      </div>
      {mounted && <div className={styles.description}>{stackDescription}</div>}
    </div>
  );
};
