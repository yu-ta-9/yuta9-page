import styles from './style.module.scss';

import data from '../../../../data/ja/musics.json';
import { Slide } from '../../Slide';

export const MusicSection: React.FC = () => {
  return (
    <section className={styles['section-music']}>
      <Slide
        slides={data.map((e, i) => (
          <iframe
            key={i}
            width='560'
            height='315'
            src={e.url}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
          ></iframe>
        ))}
      ></Slide>
    </section>
  );
};
