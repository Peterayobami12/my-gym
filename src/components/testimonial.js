import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './testimonial.css';
import Carousel from 'react-bootstrap/Carousel';
import Anatase from '../images/anastase-maragos.jpg';
import Edgar from '../images/edgar-chaparro.jpg';
import Luke from '../images/luke-aguaita.jpg';
import Sven from '../images/sven-mieke-optBC2FxCfc-unsplash.jpg';
import Trust from '../images/trust-tru-katsande-Pu7BOaYlYGY-unsplash.jpg';
import Webb from '../images/scott-webb-Vn39uEkX00s-unsplash.jpg';
import Sushil from '../images/sushil-ghimire-DC5akQJyH4I-unsplash.jpg';
import Daniel from '../images/daniel-apodaca-WdoQio6HPVA-unsplash.jpg';



function testimonial() {
  return (
    <div className='testimony'>
      
      <h2>TESTIMONIALS</h2>
       <section className="slider container mb-3 ">
       <Carousel>
     <Carousel.Item className='slide'>
      <img
          className="d-block images img-center"
         src= {Anatase}
         alt="First slide"
        />
        <h4>Francis williams</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis adipisci id.</p>
     </Carousel.Item>
      <Carousel.Item className='slide'>
        <img
         className="d-block images"
          src={Edgar}
          alt="Second slide"
       />
       <h4>Edgar shaparro</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis adipisci id.</p>
     </Carousel.Item>
     <Carousel.Item className='slide'>
       <img
         className="d-block images"
         src={Luke}
          alt="Third slide"
        />
        <h4>Luke williams</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis adipisci id.</p>
    </Carousel.Item>
    <Carousel.Item className='slide'>
       <img
         className="d-block images"
         src={Sven}
          alt="Third slide"
        />
        <h4>Sven mieke</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis adipisci id.</p>
    </Carousel.Item>
    <Carousel.Item className='slide'>
       <img
         className="d-block images"
         src={Trust}
          alt="Third slide"
        />
        <h4>Trust katsande</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis adipisci id.</p>
    </Carousel.Item>
    <Carousel.Item className='slide'>
       <img
         className="d-block images"
         src={Webb}
          alt="Third slide"
        />
        <h4>Scott webb</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores facilis adipisci id.</p>
    </Carousel.Item>
    <Carousel.Item className='slide'>
       <img
         className="d-block images"
         src={Sushil}
          alt="Third slide"
        />
        <h4>Sushil ghilmire</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis.</p>
    </Carousel.Item>
    <Carousel.Item className='slide'>
       <img
         className="d-block images"
         src={Daniel}
          alt="Third slide"
        />
        <h4>Daniel apodaca</h4>
        <p> dolor sit amet consectetur adipisicing elit. Recusandae voluptas eius dignissimos, 
      voluptate cum asperiores soluta tenetur facilis adipisci id.</p>
    </Carousel.Item>
   </Carousel>
   </section>
   </div>
    
  )
}

export default testimonial