import React, { useEffect } from 'react'
import { Circles } from  'react-loader-spinner'
import { useState } from 'react';
import { useStateContext } from '../../context/stateContext';
import { getShowProducts } from '../../api/products';
const Loader = () => {



  return (
    <div> 
       <Circles
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}/></div>  
  )
}

export default Loader;