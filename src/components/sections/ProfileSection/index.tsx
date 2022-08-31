import Image from 'next/image';

import { SLIDES } from './slides/slides';
import { SlideTemplate } from './slides/SlideTemplate';
import styles from './style.module.scss';

import { Slide } from '../../Slide';

export const ProfileSection: React.FC = () => {
  return (
    <section className={styles['section-profile']}>
      <div className={styles['profile']}>
        <div className={styles['icon']} onContextMenu={(e): void => e.preventDefault()}>
          <Image
            className={styles['image']}
            style={{ borderRadius: '50%' }}
            src='https://images.microcms-assets.io/assets/a1b28fd0a35f479d93199c3aae3b5a39/f1a0b4aeead74124b1c88bd7de594a2a/my_icon.jpg?q=100'
            alt='my icon'
            width={200}
            height={200}
          />
        </div>
        <div className={styles['introduction']}>
          <p className={styles['paragraph']}>
            情報系大学卒→一部上場IT→ベンチャーSES→チームラボ→ベーシックのSaasエンジニア。
          </p>
          <p className={styles['paragraph']}>何か面白いモノを作ることにモチベ沸いたりします。</p>
          <p className={styles['paragraph']}>趣味： ドラムなどの楽器演奏、音楽ライブ、ジム通い</p>
        </div>
      </div>
      <div className={styles['graph']}>
        <Slide
          slides={SLIDES.map((slide, i) => (
            <SlideTemplate key={i} title={slide.title}>
              {slide.content}
            </SlideTemplate>
          ))}
        />
      </div>
    </section>
  );
};
