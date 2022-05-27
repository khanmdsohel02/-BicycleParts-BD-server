
const Branding = () => {

    return (
        <div className="mx-8">
             <div className="carousel w-full h-4/5 mt-16">
  <div id="brand1" className="carousel-item w-full">
    <img src={'https://i.ibb.co/82MBw0H/brand.png'} alt='banner' className="w-full" />
  </div> 
  <div id="brand2" className="carousel-item w-full">
  <img src={'https://i.ibb.co/PDQK0J3/brand1.png'}  alt='banner' className="w-full"/>
  </div> 
  <div id="brand3" className="carousel-item w-full">
  <img src={'https://i.ibb.co/4m79kDK/brand2.png'}  alt='banner' className="w-full" />
  </div> 
  <div id="brand4" className="carousel-item w-full">
  <img src={'https://i.ibb.co/bH9GWpr/brand3.png'}  alt='banner' className="w-full" />
  </div> 
  <div id="brand5" className="carousel-item w-full">
  <img src={'https://i.ibb.co/fdMrr2K/brand4.png'}  alt='banner' className="w-full" />
  </div> 
</div> 
<div className="flex justify-center w-full gap-2 py-2">
  <a href="#brand1" className="btn btn-xs rounded-full">1</a> 
  <a href="#brand2" className="btn btn-xs rounded-full">2</a> 
  <a href="#brand3" className="btn btn-xs rounded-full">3</a> 
  <a href="#brand4" className="btn btn-xs rounded-full">4</a> 
  <a href="#brand5" className="btn btn-xs rounded-full">5</a> 
</div> 
        </div>
    );
};

export default Branding;