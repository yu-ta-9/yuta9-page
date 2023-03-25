import Image from 'next/image';

import styles from './style.module.scss';

import { useDevice } from '../../../hooks/useDevice';

export const TopSection: React.FC = () => {
  const isSp = useDevice();

  return (
    <section className={styles['section-top']}>
      <div className={styles['wrapper']}>
        <h1 className={styles['heading']}>YU-TA-9</h1>
        <div className={styles['bg']}>
          <Image
            style={{ zIndex: -1 }}
            src={isSp ? '/images/img_sp_hp_top.jpg' : '/images/img_hp_top.jpg'}
            alt='top image'
            layout='fill'
            objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
};
