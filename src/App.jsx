
import './App.css'
import './misc/GlitchEffect.css'

import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import About from './components/About';
import Faq from './components/Faq';
import Sponsor from './components/Sponsors';
import OurTeam from './components/OurTeam';
import {Element } from 'react-scroll';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
        <NavBar/>
        <Element name="homepage">
            <Homepage/>
        </Element>
        <Element name="about">
            <About/>
        </Element>
        <Element name="sponsors">
            <Sponsor/>
        </Element>
        <Element name="faq">
            <Faq/>
        </Element>
        <OurTeam/>
    </Router>
    </>
  )
}

export default App
