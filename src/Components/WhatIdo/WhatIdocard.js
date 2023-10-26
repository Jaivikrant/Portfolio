import React from 'react';
import "./WhatIdocard.css";

const WhatIdocard = ({list}) => {
  

  return (
    <>

   {list.map((item)=>{
    return<>
    <div className='whatido-card-container'> 
    <span className='whatido-tick'>✔</span>
    <div>{item.Description}</div>
    </div>
    </>
    
   })}
   

    </>
  )
}

export default WhatIdocard;