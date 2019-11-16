import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../images/pic1.webp';
import slide2 from '../images/pic2.jpg';
import slide3 from '../images/pic3.jpg';


function Main(){
 return(
     <div>
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide1}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide2}
      alt="Third slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slide3}
      alt="Third slide"
    />
 </Carousel.Item>
</Carousel> 
     </div>
 );
 }


export default Main;