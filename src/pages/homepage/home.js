import React from 'react'
import './home.css'
import {useTheme} from "../../context/theme.js"
import Typewriter from 'typewriter-effect';
import Resume from '../../assets/docs/updatedResume2.pdf';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Home = () => {
  const [theme,setTheme] = useTheme();
  //handling theme
  const handleTheme =()=>{
    setTheme((prevState)=>(prevState === "light"?"dark":"light"))
  }
  return (
    <>
    <div className='container-fluid home-container' id="home">
      <div className='theme-btn' onClick={handleTheme}>
        {theme === "light"?(<BsFillMoonStarsFill/>):(<BsFillSunFill/>)}
      </div>
      <div className='container home-content'>
        <h3>Hi, I am a</h3>
        <h1>
        <Typewriter
        options={{
         strings:["Full stack developer","ML engineer","MERN stack developer"],
         autoStart:true,
         loop:true,
        }}/>  
        </h1>
         <div className='home-buttons'>
          <a className="btn btn-hire" href="https://api.whatsapp.com/send?phone=7453820810" rel="noreferrer" target="_blank">Hire Me</a>
          <a className='btn btn-resume' href={Resume} download="Ayushi_resume.pdf">My Resume</a>
         </div>
      </div>
    </div>

    </>
  )
}

export default Home
