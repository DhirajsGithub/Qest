import React from 'react';
import styles from './LandingPageHeadline.module.css';

interface LandingPageHeadlineProps {
  className?: string;
}

export const LandingPageHeadline: React.FC<LandingPageHeadlineProps> = ({ className }) => {
  return (
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
  );
};

export default LandingPageHeadline;