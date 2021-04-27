import React,{useContext,useState} from 'react';
import {DataContext} from '../data';
import './products.css'
import {Link} from 'react-router-dom'

const Products =() =>{
 const value = useContext(DataContext);
 const [data] = value.products;
 const [cart] = value.cart;
 const addCart = value.addCart;
 
 
    return(
        <div className='products'>
            {data.map(product =>{
                return(
     <div className='card' key={product._id}>
            <Link to={`/products/${product._id}`}>
                <img src={product.images[0]}/>
            </Link>

             <div className='box'>
             <h1 title={product.title}>
                 <Link to={`/products/${product._id}`}>
                     {product.title}
                 </Link>
             </h1>
                 <h2>${product.price}</h2>
                 <p>{product.description}</p>
                 
            </div>
            <button onClick={()=>addCart(product._id)}
            class="btn btn-warning">Add to cart</button>

    </div>
                )
            })}
            
        </div>
    )
}
export default Products;