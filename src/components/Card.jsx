import React from 'react';


import '../styles/card.scss'

export default function Card(props) {

    return (
        <>
            <div className="card">
                <img src={props.img} alt="imagem do produto" />
                <div className="description">
                    <div className="discount">
                        <span className="textDiscountQuantity">Desconto</span>
                        <span className="discountQuantity">{props.discount}% </span>
                    </div>
                    <div className="quantity">
                        <span className="textDiscountQuantity">Quantidade</span>
                        <span className="discountQuantity">{props.quantity}</span>
                    </div>
                </div>
                <span id="descriptionProduct">{props.description}</span>
            </div>
        </>
    )
}