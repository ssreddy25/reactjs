
import React, { Component } from 'react'
import { connect } from "react-redux";

export class RudexCount extends Component {
    increment = () => { //increment action
        this.props.dispatch({
        type: "INCREMENT"
        });
        };
        
        decrement = () => { //Descrement action
        this.props.dispatch({
        type: "DECREMENT"
        });
        };
        //design view
        render() {
        return (
        <div className="App mt-5">
        <center>
        <button onClick={this.increment} className="btn btn-success mr-5">
        Increment
        </button><span style={{padding:5}}></span>
        <button onClick={this.decrement} className="btn btn-danger">
        Decrement
        </button>
        <h2 className="mt-5 display-1">{this.props.count}</h2>
        </center>
        {/* <Home /> */}
        </div>
        );
        }
        }

        const mapStateToProps = state => { //to access state mapState through access any component
        return {
        count: state.count
        };
        };

        
        
        export default connect(mapStateToProps)( RudexCount) 
        
