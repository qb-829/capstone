import './components/assets/styles/baselayout.css';
import Home from './components/Home';
import Nav from './components/sub-components/Nav'
import About from './components/About';
import Contact from './components/Contact';
import MyPlaylist from './components/MyPlaylist';
import Search from './components/Search';
import Footer from './components/sub-components/Footer';
import Register from './components/Register';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Auth from './components/sub-components/Auth';



function App() {
    const App = () => {
        const[data,setData] = useState("");
        const getData = async() => {
            const response = await Axios.get ("http://localhost:5000/getData");
            setData(response.data);
        }
        useEffect(() => {
            getData ()
        },[]);
        return (
            <div>
                {data}
            </div>
        )
    }
  return <>
    <Router>
      < Nav />
      <Routes>
        <Route path='/' element={ <Home />} /> 
        <Route path='/about' element={<About />}/> 
        {/* <Route path='protected-page'></Route> */}
        <Route path='/myplaylist' element={
          <Auth>
            <MyPlaylist />
          </Auth> } />
        <Route path='/create' element={
          <Auth>
            <Search />
          </Auth> } />
        {/* <Route path='/create' element={}/>  */}
        <Route path='/contact' element={<Contact />}/> 
        <Route path='/register' element={ <Register />} />

      </Routes>
      <Footer/>
    </Router>

  </>
}

export default App;