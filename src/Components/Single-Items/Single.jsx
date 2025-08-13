import React, { useState } from 'react';
import { RiHeart3Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';


const Single = ({ item, handleBidNow }) => {

    const [icon, setIcon] = useState('white');
    const [isDisabled, setIsDisabled] = useState(false);

    const iconChange = () => {

        setIcon(previousIcon => (previousIcon === 'white' ? 'red' : 'white'));
        setIsDisabled(true);

    }
     
    const { sellItem, image, currentBid, timeLeft } = item;

    const notify = () => {
        toast.success("Item Added to your Favorite Lists", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
        });

    };

    return (

        <tr className='border-t-2 border-[#DCE5F3]'>
            <td className=''>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="h-24 w-24">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="text-[1.125rem]">{sellItem}</div>

                    </div>
                </div>
            </td>

            <td className='font-medium text-center text-[1.125rem]'>
                ${currentBid}
            </td>
            <td className='text-center font-medium text-[1.125rem]'>{timeLeft}</td>
            <th className='text-center font-medium text-[1.125rem]'>
                <button onClick={
                    () => {
                        handleBidNow(item);
                        notify();
                        iconChange();
                    }
                }
                    disabled={isDisabled} className={`text-[1.125rem] ${isDisabled ? "cursor-not-allowed" : "cursor-pointer"} `}>
                    {
                        icon === 'red' ? <FcLike size={30} /> : <RiHeart3Line size={30} />
                    } </button>


            </th>
        </tr >

    );
};

export default Single;