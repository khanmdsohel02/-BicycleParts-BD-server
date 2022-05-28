import React from 'react';

const NotFound = () => {
    return (
        <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src={'https://i.ibb.co/FXRX8Fd/wordpress-404-error.jpg'} alt="" />
    <div className='pl-10'>
      <h1 class="text-5xl font-bold text-red-400">Page Not Found</h1>
      <p class="py-6 text-2xl capitalize text-indigo-400">this page is not available right now.search using proper keyword.</p>
    </div>
  </div>
</div>
    );
};

export default NotFound;