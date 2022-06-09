import Image from 'next/image';

import { SLIDES } from './slides/slides';
import { SlideTemplate } from './slides/SlideTemplate';
import styles from './style.module.scss';

import { Slide } from '../../Slide';

export const ProfileSection: React.FC = () => {
  return (
    <section className={styles['section-profile']}>
      <div className={styles['profile']}>
        <div className={styles['icon']}>
          <Image
            className={styles['image']}
            style={{ borderRadius: '50%' }}
            src='/images/img_my_icon_dummy.png'
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
