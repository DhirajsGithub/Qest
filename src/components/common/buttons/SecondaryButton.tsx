import * as React from 'react';
import styles from './SecondaryButton.module.css';

interface SecondaryButtonProps {
  name: string;
  onClick: () => void;
}

export const SecondaryButton: React.FC<SecondaryButtonProps> = ({ 
  name, 
  onClick 
}) => {
  return (
    <button 
      className={styles.secondaryButton}
      onClick={onClick}
      type="button"
      role="button"
      aria-label={name}
    >
      {name}
    </button>
  );
};