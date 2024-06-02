import React from 'react';
import './about1.css';
import Jump from 'react-reveal/Jump'

const About = () => {
  return (
    <div className='about'>
      <Jump>
      <div className='row'>
        <div className='about-content'>
          <h2>About me</h2>
          <p>
          I am Ayushi Gupta, currently in my second year of a Bachelor of Technology degree at KIET Group of Institutions,
           specializing in Artificial Intelligence and Machine Learning. I am passionate about web development using the MERN stack
            and have a profound interest in machine learning. My strong communication skills and time management abilities underscore my belief that effective communication is the key to success. 
            I am currently interning at Star App Solutions, where I am gaining valuable experience in Python development, and actively working on a project with Infosys Springboard.
             Additionally, I have demonstrated my problem-solving skills by solving over 350 coding problems on LeetCode and achieving an impressive institute rank of 452 on GeeksforGeeks. 
             My dedication to continuous learning drives me to stay updated with the latest advancements in technology, and I approach every task with equal importance and dedication. 
             I look forward to leveraging my skills and knowledge to contribute to innovative projects and collaborate with like-minded professionals.
         <br/>
         You can connect with me on <a href="https://www.linkedin.com/in/ayushi-gupta-124b36263" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
         
          </p>
         
        </div>
        <div className='about-img'>
          <img className='myimg' src='/portfolioimg.jpeg' alt='profile_image' />
        </div>
      </div>
      </Jump>
    </div>
  );
}

export default About;
