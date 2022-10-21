import React from 'react'
import { connect } from "react-redux";

function Reduxcount(props) {

   const increment = () => { //increment action
        props.dispatch({
        type: "INCREMENT"
        });
        }
        
      const  decrement = () => { //Descrement action
        props.dispatch({
        type: "DECREMENT"
        });
    }
        

  return (
    <div className="App mt-5">
        <center>
        <button onClick={increment} className="btn btn-success mr-5">
        Increment
        </button><span style={{padding:5}}></span>
        <button onClick={decrement} className="btn btn-danger">
        Decrement
        </button>
        <h2 className="mt-5 display-1">{props.count}</h2>
        </center>

        </div>
  )
}
        
        
        

       
const mapStateToProps = state => { //to access state mapState through access any component
    return {
    count: state.count
    };
    };

    

        
        
        export default connect(mapStateToProps)(Reduxcount) 
