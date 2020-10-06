import React, { Component } from 'react'
import FreakShake from '../Unicorn_Dazzle.JPG'


export default class Covercard extends Component {
    render() {
        return (
            <div className="container-fluid home-img-container d-flex justify-content-center p-5">
                <img className="freakShake" src={FreakShake} alt="freakshake"/>
            </div>
        )
    }
}

