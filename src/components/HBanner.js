import React from 'react';

const HBanner = () => {
  return (
    <div>
       <div className="carousel w-full h-4/5">
  <div id="banner1" className="carousel-item w-full">
    <img src={'https://i.ibb.co/nc4D85q/banner1.png'} alt='banner' className="w-full" />
  </div> 
  <div id="banner2" className="carousel-item w-full">
  <img src={'https://i.ibb.co/PrvZg1G/banner2.png'}  alt='banner' className="w-full"/>
  </div> 
  <div id="banner3" className="carousel-item w-full">
  <img src={'https://i.ibb.co/QKrLc4V/banner3.png'}  alt='banner' className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full gap-2 py-2">
  <a href="#banner1" className="btn btn-xs rounded-full">1</a> 
  <a href="#banner2" className="btn btn-xs rounded-full">2</a> 
  <a href="#banner3" className="btn btn-xs rounded-full">3</a> 
</div> 
    
    
  </div>
   
    );
};

export default HBanner;