import React from "react";
import GradientBackground from "../../components/common/GradientBackground";
import Navigation from "../../components/layout/Navbar/Navigation";
import { HeaderSearchBar } from "../../components/common/HeaderSearchBar";
import ContactDetail from "../../components/supportPage/ContactDetail";
import { Footer } from "../../components/layout/Footer";
import TextureBgComp from "../../components/supportPage/TextureBgComp";

const SupportPage: React.FC = () => {
  return (
    <div>
      <GradientBackground />
      <Navigation />
      <HeaderSearchBar />
      <ContactDetail />
      <TextureBgComp />
      <Footer />
    </div>
  );
};

export default SupportPage;
