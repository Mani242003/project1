import React from 'react'
import { Element } from 'react-scroll'
import "./contact.css"



const Contact = () => {
  return (
    <div>
        <Element id='contact'  className='contact'>
            <h1 >Contact</h1>
            <div className='contact__container'>
              <p> Email: <span>mani@gamil.com</span></p>
            </div>
        </Element>
      
    </div>
  )
}

export default Contact
