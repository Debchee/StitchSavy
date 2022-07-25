import React from 'react';
import './MainSection2.css';
import Grid1pic from '../../assets/Gridpic1.jpg';
import Grid2pic from '../../assets/Gradpic2.jpg';
import Grid3pic from '../../assets/Gridpic7.png';
import Grid4pic from '../../assets/Gridpic4.png';
import Grid5pic from '../../assets/Gridpic5.png';
import Grid6pic from '../../assets/Gridpic6.png';
import Gridextra from '../../assets/Gridpic3.png'




function MainSection2() {
  return (
    <>

      <div className="mt-5">
        <h3 className="text-center"><em> Your Choice Designers</em></h3>
      </div>
      {/* <div className='container mt-5 section2'>
    <div className='row gy-4'>
    <div className='col'>
      <div class="card" style={{width: '20rem'}}>
        <img src={Grid1pic} className="card-img-top card__img1" alt="grid1"/>
        <div class="card-body">
          <h5 class="card-title">Chic's Wears</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className='col'>
      <div class="card" style={{width: '20rem'}}>
        <img src={Grid2pic} class="card-img-top card__img1" alt="grid2"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className='col'>
      <div class="card" style={{width: '20rem'}}>
        <img src={Grid3pic} className="card-img-top card__img1" alt="grid3"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className='col'>
      <div class="card" style={{width: '20rem'}}>
        <img src={Grid4pic} className="card-img-top card__img1" alt="grid4"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className='col'>
      <div class="card" style={{width: '20rem'}}>
        <img src={Grid5pic} class="card-img-top card__img1" alt="grid5"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>

      <div className='col'>
      <div class="card" style={{width: '20rem'}}>
        <img src={Grid6pic} class="card-img-top card__img1" alt="grid6"/>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
      
      </div>
      </div> */}

      <div className='container mt-5'>
      <div class="row ">
        <div class="col-md-8 col-bod" >
          <div class="pb-3">
            
          </div>
          <div class="row">
            <div class="col-md-6 col-pic2" >
                <div className='cont-overlay'><p className='Customize'>Customize your look</p></div>
                    <img src={Gridextra} alt='colpic2' className='colpic2'/>
                </div>
            <div class="col-md-6 col-pic3" >
                <div className='cont2-overlay'><p className='Customize'>Customize your look</p></div>
                  <img src={Grid4pic} alt='colpic3' className='colpic3'/>
            </div>
            <div class="col-md-6 col-pic4" >
                <div className='cont3-overlay'><p className='Customize'>Customize your look</p></div>
                  <img src={Grid5pic} alt='colpic5' className='colpic4'/>
            </div>
            <div class="col-md-6 col-pic5" >
              <div className='cont4-overlay'><p className='Customize'>Customize your look</p></div>
                <img src={Grid3pic} alt='colpic6' className='colpic5'/>
              </div>

          </div>
        </div>
        <div class="col-md-4 col-STYLE">
        <div className='cont5-overlay'><p className='customize'>Customize your look</p></div>
          <img src={Grid2pic} alt="colpic" className='colPic'/>
        </div>
      </div>
      </div>
    </>
  )
}

export default MainSection2