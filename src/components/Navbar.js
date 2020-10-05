import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {ButtonContainer} from './Button'


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/' className='nav-link'>
                    Freak Shakes NC
                </Link>
                <Link to='/store' className='nav-link mr-auto'>
                    products
                </Link>
                
                {/*
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        
                    </li>
                    <li className="nav-item ml-5">
                        
                    </li>
                </ul>
                */}
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer>
                        <i className="fas fa-cart-plus"></i>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainGradient);
.nav-link{
    color: var(--mainWhite) !important;
    font-sze: 1.3rem;
    text-transform: capitalize;
}
`