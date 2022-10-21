
import './App.css';
import {BrowserRouter ,Routes,Route} from 'react-router-dom'
import EmpCreateLogin from './components/EmpCreateLogin';
import Emploginlist from './components/Emploginlist';
import EmpUpdateLogin from './components/EmpUpdateLogin';
import Sample from './components/Sample';


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
      
      
      <EmpCreateLogin/>
      <Emploginlist/>
      <Routes>
        <Route path='/update:id' element={<EmpUpdateLogin/>}/>
      </Routes>
      </BrowserRouter> */}
      <Sample/>
    </div>
  );
}

export default App;
