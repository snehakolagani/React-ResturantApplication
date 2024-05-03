import React, { useState } from 'react'

const Filter = () => {
    const prod=["All items","Rice items","Cool Drinks","pizza","Hot Drinks"];
    const [filter,serFilter] = useState('All items');
  return (
    <div>
      <center className='mt-3'>
        <span className='h5 m-1'>Filter</span>
        <select name='filter' className='p1' onChange={(e)=>serFilter(e.target.value)}>
          {prod.map((item,index)=>(
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
        <button className='btn btn-sm btn-primary m-2' onClick={()=>console.log(filter)}>Submit</button>
      </center>

    </div>
  )
}

export default Filter