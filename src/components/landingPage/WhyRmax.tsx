import React from "react";
import styles from "./WhyRmax.module.css";
import { FeatureCard } from "./FeaturedCard";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c5b92b1bdb52561fa93803ddd0a86033cf253221f3971a2f25a552ab347b3c0d?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Scheduling",
    description: "Manage appointments, classes, and events, workshops with...",
   height: "244px"
  },

  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac6622977526da014c74074906aee0553cba866682388b12152b4281ace986dc?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Client Management & CRM",
    description:
      "Keep track of customer data, preferences, and interactions to...",
    height: "205px"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2542760f374ae2ae7ebdf583dd99c2e909db232051592eeda4e53f9783513afe?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "AI Powered Insights",
    description:
      "Know exactly what is happening in business and get actionable...",
    height: "244px"
  },

  {
    title: "Billing & Payments",
    description:
      "Streamline invoicing and payments with automated workflows, reducing ...",
    backgroundImage:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=328,h=264,fit=crop/AMqbqzvG3bs8ak0P/understanding-the-basics-of-billing-software.png-AGB6jxQePwuVv6gr.png",
    bgUp: true,
    height: "476px"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ac6622977526da014c74074906aee0553cba866682388b12152b4281ace986dc?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Marketing & Engagement Tools",
    description:
      "Boost client retention and grow your business with integrated...",

      height: "282px"
  },
  {
    title: "Custom Branded website",
    description:
      "Qest's Custom Branded Website Builder allows you to create a fully personalized...",
    backgroundImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/2a29e590de0125dbc256baf4724c3f02a47e3d26149962d8595eeee6f4cac690?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    bgUp: false,
    height: "476px"
  },

  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2542760f374ae2ae7ebdf583dd99c2e909db232051592eeda4e53f9783513afe?placeholderIfAbsent=true&apiKey=79426ccaf24d49c38858d00ea833e975",
    title: "Multi-Location Management",
    description:
      "Manage multiple locations with ease, assigning roles and permissions...",
      height: "205px"
  },
  
];

export const WhyRmax: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Why Rmax?</h2>
      <p className={styles.subheading}>
        Rmax is designed to simplify and transform the way service businesses
        operate. From onboarding, scheduling and billing to client management,
        payments and growth, Rmax integrates everything in one easy-to-use
        platform connecting all the stake holders.
      </p>

      <div className={styles.featuresGrid}>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            backgroundImage={feature.backgroundImage}
            bgUp={feature.bgUp}
            height={feature.height}
          />
        ))}
      </div>
    </section>
  );
};
