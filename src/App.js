
import './components/assets/styles/baselayout.css';
import Home from './components/Home';
import Nav from './components/sub-components/Nav'
import About from './components/About';
import Contact from './components/Contact';
import Display from './components/Display';
import Results from './components/Results';
import Search from './components/Search';
import Footer from './components/sub-components/Footer';
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
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />}/> 
        <Route path='/myplaylist' element={<Display />}/> 
        <Route path='/create' element={<Results />}/> 
        <Route path='/search' element={<Search />}/> 
        <Route path='/contact' element={<Contact />}/> 
        <Route path="/Sign" element={<Sign />} />

{/* function App(){
const [name, setName] = useState("")

async function postName(e)
 e.preventDefault()

 try{
  await axios.post("http://localhost:3001", )
 }catch(error){

 }
} */}
      </Routes>
      <Footer/>
    </Router>

  </>
}

export default App;
