import React, { Component } from 'react'
import ProductList from './ProductList'
import CoverCard from './CoverCard'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <CoverCard/>
                <ProductList/>
            </React.Fragment>
        )
    }
}