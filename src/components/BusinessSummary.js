import React, { useEffect, useState } from 'react';
import { GrProductHunt } from 'react-icons/gr';
import { BiDollarCircle } from 'react-icons/bi';
import { GiThreeFriends } from 'react-icons/gi';
import { MdRateReview } from 'react-icons/md';


const BusinessSummary = () => {
const [totalReview, setTotalReview]  = useState('')
console.log(totalReview)
    useEffect(() => {
        fetch('https://ancient-beyond-42134.herokuapp.com/reviewCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                setTotalReview(count)
        })
    }, [])


    return (
         <div className='bg-indigo-400 grid lg:grid-cols-4 md:md:grid-cols-2 md: pl-20 gap-4 lg:pl-32 lg: rounded-2xl mt-28'>
            
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><GrProductHunt /></div>
                <div>
                    <h1 className='text-2xl text-white'>Available Part</h1>
                    <small className='text-white text-xl pl-4'>10000k +</small>
                </div>
                </div>
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><BiDollarCircle /></div>
                <div>
                    <h1 className='text-2xl text-white'>Annual Revenue</h1>
                    <small className='text-white text-xl pl-4'>$100000 + </small>
                </div>
                </div>
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><GiThreeFriends /></div>
                <div>
                    <h1 className='text-2xl text-white'>Customer</h1>
                    <small className='text-white text-xl'>Online & Off-line 20000 +</small>
                </div>
                </div>
                <div className='flex  items-center py-10'>
                <div className='text-5xl text-white pr-4'><MdRateReview /></div>
                <div>
                    <h1 className='text-2xl text-white'>Review</h1>
                    <small className='text-white text-xl pl-4'>{totalReview}</small>
                </div>
                </div>
            
            
            
        </div>
       
    );
};

export default BusinessSummary;