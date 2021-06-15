// import React, { useState, useEffect } from "react";

import React, { useState } from "react";
import HeroSection from "../components/Sections/HeroSection/HeroSection";
import Navbar from "../components/Navigation/Navbar/Navbar";
import Sidebar from "../components/Navigation/Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  //   useEffect(() => {
  //     console.log(isOpen);
  //   }, [isOpen]);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
    </div>
  );
};

export default Home;
