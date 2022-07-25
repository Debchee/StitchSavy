import React from 'react'

function Navbar() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div class="container">
          <a class="navbar-brand fw-bold fs-4 " href="#"><em><span style={{backgroundColor:'green', color:'white', padding:'10px', borderRadius:'30px 50px 30px 50px'}}>S</span>titchSavy</em></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>

            

          </button>
          <div class="collapse navbar-collapse " id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active text-success" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">Designers</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-success" href="#">Contact</a>
              </li>
            </ul>
            <div className='buttons'>
                <a href='/Login' className='btn btn-outline-success botton1'>
                  <i className='fa fa-sign-in me-1'></i>Login
                </a>
                <a href='' className='btn btn-outline-success ms-2'>
                  <i className='fa fa-user-plus me-1'></i>Register
                </a>
                {/* <a href='' className='btn btn-outline-success ms-2'>
                  <i className='fa fa-shopping-cart me-1'></i>Cart(0)
                </a> */}
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

export default Navbar