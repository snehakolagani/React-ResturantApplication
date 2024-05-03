import React from 'react'
import Card from './Card';
import '../App.css';

const Orders = (cardItem) => {
  console.log("ordercompo",cardItem)
  return (
    <div>
    <center>
    <div className='container'>
      <div className='card-body'>
     
   
      <h2>Order Summary</h2>
      
        <div>
          <p>Item: </p>
          <p>Price: </p>
          <p>Quantity: </p>
        </div>
     

     
      </div>
    </div>
    </center>
    </div>
  )
}

export default Orders;