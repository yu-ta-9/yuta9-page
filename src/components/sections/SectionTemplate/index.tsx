import { Element } from 'react-scroll';

import styles from './style.module.scss';

type Props = {
  children: JSX.Element;
  section: string;
  title?: string;
  bgColor?: string;
};

export const SectionTemplate: React.FC<Props> = ({ children, section, title, bgColor }) => {
  return (
    <Element
      name={section}
      className={styles['section-template']}
      style={{ backgroundColor: bgColor || 'transparent' }}
    >
      {title && <h2 className={styles['title']}>{title}</h2>}
      {children}
    </Element>
  );
};
