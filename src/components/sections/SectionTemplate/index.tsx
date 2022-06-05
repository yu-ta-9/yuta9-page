import styles from './style.module.scss';

type Props = {
  children: JSX.Element;
  title?: string;
  bgColor: string;
};

export const SectionTemplate: React.FC<Props> = ({ children, title, bgColor }) => {
  return (
    <section className={styles['section-template']} style={{ backgroundColor: bgColor }}>
      {title && <h2 className={styles['title']}>{title}</h2>}
      {children}
    </section>
  );
};
