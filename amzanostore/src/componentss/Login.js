import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const[userName, setUserName]=useState()
    const[Paasword,setPaasword]=useState();
    let navigate=useNavigate();

    

    const chekData=()=>{
      axios.get("http://localhost:3000/customerdata").then((res)=>{
      
           var result =res.data;
         result.filter(data=>{
        
          console.log("email "+data.customereEmailId)
          console.log("usetna,eme,d"+userName)


        if(data.customereEmailId === userName && data.customereConformPassWord === Paasword ) 
        {
          
            navigate('//apidata')
        }
        else{
          console.log(data.customereEmailId);
          console.log(data.customereConformPassWord)
          // alert("not mathed")
        }

      })

      

      })
    

    }

    const register=()=>{
        navigate('/signup')

    }


  return (
    <div>

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" >
          <div className="card-body p-5 text-center">

            <div className="mb-md-5 mt-md-4 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <div className="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" onChange={e=>setUserName(e.target.value)} value={userName} className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX">Email</label>
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                <label className="form-label"  onChange={e=>setPaasword(e.target.value)} value={Paasword} for="typePasswordX">Password</label>
              </div>

              <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-outline-light btn-lg px-5" onClick={chekData}>Login</button>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i classNmae="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <button className="btn btn-primary" onClick={register}>Sign Up</button>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Login
