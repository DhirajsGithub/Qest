import * as React from 'react';
import styles from './BrandLogo.module.css';

interface TextHighlightProps {
  text: string;
  color: string;
}

const TextHighlight: React.FC<TextHighlightProps> = ({ text, color }) => (
  <span style={{ color }}>{text}</span>
);

export const BrandLogo: React.FC = () => {
  return (
    <div className={styles.brandText}>
      R<TextHighlight text="Max" color="rgba(161,15,15,1)" />
    </div>
  );
};