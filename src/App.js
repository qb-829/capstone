
import './components/assets/styles/baselayout.css';
import Home from './components/Home';
import Nav from './components/sub-components/Nav';
import About from './components/About';
import Contact from './components/Contact';
import Sign from './components/Sign';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return <>
    <Router>
      < Nav />
      <Routes>
        <Route path='/' exact render={(props) => <Home />} /> 
        <Route path='/about' element={<About />}/> 
        <Route path='/contact' element={<Contact />}/>
        <Route path="/sign" element={<Sign />} />
      </Routes>
      
    </Router>

  </>
}

export default App;
