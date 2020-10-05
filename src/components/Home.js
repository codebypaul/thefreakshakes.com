import React, { Component } from 'react'
import CoverCard from './CoverCard'
import ShopBar from './ShopBar'


export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <ShopBar></ShopBar>
            </React.Fragment>
        )
    }
}