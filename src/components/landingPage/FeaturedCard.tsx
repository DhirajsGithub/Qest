import React from 'react';
import styles from './WhyRmax.module.css';
import { ViewDetailsButton } from './ViewDetailsButton';
import { FeatureCardProps } from '../../types/types';

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  backgroundImage,
  bgUp,
  height,
}) => (
  <div  className={styles.featureCard}>
    {icon && <img
      loading="lazy"
      src={icon}
      className={styles.featureIcon}
      alt=""
    />}
    {backgroundImage && bgUp && (
        <img
        loading="lazy"
        src={backgroundImage}
        className={styles.gradientBackground}
        alt=""
      />
    )}
    <h3 className={styles.featureTitle}>{title}</h3>
    <p className={styles.featureDescription}>{description}</p>
    <ViewDetailsButton />
    {backgroundImage && !bgUp && (
        <img
        loading="lazy"
        src={backgroundImage}
        className={styles.gradientBackground}
        alt=""
      />
    )}
  </div>
);