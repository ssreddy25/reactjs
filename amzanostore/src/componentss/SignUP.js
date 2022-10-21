import React from 'react'
import  { ErrorMessage, Field, Form, Formik  } from "formik";
import * as yup from 'yup' 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignUP() {

    let navigate=useNavigate();

  return (
    
        
<Formik 
     initialValues={
        {
            Id:'',
            CustomerFristName:'',
            CustomereLastName:'',
            CustomereEmailId:'',
            CustomereNewPassWord:'',
            CustomereConformPassWord:'',
            CustomerePhoneNumber:'',
            CustomereState:'',
            CustomereCity:'',
            CustomereVillage:'',
            CustomerPinCode:''

        }
        
     }

     validationSchema={
    
            yup.object({
            Id:yup.number().required() ,  
            CustomerFristName:yup.string().required().min(4,"name should be four charaters").max(15,"name maxmium should be 15 charaters onlly"),
            CustomereLastName:yup.string().required().min(4,"name should be four charaters").max(15,"name maxmium should be 15 charaters onlly"),
            CustomereEmailId:yup.string().email().required("email requreied"),
            CustomereNewPassWord:yup.string(),
            CustomereConformPassWord:yup.string(),
            CustomerePhoneNumber:yup.number(),
            CustomereState:yup.string(),
            CustomereCity:yup.string().required("city requried"),
            CustomereVillage:yup.string().required("villaage requried"),
            CustomerPinCode:yup.number().required("pin requred")

            })
        
        }
         onSubmit ={
            vlauses=>{

                if(vlauses.CustomereNewPassWord === vlauses.CustomereConformPassWord){
                    alert("your pass word and confrom password equal")
                    console.log(JSON.stringify(vlauses))
                    axios.post("http://localhost:3000/customerdata",vlauses)
                    navigate('/login')


                }else{
                    alert("your pass word and  confrom password not equal")
                }
            
                // console.log(JSON.stringify(vlauses))
                // axios.post("http://localhost:3000/customerdata",vlauses)

        }
    }
    >
    {
        props =>(
            <div className="container p-3 mb-2 bg-primary text-white">
                    <h1>customer register  form</h1>

                    <Form>
                        <dl>
                           <dd>id</dd>
                            <dd><Field type="text" name="Id" ></Field></dd>
                            <dd><ErrorMessage name="Id" ></ErrorMessage></dd>
                            <dd>fristName</dd>
                            <dd><Field type="text" name="CustomerFristName"></Field></dd>
                            <dd><ErrorMessage name="CustomerFristName" ></ErrorMessage></dd>
                            <dd>lastName</dd>
                            <dd><Field type="text" name="CustomereLastName"></Field></dd>
                           
                            <dd><ErrorMessage name="CustomereLastName" ></ErrorMessage></dd>
                            <dd>emailID</dd>
                            <dd><Field type="text" name="CustomereEmailId"></Field>@email.com</dd>
                            <dd><ErrorMessage name="CustomereEmailId" ></ErrorMessage></dd>
                            <dd>newPassword</dd>
                            <dd><Field type="text" name="CustomereNewPassWord"></Field></dd>
                            <dd><ErrorMessage name="CustomereNewPassWord" ></ErrorMessage></dd>
                            <dd>confrompass word</dd>
                            <dd><Field type="text" name="CustomereConformPassWord"></Field></dd>
                            <dd><ErrorMessage name="CustomereConformPassWord" ></ErrorMessage></dd>
                            <dd>phoneNumber</dd>
                            <dd><Field type="text" name="CustomerePhoneNumber"></Field></dd>
                            <dd><ErrorMessage name="CustomerePhoneNumber" ></ErrorMessage></dd>
                            <dd>state</dd>
                            <dd><Field type="text" name="CustomereState"></Field></dd>
                            <dd><ErrorMessage name="CustomereState" ></ErrorMessage></dd>
                            <dd>city</dd>
                            <dd><Field type="text" name="CustomereCity"></Field></dd>
                            <dd><ErrorMessage name="CustomereCity" ></ErrorMessage></dd>
                            <dd>village</dd>
                            <dd><Field type="text" name="CustomereVillage"></Field></dd>
                            <dd><ErrorMessage name="CustomereVillage" ></ErrorMessage></dd>
                            <dd>pincode</dd>
                            <dd><Field type="text" name="CustomerPinCode"></Field></dd>
                            <dd><ErrorMessage name="CustomerPinCode" ></ErrorMessage></dd>
                            <div>
                            <button type='submit'>Register</button>
                            </div>

                        </dl>
                    </Form>
                    </div>
        )
    }




    

        
     

      

      </Formik>
    
  )
}

export default SignUP
