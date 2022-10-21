import React from 'react'
import { useNavigate } from 'react-router-dom';

function Amaza() {
    let navi=useNavigate()
   const login=()=>{
    navi('/login')
   }
  return (
    <div className='container'>
      <div>
        <h1>welcome to amazon shoping</h1>
        <h2>click the below butt</h2>
      <button className='btn btn-primary' onClick={login}> welcome to amzoan shoping</button>
    </div>
    </div>
  )
}

export default Amaza
