import React, { Component } from 'react'
import FreakShake from '../Unicorn_Dazzle.JPG'


export default class Covercard extends Component {
    render() {
        return (
            <div className="col-xl mx-auto p-5">
                <div className="card">
                    <div class="img-container">
                        <img className="freakShake" src={FreakShake} alt="freakshake" className="card-img-top"/>
                    </div>
                </div>
                
            </div>
        )
    }
}

