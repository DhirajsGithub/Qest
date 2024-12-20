import React from 'react';
import styles from './Pricing.module.css';
import { PricingToggleProps } from '../../types/types';

export const PricingToggle: React.FC<PricingToggleProps> = ({ isYearly, onToggle }) => {
  return (
    <div className={styles.toggleContainer}>
      <span className={styles.toggleLabel}>Monthly</span>
      <button 
        className={styles.toggleButton} 
        onClick={onToggle}
        role="switch"
        aria-checked={isYearly}
      >
        <div className={`${styles.toggleKnob} ${isYearly ? styles.toggleKnobActive : ''}`} />
      </button>
      <span className={styles.toggleLabel}>Yearly</span>
      <div className={styles.savingsTag}>Save 25%</div>
    </div>
  );
};