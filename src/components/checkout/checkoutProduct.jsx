import React from 'react'
import checkoutProduct from './checkoutProduct.css';
import { UseStateValue } from '../../StateProvider';

function CheckoutProduct({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = UseStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            item:{
                id: id,
                title: title,
                image: image,
                price: price, 
                rating: rating
            }
        })
    };

    return (
        <div className="checkoutProduct">
            <img src={image} alt=""/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
            </div>
            <p className="checkoutProduct__price">
                <small>€</small>
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))
                }
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            
        </div>
    )
}

export default checkoutProduct;
