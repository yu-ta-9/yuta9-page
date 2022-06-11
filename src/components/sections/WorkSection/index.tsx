import styles from './style.module.scss';

import data from '../../../../data/works.json';
import { Slide } from '../../Slide';

export const WorkSection: React.FC = () => {
  return (
    <section id='work' className={styles['section-work']}>
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
