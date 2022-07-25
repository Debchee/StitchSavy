import React from 'react'

function MainSection4() {
  return (
    <div class="container ">
        <div class="row mb-5 mt-5">
          <div class="col-6  text-success fw-bold fs-4">
            <p className='Newsletter'>Newsletter and get updates<br/><span style={{fontSize:'12px',fontWeight:'lighter', color:'black'}}>Sign up for
                our newsletter and get regular update news</span></p>
                <h6 className='text-dark mt-3'>Download our App</h6>
                <button className='btn btn-success text-white '>Get our App</button>
          </div>
          <div class="col-6  mt-3 ">
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Subscribe" aria-label="Subscribe"
                aria-describedby="button-addon2" />
              <button style={{textTransform:'capitalize'}} class="btn btn-outline-success bg-success text-white "
                type="button" id="button-addon2" data-mdb-ripple-color="dark">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}

export default MainSection4