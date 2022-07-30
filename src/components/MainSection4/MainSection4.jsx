import React from 'react';
import Pic1 from '../../assets/SecondColPic.jpg';
import Pic2 from '../../assets/pic2.jpg';
import Pic3 from '../../assets/pic3.jpg'
import './MainSection4.css';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

function MainSection4() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (

    <>

      <div  data-aos='fade-up' class="container">
        <div class="row mb-5 mt-5">
          <div class="col-6  text-success fw-bold fs-4">
            <p className='Newsletter'>Newsletter and get updates<br /><span style={{ fontSize: '12px', fontWeight: 'lighter', color: 'black' }}>Sign up for
              our newsletter and get regular update news</span></p>
            <h6 className='text-dark mt-3'><em>Download our App and get 10% discount on first transcation</em></h6>
            <button className='btn btn-success text-white '>Get our App</button>
          </div>
          <div class="col-6  mt-3 ">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Subscribe" aria-label="Subscribe"
                aria-describedby="button-addon2" />
              <button style={{ textTransform: 'capitalize' }} class="btn btn-outline-success bg-success text-white "
                type="button" id="button-addon2" data-mdb-ripple-color="dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* <div> */}
      <div data-aos='fade-right '><h3 className='text-center mb-5'><em>Blog Posts</em></h3></div>

      <div style={{ backgroundColor: 'rgb(246,253,246)' }}>
        <div  class="card first__card1" >
          <img src={Pic1} class="card-img-top" alt="pic" />
          {/* <div class="card-body"> */}
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          {/* </div> */}
        </div>

        <div class="card first__card2 " >
          <div class="card-body">
            <h5 class="card-title text-success"><em>Aseobi Styles; Overrated?</em></h5>
            <p class="card-text"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim e eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</em></p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div  class="card second__card1" >
          <img src={Pic2} class="card-img-top " alt="pic" />
          {/* <div class="card-body"> */}
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          {/* </div> */}
        </div>

        <div class="card second__card2 " >
          <div class="card-body">
            <h5 class="card-title text-success"><em>Trendy Labels for 2022</em></h5>
            <p class="card-text"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iunt mollit anim id est laborum.</em></p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>

        <div  class="card third__card1" >
          <img src={Pic3} className="card-img-top pic-3" alt="pic" />
          {/* <div class="card-body"> */}
          {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
          {/* </div> */}
        </div>

        <div  class="card third__card2 " >
          <div class="card-body">
            <h5 class="card-title text-success"><em>Who wore it better?</em></h5>
            <p class="card-text"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute iunt mollit anim id est laborum.</em></p>
            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
          </div>
        </div>
      </div>


      {/* // </div> */}
    </>

  )
}

export default MainSection4