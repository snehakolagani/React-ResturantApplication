import React, { useState } from 'react'

const Table = ({isTableSelected}) => {
    const numbers=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    const inActiveBtn = 'btn btn-outline-primary m-2';
    const activeBtn = 'btn btn-outline-primary m-2 active';
    const [number,setNumber]= useState(null);
 
  return (
    <div>
        <center className='m-3'>
            <h4>Please select table :</h4>
            {numbers.map((num,index)=>(
                <div style={{display:'inline'}} key={index}>
                    <button className={number===num?activeBtn:inActiveBtn} onClick={()=>setNumber(num)}>
                        {num}

                    </button>

                </div>
            ))}
        </center>

    </div>
  )
}

export default Table