import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

function Sample() {
    const[names,setNames]=useState([])
    const[value,setValue]=useState()

    const url="http://192.168.3.113:8080/QuestyTasks/query.jsp?q"
    
    // useEffect(()=>{ 
    //     axios.get("http://192.168.3.113:8080/QuestyTasks/query.jsp?q={value}").then((data)=>{
    //         setNames(data.data)
    //         console.log(data.data)
    //     })

    // },[])
    const data=()=>{
        console.log("hello siva")
        axios.get(url+"="+value)
        .then((data)=>{
            setNames(data.data)
            console.log(data.data)
        })
    }
    
    
  return (
    <div>
        <h1>
            product data
        </h1>


        <input type='text'   onChange={(e)=>setValue(e.target.value)} value={value}  />
        <button onClick={data}>clik</button>

    
      {
        names.map((data)=>{
            return(
            <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.ename}</td>
            </tr>
            )
        })
      }
    </div>
  )
    }

export default Sample
