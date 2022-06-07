import { useEffect, useState } from 'react';

import styles from './style.module.scss';

import { client } from '../../../libs/client';
import { Slide } from '../../Slide';

type Data = {
  title: string;
  url: string;
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

export const WorkSection: React.FC = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await client.getList({ endpoint: 'works' });
      setData(data.contents);
    })();
  }, []);

  return (
    <section id='work' className={styles['section-work']}>
      <Slide
        slides={data.map((e) => (
          <iframe
            key={e.id}
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
