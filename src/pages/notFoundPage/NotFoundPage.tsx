import React from 'react';
import styles from './NotFound.module.css';
import { useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../../components/common/buttons/PrimaryButton';
import { BiHome } from 'react-icons/bi';

const NotFoundPage: React.FC = () => {
  const navigation = useNavigate();

  const goHome = () => {
    navigation('/');
  };

  return (
    <div className={styles.notFoundContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <p className={styles.errorMessage}>Page Not Found</p>
      <div>
      <PrimaryButton extraPadding icon={<BiHome size={18} />} name="Go Home" onClick={goHome} />
      </div>
      
    </div>
  );
};

export default NotFoundPage;
