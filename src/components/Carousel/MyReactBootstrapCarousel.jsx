import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import FirstImg from '../../assets/carousel pic 3.jpg';
import SecondImg from '../../assets/Ankara4.png';
import ThirdImg from '../../assets/AnkaraBkg.png';
import './Carousel.css';


function MyReactBootstrapCarousel() {
  return (
    <div>
      <div>
      <Carousel className='border-0'>
        <Carousel.Item interval={1500}>
          <img
            className=" carousel__image d-block w-100"
            src={FirstImg}
            alt="Image One"
          />
          <Carousel.Caption className="carousel__caption">
            <h3>Your Customized Outfit At Your Finger Tips</h3>
            <p>Checkout Looks that Impress</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carousel__image d-block w-100"
            src={SecondImg}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3>Create Your Appeal</h3>
            <p>Style beyond Borders</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carousel__image d-block w-100"
            src={ThirdImg}
            alt="Image three"
          />
          <Carousel.Caption>
            <h3>Unisex Designs</h3>
            <p>All Styles Covered</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    
    
    
  )
}

export default MyReactBootstrapCarousel