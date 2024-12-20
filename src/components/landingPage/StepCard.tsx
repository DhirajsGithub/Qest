import React from 'react';
import styles from './Onboarding.module.css';
import { StepCardProps } from '../../types/types';

export const StepCard: React.FC<StepCardProps> = ({ number, image, title, description }) => {
  return (
    <div className={styles.stepContainer}>
      <div className={styles.stepNumber}>{number}</div>
      <div className={styles.stepContent}>
        <img
          loading="lazy"
          src={image}
          className={styles.stepImage}
          alt={`Step ${number} illustration - ${title}`}
        />
        <div className={styles.stepInfo}>
          <h3 className={styles.stepTitle}>{title}</h3>
          <p className={styles.stepDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
};