import React from 'react'
import { UseStateValue } from '../../StateProvider';
import "./checkout.css";
import CheckoutProduct from "./checkoutProduct"

function checkout() {

    const [{ basket }] = UseStateValue();

    return (
        <div className="checkout">
            <img src="https://mipublionline.com/wp-content/uploads/2017/03/amazon-banner-final.jpg" alt="" className="checkout__ad"/>
        {basket?.length === 0 ? (
            <div>
                <h2>Your basket is empty</h2>
                <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item</p>
            </div>
        ) : (
            <div>
                <h2 className="checkout__title">Your shopping basket</h2>
                {/* List all the products of the checkout */}
                {basket.map(item => {
                   return (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                   );
                   })}
            </div>
        )}
        </div>
    );
}

export default checkout;
