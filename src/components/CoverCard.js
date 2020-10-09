import React, { Component } from 'react'
import FreakShake from '../Unicorn_Dazzle.JPG'
import styled from 'styled-components'

export default class Covercard extends Component {
    render() {
        return (
            <Cover className="p-2 bg-dark">
                <div className="mx-auto col-sm-4 col-lg-4 bg-secondary p-3">
                    <div class="img-container">
                        <img src={FreakShake} alt="freakshake" className="card-img freakShake"/>
                    </div>
                </div>
                
            </Cover>
        )
    }
}

const Cover = styled.div`

.img-container{
    position: relative;
    overflow: hidden;
    
}
`