import React from 'react'
import Header from "./components/Header/Header"
import Topcontainer from './components/Topcontainer/Topcontainer'
import Skillcontainer from './components/SkillContainer/Skillcontainer';
import  ProjectContainer from"./components/ProjectContainer/ProjectContainer"
import "./App.css"
import Contact from "./components/Contact/Contact.js"
const App = () => {
  return (
    <div>
      <Header/>
      <Topcontainer/>
      <Skillcontainer/>
      <ProjectContainer/>
      <Contact/>
      
    </div>
  )
}

export default App

