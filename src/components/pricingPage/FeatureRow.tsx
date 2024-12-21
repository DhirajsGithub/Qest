import React from 'react';
import styles from './PricingPlans.module.css';
import { PlanFeature } from '../../types/types';

interface FeatureRowProps {
  feature: PlanFeature;
}

export const FeatureRow: React.FC<FeatureRowProps> = ({ feature }) => {
  return (
    <div className={styles.featureRow}>
      <div className={styles.featureName}>{feature.name}</div>
      <div className={styles.featureValue}>{feature.starter}</div>
      <div className={styles.featureValue}>{feature.premium}</div>
    </div>
  );
};