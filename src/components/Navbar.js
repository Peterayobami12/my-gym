import React, { useEffect, useRef } from 'react';
import gym from '../images/gym-logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';




function Navbar(props) {
  const[click, setClick] = React.useState()
  function toggleMenu(){
    setClick(prevClick =>!prevClick)
  }
    const headerRef = useRef(null);
    const headerFunc = () => {
      if(document.body.scrollTop > 80  ||  document.documentElement.scrollTop >80){
        headerRef.current.classList.add('sticky-header')
      }else{
        headerRef.current.classList.remove('sticky-header')
      }
    }
    useEffect(() =>{
      window.addEventListener('scroll', headerFunc);
      return () => window.removeEventListener('scroll', headerFunc)
    },[])
    
    

    

  
  return (
    <div className='heads header-bg'  ref={headerRef}>
    
      <div className= 'header '>
        
        <div className='nav' >
        <Link to='/' className='nav-link'>
        <img  src={gym} alt='' className='gym'/>
            
        </Link>
        <h1>FITBODY</h1>
        </div>
        <ul className={click? 'nav-menu-active':'nav-menu'}>
          <li>
            <Link to='/' className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to='/schedule'  className='nav-link'>Schedule</Link>
          </li>
          <li>
            <Link to='/testimonial'  className='nav-link'>Classes</Link>
          </li>
          <li>
            <Link to='/pricing'  className='nav-link'>Pricing</Link>
          </li>
          <li>
                <Link to="/footer" className='register'><button>Register Now</button></Link>

                </li>
               
                 
        </ul>
        </div>
        <div className='contain' onClick={toggleMenu}>
                {click? <FontAwesomeIcon icon={faTimes} className='icon'/> : <FontAwesomeIcon icon={faBars} className='icon' />}
               </div>

    </div>
      
    
  )
}

export default Navbar