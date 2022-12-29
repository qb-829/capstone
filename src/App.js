
import './components/assets/styles/baselayout.css';
import Home from './components/Home';
import Nav from './components/sub-components/Nav'
import About from './components/About';
import Contact from './components/Contact';
import Display from './components/Display';
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
<<<<<<< HEAD
        <Route path='/' element={<Home />} /> 
=======
        <Route path='/' element={ <Home />} /> 
>>>>>>> main
        <Route path='/about' element={<About />}/> 
        <Route path='/myplaylist' element={<Display />}/> 
        <Route path='/create' element={<Search />}/> 
        <Route path='/contact' element={<Contact />}/> 
<<<<<<< HEAD
        <Route path="/Sign" element={<Sign />} />
=======
        <Route path='/Sign' element={ <Sign />} />
>>>>>>> main

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
