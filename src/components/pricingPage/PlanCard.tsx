import React from 'react';
import styles from './PricingPlans.module.css';

interface PlanCardProps {
  name: string;
  price: string;
  description: string;
}

export const PlanCard: React.FC<PlanCardProps> = ({ name, price, description }) => {
  return (
    <div className={styles.planCard}>
      <div className={styles.planName}>{name}</div>
      <div className={styles.planPrice}>
        {price}, {description}
      </div>
    </div>
  );
};