import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {ProductConsumer} from '../context'
import PropTypes from 'prop-types'

export default class Product extends Component {
    render() {
        const {id, title, img} = this.props.product
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-4 my-3">
                <CardContainer className="card text-white">
                    <ProductConsumer>
                        {(value) => (
                            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                            <Link to="details">
                                <img src={img} alt="product" className="card-img-top"/>
                            </Link>
                            {/*}
                            <button 
                                className="cart-btn"
                                disabled={inCart?true:false}
                                onClick={()=>{
                                    value.addToCart(id)
                                    value.openModal(id)
                            }}>
                                {inCart?(<p className="text-capitalize mb-0" disabled>in cart</p>):(<i className="fas fa-cart-plus"></i>)}
                            </button>
                            */}
                        </div>
                        )}
                        
                    </ProductConsumer>
                    {/* card footer */}
                    <div className="card-footer">
                        <p className="text-dark text-clickerScript mb-0">{title}</p>
                    </div>
                </CardContainer>
            </ProductWrapper>
        )
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
}

const ProductWrapper =styled.div`
.card{
    border-color:transparent;
    transition: all 1s linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transiition: all 1s linear;
}
&:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,.2);
        box-shadow: 2px 2px 5px 0 rgba(0,0,0,.2);
    }
    .card-footer{
        color:var(--mainDark);
        background: var(--pastelGradient);
    }   
}
.img-container{
    position: relative;
    overflow: hidden;
    
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: sclae(1.2);
}
.cart-btn{
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 1rem 2rem;
    background: var(--bloodRed);
    color:var(--mainWhite);
    font-size:1.4rem;
    border-radius:0.5rem 0 0 0;
    border: none;
    transform: translate(100%,100%);
    transition: all .75s linear;
}
.img-container:hover .cart-btn{
    transform: translate(0,0);
}
.cart-btn:hover{
    color:var(--lightGrey);
    cursor: pointer;
}
`
const CardContainer = styled.div`
    color: var(--mainDark);

`