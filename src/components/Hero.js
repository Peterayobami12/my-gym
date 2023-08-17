import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import Dusan from '../images/dusan-jovic-B3fgTrrgsiI-unsplash.jpg';
import Jovic from '../images/spencer-davis-0ShTs8iPY28-unsplash.jpg'
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-wrapper'>
        <div className='hero-content'>
          <h2 data-aos ='fade-up' data-aos-duration ='2000' >Exercise is the key to a <br/>
             <span>Healthy </span> lifestyle</h2>
          <p data-aos ='fade-up' data-aos-duration ='1500'
          data-aos-delay ='100'>Lorem ipsum dolor sit amet consectetur 
            adipisicing elit. Optio assumenda inventore autem 
            ipsum sint harum blanditiis.
          </p>
          
          
          <div className='hero-btn'
          data-aos ='fade-up' data-aos-duration ='2000'
          data-aos-delay ='200'>
            <button className='register-btn'>Get started</button>
            <button className='btns'>
              <FontAwesomeIcon icon={faCirclePlay} />
              Watch Video
            </button>

          </div>
          
        </div>
        <div className='image'>
          <div className='image-img'>
        <div className='images'>
          <img src={Dusan} className='dusan'/>
          <img src={Jovic} className='jovic'/>

        </div>
        
      </div>

      </div>
      </div>
      
        

    </div>
  )
}

export default Hero