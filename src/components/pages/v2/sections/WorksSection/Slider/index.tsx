import classNames from 'classnames';
import { memo, useState } from 'react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { Data } from '../../../../../../@types/data';
import type { FC } from 'react';

import styles from './style.module.scss';

type Props = {
  data: Data[];
};

const _Slider: FC<Props> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number>();

  return (
    <Swiper
      className={styles['swiper-container']}
      spaceBetween={10}
      slidesPerView={2}
      grabCursor
      effect='slide'
      centeredSlides
      speed={800}
      loop
      onSwiper={(swiper): void => console.log(swiper)}
      // autoplay={{ delay: 5000 }}
      modules={[Keyboard, Pagination, Navigation, Autoplay]}
      mousewheel
      onSlideChangeTransitionStart={(swiper): void => setActiveIndex(swiper.realIndex)}
    >
      {data.map((data, i) => (
        <SwiperSlide key={i} className={styles['swiper-slide']}>
          <div className={classNames(styles['content-container'], { [styles['-inactive']]: activeIndex !== i })}>
            <div className={styles['wrapper']}>
              <iframe
                key={i}
                className={styles['iframe']}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={data.url}
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              ></iframe>
            </div>
            <div className={styles['description']}>
              <h3 className={styles['title']}>{data.title}</h3>
              <p className={styles['text']}>{data.caption}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export const Slider = memo(_Slider);
