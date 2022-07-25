import React from 'react';
import './MainSection3.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRadiation } from '@fortawesome/free-solid-svg-icons';
import { faCrown } from '@fortawesome/free-solid-svg-icons';


function MainSection3() {
  return (
    <>

<div className='mt-4'>
      <h2 className='text-center'><em>Connect, We are Fashion</em></h2>
    </div>
      <div class="container mt-5 text-center px-5">
        <div class="row mx-5 mt-4">
          <div className="col-md-2 shadow Expedia">
            <h6 >
            <FontAwesomeIcon className='text-success' icon={faCircleRadiation}/>
            BXFitz
            </h6>
          </div>
          <div class="col-md-2 Appeal shadow">
            <h6 ><em className='text-danger'>Her</em>Appeal</h6>
          </div>
          <div class="col-md-2 King-col shadow">
            <h6 className='Kingly'>
            <FontAwesomeIcon className='text-primary' icon={faCrown}/>
           <em> Kingly</em>
            </h6>
          </div>
          <div class="col-md-2 Ath-col shadow">
            <h6 className='Athena'><em>Athena's Touch</em></h6>
          </div>
          <div class="col-md-2 Avast-col shadow">
            <h6 className='fw-bold fs-5 Avast'>Avast</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainSection3