import React from 'react';
import styles from './PricingPlans.module.css';
import { IoMdArrowForward } from "react-icons/io";


interface GetStartedButtonProps {
  variant?: 'primary' | 'secondary';
}

export const GetStartedButton: React.FC<GetStartedButtonProps> = ({ variant = 'primary' }) => {
  return (
    <div className={styles.getStartedWrapper}>
      <button 
        className={`${styles.getStartedButton} ${variant === 'secondary' ? styles.secondary : ''}`}
        onClick={() => {}}
        tabIndex={0}
      >
        <p>Get Started</p>
        <IoMdArrowForward className={styles.buttonIcon} />
       
      </button>
      <div className={styles.noCreditCard}>No credit card required</div>
    </div>
  );
};