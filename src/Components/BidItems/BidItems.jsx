import React from 'react';
import { GiCrossedSwords } from "react-icons/gi";
import { ToastContainer, toast } from 'react-toastify';


const BidItems = ({ bidItem, deleteBidItem }) => {

    const { id, sellItem, totalBid, image, currentBid } = bidItem;

    const notify = () => {
        toast.warning("Item Removed from Favorites", {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            });
        }


    return (
        <div className="mx-4 my-5">
            <div className="flex gap-7 justify-center items-start border rounded-xl border-[#DCE5F3] p-4">
                <div className="avatar">
                    <div className="h-24 w-24">
                        <img
                            src={image}
                            alt="" />
                    </div>
                </div>
                <div >
                    <div className="text-[1.125rem] text-left h-[52px]">{sellItem}</div>
                    <div className='flex justify-start items-center gap-6 mt-12'>
                        <div>{currentBid}</div>
                        <div>Total Bids: {totalBid}</div>
                    </div>
                </div>
                <button  onClick={()=> {
                    deleteBidItem(currentBid, id);
                    notify();
                    
                }}  className="mt-2 hover:cursor-pointer">
                    <GiCrossedSwords size={25} />
                </button>
            </div>
            
        </div>
    );
}

export default BidItems;