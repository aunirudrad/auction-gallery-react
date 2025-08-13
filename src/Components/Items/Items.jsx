import React, { useEffect, useState } from 'react';
import Left from '../left-section/left';

const Items = ({ handleBidNow }) => {
    const [items, setItems] = useState([])

    useEffect(()=> {
        fetch("ItemsAuctions.json")
        .then(res=>res.json())
        .then(data=>setItems(data))
    }, [])
    return (
        <div>
            {/* <h1>total Items: {items.length}</h1> */}
            <div className="all-items">
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr className='text-black text-center text-xl'>

                                    <th className='text-left'>Items</th>
                                    <th>Current Bid</th>
                                    <th>Time Left</th>
                                    <th>Bid Now</th>
                                </tr>
                            </thead>
                            
                            <Left items={items} handleBidNow={handleBidNow} ></Left>
                            
                        </table>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Items;