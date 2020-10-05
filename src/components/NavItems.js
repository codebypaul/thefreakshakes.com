import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navitems extends Component {
    render() {
        return (
            <div className="container-fluid row d-flex justify-content-around font-weight-bold">
                {/*<Link className="px-5" to='/'></Link>*/}
                {/*<Link className="px-5" to='/'>Contact Us</Link>
                <Link className="px-5" to='/'>Shop</Link>*/}
                <Link className="px-5" to='/staff'>Staff</Link>
                <Link className="px-5" to='/about'>About</Link>
                {/*<Link className="px-5" to='/'>Become a ShakeFreak</Link>*/}
            </div>
        )
    }
}
