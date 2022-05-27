import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderModal from './OrderModal';

const PartDetails = () => {
    const { id } = useParams();
    const [part, setPart] = useState([]);
    
    

    
    useEffect(() => {
        fetch(`http://localhost:5000/part/${id}`)
            .then(res => res.json())
            .then(data => {
              setPart(data)
              
            })
    }, [])

    return (
        <>
              <div class="hero min-h-screen bg-base-100">
  <div class="hero-content flex-col lg:flex-row">
    <img src={part.image} alt='' class="max-w-lg rounded-lg shadow-2xl" />
    <div className='lg:ml-32'>
      <h1 class="text-5xl font-bold ml-4">{part.name}</h1>
      <p class="p-4 m-4 bg-indigo-100 rounded-full">Price: <span className='text-indigo-400 text-[17px]'>${part.price} per unit </span>  </p>
      <p class="p-4 m-4 bg-indigo-100 rounded-full">Today: <span className='text-indigo-400 text-[17px]'>30% discount</span >  </p>
      <p class="p-4 m-4 bg-indigo-100 rounded-full">Brand: <span className='text-indigo-400 text-[17px]'>Duronto </span></p>
      <p class="p-4 m-4 bg-indigo-100 rounded-full">Available Quantity: <span className='text-indigo-400 text-[17px]'>{part.quantity} </span></p>
      <p class="p-4 m-4 bg-indigo-100 rounded-full">Min Order Quantity: <span className='text-indigo-400 text-[17px]'>More than 500 unit</span></p>
      <p class="p-4 m-4 bg-indigo-100 rounded-full">Product Id: <span className='text-indigo-400 text-[17px]'>{part._id}</span></p>
    </div>
  </div>
</div>
<div className='text-center lg:-mt-36 md:mt-28 sm:mt-28 lg:w-3/5  mx-auto'><article>{part.about}</article></div>
<OrderModal modalData= {part} setModalData={setPart}/>
        </>
    );
};

export default PartDetails;
