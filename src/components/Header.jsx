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
        <a href='#info'>Info</a>
        <a href='#work'>About</a>
        <a href='#timeline'>Achievements</a>
        <a href='#services'>Links</a>
        <a href='#testimonials'>Projects</a>
        <a href='#contact'>Contact</a>
    </div>
    <a href="mailto:ritikporwal090@gmail.com">
        <button>Email</button>
    </a>
    </>
    );
}
export default Header;