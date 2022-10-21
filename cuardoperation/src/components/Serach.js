import React, { useState,useEffect } from 'react'

import axios from 'axios';

function  Serach() {
    const[names,setNames]=useState([])

    useEffect(()=>{ 
        axios.get("https://fakestoreapi.com/products").then((data)=>{
            setNames(data)
        })

    },[])
  return (
    <div>
        <h1>
            product data
        </h1>
      {
        names.map((data)=>{
            <tr key={data.id}>
                <td>{data.title}</td>
            </tr>
        })
      }
    </div>
  )
}

export default Serach
