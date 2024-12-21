import React from 'react'
import { SecondaryButton } from '../../components/common/buttons/SecondaryButton'
import { BrandLogo } from '../../components/common/BrandLogo'
import { PrimaryButton } from '../../components/common/buttons/PrimaryButton'
import { GoChevronDown } from "react-icons/go";
import { NavItem } from '../../components/layout/Navbar/NavItem';
import { HeaderSearchBar } from '../../components/common/HeaderSearchBar';
import { ClientEngagement } from '../../components/landingPage/ClientEngagement';
import LandingPageHeadline from '../../components/landingPage/LandingPageHeadline';
import { OnboardingSteps } from '../../components/landingPage/OnboardingSteps';
import { WhyRmax } from '../../components/landingPage/WhyRmax';
import { PricingSection } from '../../components/landingPage/PricingSection';
import { BusinessManagement } from '../../components/landingPage/BusinessManagement';
import { FAQ } from '../../components/landingPage/FAQ';
import { Footer } from '../../components/landingPage/Footer';
import ServicesSections from '../../components/landingPage/ServicesSections';
import Navigation from '../../components/layout/Navbar/Navigation';
import GetStartedDemoButtons from '../../components/landingPage/GetStartedDemoButtons';
import OutFeatures from '../../components/landingPage/OutFeatures';
import GradientBackground from '../../components/common/GradientBackground';


const LandingPage:React.FC = () => {
  return (
    <div>
      <GradientBackground />
      <Navigation />
      
        <HeaderSearchBar />
       
        <LandingPageHeadline />
        <GetStartedDemoButtons />
        <OutFeatures />
        <OnboardingSteps />
        <WhyRmax />
        <ServicesSections />
        <PricingSection />
        <BusinessManagement />
        <FAQ />
        <Footer />
    </div>
  )
}

export default LandingPage