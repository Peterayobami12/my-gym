import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import Home from '../Route/Home';
import Pricing from '../Route/Pricing';
import Testimonial from './testimonial';
import Schedule from './Schedule';
import {Routes, Route} from 'react-router-dom';
import '../components/Navbar.css';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Aos from 'aos';









function App() {
  useEffect(() =>{
    Aos.init()
  }, [])

  
  
 
  return(
    <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pricing' element={<Pricing />}/>
      <Route path='/schedule' element={<Schedule />}/>
      <Route path='/testimonial' element={<Testimonial />}/>
    </Routes>
    </div>

  )
};

export default App;


