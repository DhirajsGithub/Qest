import React from 'react';
import styles from './Pricing.module.css';
import { PricingFeature as PricingFeatureType } from '../../types/types';

const PricingFeature: React.FC<{ feature: PricingFeatureType }> = ({ feature }) => {
  return (
    <div className={styles.featureItem}>
      <img 
        src={feature.icon} 
        alt="" 
        className={styles.featureIcon}
        aria-hidden="true"
      />
      <span className={`${styles.featureText} ${!feature.active ? styles.featureInactive : ''}`}>
        {feature.text}
      </span>
    </div>
  );
};

export default PricingFeature;