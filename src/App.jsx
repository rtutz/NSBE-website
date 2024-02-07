
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
import Timer from './components/Timer';
import { useState } from 'react';

function App() {
const [activeLink, setActiveLink] = useState('homepage');
  return (
    <>
    <Router>
        <NavBar activeLink={activeLink} setActiveLink={setActiveLink}/>
        <Element name="homepage">
            <Homepage setActiveLink={setActiveLink}/>
        </Element>
        <Timer/>
        <Element name="about">
            <About setActiveLink={setActiveLink}/>
        </Element>
        <Element name="sponsors">
            <Sponsor setActiveLink={setActiveLink}/>
        </Element>
        <Element name="faq">
            <Faq setActiveLink={setActiveLink}/>
        </Element>

        <Element name="team">
            <OurTeam setActiveLink={setActiveLink}/>
        </Element>
    </Router>
    </>
  )
}

export default App
