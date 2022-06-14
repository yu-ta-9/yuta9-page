import classNames from 'classnames';

import styles from './style.module.scss';

type Props = {
  isActive: boolean;
  onClick: () => void;
};

export const MenuButton: React.FC<Props> = ({ isActive, onClick }) => {
  return (
    <button className={styles['menu-button']} onClick={onClick}>
      <span className={classNames(styles['bar'], { [styles['-active']]: isActive })}></span>
      <span className={classNames(styles['bar'], { [styles['-active']]: isActive })}></span>
      <span className={classNames(styles['bar'], { [styles['-active']]: isActive })}></span>
    </button>
  );
};
