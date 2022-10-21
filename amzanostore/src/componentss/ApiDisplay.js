import axios from 'axios';
import React, { Component } from 'react'



export class ApiDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }

    }

    componentDidMount() {
        console.log("componentDimount")
        axios.get("https://fakestoreapi.com/products")
            .then(res => {
                this.setState({
                    data: res.data



                })
                console.log(JSON.stringify(this.state.data))
            })
    }


    render() {
        return (
            <div className='container'>
            <div className='container-fluid'>
                <div className="row" >
                    <div className="card-group">
                        { this.state.data.map((res) => {
                            return (
                                <div className='col-3 mb-2' >
                                    <div className="card" style={{ height: "32rem", width: "24rem" }}>
                                        <div class="card-header">
                                            <p className="card-text"><b>Category :{res.category}</b></p>
                                        </div>
                                        <img src={res.image} style={{ height: "300px", width: "300px" }} className="card-img-top" alt="Network Issue" id="imagecard" />
                                        <div className="card-body">
                                            <p className="card-title"> <b>Title :</b>{res.title}</p>
                                            {/* <p className="card-text"><b> Description :</b>{res.description}</p> */}
                                        </div>
                                        <div class="card-footer text-muted d-flex justify-content-between">
                                            <p><b>Rate :{res.rating.rate}</b>---<b>price :{res.price}</b></p><br></br>
                                            {/* <p className="card-text"><b>Count :{res.rating.count}</b></p> */}
                                            {/* <p><b>{res.price}</b></p> */}
                                        </div>
                                    </div>
                                    <button className='btn btn-primary'>buy</button>
                                </div>
                            )
                        })}
                    </div>



                </div>
            </div>
            </div>
        )
    }
}






export default ApiDisplay
