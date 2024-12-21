import React from 'react';
import styles from './LandingPageHeadline.module.css';

interface LandingPageHeadlineProps {
  className?: string;
}

export const LandingPageHeadline: React.FC<LandingPageHeadlineProps> = ({ className }) => {
  return (
    <div className={styles.headlineWrapper}>
       <div className={`${styles.heading1} ${className || ''}`}>
      <div className={styles.maximizeYourImpact}>
        Maximize Your Impact
      </div>
      <div className={styles.container}>
        Business with{' '}
        <span className={styles.brandR}>R</span>
        <span className={styles.brandMax}>Max</span>
      </div>
    </div>
    <p>Enhance your business with Rmax's all-in-one platform—streamlining client engagement, automating workflows, and fueling growth.</p>
    </div>
   
  );
};

export default LandingPageHeadline;