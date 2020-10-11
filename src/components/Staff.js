import React, { Component } from 'react'

export default class Staff extends Component {
    render() {
        return (
            <div className="coontainer-fluid p-5">
                
                <div className="col-sm-4 col-md-5 mx-auto m-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Laura Solly</h1>
                        </div>
                        <div className="card-body">
                            <p className="text-cormorant">Working in her step mothers ice cream shop throughout her younger years, Laura has learned the ins and outs of the business. Understanding what it takes to get started, the capital, the connections, and a plan; she understands the risk associated with opening this type of business and is well equip with handling them</p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-4 col-md-5 mx-auto m-5">
                    <div className="card">
                        <div className="card-header">
                            <h1>Jamilah Williams</h1>
                        </div>
                        <div className="card-body">
                            <p className="text-cormorant">With years of experience handling multiple teams. Jamilah knows what it takes to keep her teams running efficiently at all times. Always ready for any problems that arise she is quick and efficient, with a background in teaching, nursing, and customer service; ready to handle any emergency.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
