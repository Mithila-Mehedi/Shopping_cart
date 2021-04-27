import React,{useState,useContext,useEffect} from 'react';
import {DataContext} from '../data';
import './cart.css'

const Cart = () =>{

    const value = useContext(DataContext);
    const [cart,setCart] = value.cart;
    const [index,setIndex] = useState('');
    const [count,setCount] =useState(0);
    const [total,setTotal] = useState(0)
    console.log(cart)
    console.log(value)

    useEffect(()=>{
        const getTotal =() =>{
            const res = cart.reduce((prev,item)=>{
                return prev + (item.price * count)
            },0)
            setTotal(res)   
        }
        getTotal()
       
        },[cart])

    

    if(cart.length===0){
        return <h3 style={{textAlign:"center"}}>Empty Cart</h3>
    }

    const increase = () =>{
        setCount(count+1)
        // console.log(count)
    }

    const decrease = () =>{
        setCount(count-1)
        // console.log(count)
    }

    const deleted = (id) =>{
        console.log('deleted',id)
        // alert("the product will be deleted")
        const newCart = cart.filter(item=> item._id!==id)
        setCart(newCart)
        console.log("deleted",newCart)
    }

    return(
        <div>
            {
           cart.map(product =>{
            return(
                <div className='details'>
                    <div className='img-container' 
                    // style={{backgroundImage:`url(${product.images[0]})`}}
                    >
                        <img src={product.images[index]}/>
                    </div>


                <div className='box-details'>
                    <h2>{product.title}</h2>
                    <h1>${product.price}</h1>

                    <div className='colors'>
                    {product.colors.map((color,index)=>(
                        <button key={index} style={{background:color}}></button>
                    ))}
                    </div>

                    <div className='size'>
                    {product.sizes.map((size,index)=>(
                        <button key={index}>{size}</button>
                    ))}
                    </div>
                    <p>{product.description}</p>
                    <p>{product.content}</p>
                    <p>{product.content}</p>
                     </div>

                     <div className='amount'>
                         <button onClick={increase}>+</button>
                         <span>{count}</span>
                         <button onClick={decrease}>-</button>
                    </div>
                    <div className='delete' onClick={()=>deleted(product._id)}> X</div>
                     
                </div>
            )
           })
        }
        <div className='payment'>
        <button>Payment</button>
        <h3>Total: $ {total}</h3>
        </div>
       
        </div>
    )
}
export default Cart