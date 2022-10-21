import React, { useEffect, useState } from 'react'
import { collection, deleteDoc, getDocs, doc,update } from 'firebase/firestore';
import { db } from '../Fairbase'
import { useNavigate } from 'react-router-dom';


const Show = () => {
    const [data, setData] = useState([])
    const response = collection(db, 'boards')

    const navi=useNavigate();

    

    const fetchData = async () => {
        const datas = await getDocs(response);
        setData(datas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

    }

    useEffect(() => {
        fetchData();
    }, [])

   const edits=(id)=>{

    const upda= doc(db, "boards", id);
    navi('/update')


   }

   

//    const deleteBoard = async (id) => {

//     const boardDoc = doc(db, "boards", id);

//     await deleteDoc(boardDoc);

//     getBoards();

//     navigate("/view");

//   };


   const deletes= async(id)=>{
    //    e.preventDefault();

    alert(id)
    const boardDoc = doc(db, "boards", id);
         await  deleteDoc(boardDoc)
 }

    const userdata = collection(db, 'boards')
    return (
        <div className='container'>
            <div >
                <table className='table table-hover'>
                    <thead>
                        <tr>
                            <td>title</td>
                            <td>description</td>
                            <td>author</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(dataa => {
                                return (
                                        <tr key={dataa.id}>
                                            <td>{dataa.title}</td>
                                            <td>{dataa.description}</td>
                                            <td>{dataa.author}</td>
                                            <td><button onClick={()=>edits(dataa.id)} className="btn btn-primary">Edit</button></td>
                                            <td><button onClick={()=>deletes(dataa.id)} className="btn btn-primary">Delete</button></td>

                                        </tr>
                                        
                                )
                            })
                        }
                    </tbody>

                </table>

            </div>





        </div>
    )
}

export default Show
