import React from 'react';
import styles from './Pricing.module.css';
import PricingFeature from './PricingFeature';
import { PricingCardProps } from '../../types/types';

export const PricingCard: React.FC<PricingCardProps> = ({ plan, isYearly }) => {
  const price = isYearly ? plan.price * 0.75 : plan.price;

  return (
    <div className={styles.pricingCard}>
      <div className={styles.cardHeader}>
        <div className={styles.planType}>{plan.type}</div>
        <div className={styles.priceContainer}>
          <span className={styles.currency}>$</span>
          <span className={styles.price}>{price}</span>
          <span className={styles.period}>/{plan.billingPeriod}</span>
        </div>
        <div className={styles.billingFrequency}>{plan.billingFrequency}</div>
      </div>

      <div className={styles.featuresList}>
        {plan.features.map((feature, index) => (
          <PricingFeature key={index} feature={feature} />
        ))}
      </div>

      <button className={styles.startButton}>
        Get Started
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/07bc996639da81c44c76520ee8a84955d7d3bd7bf7b93918e2e170a1957212bd?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975" alt="" className={styles.buttonIcon} aria-hidden="true" />
      </button>
      
      <p className={styles.noCreditCard}>No credit card required</p>
    </div>
  );
};