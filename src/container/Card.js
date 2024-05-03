import React, { useEffect, useState } from 'react';
//import data from '../data.json'
 

const Card = ({order,myOrders}) => {
    
    const [data,setData]=useState([]);
    
    const getData=()=>{
        fetch('data.json',{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }).then(
            response =>response.json()).then(json=>setData(json.items))
        }
        useEffect(()=>{
            getData()
        },[])
        return(
            <center>
             {data.length > 0 ?      
            <div className='container'>
                <div className='row'>
                    {data.map((item,index)=>(
                        <div className='col-md-4' style={{padding:"5px"}}>
                            <div className='card' style={{width:"15rem",padding:"3px"}}>
                            <img src={item.url} className='card-img-top'  />
                            <div className='card-body'>
                                <h5 className='card-title'>{item.name}</h5>
                                <div className='card-title'>{item.price}</div>
                                <button className='btn btn-primary' onClick={()=>myOrders(item)}>Order</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
 : <div className='spinner-border text-primary'></div>}
            </center>
        )
        
        
    
   }
    

export default Card;