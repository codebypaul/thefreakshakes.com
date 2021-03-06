import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import NavItems from './NavItems'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5 d-flex flex-column  jsutify-content-center align-items-center">
                <div className="row w-100">
                    <Link to='/' className='nav-link'>
                        Freak Shakes NC
                    </Link>
                    
                    
                    {/*
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            
                        </li>
                        <li className="nav-item ml-5">
                            
                        </li>
                    </ul>
                    
                    <Link to="/cart" className="ml-auto">
                        <ButtonContainer>
                            <i className="fas fa-cart-plus"></i>
                            my cart
                        </ButtonContainer>
                    </Link>
                    */}
                </div>
                <NavItems/>

                
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--pastelGradient);
.nav-link{
    color: var(--mainWhite) !important;
    font-sze: 1.3rem;
    text-transform: capitalize;
}
`