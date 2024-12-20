import React from 'react';
import styles from './PrimaryButton.module.css';

interface PrimaryButtonProps {
  name: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  name,
  onClick,
  icon,
  className = '',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  return (
    <button
      className={`${styles.button} ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel || name}
    >
     {name}
      {icon && <span className={styles.icon}>{icon}</span>}
     
    </button>
  );
};

