import React from 'react'
import { Element } from 'react-scroll'
import Topcontent from '../Topcontent/Topcontent'
import "./Topcontainer.css"

const Topcontainer = () => {
  return (
    <div className='Topcontainer'>
        <Element id='about'>
            <Topcontent/>
        </Element>
      
    </div>
  )
}

export default Topcontainer
