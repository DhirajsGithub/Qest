import React from 'react';
import styles from './ClientEngagement.module.css';
interface ClientEngagementProps {
    name: string;
  }

export const ClientEngagement: React.FC<ClientEngagementProps> = ({ name }) => {
  return (
    <div className={styles.wrapper}>
      {name}
    </div>
  );
};