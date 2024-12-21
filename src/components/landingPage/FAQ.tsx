import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { FAQItemProps, SearchBarProps } from '../../types/types';
import { IoChevronUp, IoChevronForwardSharp } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";




const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
    return (
      <form className={styles.searchContainer} role="search">
        <label htmlFor="faqSearch" className={styles.visuallyHidden}>
          Search FAQ
        </label>
        <div className={styles.searchInputWrapper}>
          <input
            id="faqSearch"
            type="search"
            className={styles.searchInput}
            placeholder={placeholder}
            aria-label="Search frequently asked questions"
          />
          <div className={styles.searchBtn}>
            <IoSearch color='#fff' fontSize={18} />  
          </div>
        </div>
      </form>
    );
  };


const FAQItem: React.FC<FAQItemProps> = ({ 
    question, 
    answer, 
    
    isExpanded,
    onToggle 
  }) => {
    return (
      <div className={`${styles.faqItem} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.questionRow} onClick={onToggle}>
          <div className={styles.questionText}>{question}</div>
         {isExpanded &&  <IoChevronUp />}
         {!isExpanded && <IoChevronForwardSharp />}
        </div>
        {isExpanded && answer && (
          <div className={styles.answerText}>{answer}</div>
        )}
      </div>
    );
  };

  const faqData = [
    {
      question: "What is RMax?",
      answer: "RMax is a SaaS platform/ecosystem that lets any small to medium service business set up and manage their operations quickly and easily. It provides a suite of tools for scheduling, customer management, invoicing, and more."
    },
    {
      question: "How does it work?",
      answer: "RMax works by offering an intuitive interface that allows service businesses to organize their daily tasks. Users can create service listings, schedule appointments, manage customer information, track payments, and automate workflows. The platform is cloud-based, making it accessible from anywhere."
    },
    {
      question: "How much does it cost?",
      answer: "RMax offers a tiered pricing model based on the features and the size of your business. There is a free trial available, and pricing plans start at $29/month for the basic package, with advanced features and support options available at higher tiers."
    }
  ];
  

export const FAQ: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  return (
    <div className={styles.faqContainer}>
      <h1 className={styles.faqTitle}>Frequently Asked Questions</h1>
      <p className={styles.faqDescription}>
        Find answers to common questions about our services and features.
        <br />
        For more details, contact our support team.
      </p>

      <SearchBar 
        placeholder="Ask Q! e.g Tell me about key Features."
        searchIcon="https://cdn.builder.io/api/v1/image/assets/TEMP/bf1d4889-f216-411b-bc7c-2ed1bb917e76?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975"
      />

      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}

            isExpanded={index === expandedIndex}
            onToggle={() => setExpandedIndex(index === expandedIndex ? -1 : index)}
          />
        ))}
      </div>

      <div className={styles.supportSection}>
        <span className={styles.supportText}>Haven't got your answer?</span>
        <a href="/support" className={styles.supportLink}>Contact our support now</a>
      </div>
    </div>
  );
};