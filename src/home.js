import React, { createContext, useState } from 'react'
import Header from './container/Header';
import Table from './container/Table';
import Filter from './container/Filter';
import Card from './container/Card';
const store = createContext();

const Home = ({cardItem, myOrders,order}) => {
  // const [order,setOrder]= useState(0);
 
  const isTableSelected =true;
  // const myOrders=(item)=>{
   
  //   setOrder(order+1);
  //   // setCardItem(()=>
  //   //   [...cardItem,item]);
  //  // console.log("carditemssssssss",cardItem)
  // }

  return (
    <center>
    <div>
      
        <Header order={order} cardItem={cardItem}/>
        <Table isTableSelected={isTableSelected}/>
        <Filter />
        <Card order={order} myOrders={myOrders}/>
       
    </div>
    </center>
  )
}

export default Home;