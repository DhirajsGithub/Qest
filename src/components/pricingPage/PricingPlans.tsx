import React from 'react';
import styles from './PricingPlans.module.css';
import { PlanCard } from './PlanCard';
import { FeatureRow } from './FeatureRow';
import { planDetails, planFeatures } from '../../assets/data/pricingData';
import { GetStartedButton } from './GetStartedButton';

export const PricingPlans: React.FC = () => {
  return (
    <div className={styles.pricingContainer}>
      <div>
        <h1 className={styles.heading}>Flexible Plans, <br /> Transparent Pricing</h1>
        <div>
          <p className={styles.para1}>Find the Perfect Fit for You</p>
          <p className={styles.para2}>30-day free trial with money-back guarantee.</p>
        </div>
      </div>
       <div className={styles.pricingContent}>
      <h1 className={styles.title}>Compare our plans</h1>
      
      <div className={styles.plansHeader}>
        <div className={`${styles.featuresLabel} ${styles.fixedWidthCol}`}>Features</div>
        {planDetails.map((plan, index) => (
          <div  key={index} className={styles.fixedWidthCol}>
            <PlanCard
           
            name={plan.name}
            price={plan.price}
            description={plan.description}
          />
          </div>
          
        ))}
      </div>

      <div className={styles.featuresList}>
        <div className={styles.categoryTitle}>Basic Management</div>
        
        {planFeatures.map((feature, index) => (
          <FeatureRow key={index} feature={feature} />
        ))}
      </div>

      <div className={styles.actionsContainer}>
        <GetStartedButton />
        <GetStartedButton variant="secondary" />
      </div>
    </div>
    </div>
   
  );
};