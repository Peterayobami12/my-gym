import React from 'react';
import './benefit.css';
import Ryan from '../images/ryan-hoffman-6nRbeq_gkcg-unsplash.jpg';
import Dusan from '../images/imag2.jpg';
import Imag from '../images/imag.jpg'

function benefit() {
  return (
    <div className='benefit'>
        <div className='benefit-container'>
        
                <h2 className='benefit-title'>Benefit of <span className='til'>Excercise</span></h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptatum sed provident 
               distinctio dignissimos ullam odit recusandae vero ut
                nesciunt!</p>
            </div>
            <div className='excercise' data-aos ='zoom-in'
                 data-aos-duration ='1500'>
                <div className='excercise-container' >
                    <span className='excercise-icon'>
                    <img src={Ryan} className='excercise-image'/>
                    </span>
                    <div className='excercise-content'>
                        <h4>Healthy life</h4>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut, voluptatum sed provident 
               distinctio dignissimos ullam odit recusandae vero ut</p>

                    </div>

                </div>
                <div className='excercise-container'>
                    <span className='excercise-icon'>
                    <img src={Dusan} className='excercise-image'/>
                    </span>
                    <div className='excercise-content'>
                        <h4>Increase flexibility</h4>
                        <p> dolor sit, amet consectetur adipisicing elit. Aut, voluptatum sed provident 
               distinctio dignissimos ullam odit recusandae </p>

                    </div>

                </div>
                <div className='excercise-container'>
                    <span className='excercise-icon'>
                    <img src={Imag} className='excercise-image'/>
                    </span>
                    <div className='excercise-content'>
                        <h4>Reducing blood pressure</h4>
                        <p> amet consectetur adipisicing elit. Aut, voluptatum sed provident 
               distinctio dignissimos ullam odit recusandae vero </p>

                    </div>

                </div>
            </div>

        </div>
    
  )
}

export default benefit