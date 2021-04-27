import React,{useState,useContext} from 'react';
import {useParams} from 'react-router-dom'
import {DataContext} from '../data'
import './details.css'

const Details =() =>{
    const {id} = useParams()
    const value = useContext(DataContext)
    const [data] = value.products;
    const [index,setIndex] = useState('');
    const addCart = value.addCart;
    
    const Details = data.filter((product,index)=>(
        product._id === id
     ) )

    console.log(Details)
    return(
        <div className='details'>
            {
           Details.map(product =>{
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

                    <div className='thum'>
                    {product.images.map((img,index)=>(
                        <img src={img} key={index}
                         onClick={()=>setIndex(index)}/>
                    ))}
                    </div>

                    <button onClick={()=>addCart(product._id)}
                    class='btn btn-outline-warning'>ADD To CART</button>
                </div>
                </div>
            )
           })
        }
        </div>
    )
}
export default Details;