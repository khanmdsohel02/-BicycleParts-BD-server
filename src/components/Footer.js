import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    
    


    return (
        <div className='bg-indigo-200 mt-20 pb-16'>
            <div className="grid lg:grid-cols-4 w-[80%] mx-auto gap-10 items-center py-10">
                <div className='md:ml-36 lg:-ml-10'>
                    <img src={'https://i.ibb.co/JthZQLt/logo.png'} alt="" />
                    <h4 className='pl-6 text-2xl py-3 text-indigo-700'>Payment Methods</h4>
                    <img src={"https://i.ibb.co/cwypqRg/methods.png"} alt=""/>
                </div>
                <div className='lg:ml-32 md:ml-40'>
                    <Link className='list-none text-indigo-500 pb-2 hover:font-semibold' to="/about" > <li>About Us</li></Link>
                   <Link className='list-none text-indigo-500 pb-2 hover:font-semibold' to="/contact"><li>Contact Us</li></Link>
                    <h6 className='py-4 text-lg text-indigo-700'> Follow Us On Social Media </h6>
              <a className='list-none text-indigo-500 pb-2 hover:font-semibold' href = {"https://www.facebook.com/"} target="_blank" rel="noopener noreferrer"><li>FaceBook</li></a>
                <a className='list-none text-indigo-500 pb-2 hover:font-semibold' href={"https://twitter.com/"} target="_blank" rel="noopener noreferrer"><li>Twitter</li></a>
                   <a className='list-none text-indigo-500 pb-2 hover:font-semibold' href={"https://www.youtube.com/"} target="_blank" rel="noopener noreferrer"> <li>YouTube</li></a>
                    <a className='list-none text-indigo-500 hover:font-semibold' href={"https://www.instagram.com/"} target="_blank" rel="noopener noreferrer"><li>Instagram</li></a>
                </div>
                <div className='lg:ml-28 md:ml-40'>
                    <h4 className='text-2xl text-indigo-700 pb-7'>Opening Hours</h4>
                    <p className='text-lg text-indigo-500'><span className='text-lg text-indigo-500'>Sunday - Thursday :</span>   24 Hour</p>
                    <div className="divider"></div> 
                    <p className='text-lg text-indigo-500'><span className='text-lg text-indigo-500'>Friday :</span> close</p>
                    <div className="divider"></div> 
                    < p className='text-lg text-indigo-500' > <span className='text-lg text-indigo-500'>Saturday :</span>  10.00 am to 05.00 pm</p >
                    <div className="divider"></div> 
                </div>
                <div className='lg:ml-32 md:ml-40'>
                    <h1 className='text-2xl text-indigo-700 pb-7'>CONTACT US</h1>
                    <p className='text-lg text-indigo-500'>khanmdsohel1998@gmail.com</p>
                    <div className="divider"></div> 
                    <p className='text-lg text-indigo-500'>+880 01832716948</p>
                    <div className="divider"></div> 
                </div>
            </div>
            <p className='text-center text-indigo-500'>Copyright © 2022 || bicyclepartsbd</p>
        </div>
    );
};

export default Footer;