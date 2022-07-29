import React from 'react';
import { batch } from 'react-redux';
// import { Animator, ScrollContainer, ScrollPage,Fade, MoveOut } from 'react-scroll-motion';
import AOS from 'aos';

import MyReactBootstrapCarousel from '../Carousel/MyReactBootstrapCarousel';
import Footer from '../Footer/Footer';
import MainSection1 from '../MainSection1/MainSection1';
import MainSection2 from '../MainSection2/MainSection2';
import MainSection3 from '../MainSection3/MainSection3';
import MainSection4 from '../MainSection4/MainSection4';


function Home() {
  return (
    <>
  <div>
    <MyReactBootstrapCarousel/>
    <MainSection1 />
    <MainSection3 />

    {/* <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), MoveOut(-200))}> */}
          <MainSection2 />
        {/* </Animator>
      </ScrollPage>
    </ScrollContainer> */}
    <MainSection4/>
    <Footer/>


  </div>
  </>




  )
}

export default Home