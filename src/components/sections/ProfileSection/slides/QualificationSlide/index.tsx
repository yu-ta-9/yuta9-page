import classNames from 'classnames';

import styles from './style.module.scss';

type List = {
  name: JSX.Element;
  icon: string;
};

const LISTS: List[] = [
  {
    name: (
      <>
        AWS Certified Solutions Architect - Associate (SAA-C02)
        <br />
        (since 2020/11/19)
      </>
    ),
    icon: 'aws',
  },
  {
    name: (
      <>
        AWS Certified Developer - Associate (DVA-C01)
        <br />
        (since 2021/4/6)
      </>
    ),
    icon: 'aws',
  },
  {
    name: (
      <>
        AWS Certified SysOps Administrator – Associate (SOA-C01)
        <br />
        (since 2021/4/22)
      </>
    ),
    icon: 'aws',
  },
  {
    name: <>TOEIC - 680</>,
    icon: 'toeic',
  },
];

export const QualificationSlide: React.FC = () => {
  return (
    <ul className={styles['slide-qualification']}>
      {LISTS.map((e, i) => (
        <li key={i} className={classNames(styles['list'], styles[`-${e.icon}`])}>
          {e.name}
        </li>
      ))}
    </ul>
  );
};
