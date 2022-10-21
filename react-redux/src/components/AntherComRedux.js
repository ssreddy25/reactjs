import React from 'react'
import { connect } from "react-redux";

function AntherComRedux(props) {
  return (
    <div>
        <h1>anthor component</h1>
      <p>{props.count}</p>
    </div>
  )
}

      
const mapStateToProps = state => { //to access state mapState through access any component
    return {
    count: state.count
    };
    };

    

        
        
export default connect(mapStateToProps)(AntherComRedux)
