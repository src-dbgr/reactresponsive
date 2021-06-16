// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  //   useEffect(() => {
  //     console.log(isOpen);
  //   }, [isOpen]);
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
    </>
  );
}

export default Navigation;
