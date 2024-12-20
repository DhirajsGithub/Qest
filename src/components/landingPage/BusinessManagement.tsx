import React from 'react';
import styles from './BusinessManagement.module.css';
import { HeadingProps, ImageProps } from '../../types/types';

const Heading: React.FC<HeadingProps> = ({ title, description }) => {
    return (
      <>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </>
    );
  };

const Image: React.FC<ImageProps> = ({ src, alt }) => {
    return (
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className={styles.appImage}
      />
    );
  };

export const BusinessManagement: React.FC = () => {
  return (
    <div className={styles.container}>
      <Heading 
        title="Manage Your Business On the Go"
        description="With free Business Mobile App, you can manage your entire service business from anywhere. Stay connected and stay in control, no matter where your day takes you."
      />
      <Image
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/58c0439e95c53dd53ed3d545d8d2395d149a9b96f52d2a9db1b92bfae6635f93?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975"
        alt="Business management mobile application interface"
      />
    </div>
  );
};