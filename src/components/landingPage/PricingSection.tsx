import React, { useState } from 'react';
import styles from './Pricing.module.css';
import { PricingToggle } from './PricingToggle';
import { PricingCard } from './PricingCard';
import { PricingPlan } from '../../types/types';

const pricingPlans: PricingPlan[] = [
  {
    type: "Starter",
    price: 17,
    billingPeriod: "month",
    billingFrequency: "billed monthly",
    features: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f67170cd66d02a1bae2a9204bfa4b29442ba13dbe3d38304eb27e8d6ed9501d?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "Commercial License", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/37bc7bf19d3d01fc9b0b768521b48c3623b93ea7aba9a4cc63f2dc4c30b49c51?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "100+ HTML UI Elements", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcb90fd5fd6bdd95885f0460b13cc42586a9c39565c24c8ae295bfd2d722e7d5?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "Unlimited Domain Support", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4e270a73e8499c35082a57d89bc0a77f4da7aecbc4ed640dd542aa38bd1a77a6?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "6 Month Premium Support", active: false },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/23e7ff9c9fdaff20e160734c30c18e0b731bc6b50ea628002dc03a8b3312f7d5?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "Life Time Updates", active: false }
    ]
  },
  {
    type: "Premium",
    price: 88,
    billingPeriod: "month",
    billingFrequency: "billed monthly",
    features: [
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f67170cd66d02a1bae2a9204bfa4b29442ba13dbe3d38304eb27e8d6ed9501d?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "Commercial License", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/37bc7bf19d3d01fc9b0b768521b48c3623b93ea7aba9a4cc63f2dc4c30b49c51?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "100+ HTML UI Elements", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/fcb90fd5fd6bdd95885f0460b13cc42586a9c39565c24c8ae295bfd2d722e7d5?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "Unlimited Domain Support", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/16065ca99cea5eaf017ab8d69b2d748705f4835510e6cf3d498bcd4a587506b8?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "6 Month Premium Support", active: true },
      { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e59cb2fbcc458fdbec55f017e24835e7a0959dfb2fac1c5c3fb40d8e6e034ebd?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975", text: "Life Time Updates", active: true }
    ]
  }
];

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section className={styles.pricingSection}>
      <h1 className={styles.title}>
        Choose Plan<br />
        That's Right For You
      </h1>
      
      <p className={styles.subtitle}>
        Simple and transparent pricing. Start for free, upgrade when you love it.
        <br />
        <span className={styles.highlight}>30 day free trial in a button</span>
      </p>

      <div className={styles.enterpriseInfo}>
        <p>
          Running a <strong>Growth Business</strong> or <strong>Enterprise</strong>? Let's connect -
          <button className={styles.salesButton}>Talk to Sales</button>
        </p>
      </div>

      <PricingToggle isYearly={isYearly} onToggle={() => setIsYearly(!isYearly)} />

      <div className={styles.cardsContainer}>
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} plan={plan} isYearly={isYearly} />
        ))}
      </div>

      <a href="#" className={styles.compareLink}>Explore In-Depth Differences</a>
    </section>
  );
};