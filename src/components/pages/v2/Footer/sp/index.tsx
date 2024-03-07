import { Author } from '@/components/pages/v2/Footer/common/Author';
import { Links } from '@/components/pages/v2/Footer/common/Links';
import styles from '@/components/pages/v2/Footer/sp/index.module.css';

import type { FC } from 'react';

export const FooterSp: FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.left}>
        <h2 className={styles.text}>
          YU-TA-9
          <br />
          portfolio site
        </h2>

        <Links />

        <div className={styles.wrapper}>
          <small className={styles.author}>© YU-TA-9</small>

          <Author />
        </div>
      </div>

      <div className={styles.right}>
        <a className={styles.text} href='#'>
          ← PAGE TOP
        </a>
      </div>
    </footer>
  );
};
