import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => {
  return (
    <>
      <h2 id="naming">Ritik.</h2>
      <div>
        <a href="#home">Home</a>
        {/* <a href="#info">Info</a> */}
        <a href="#about">About</a>
        <a href="#timeline">Achievements</a>
        <a href="#projects">Projects</a>
        <a href="#testimonials">testimony</a>
        <a href="#contact">Contact</a>
      </div>
      <a href="mailto:ritikporwal090@gmail.com">
        <button>Email</button>
      </a>
    </>
  );
};
export default Header;
