import React from 'react';
import {Link} from 'react-scroll';
import "./Header.css"
const Header = () => {
  return (
    
    <Link to='about' smooth={true} duration={500}>
    <div className='header'>
        <div className='header__left'>
            <h1>
                Develop<span>er</span>
            </h1>
        </div>
        <div className='header__right'>
        <Link to='about' smooth={true} duration={500}>
            <h4>About</h4>
        </Link>
        <Link to='skill' smooth={true} duration={500}>
            <h4>Skills</h4>
        </Link>
        <Link to='Project' smooth={true} duration={500}>
            <h4>Project</h4>
        </Link>
        <Link to='contact' smooth={true} duration={500}>
            <h4>Contact</h4>
        </Link>
        <h4 className= "header__rightButton">Join with me</h4>
        </div>
    </div>
    </Link>
  )
}

export default Header
