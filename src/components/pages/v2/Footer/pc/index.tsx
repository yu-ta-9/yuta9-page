import { Author } from '@/components/pages/v2/Footer/common/Author';
import { Links } from '@/components/pages/v2/Footer/common/Links';
import styles from '@/components/pages/v2/Footer/pc/index.module.css';

import type { FC } from 'react';

export const FooterPc: FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.heading}>
        <h2 className={styles.text}>
          YU-TA-9
          <br />
          portfolio site
        </h2>

        <small className={styles.author}>© YU-TA-9</small>
      </div>

      <div className={styles.menu}>
        <Links />

        <Author />
      </div>

      <div className={styles.go}>
        <a className={styles.text} href='#'>
          ← PAGE TOP
        </a>
      </div>
    </footer>
  );
};
