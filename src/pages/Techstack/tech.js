import React from 'react'
import './tech.css';
import {techlist} from '../../utils/techlist.js';
import RubberBand from 'react-reveal/RubberBand.js'
import Fade from 'react-reveal/Fade.js'

const getIconColor = (techName) => {
  switch (techName) {
    case 'HTML':
      return '#E34F26'; // HTML color
    case 'CSS':
      return '#1572B6'; // CSS color
    case 'Javascript':
      return '#F7DF1E'; // JavaScript color
    case 'Node.js':
      return '#339933'; // Node.js color
    case 'MongoDb':
      return '#47A248'; // MongoDB color
    case 'Machine learning':
      return '#FF6F00'; // Machine learning color
    case 'Deep learning':
      return '#8E44AD'; // Deep learning,
      case 'React.js':
      return '#3776AB'; // React color
    default:
      return '#000'; // Default color
  }
};
const Techstack = () => {
  return (
    <>
    <div className='container techstack' id="tech">
     <RubberBand>
     <h2>My Tech stack👇</h2>
     <p>Includes programming languages,databases,framewworks,frontend and backend tools</p>
       
     </RubberBand>
    <div className='row'>
      {techlist.map((tech)=>(
        <Fade left>
        <div className='col-md-2'>
          <div className='card m-1'>
            <div className='card-content'>
              <div className='card-body'>
                <div className='media d-flex justify-content-center'>
                  <div className='align-self-center'>
                  <tech.icon className='tech-icon' style={{ color: getIconColor(tech.name) }}/>
                  </div>
                  <div className='media-body'>
                    <h4>{tech.name}</h4>
                  </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
        </Fade>
      ))}
    </div>
    </div>
    </>
  )
}


export default Techstack