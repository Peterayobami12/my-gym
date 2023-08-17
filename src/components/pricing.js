import React from 'react';
import './pricing.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function pricing() {
  return (
    <div className='pricing-container'>
        <div className='pricing-top'>
            <h2>Gym <span className='price'>Pricing</span> Plan</h2>
            <p>Praesentium, libero quia, itaque similique 
              possimus fugiat excepturi voluptates corrupti 
              recusandae minima vel impedit
               commodi esse, quidem minus. Nemo doloribus quaerat
    </p>
        </div>
        <div className='pricing-wrapper'>
            <div className='pricing-items' data-aos ='fade-up'
                 data-aos-duration ='1500'>
                <div className='pricing-card-top'>
                    <h2 className='pricing-title'>Regular member</h2>
                    <h2 className='price-title'>$80 <span>/month</span></h2>

                </div>
                <div className='services'>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Unlimited access to gym</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Customer support</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Personal trainer</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Standard option</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>5 classes per week</span>
                        </li>
                    </ul>
                    <button className='join-btn'>Join Now</button>

                </div>
            </div>
        
        
            <div className='pricing-items pricing-items02' data-aos ='fade-up'
                 data-aos-duration ='1500'>
                <div className='pricing-card-top'>
                    <h2 className='pricing-title'>Premium member</h2>
                    <h2 className='price-title'>$150 <span>/(2-months)</span></h2>

                </div>
                <div className='services'>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Unlimited access to gym</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Customer support</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Personal trainer</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Standard option</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>5 classes per week</span>
                        </li>
                    </ul>
                    <button className='join-btn'>Join Now</button>

                
            </div>
        </div>
        
            <div className='pricing-items pricing-items03' data-aos ='fade-up'
                 data-aos-duration ='1500'>
                <div className='pricing-card-top'>
                    <h2 className='pricing-title'>Standard member</h2>
                    <h2 className='price-title'>$200 <span>/(3-months)</span></h2>

                </div>
                <div className='services'>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Unlimited access to gym</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Customer support</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Personal trainer</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>Standard option</span>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCheckCircle}/>
                        <span>5 classes per week</span>
                        </li>
                    </ul>
                    <button className='join-btn'>Join Now</button>

            
            </div>
        </div>
        </div>

    </div>
  )
}

export default pricing