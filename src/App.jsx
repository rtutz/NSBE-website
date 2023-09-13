
import './App.css'
import { BrowserRouter as Router, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <h1>Hello</h1>
      <Link to="#services">
        services
      </Link>
    </Router>
  )
}

export default App
