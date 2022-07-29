import React from 'react';
import './MainSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Colpic from '../../assets/SecondColPic2.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';



function MainSection1() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])
  return (
    <>
      <div className=" container  mt-5 main__section">
        <h2 className='text-center '><em>Fashion that meets your standards</em></h2>
      </div>
      <div>
        <div class="container-fluid section1 text-center mt-5">
          <div class="row mx-5">
            <div data-aos='fade-right' class="col-12 col-md-6 main__section__col">
              <h5 className="fs-5 h5one"><small>LIVE FOR FASHION</small></h5>
              <h2 className='h2one fs-1 fw-bold'>Let's Create Your Own Style</h2>
              <p className='text-start'><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </em></p>

              <div class="row row-bod">
                <div class="col">
                  <p className='trendy-icon mt-2 fw-bold ' ><i className='fa fa-shopping-bag mx-3 text-success'></i>Trendy Designs</p>
                </div>
                <div class="col">
                  <p className='trendy-icon2 mt-2 fw-bold'><FontAwesomeIcon className="circle-check text-success" icon={faCircleCheck} />30% Off</p>
                </div>
              </div>

              <div class="input-group mb-3 mt-3 ">
                <input type="text" class="form-control" placeholder= "Fashion Search" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                  <button class="btn btn-outline-success bg-success text-white" type="button" id="button-addon2">Search</button>
              </div>

            </div>
            <div class="col-12 col-md-6 col-style">
              <img className="col-img" src={Colpic} alt=''/>
            </div>
          </div>
        </div>
      </div>

      
    </>
  )
}

export default MainSection1