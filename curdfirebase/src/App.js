
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/Edit';
import Show from './components/Show';
import SignUp from './components/SignUp';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <h1>BORAD LIST</h1>
      <SignUp/>
      <ul className='list-unstyled'>
        <li><Link to='/create' className='btn btn-primary'> add borad</Link></li>
        <li><Link to='/show' className='btn btn-primary'> show data</Link></li>

      </ul>
     
      <Routes>
        <Route path='/create' element={<Create/>}/>
        <Route path='/edit'  element={<Edit/>} />
        <Route path='/show'  element={<Show/>}/>
        <Route path='/update' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
