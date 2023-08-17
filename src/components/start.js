import React from 'react';
import './start.css';
import Gymimage from '../images/gymimage.jpg';

function start() {
  return (
    <div className='container'>
    <div className='start-wrapper'>
        <div className='start-img'>
            <img src={Gymimage} data-aos ='fade-left'
                 data-aos-duration ='1500'/>
        </div>
        <div className='start-content' data-aos ='fade-right'
                 data-aos-duration ='1500'>
            <h2 className='start-title'>Ready to make<span> changes?</span></h2>
            <p>Lorem ipsum dolor sit amet  <br/>
            consectetur adipisicing elit.Praesentium, <br/>
               itaque similique possimus fugiat excep<br/>
               voluptates corrupti recusandae minima <br/>
               vel impedit commodi esse, quidem min. <br/>
                Nemo doloribus quaerat officia sint  <br/>
                 nihil! Doloribus fugit, eaque facilis ex <br/>
                 officiis incidunt veritatis adipisci<br/>
                 recusandae ipsam necessitatibus,  <br/>
                 pariatur cumque commodi dolor<br/>
                 libero quia, illum laudantium. </p>
              <button className='start-btn'>Get Started</button>
        </div>
    </div>
    </div>
  )
}

export default start