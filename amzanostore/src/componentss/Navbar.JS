import React from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
   let navi=useNavigate()
   const login=()=>{
    navi('/login')
   }
  return (
    <div>
        <h1>welcome</h1>
      <button className='btn btn-primary' onClick={login}> welcome to amzoan shoping</button>
    </div>
  )
}

export default Nav
