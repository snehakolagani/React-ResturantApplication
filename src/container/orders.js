import React from "react";
import Card from "./Card";
import "../App.css";

const Orders = ({ cardItem }) => {
  // Create an object to count the quantity of each item
  const itemCount = {};
  cardItem.forEach((item) => {
    itemCount[item.name] = (itemCount[item.name] || 0) + 1;
  });

  //  // Create a unique list of items with their total quantities, price, and category
  //  const uniqueItems = Object.keys(itemCount).map((name) => ({
  //   name,
  //   quantity: itemCount[name],
  //   // Find the corresponding item in cardItem array and extract price and category
  //   price: cardItem.find((item) => item.name === name).price,
  //   category: cardItem.find((item) => item.name === name).category,
  // }));

  // Create a unique list of items with their total quantities, price, category, and imageUrl
  const uniqueItems = Object.keys(itemCount).map((name) => {
    const currentItem = cardItem.find((item) => item.name === name);
    return {
      name: currentItem.name,
      quantity: itemCount[name],
      price: currentItem.price,
      category: currentItem.category,
      imageUrl: currentItem.url,
    };
  });
console.log(uniqueItems[1].imageUrl)
  return (
    <div>
      <center>
        <div className="container">
          <div className="card-body">
            <h2>Order Summary</h2>
            <div style={{ display: "flex" }}>
              {uniqueItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "2px solid red",
                    padding: "10px",
                    margin: "10px",
                  }}
                >
                  <p>Item: {item.name}</p>
                  <p>Price: <strong>{item.price}</strong></p>
                  <p>Category: {item.category}</p>
                  <p>Quantity: <strong>{item.quantity}</strong></p>
                  <img src={item.imageUrl} className='card-img-top'  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Orders;
