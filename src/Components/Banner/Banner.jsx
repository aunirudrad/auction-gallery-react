import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner-image h-[730px] bg-size-[auto_1650px] bg-position-[left_-550px_top_-500px] transform scale-x-[-1]'>
            <div className='pt-[239px] pl-[140px] transform scale-x-[-1] text-white'>
                <h1 className='text-[3rem] font-semibold'>Bid on Unique Items from <br /> Around the World</h1>
                <p className='sora-regular text-2xl font-light pt-5 pb-7'>Discover rare collectibles, luxury goods, and vintage <br />treasures in our curated auctions</p>
                <button className='sora-regular font-medium text-xl text-black bg-white rounded-full px-8 py-4 '>Explore Auctions</button>

            </div>
            
        </div>
    );
};

export default Banner;