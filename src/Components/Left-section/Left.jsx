import React from 'react';
import Single from '../Single-Items/Single';

const Left = ({ items, handleBidNow }) => {

    // console.log(items);
    
    return (
            <tbody>
                {
                items.map(item => <Single key={item.id} handleBidNow={handleBidNow} item={item}></Single>)
                }

            </tbody>

    );
};

export default Left;