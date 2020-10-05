import React, { Component } from 'react'
import Product from'./Product'
import Title from './Title'
import {ProductConsumer} from '../context'
import styled from 'styled-components'

export default class ProductList extends Component {
    render(){
        return (
            <React.Fragment>
                <div className="py-5">
                    <TitleBar className="container-fluid d-flex justify-content-center row bg-light">
                        <Title name="Freak" title="Shakes"></Title>
                    </TitleBar>
                    <div className="container">
                        
                        <div className="row">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}></Product>
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
const TitleBar = styled.div`
    width:100vw;
`