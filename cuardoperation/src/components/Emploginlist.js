import React, { useEffect, useState } from 'react'
import Emplogin from '../srevices/Emplogin'
import {useNavigate} from 'react-router-dom'

function Emploginlist() {
    const[login,setLogin]=useState([])
    const navi=useNavigate()

    useEffect(()=>{
        getAllData();
    },[])

    const getAllData=async ()=>{
        const loginData= await Emplogin.getemplogin()
         
        console.log(loginData.data)

         setLogin(loginData.data)
         
    }
    const deleteData=(id)=>{
        Emplogin.deleteEmplogin(id)

    }
    const editData=(id)=>{
        navi(`/update${id}`)
        
    }
  return (
    <div className='container'>
        <div className='card'>
            <div className='card-header'>
                  <h1>employ login details</h1>
            </div>
            <div className='card-body'>
                <table>
                    <thead>
                        <tr>
                            <td>id</td>
                            <td>email</td>
                            <td>passwoord</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           login.map((data)=>{
                                return(
                                    <tr key={data.id}>
                                        <td>{data.id}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>
                                            <button className='btn btn-primary' style={{margin:"10px"}}  onClick={()=>{editData(data.id)}}>Edit</button>
                                            <button className='btn btn-danger' onClick={()=>{deleteData(data.id)}}>Delete</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>

      
    </div>
  )
}

export default Emploginlist
