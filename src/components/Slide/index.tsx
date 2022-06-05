import { Keyboard, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from './style.module.scss';

type Props = {
  slides: JSX.Element[];
};

export const Slide: React.FC<Props> = ({ slides }) => {
  return (
    <Swiper
      className={styles['slide-body']}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={(_swiper): void => console.log('slide change')}
      onSwiper={(swiper): void => console.log(swiper)}
      modules={[Keyboard, Pagination, Navigation]}
    >
      {slides.map((e, i) => (
        <SwiperSlide key={i} className={styles['slide']}>
          {e}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
