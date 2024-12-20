import React from 'react';
import styles from './WhyRmax.module.css';

export const ViewDetailsButton: React.FC = () => (
  <div className={styles.viewDetailsWrapper}>
    <span className={styles.viewDetailsText}>View details</span>
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb6ef9cb36a7d57fa12aa40864e805afca6a22dc71688e707b6a0d8091ad37a?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975"
      className={styles.viewDetailsIcon}
      alt=""
    />
  </div>
);