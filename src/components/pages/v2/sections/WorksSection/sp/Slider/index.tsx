import classNames from 'classnames';
import { memo, useState } from 'react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '@/components/pages/v2/sections/WorksSection/sp/Slider/index.module.css';

import type { Data } from '@/@types/data';
import type { FC } from 'react';

type Props = {
  id: string;
  data: Data[];
};

const _SliderSp: FC<Props> = ({ id, data }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <Swiper
      id={id}
      direction='vertical'
      className={styles.swiperContainer}
      height={500}
      spaceBetween={16}
      slidesPerView={1}
      grabCursor
      effect='slide'
      centeredSlides
      speed={800}
      loop
      // autoplay={{ delay: 5000 }}
      modules={[Keyboard, Pagination, Navigation, Autoplay, Mousewheel]}
      mousewheel
      // Hack:
      // Swiperのバグで初期状態に参照しているスライドのインデックスがずれるので、
      // 初期化完了後のタイミングで保持している参照インデックスを0にする
      onAfterInit={(_swiper): void => setActiveIndex(0)}
      onSlideChangeTransitionStart={(swiper): void => setActiveIndex(swiper.realIndex)}
    >
      {data.map((data, i) => (
        <SwiperSlide key={i} className={styles.swiperSlide}>
          <div className={classNames(styles.contentContainer, { [styles.inactive]: activeIndex !== i })}>
            <div className={styles['wrapper']}>
              <iframe
                key={i}
                loading='lazy'
                className={classNames(styles.iframe, { [styles.inactive]: activeIndex !== i })}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={data.url}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles.description}>
              <h3 className={styles.title}>{data.title}</h3>
              <p className={styles.text}>{data.caption}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const SliderSp = memo(_SliderSp);
