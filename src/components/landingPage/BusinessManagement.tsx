import React from 'react';
import styles from './BusinessManagement.module.css';
import { HeadingProps } from '../../types/types';
import googlePlaySvg from "../../assets/icons/Google Play Black Borde.svg"
import appStoreSvg from "../../assets/icons/App Store Black Borde.svg"

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
    return (
      <>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </>
    );
  };


export const BusinessManagement: React.FC = () => {
  return (
    <div className={styles.container}>
      <Heading 
        title="Manage Your Business On the Go"
        description="With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you."
      />
      <div className={styles.downloadBtns}>
        <div>
          <img src={appStoreSvg} alt="" />
        </div>
        <div>
          <img src={googlePlaySvg} alt="" />
        </div>
      </div>
    </div>
  );
};