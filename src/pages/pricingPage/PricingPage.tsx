import React from 'react'
import GradientBackground from '../../components/common/GradientBackground'
import Navigation from '../../components/layout/Navbar/Navigation'
import { PricingPlans } from '../../components/pricingPage/PricingPlans'
import { FAQ } from '../../components/landingPage/FAQ'
import { Footer } from '../../components/layout/Footer'

const PricingPage:React.FC = () => {
  return (
    <div>
      <GradientBackground />
      <Navigation />
      <PricingPlans />
      <FAQ />
      <Footer />
    </div>
  )
}

export default PricingPage