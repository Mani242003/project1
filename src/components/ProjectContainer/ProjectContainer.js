import React from 'react'
import { Element } from 'react-scroll';
import   ProjectContainContent from "../../components/projectContainContent/projectContainContent";
import imge from "../../assect/sysbg.png"
import "./ProjectContainer.css"
const ProjectContainer = () => {
  const projects=[
    {
      img:imge,
      title: "Facebook",
    link :"www.goggle.com",
    desc:"MNNC HHFBWRVHEHBV BHREJHBUW BEWKHAEBKVBFHVBKVJWR BFKRJBGHHWHVWKH HJBVRHVBMVV VHB BHRR VB VHB VJHVB VKHVB BVHBVV   HBRRFBR JBBRB YFBR B BFBFRE BF FF RFR R R",

  },
  {
    img:imge,
    title: "Facebook",
    link :"www.goggle.com",
    desc:"MNNC HHFBWRVHEHBV BHREJHBUW BEWKHAEBKVBFHVBKVJWR BFKRJBGHHWHVWKH HJBVRHVBMVV VHB BHRR VB VHB VJHVB VKHVB BVHBVV   HBRRFBR JBBRB YFBR B BFBFRE BF FF RFR R R"
  },
  {
    img:imge,

    title: "Facebook",
    link :"www.goggle.com",
    desc:"MNNC HHFBWRVHEHBV BHREJHBUW BEWKHAEBKVBFHVBKVJWR BFKRJBGHHWHVWKH HJBVRHVBMVV VHB BHRR VB VHB VJHVB VKHVB BVHBVV   HBRRFBR JBBRB YFBR B BFBFRE BF FF RFR R R"
  },
  {
    img:imge,
    title: "Facebook",
    link :"www.goggle.com",
    desc:"MNNC HHFBWRVHEHBV BHREJHBUW BEWKHAEBKVBFHVBKVJWR BFKRJBGHHWHVWKH HJBVRHVBMVV VHB BHRR VB VHB VJHVB VKHVB BVHBVV   HBRRFBR JBBRB YFBR B BFBFRE BF FF RFR R R"
  },    {
    img:imge,
    title: "Facebook",
    link :"www.goggle.com",
    desc:"MNNC HHFBWRVHEHBV BHREJHBUW BEWKHAEBKVBFHVBKVJWR BFKRJBGHHWHVWKH HJBVRHVBMVV VHB BHRR VB VHB VJHVB VKHVB BVHBVV   HBRRFBR JBBRB YFBR B BFBFRE BF FF RFR R R"
  },
  {
    img:imge,
    title: "Facebook",
    link :"www.goggle.com",
    desc:"MNNC HHFBWRVHEHBV BHREJHBUW BEWKHAEBKVBFHVBKVJWR BFKRJBGHHWHVWKH HJBVRHVBMVV VHB BHRR VB VHB VJHVB VKHVB BVHBVV   HBRRFBR JBBRB YFBR B BFBFRE BF FF RFR R R"
  } 
  ];

  return (
      <Element id="Project" className='project__Container'>
        <h1>Projects</h1>
        <p>Hello this is my projects</p>
        <div className='projectContainer__content'>
          {
        projects.map((pro,index) => {
          return(
            
            <ProjectContainContent  
            key={index} 
            img={pro.img} 
            desc={ pro.title} 
            link={pro.desc} 
            title={pro.link}
            />
            
          );
        })}
        </div>
      </Element>
      

    
  )
}





export default ProjectContainer
