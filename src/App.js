import './App.css';
import Layout from './components/layout/layout.js';
import About from './pages/About/about.js';
import Techstack from './pages/Techstack/tech.js';
import Projects from './pages/Projects/project.js';
import Education from './pages/Education/education.js';
import WorkExperience from './pages/WorkExperience/work.js';
import Contact from './pages/Contactme/contact1.js';
import ScrollToTop from "react-scroll-to-top";
import {useTheme} from "./context/theme.js"
import Mobilenav from './components/mobilenavbar/nav.js';

function App() {
  const [theme]=useTheme()
  return (
    <div className="App">
      <div id={theme}>
        <Mobilenav/>
      <Layout/>
      <div className='container'>
        <About/>
        <Education/>
        <Techstack/>
      <WorkExperience />
      <Projects/>
      <Contact/>
      </div>
      </div>
      <ScrollToTop smooth
      style={{backgroundColor : "#f29f67", borderRadius:"80px"}} />
    </div>
  );
}


export default App;
