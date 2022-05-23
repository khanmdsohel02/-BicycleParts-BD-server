import React from 'react';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';

const Support = () => {
    return (
         <div className='bg-indigo-400 flex justify-around'>
            <div className='py-6'>
                <div>
                <div><MdOutlineProductionQuantityLimits /></div>
                <div>
                    <h1 className='text-2xl text-white'>Original products</h1>
                    <small className='text-white'>Only parts from trusted brand</small>
                </div>
                </div>
            </div>
            
        </div>
       
    );
};

export default Support;