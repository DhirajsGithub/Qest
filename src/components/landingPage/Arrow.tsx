import React from 'react';
import arrowSvg from "../../assets/icons/arrow.svg"
import styles from './Onboarding.module.css';


export const Arrow: React.FC = () => {
  return (
    <div className={styles.arrow}>
        <img src={arrowSvg} alt="" />
    </div>
  );
};