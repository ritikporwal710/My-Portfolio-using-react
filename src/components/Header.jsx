import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => {
  // const location = useLocation();

  // const [section, setSection] = useState("");

  // useEffect(() => {
  //   const params = new URLSearchParams(window.location.search);

  //   const section = params.get("section");

  // console.log(section);
  // }, [location]);

  return (
    <>
      <h2 id="naming">Ritik.</h2>
      <div>
        <a href="#home">Home</a>
        {/* <a href="#info">Info</a> */}
        <a href="#about">About</a>
        <a href="#achievements">Experience</a>
        <a href="#projects">Projects</a>
        {/* <a href="#testimonials">testimony</a> */}
        <a href="#profiles">Profiles</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:ritikporwal090@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};
export default Header;
