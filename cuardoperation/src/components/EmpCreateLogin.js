import React, { useState } from 'react'
import Emplogin from '../srevices/Emplogin';

function EmpCreateLogin() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

  const  login=(e)=>{
    e.preventDefault();
    Emplogin.updateEmplogin({email,password})


  }

  return (
    <div className='container'>
        <form>
            <label>email id</label>
            <input type="text" name='email' className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <label>passwoord</label>
            <input type="password" name='email' className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button  onClick={login} className="btn btn-primary" >login</button>
        </form>
      
    </div>
  )
}

export default EmpCreateLogin
