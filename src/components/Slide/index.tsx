import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper';
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
      autoplay={{ delay: 5000 }}
      modules={[Keyboard, Pagination, Navigation, Autoplay]}
    >
      {slides.map((e, i) => (
        <SwiperSlide key={i} className={styles['slide']}>
          {e}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
