import React from 'react';
import './product.css'

const product = (props) => {
    const {img, name ,price} = props.product;
    return (
        <div class="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller} </small> </p>
                <p>${price}</p>
                <p><small>Only {stock} left in stock-Order soon </small> </p>
            </div>

            
        </div>
    );
};

export default product;