import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Benefit from '../components/benefit';
import Start from '../components/start';
import Pricing from '../components/pricing';
import Testimonial from '../components/testimonial';
import Footer from '../components/Footer';
import '../components/Navbar.css'

function Home() {
  const [darkMode, setDarkMode] = React.useState()
function toggleDarkMode(){
  setDarkMode(prevMode => !prevMode)
}
  return (
    <div className={darkMode? "black" : ""}>
        <Navbar />
        <Hero />
        <Benefit />
        <Start />
        <Pricing />
        <Testimonial />
        <Footer />

    </div>
  )
}

export default Home