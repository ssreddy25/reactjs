import React, { useEffect, useState } from 'react'
import { db } from '../Fairbase'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

function SignUp() {

    const [fristname, setFristname] = useState()
    const [lastname, setLastName] = useState()
    const [emailid, setemailid] = useState()
    const [newpassword, setnewpassword] = useState()
    const [confrompassword, setconfrompassword] = useState()
    const [mobilenumber, setmobilenumber] = useState()
    const [state, setstate] = useState()
    const [city, setcity] = useState()
    const [village, setvillage] = useState()
    const [pincode, setPincode] = useState()

    const userData = collection(db, "signup")

    const user = {
        "city":city,
        "confrompassword":confrompassword,
        "emailid":emailid,
        "fristname":fristname,
        "lastname":lastname,
        "mobilenumber":mobilenumber,
        "newpassword":newpassword,
        "pincode":pincode,
        "state":state,
        "village":village
        // "emailid":emailid,
        // "newpassword":newpassword,
        // "confrompassword":confrompassword,
        // "mobilenumber":mobilenumber,
        // "state":state,
        // "city":city,
        // "village":village,
        // "pincode":pincode
       

    }


    const dataAdd = async(e) => {
        e.preventDefault();
        console.log(userData)

        await addDoc(userData,user )
        console.log(userData)


    }

    // useEffect(() => {

    // }, [])



    return (
        <div className='container'>
            <form onSubmit={dataAdd}>
                <div className="form-group">
                    <label htmlFor="exampleInputFristName">fristname</label>
                    <input type="text" className="form-control" value={fristname} onChange={(e) => setFristname(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputLastName">lastname</label>
                    <input type="text" className="form-control" value={lastname} onChange={(e) => setLastName(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">emailid</label>
                    <input type="text" className="form-control" value={emailid} onChange={(e) => setemailid(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">new password</label>
                    <input type="password" className="form-control" value={newpassword} onChange={(e) => setnewpassword(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">confrompassword</label>
                    <input type="password" className="form-control" value={confrompassword} onChange={(e) => setconfrompassword(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">phone number</label>
                    <input type="text" className="form-control" value={mobilenumber} onChange={(e) => setmobilenumber(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">state</label>
                    <input type="text" className="form-control" value={state} onChange={(e) => setstate(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">city</label>
                    <input type="text" className="form-control" value={city} onChange={(e) => setcity(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">village</label>
                    <input type="text" className="form-control" value={village} onChange={(e) => setvillage(e.target.value)} />

                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">pincode</label>
                    <input type="text" className="form-control" value={pincode} onChange={(e) => setPincode(e.target.value)} />

                </div>

                <button className="btn btn-primary" type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default SignUp
