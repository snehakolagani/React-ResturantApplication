import React from 'react'
import Card from './Card';
import '../App.css';

const Orders = ({cardItem}) => {
  console.log("ordercompo",cardItem)
  return (
    <div>
    <center>
    <div className='container'>
      <div className='card-body'>
     
   
      <h2>Order Summary</h2>
      {cardItem.map((item) => (
              <div key={item.id} style={{border: '2px solid red', margin:'5px' }}>
                <p>Item: {item.name}</p>
                <p>Price: {item.price}</p>
                <p>Category: {item.category}</p>
              </div>
            ))}
      </div>
    </div>
    </center>
    </div>
  )
}

export default Orders;