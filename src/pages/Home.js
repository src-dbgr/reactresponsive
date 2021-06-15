// import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/Sections/InfoSection/Data";
import InfoSection from "../components/Sections/InfoSection/InfoSection";
import ServicesSection from "../components/Sections/Services/ServicesSection";

const Home = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
