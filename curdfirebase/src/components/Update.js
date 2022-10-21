import React ,{useEffect, useState} from 'react'
import { db } from '../Fairbase'
import { collection, doc} from 'firebase/firestore';


function Update() {
    const [author, setAuthor] = useState()
    const [description, setDescription] = useState()
    const [title, setTitle] = useState()
    const [data, setData] = useState([])
    const useCollection = collection(db, 'boards')

    const boardDoc = doc(db, "boards" )
    useEffect(()=>{
        setAuthor(boardDoc.author)
        setDescription(boardDoc.description)
        setTitle(boardDoc.title)

    },[])

    const update=()=>{

    }
  return (
    <div>
        <h1>welcome to update data</h1>

        <form>
                <div className="form-group">
                    <label htmlFor="formGroupExampleAutor">AutorName</label>
                    <input type="text" className="form-control" id="formGroupExampleAutor" name='author' value={author} onChange={(e) => setAuthor(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleInput2">Description</label>
                    <input type="text" class="form-control" id="formGroupExampleDescription" name='description' value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="formGroupExampleTitle">Title</label>
                    <input type="text" className="form-control" id="formGroupExampleTitle" name='title' value={title} onChange={(e) => setTitle(e.target.value)} />

                </div>
                <div>
                    <button  onClick={update} className='btn btn-primary'>button</button>
                </div>
            </form>
      
    </div>
  )
}

export default Update
