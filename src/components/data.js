import React,{useState,useEffect,createContext} from 'react';

export const DataContext = createContext()

export const DataProvider = (props) =>{
    const [data,setData] = useState([
        {
            "_id": "1",
            "title": "Watch Product 01",
            "images": [
                // "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                // "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                // "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                // "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                // "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                // "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80"
               
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count":1
        },
        {
            "_id": "2",
            "title": "Watch Product 02",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count":1

        },
        {
            "_id": "3",
            "title": "Watch Product 03",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count":1,
            "name" :"mithila"
        },
        {
            "_id": "4",
            "title": "Watch Product 04",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img1.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count":1,
            "name" :"mithila"
        },
        {
            "_id": "5",
            "title": "Watch Product 05",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img5.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count":1,
            "name" :"mithila"

        },
        {
            "_id": "6",
            "title": "Watch Product 06",
            "images": [
                "https://www.upsieutoc.com/images/2020/07/18/img6.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img2.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img3.jpg",
                "https://www.upsieutoc.com/images/2020/07/18/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count":1,
            "name" :"mithila"

        }

    ])

    const [cart,setCart] = useState([])

    const addCart =(id)=>{
        const newCart= data.filter(product=> product._id===id)
        setCart([...cart,newCart[0]])
        console.log(cart)
        alert("The product has been added to the cart")


    }

    useEffect(()=>{
       const dataCart = JSON.parse(localStorage.getItem('dataCart'))
       if(dataCart) setCart(dataCart)
    },[])

    useEffect(()=>{
        localStorage.setItem('dataCart',JSON.stringify(cart))
    },[cart])


    const value ={
        products:[data,setData],
        cart:[cart,setCart],
        addCart:addCart
    }

    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}