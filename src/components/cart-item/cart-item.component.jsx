import React from 'react'
import './cart-item.styles.scss';

export default function CartItem({id, name, price, quantity, imageUrl}) {
    return (
        <div className="cart-item">
            <div className="cart-item__image-box">
                <img className="cart-item__image" src={imageUrl} alt={`pic-of-${id}`} />
            </div>
            
            <div className="cart-item__content">
                <span className="cart-item__name">{name}</span>
                <span className="cart-item__price">{quantity} x ${price}  </span>
            </div>
        </div>
    )
}
