import React,{useContext} from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'
import Cartimg from '../Cart/shopping-cart-solid.svg'
import {DataContext} from '../data'

const style={
    color:"white",
    textDecoration:"none"
}

const Navbar =() =>{
 const value = useContext(DataContext)
const [cart] = value.cart;
    return(
        <nav class='navbar navbar-dark bg-dark'>
            <ul>
                <li>
                   <Link to='/'>
                       Home
                   </Link>
                    
                </li>
                <li>
                    <Link to='/products'>Products</Link>
                </li>
                <li>About</li>
                <li>Contact</li>
                <li>Login/Register</li>
                
            </ul>
            <div className='cart-icon'>
                <span>{cart.length}</span>
                <Link to='/cart'>
                    <img src={Cartimg} width="30"/>
                </Link>
            </div>
            
            
        </nav>
    )

}
export default Navbar;