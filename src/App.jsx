import { RiHeart3Line } from "react-icons/ri";

import './App.css'
import Banner from './Components/Banner/Banner'
import Items from './Components/Items/Items'
import Left from './Components/left-section/left'
import Navbar from './Components/Navbar/Navbar'
import { useState } from "react";
import NoBidItems from "./Components/NoBidItems/NoBidItems";
import BidItems from "./Components/BidItems/BidItems";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from 'react-toastify';


function App() {

  const [bidBag, setBidBag] = useState([]);

  const [bidAmount, setBidAmount] = useState(0);

  const handleBidNow = (item) => {
    // console.log(item);

    setBidBag([...bidBag, item]);
    const newAmount = bidAmount + item.currentBid;
    setBidAmount(newAmount);
    // deleteBidItem(id);
  }

  const deleteBidItem = (currentBid, id) => {
    // console.log(id);

    const remainingBidBag = bidBag.filter(bid => bid.id!==id);

    // console.log(remainingBidBag);
    setBidBag(remainingBidBag)

    const newAmount = bidAmount - currentBid;

    setBidAmount(newAmount);

    
  }

  // console.log(buttonEnabled);


  return (
    <>
      <header className='bg-white'>
        <Navbar></Navbar>
        <Banner></Banner>
      </header>
      <main className='sora-regular w-[85%] mx-auto mt-[132px] text-black mb-28'>
        <h2 className=' font-medium text-[2rem]'>Active Auctions</h2>
        <p className='text-xl pt-5 pb-8'>Discover and bid on extraordinary items</p>
        <section className='flex gap-6 justify-between items-start'>
          <div className='w-[70%] rounded-2xl bg-white py-8 px-8'>
            <Items handleBidNow={handleBidNow} ></Items>
          </div>
          <div className='w-[30%] rounded-2xl bg-white'>
            <div className="mx-auto mt-8 pb-8 flex gap-2 justify-center items-center text-[2rem] border-b-2 border-[#DCE5F3]">
              <RiHeart3Line />
              <h3>Favourite Items</h3>
            </div>
            <div className=" text-center border-b-2 border-[#DCE5F3] pb-12">
              {
                bidBag.length!==0 ? bidBag.map(bidItem => <BidItems key={bidItem.id} bidItem = {bidItem} deleteBidItem={deleteBidItem}></BidItems>) : <NoBidItems></NoBidItems>
              }
              
            </div>
            <div className="my-8 mx-auto flex justify-around items-center gap-4">
              <h2 className="text-[1.625rem]">Total bids Amount</h2>
              <h2 className="text-[1.625rem]">${bidAmount}</h2>

            </div>

          </div>

        </section>


      </main>
      <Footer></Footer>
      <ToastContainer />

    </>
  )
}

export default App
