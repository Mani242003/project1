import React from 'react';
import { Element } from 'react-scroll';
import skillsimg from "../../assect/skillsimg.png";
import LinearProgress from '@mui/material/LinearProgress';
import "./Skillcontainer.css"

const Skillcontainer = () => {
  return (
    
        <Element className='Skillcontainer' id='skill'>
            <div className='Skillsetimg'>
                <img src={skillsimg} alt="png img"></img>
            </div>
            <div className='Skillontainer__Total-text'>
                <h1> SKILLS</h1>
                <div>
                  <h4>HTML</h4>
                  <div className='Skillontainer__Total-text__slider-1'>
                  <LinearProgress variant="determinate" value={50} />
                  </div>
                </div> 
                
                <div>
                  <h4>CSS</h4>
                  <div className='Skillontainer__Total-text__slider-2'>
                  <LinearProgress variant="determinate" value={40} />
                  </div>
                </div>

                <div>
                  <h4>Java Script</h4>
                  <div className='Skillontainer__Total-text__slider-3'>
                  <LinearProgress variant="determinate" value={20} />
                  </div>
                </div>

                <div>
                  <h4>React</h4>
                  <div className='Skillontainer__Total-text__slider-4'>
                  <LinearProgress variant="determinate" value={60} />
                  </div>
                </div>

                <div>
                  <h4>Java</h4>
                  <div className='Skillontainer__Total-text__slider-5'>
                  <LinearProgress variant="determinate" value={80} />
                  </div>
                </div>

                <div>
                  <h4>OOPs</h4>
                  <div className='Skillontainer__Total-text__slider-6'>
                  <LinearProgress variant="determinate" value={80} />
                  </div>
                </div>
                
            </div>
        </Element>
      
    
  )
}

export default Skillcontainer
