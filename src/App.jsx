
import './App.css'
import './misc/GlitchEffect.css'

import Homepage from './components/Homepage';
import NavBar from './components/NavBar';
import About from './components/About';
import Faq from './components/Faq';
import Sponsors from './components/Sponsors';
import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Homepage/>
        <About/>
        {/* <Faq/>
        <Sponsors/> */}
      </Router>
    </>
  )
}

export default App
