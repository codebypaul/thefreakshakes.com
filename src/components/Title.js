import React from 'react'

export default function Title ({name,title}){
    return (
        <div className="row">
            <div className="col-10 mx-auto my-2 text-center text-title">
                <h1 className="text-capitalize font-weight-bold">
                    <strong className="text-pink">{name}</strong> 
                    <strong className="text-blue text-capitalize text-title">{title} </strong>
                </h1>
            </div>
        </div>
    )
}