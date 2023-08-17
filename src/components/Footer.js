import React from 'react';
import gym from '../images/gym-logo.jpg';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';






function Footer() {
    const year = new Date().getFullYear
  return (
    <footer className='footer' data-aos ='fade-up'
    data-aos-duration ='1500'>
        <div className='container'>
            <div className='footer-wrapper'>
                
                    <div className='logo'>
                        <div className='logo-img'>
                            <img src={gym} className='gym'/>
                            <h2>Fitbody</h2>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
       Odit unde reprehenderit eius sunt iste. Cupiditate!</p>
                        

                    </div>
                   

                
                <div className='footer-box'>
                    <h4 className='footer-title'>Company</h4>
                    <ul className='footer-link'>
                        <li><a href=''>Our program</a></li>
                        <li><a href=''>Our plan</a></li>
                        <li><a href=''>Become a member</a></li>
                        
                    </ul>

            </div>
            <div className='footer-box'>
                    <h4 className='footer-title'>Quick Links</h4>
                    <ul className='footer-link'>
                        <li><a href=''>About us</a></li>
                        <li><a href=''>Contact us</a></li>
                        <li><a href=''>Support</a></li>
                        
                    </ul>

            </div>
            <div className='footer-box'>
                    <h4 className='footer-title'>Quick Links</h4>
                    <ul className='footer-link'>
                        <li><a href=''>FAQ</a></li>
                        <li><a href=''>Customer service</a></li>
                        <li><a href=''>Feedback</a></li>
                        
                    </ul>

            </div>

        </div>
        <div className='social-icons'>

        </div>
        
        <p className='copyright'>Copyright - {year} developed by Peter.
        All right reserved.</p>
        </div>

    </footer>
  )
}

export default Footer