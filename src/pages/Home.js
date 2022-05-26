import React from 'react';
import BusinessSummary from '../components/BusinessSummary';
import HBanner from '../components/HBanner';
import Part from '../components/Part';
import Support from '../components/Support';
import useParts from '../hooks/useParts';

const Home = () => {
    const [parts] = useParts()
    return (
        <div className='mt-24'>
        <HBanner />
        <div className='w-[95%] mx-auto'>
        <Support/>
        <h1 className='text-center mt-20 text-4xl'>BiCycle Part's</h1>
        <div className='mt-20 grid lg:grid-cols-3 md:grid-cols-2 gap-10  lg:ml-24 md: ml-12'>
        {parts.slice(0, 6).map(part =><Part
        key={part._id}
        part = {part}
        />)}
        </div>
        <BusinessSummary/>
        </div>
        </div>
    );
};

export default Home;