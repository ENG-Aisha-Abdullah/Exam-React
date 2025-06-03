import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios'
function Home() {
   
const [prodect, setProdect] = useState([])
   

    useEffect(() => {
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => console.log(data));


    const prodect = (()=> {
   map.setProdect();
    })
  }, [prodect.title]);

  return (
    <div>
<div className='text-black'>
{prodect}
</div>
    </div>
  )
}

export default Home