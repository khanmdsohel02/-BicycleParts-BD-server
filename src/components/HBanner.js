import React from 'react';

const HBanner = () => {
  return (
    <>
       <div class="carousel w-full h-4/5">
  <div id="banner1" class="carousel-item w-full">
    <img src={'https://i.ibb.co/nc4D85q/banner1.png'} alt='banner' class="w-full" />
  </div> 
  <div id="banner2" class="carousel-item w-full">
  <img src={'https://i.ibb.co/PrvZg1G/banner2.png'}  alt='banner' class="w-full"/>
  </div> 
  <div id="banner3" class="carousel-item w-full">
  <img src={'https://i.ibb.co/QKrLc4V/banner3.png'}  alt='banner' class="w-full" />
  </div> 
</div> 
<div class="flex justify-center w-full gap-2 py-2">
  <a href="#banner1" class="btn btn-xs rounded-full">1</a> 
  <a href="#banner2" class="btn btn-xs rounded-full">2</a> 
  <a href="#banner3" class="btn btn-xs rounded-full">3</a> 
</div> 
    
    
  </>
   
    );
};

export default HBanner;