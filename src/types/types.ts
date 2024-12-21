export interface StepCardProps {
    number: string;
    image: string;
    title: string;
    description: string;
  }
  export interface FeatureCardProps {
    icon?: string;
    title: string;
    description: string;
    backgroundImage?: string;
    bgUp?: boolean;
    height: string;
  }
  
  export interface PricingFeature {
    icon: string;
    text: string;
    active: boolean;
  }
  
  export interface PricingPlan {
    type: string;
    price: number;
    billingPeriod: string;
    billingFrequency: string;
    features: PricingFeature[];
  }
  
  export interface PricingToggleProps {
    isYearly: boolean;
    onToggle: () => void;
  }
  
  export interface PricingCardProps {
    plan: PricingPlan;
    isYearly: boolean;
  }

  export interface HeadingProps {
    title: string;
    description: string;
  }
  
  export interface ImageProps {
    src: string;
    alt: string;
  }

  export interface FAQItemProps {
    question: string;
    answer?: string;
    isExpanded?: boolean;
    onToggle?: () => void;
  }
  
  export interface SearchBarProps {
    placeholder: string;
    searchIcon: string;
  }

  export interface FooterLinkProps {
    title: string;
    links: string[];
  }
  
  export interface DownloadLinkProps {
    iconAnd: string;
    iconIos: string;
    primaryText: string;
    secondaryText: string;
  }
  
  export interface SocialLinkProps {
    icon: string;
    alt: string;
  }

  export interface SportCardProps {
    imageSrc: string;
    title: string;
    description: string;
  }

  export interface PlanFeature {
    name: string;
    starter: string | number;
    premium: string | number;
  }
  
  export interface PlanDetails {
    name: string;
    price: string;
    description: string;
  }