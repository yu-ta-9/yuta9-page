// TODO: 消したい
/* eslint-disable react/jsx-key */
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import Image from 'next/image';
import { Radar } from 'react-chartjs-2';

import styles from './style.module.scss';

import { Slide } from '../../Slide';

export const IntroductionSection: React.FC = () => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  const data = {
    labels: ['Front End', 'Back End', 'Infrastructure'],
    datasets: [
      {
        label: 'Skill',
        data: [4, 3, 2],
        backgroundColor: '#97ffe633',
        borderColor: '#97ffe6',
        borderWidth: 1,
        borderDashOffset: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        padding: 16,
      },
    },
    scales: {
      r: {
        suggestedMin: 0,
        suggestedMax: 5,
        beginAtZero: true,
        ticks: {
          display: false,
          count: 5,
        },
      },
    },
  };

  return (
    <section className={styles['section-introduction']}>
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
        <Slide slides={[<Radar data={data} options={options} />]} />
      </div>
    </section>
  );
};
