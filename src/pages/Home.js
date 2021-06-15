// import React, { useState, useEffect } from "react";

import Navigation from "../components/Navigation/Navigation";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/Sections/InfoSection/Data";
import InfoSection from "../components/Sections/InfoSection/InfoSection";

const Home = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
    </>
  );
};

export default Home;
