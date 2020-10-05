import React, { Component } from 'react'
import styled from 'styled-components'
import { ButtonContainer } from './Button'
import {Link} from 'react-router-dom'

export default class ShopBar extends Component {
    render() {
        return (
            <ShopWrapper>
                <Link to='/store'>
                    <ButtonContainer>
                        shop now
                    </ButtonContainer>
                </Link>
            </ShopWrapper>
        )
    }
}
const ShopWrapper = styled.div`
background: linear-gradient(to top, rgba(0,0,0,.8), var(--mainWhite));
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`