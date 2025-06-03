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
  }, []);

  return (
    <div>
<div className='text-black'>

</div>
    </div>
  )
}

export default Home