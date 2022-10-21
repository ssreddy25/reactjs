import React from 'react'
import { connect } from "react-redux";
function Count(props) {
    const incremnt = () => {
        props.dispatch({
            type: "Increment"
        });
    }

    const decremnt = () => {
        props.dispatch({
            type: "Decrement"
        });
    }



    return (
        <div>
            <p >{props.count}</p>
            <button className='btn btn-primary mt-5' onClick={incremnt}>
                +
            </button>
            <button className='btn btn-primary mt-5' onClick={decremnt}>
                -
            </button>

        </div>
    )
}

      
const mapStateToProps = state => { //to access state mapState through access any component
    return {
    count: state.count
    };
    };

    

        
        
        export default connect(mapStateToProps)(Count) 

