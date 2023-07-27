import React from 'react'

const Header = () => {
  return <nav>
    <NavContent/>
  </nav>
}

const NavContent = () =>{
    return (
    <>
    <h2>Ritik.</h2>
    <div>
        <a href='#home'>Home</a>
        <a href='#word'>Word</a>
        <a href='#timeline'>Experience</a>
        <a href='#services'>Services</a>
        <a href='#testimonials'>Testimonials</a>
        <a href='#contact'>Contact</a>
    </div>
    <a href="mailto:ritikporwal090@gmail.com">
        <button>Email</button>
    </a>
    </>
    );
}
export default Header;