import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/product';

const Shop = () => {
    const first10 = fakeData.slince(0,10);
    const [products,setProducts] = useState(first10);


    return (
        <div className = "shop-container">
             <div className = "product-container">
                {
                    products.map(product => <product product={product}>{product.name}</product>)
                }
            
            </div>
            <div className = "cart-container">
                <h3>This is cart</h3>
            </div>
          
        </div>
    );
};

export default Shop;