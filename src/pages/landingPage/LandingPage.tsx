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


const LandingPage:React.FC = () => {
  return (
    <div>
        <BrandLogo />
        <SecondaryButton name='Login' />
        <PrimaryButton name='Sign Up' icon={<GoChevronDown />} />
        <NavItem name='Features' icon={GoChevronDown} />
        <HeaderSearchBar />
        <ClientEngagement name='Client Engagement' />
        <LandingPageHeadline />
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