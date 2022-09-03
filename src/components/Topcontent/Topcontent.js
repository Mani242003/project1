import React from 'react'
import {  Link } from 'react-scroll'
import "./Topcontent.css"

const Topcontent = () => {
  return (
    <div className='Topcontent'>
        <div className='Topcontant__container'>
            <h1 >Mr.Manikandan</h1>
            <h3>B.Tech-Information Technology</h3>
            <a  href='https://www.google.com'>
                <button className='Topcontant__container__leftside-btn'>Download CV</button>
            </a>
           
            <Link to='Project' smooth={true} duration={500}>
                <button className='Topcontant__container__rightside-btn'>
                    my work
                </button>

            </Link>

        </div>
      
    </div>
  )
}

export default Topcontent
