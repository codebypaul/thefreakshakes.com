import React, { Component } from 'react'
import FreakShake from '../Unicorn_Dazzle.JPG'
import styled from 'styled-components'

export default class Covercard extends Component {
    render() {
        return (
            <Cover className="p-2 bg-light">
                <MainCard className=" mx-auto col-sm-4 col-lg-4 p-3">
                    <div class="img-container">
                        <img src={FreakShake} alt="freakshake" className="card-img freakShake"/>
                    </div>
                </MainCard>
                
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
const MainCard =styled.div`
background: var(--pastelPink);
`