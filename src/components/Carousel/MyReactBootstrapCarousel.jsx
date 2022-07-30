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
            <h3><em>Your Customized Outfit At Your Finger Tips</em></h3>
            <p><em>Checkout Looks that Impress</em></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carousel__image d-block w-100"
            src={SecondImg}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h3><em>Create Your Appeal</em></h3>
            <p><em>Style beyond Borders</em></p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carousel__image d-block w-100"
            src={ThirdImg}
            alt="Image three"
          />
          <Carousel.Caption>
            <h3><em>Unisex Designs</em></h3>
            <p><em>All Styles Covered</em></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </div>
    
    
    
  )
}

export default MyReactBootstrapCarousel