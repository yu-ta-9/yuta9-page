import classNames from 'classnames';

import type { FC } from 'react';

import styles from './style.module.scss';

type Props = {
  id: string;
  heading: string;
  children: JSX.Element;
  theme: 'primary' | 'secondary';
};

export const ContentsLayout: FC<Props> = ({ id, heading, children, theme = 'primary' }) => {
  return (
    <section
      id={id}
      className={classNames(
        styles['contents-layout'],
        styles[`${theme === 'primary' ? '-theme-primary' : '-theme-secondary'}`],
      )}
    >
      <div className={styles['wrapper']}>
        <h2 className={styles['header']}>{heading}</h2>
      </div>
      <div className={styles['contents']}>{children}</div>
    </section>
  );
};
