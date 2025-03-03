import React from "react";
import AboutUs from "../components/AboutUs/Aboutus";
import SDG from "../components/OurProfile/SDGSection/SDG";
import ImpactSection from "../components/Home/ImpactSection/ImpactSection";
import NewsletterFooter from "../components/Home/NewsletterFooter/NewsletterFooter";
const OurProfile = () => {
  return (
    <div>
      <AboutUs />
      <SDG />
      <ImpactSection />
      <NewsletterFooter />
    </div>
  );
};

export default OurProfile;
