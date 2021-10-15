import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slince(0,10);
    const [products,setProducts] = useState(first10);
    
    const handleAddProduct = () =>{
        // console.log('Product added');
    } 


    return (
        <div className = "shop-container">
             <div className = "product-container">
                {
                    products.map(pd => <product
                    handleAddProduct={handleAddProduct} 
                    product={pd}
                    ></product>) 
                }
            
            </div>
            <div className = "cart-container">
                <h1>This is cart</h1>
                <h2>This is cart</h2>
                <h3>This is my</h3>


            </div>
          
        </div>
    );
};

export default Shop;