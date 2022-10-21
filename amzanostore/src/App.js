
import './App.css';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import ApiDisplay from './componentss/ApiDisplay';
import Login from './componentss/Login';
import SignUP from './componentss/SignUP';

import Amaza from './componentss/Amaza';

function App() {
  return (
    <div className="App">
      {/* <ApiDisplay/> */}
      {/* <SignUP/> */}
      {/* <Login/> */}
      <BrowserRouter>
      {/* <Login/> */}
      <Amaza/>
      <Routes>
        <Route path='/signup' element={<SignUP/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/apidata' element={<ApiDisplay/>}/>
      </Routes>
      
      </BrowserRouter>

     
    </div>
  );
}

export default App;
