import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

import type { ChartOptions, ChartData } from 'chart.js';

import variables from '../../../../../../styles/variables.module.scss';

export const SkillSlide: React.FC = () => {
  ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

  const data: ChartData<'radar'> = {
    labels: ['Front End', 'Back End', 'Infrastructure'],
    datasets: [
      {
        label: 'Skill',
        data: [4, 3, 2],
        backgroundColor: `${variables.colorTextBlack}33`,
        borderColor: variables.colorTextBlack,
        borderWidth: 1,
        borderDashOffset: 1,
      },
    ],
  };

  const options: ChartOptions<'radar'> = {
    responsive: true,
    layout: {
      padding: {
        bottom: -20,
      },
    },
    plugins: {
      legend: {
        display: false,
        onClick: (): void => {
          return;
        },
        labels: {
          font: {
            size: 16,
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
          color: 'red',
        },
        pointLabels: {
          font: {
            size: 16,
          },
        },
      },
    },
  };

  // TODO: 設計検討
  return (
    <div style={{ maxHeight: '400px' }}>
      <Radar height={400} width={400} data={data} options={options} />{' '}
    </div>
  );
};
