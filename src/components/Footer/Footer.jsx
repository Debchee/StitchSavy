import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons' ;

// library.add(faFacebookF); 





function Footer() {
  return (
    <div className="container-fluid footer ">
    <div class="row mx-4">
      <div class="col-md">
        <p><a class="navbar-brand fw-bold fs-4 footer-brand" href="#"><em><span style={{backgroundColor:'green', color:'white', padding:'10px', borderRadius:'30px 50px 30px 50px'}}>S</span>titchSavy</em></a></p>
        <p  className="text-dark footer-text1">Lorem ipsum dolor sit amet consectetur
          adipisicing elit. </p>
        <div>
          <a href="" class="me-4 text-reset">
          {/* <FontAwesomeIcon icon={fa-facebook-f} /> */}
            {/* <i class="fab fa-facebook-f text-dark"></i> */}
          </a>
          <a href="" class="me-4 text-reset ">
            <i class="fab fa-twitter text-dark"></i>
          </a>
          <a href="" class="me-4 text-reset ">
            <i class="fab fa-linkedin-in text-danger"></i>
          </a>
          <a href="" class="me-4 text-reset ">
            <i class="fab fa-skype text-dark"></i>
          </a>
        </div>
      </div>
      <div className="col-md text-dark footer-text2" >
        <h6 class="mb-3 fw-bold">Resources</h6>
        <p>Manage Account</p>
        <p>Social Media Marketing</p>
        <p>Social Reports</p>
        <p>Brand Improvement</p>
      </div>
      <div class="col-md text-dark">
        <p>Got Questions? Call Now</p>
        <p class="fs-4">+123456</p>
        <p className='footer-text3'>5002 lorem ipsum main road, London, UK</p>
        <button className="btn btn-outline-success bg-success text-white footer-botton"
          type="button" data-mdb-ripple-color="dark">
          Find Us
        </button>
      </div>
    </div>
    <hr className="mx-4 hr-style" />

    <div class="container">
      <div class="row">
        <div class="col-md text-dark">
          <p className='footer-text4'>Design and Copyright &copy; 2010-2021 Sajib.All rights
            reserved</p>
        </div>
        <div class="col-md">
          <div className=" text-dark footer-home">
            <a  href="" class="me-4 text-reset footer-text5">
              Home
            </a>
            <a  href="" class="me-4 text-reset footer-text5">
              Clients
            </a>
            <a  href="" class="me-4 text-reset footer-text5 ">
              About
            </a>
            <a  href="" class="me-4 text-reset footer-text5">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Footer