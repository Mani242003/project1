import React ,{useState}from 'react';
import "./projectContainContent.css"
const ProjectContainContent = ({ img,desc, link,title} ) => {
const [show , setShow] = useState(false);


  return (

    <a href={link}>
        <div  className= "project"
              onMouseEnter={()=>setShow(true)}
              onMouseLeave={()=>setShow(false)} >
            {
                show ? (
                    <div className='project__content'>
                        <h3 >{title}</h3>
                        <p>{desc}</p>
                    </div>
                ) : (
                    <img src={img} alt=''/>
                )
            }
        </div>
    </a>
  )
}

export default ProjectContainContent;
