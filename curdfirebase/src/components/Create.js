import React, { useEffect, useState } from 'react'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../Fairbase'
import { async } from '@firebase/util';

function Create() {
    const [author, setAuthor] = useState()
    const [description, setDescription] = useState()
    const [title, setTitle] = useState()
    const useCollection = collection(db, 'boards')

        let data = {
            "author": author,
            "description": description,
            "title": title
        }
       
    const addData = async (e) => {
        e.preventDefault();
        await addDoc(useCollection, data);

        console.log(useCollection)


    }



    return (
        <div>
            <h1>"welcome to faire base technology"</h1>

            <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleAutor">AutorName</label>
                    <input type="text" className="form-control" id="formGroupExampleAutor" name='author' onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleDescription" name='description' onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleTitle">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleTitle" name='title' onChange={(e) => setTitle(e.target.value)} />

                </div>
                <div>
                    <button  onClick={addData} className='btn btn-primary'>button</button>
                </div>
            </form>


        </div>
    )
}

export default Create
