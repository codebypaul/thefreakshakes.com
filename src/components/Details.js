import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {img,info,title} = value.detailProduct
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue text-zcool my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} className="img-fluid" alt="product"></img>
                                </div>
                                <div className="col-10 mx-auto col-md-6 my-3">
                                    <p className="text-capitalize text-sacramento font-weight-bold mt-3 mb-0">
                                        some info about the product :
                                    </p>
                                    <p className="text-muted text-clickerScript">{info}</p>
                                    <div>
                                        <Link to='/store'>
                                            <ButtonContainer>
                                                see more shakes
                                            </ButtonContainer>
                                        </Link>
                                        {/*
                                        <ButtonContainer 
                                            cart
                                            disabled={inCart?true:false} 
                                            onClick={()=>{
                                                value.addToCart(id)
                                                value.openModal(id)
                                        }}>
                                            {inCart? "in cart" : "add to cart"}
                                        </ButtonContainer>
                                        */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}