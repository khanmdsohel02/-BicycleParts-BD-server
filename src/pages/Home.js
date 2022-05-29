import React, { useEffect, useState } from 'react';
import {  Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import BusinessSummary from '../components/BusinessSummary';
import HBanner from '../components/HBanner';
import Part from '../components/Part';
import Support from '../components/Support';
import useParts from '../hooks/useParts';
import Branding from '../components/Branding';
import Footer from '../components/Footer';

const Home = () => {
    const [parts] = useParts()
     const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://ancient-beyond-42134.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
        

 return(
        <div className='mt-24'>
        <HBanner />
        <div className='w-[95%] mx-auto'>
        <Support/>
        <h1 className='text-center mt-20 text-4xl'>BiCycle Part's</h1>
        <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10  lg:ml-24 md:-ml-12'>
        {parts.slice(0, 6).map(part =><Part
        key={part._id}
        part = {part}
        />)}
        </div>
        <BusinessSummary/>
        </div>
         <div className=' w-[70%] m-auto mt-24 bg-indigo-400 py-10 rounded-tl-full rounded-tr-full'>
               <h1 className='text-center text-3xl text-white'>Dealer Review</h1>
                < Swiper  modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}>
                    {
                        reviews.map(({ image, client, about, _id }) => {
                            return (
                               < SwiperSlide key={ _id} className = 'flex flex-col items-center text-center p-8 w-[100%]' >
                               <div>
                                  <img className="mb-6  w-48 mask mask-squircle" src={image} alt="client" />
                                </div>
                                 <div>
                                      <h3 className='text-xl text-white'>{client}</h3>
                                      <p className='text-center py-4 text-white'>{about}</p>
                                 </div>
                                </SwiperSlide>
                            ) } ) }
                </Swiper>
         </div>
         <Branding/>
         <Footer/>
        </div>
    );
};

export default Home;