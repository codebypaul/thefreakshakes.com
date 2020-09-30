import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return(
            <React.Fragment>
                <Switch>
                    <Link to='/about'>
                        <div className="row d-flex justify-content-center align-items-center">
                        </div>
                    </Link>
                    <Link to='/staff'>
                        
                    </Link>
                </Switch>
            </React.Fragment>
        )
    }
}