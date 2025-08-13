import React from 'react';

const Footer = () => {
    return (

        <footer className="text-center bg-white py-32">
            <div className="">
                <a className="text-3xl"><span className='text-[#003EA4]'>Auction</span><span className='text-[#FFD337] font-bold'>Gallery</span></a>
                <div className="flex justify-center items-center gap-5 mt-4 mb-6 text-[1.375rem]">
                    <h3>Bid.</h3>
                    <h3>Win.</h3>
                    <h3>Won.</h3>
                </div>
                <div className="flex justify-center items-center gap-12 text-[1.125rem] mb-8">
                    <h2>Home</h2>
                    <h2>Auctions</h2>
                    <h2>Categories</h2>
                    <h2>How to works</h2>
                </div>
                <p className="text-[1.125rem]">&copy; 2025 AuctionHub. All rights reserved.</p>


            </div>

        </footer>
    );
};

export default Footer;