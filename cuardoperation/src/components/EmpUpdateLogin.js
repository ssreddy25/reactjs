import React, { useEffect, useState } from 'react'
import Emplogin from '../srevices/Emplogin';
import {useParams} from 'react-router-dom'


function EmpUpdateLogin() {
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();
    
    const params = useParams();

    useEffect(()=>{
        Emplogin.getemploginid(params.id).then((data)=>{
            setEmail(data.data.email)
            setPassword(data.data.password)
        })

    },[])
    const update=(e)=>{
        e.preventDefault()
        Emplogin.updateEmplogine(params.id,{email,password})

    }
  return (
    <div className='container'>
         <form>
            <label>email id</label>
            <input type="text" name='email' className='form-control' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            <label>passwoord</label>
            <input type="password" name='email' className='form-control' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            <button  onClick={update} className="btn btn-primary" >update</button>
        </form>
      
    </div>
  )
}

export default EmpUpdateLogin
