import React from 'react';
import styles from './Onboarding.module.css';
import { StepCard } from './StepCard';
import { Arrow } from './Arrow';
import builtWebsiteSvg from "../../assets/icons/build-website.svg";

const steps = [
  {
    number: "1",
    image: builtWebsiteSvg,
    title: "Claim your preset profile",
    description: "Unlock tailored service and seamlessly elevate your experience by claiming your preset profile today."
  },
  {
    number: "2",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/d0f5bf401866385d787ea8c6ecb12eeabe6c8fa6ce4627cc7b27e8765f12073f?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Add services",
    description: "Make use of multiple scheduling, pricing options to add services. Choose from pre-created scheduling templates."
  },
  {
    number: "3",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9722a34e94e936e9b7ea7eaf25465274500279d8a45115cecd277ecb5289ae87?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Built Website",
    description: "Build your online storefront your way, seamlessly integrating all services for a cohesive and efficient Client experience."
  }
];

export const OnboardingSteps: React.FC = () => {
  return (
    <section className={styles.onboardingSection}>
      <h1 className={styles.mainTitle}>Onboard business in 3 simple steps</h1>
      <p className={styles.subtitle}>
        Quick assisted onboarding with 30day free trial. No credit card needed.
      </p>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <StepCard {...step} />
            {index < steps.length - 1 && (
              <Arrow  />
            )}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};