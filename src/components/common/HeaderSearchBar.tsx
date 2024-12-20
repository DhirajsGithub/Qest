import React, { useState, ChangeEvent } from 'react';
import styles from './HeaderSearchBar.module.css';
import { BrandLogo } from './BrandLogo';

interface HeaderSearchBarProps {
  className?: string;
  onSearch?: (query: string) => void;
}

export const HeaderSearchBar: React.FC<HeaderSearchBarProps> = ({ 
  className,
  onSearch 
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setSearchQuery(newQuery);
    onSearch?.(newQuery);
  };

  return (
    <div className={`${styles.searchField} ${className}`}>
      <div className={styles.div}>
        <div className={styles.brandAi}>
            <p>AI</p>
        
        <BrandLogo />
        </div>
        <input
          type="text"
          className={styles.searchInput}
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Curious? Let AI Uncover the Answers!"
          aria-label="Search input"
        />
      </div>
    </div>
  );
};