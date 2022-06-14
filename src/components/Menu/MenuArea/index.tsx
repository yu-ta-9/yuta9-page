import classNames from 'classnames';
import { Link as ScrollLink } from 'react-scroll';

import styles from './style.module.scss';

import { MENU } from '../menus';

type Props = {
  isActive: boolean;
  onClose: () => void;
};
export const MenuArea: React.FC<Props> = ({ isActive, onClose }) => {
  return (
    <>
      <div className={classNames(styles['menu-area'], { [styles['-active']]: isActive })}>
        <ul className={styles['menu']}>
          {MENU.map((e, i) => {
            return (
              <li key={i} className={styles['item']}>
                <ScrollLink to={e.to} offset={-120} smooth={true} duration={500}>
                  {e.label}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classNames(styles['overlay-wrapper'], { [styles['-active']]: isActive })} onClick={onClose}></div>
    </>
  );
};
