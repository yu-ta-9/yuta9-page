import { format } from 'date-fns';
import Image from 'next/image';

import styles from './style.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles['footer-contents']}>
      © {format(new Date(), 'yyyy')} YU-TA-9 Powered by
      {/** TODO: ロゴ調整 */}
      <a
        className={styles['logo']}
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      </a>
    </footer>
  );
};
