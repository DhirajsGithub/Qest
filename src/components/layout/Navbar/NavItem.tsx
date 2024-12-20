import React from 'react';
import { IconType } from 'react-icons';
import styles from './NavItem.module.css';

interface NavItemProps {
  name: string;
  icon?: IconType;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  name,
  icon: Icon,
  onClick
}) => {
  return (
    <div 
      className={styles.buttonMenuMegaMenu}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className={styles.features}>{name}</div>
      {Icon && (
        <div className={styles.svgMargin}>
          <div className={styles.svg}>
            <Icon />
          </div>
        </div>
      )}
    </div>
  );
};