import classNames from 'classnames';

import styles from '@/components/pages/v2/sections/layouts/ContentsLayout/index.module.css';

import type { FC } from 'react';

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
      className={classNames(styles.contentsLayout, theme === 'primary' ? styles.themePrimary : styles.themeSecondary)}
    >
      <div className={styles.wrapper}>
        <h2 className={styles.header}>{heading}</h2>
      </div>
      <div className={styles.contents}>{children}</div>
    </section>
  );
};
