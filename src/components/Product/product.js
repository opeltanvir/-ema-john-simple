import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import './product.css'

const product = (props) => {
    const {img, name ,price ,stock} = props.product;
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
                <button 
                className="main-button"
                onClick={props.handleAddProduct}
                > 
                   <FontAwesomeIcon icon={faShoppingCart /> add to cart
                 </button>
            </div>

            
        </div>
    );
};

export default product;