import styles from './style.module.scss';

type Props = {
  children: JSX.Element;
  title: string;
};

export const SlideTemplate: React.FC<Props> = ({ children, title }) => {
  return (
    <div className={styles['slide-template']}>
      <h3 className={styles['title']}>{title}</h3>
      <div className={styles['content']}>{children}</div>
    </div>
  );
};
