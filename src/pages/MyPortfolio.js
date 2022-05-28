import React from 'react';

const MyPortfolio = () => {
    return (
        
           <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src={'https://i.ibb.co/WkKWJrY/sohel.jpg'} alt='' class="max-w-sm rounded-lg shadow-2xl" />
    <div className='lg:ml-20'>
      <h1 class="text-3xl font-bold text-blue-600">MD. SoHeL</h1>
      <h1 class="text-xl font-bold text-blue-600 my-3">MySelf</h1>
      <p className='text-blue-400 capitalize text-lg'>I'm still studying. I'm a second year honors student. I'm a business student. But my interest was more to web development.so that, I kept watching different video tutorials for learning web development. From YouTube I can learn about different courses. Watching videos makes me more interested in learning. That's why I enrolled in the programming Hero Complete Web Development with Jhongkar Mahboob course in December 2021 and I completed this course in 2022.</p>
      <h1 className='text-4xl text-blue-600 font-bold my-6'>SKILL</h1>
<div class="mt-3">
  <button class="btn rounded-full" disabled><span className='text-blue-600'>HTML basic</span></button>
  
  <button class="btn rounded-full ml-4" disabled><span className='text-blue-600'>CSS basic</span></button>
  
  <button class="btn rounded-full ml-4" disabled><span className='text-blue-600'>mern basic </span></button>
  
  <button class="btn rounded-full ml-4" disabled><span className='text-blue-600'>basic boostrapccs </span></button>
  
  <button class="btn rounded-full ml-4" disabled><span className='text-blue-600'>basic tailwindcc</span></button>
  
</div>
<h1 className='text-4xl text-blue-600 font-bold my-6'>WORK'S</h1>
<div class="mt-3">
   <button class="btn rounded-full bg-blue-600 hover:bg-blue-700" >
     <a href="https://xiaomi-warehouse.web.app/" target='blank' className=' hover:text-base uppercase'>xiaomi-warehouse</a>
   </button>
   <button class="btn rounded-full ml-4 bg-blue-600 hover:bg-blue-700" >
      <a href="https://my-tenth-project-design-by-own.netlify.app/" target='blank' className=' hover:text-base uppercase'>Dental Care</a>
   </button>
  <button class="btn rounded-full ml-4 bg-blue-600 hover:bg-blue-700" >
      <a href="https://react-router-project9.netlify.app/" target='blank' className=' hover:text-base uppercase'>Dell PC</a>
  </button>
</div>
    </div>
  </div>

        </div>
    );
};

export default MyPortfolio;