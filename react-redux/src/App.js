
import './App.css';
// import Reducer from './Reducer';
import Reducers from './Reducers';
import { createStore } from 'redux'
 import { Provider } from 'react-redux'
import Count from './components/Count';
import AntherComRedux from './components/AntherComRedux';
// import RudexCount from './components/RudexCount';
// import Reduxcount from './components/Reduxcount';

let store = createStore(Reducers)

function App() {
  return (
    <div className="App">

      <Provider store={store}>
         {/* <RudexCount/>
         <Reduxcount/> */}
         <Count/>
         <AntherComRedux />
      </Provider>,


    </div>
  );
}

export default App;
