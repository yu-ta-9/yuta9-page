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
        <p className={styles['introduction']}>
          情報系大学を卒業後、一部上場IT企業、ベンチャーSES企業を経て現在、自社開発企業のWEBエンジニアとして従事。
          <br />
          社会に爪痕を残せるWEBサービスを創造するため、日々フルスタックに色々な技術を学んでいる。 <br />
          趣味： ドラムなどの楽器演奏、音楽ライブ、ジム通い
        </p>
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
