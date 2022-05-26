import React from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { MdOutlineDeliveryDining } from 'react-icons/md';
import { GiReturnArrow } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';


const Support = () => {
    return (
         <div className='bg-indigo-400 grid lg:grid-cols-4 md:md:grid-cols-2 md: pl-20 gap-4 lg:pl-32 lg:rounded-tr-full lg:rounded-bl-full'>
            
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><MdOutlineProductionQuantityLimits /></div>
                <div>
                    <h1 className='text-2xl text-white'>Original Products</h1>
                    <small className='text-white'>Only parts from trusted brand</small>
                </div>
                </div>
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><MdOutlineDeliveryDining /></div>
                <div>
                    <h1 className='text-2xl text-white'>Fast Delivery</h1>
                    <small className='text-white'>Free Shipping over $ 500 </small>
                </div>
                </div>
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><GiReturnArrow /></div>
                <div>
                    <h1 className='text-2xl text-white'>30 Days Returns</h1>
                    <small className='text-white'>30 days open purchase</small>
                </div>
                </div>
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><MdSupportAgent /></div>
                <div>
                    <h1 className='text-2xl text-white'>Online & Off Support</h1>
                    <small className='text-white'>24/7 day support</small>
                </div>
                </div>
            
            
            
        </div>
       
    );
};

export default Support;