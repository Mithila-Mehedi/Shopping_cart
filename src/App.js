import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import {DataProvider} from './components/data'
import Navbar from './components/navabar/navbar';
import Products from './components/Products/products';
import Home from './components/home';
import Details from './components/Details/details'
import Cart from './components/Cart/cart'

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <div class='App'> 
      <Navbar/>
        <Route path='/' exact component={Home}/>
       <Route path='/products/:id' component={Details}/>
        <Route  exact path='/products' component={Products}/>
        <Route path='/cart' component={Cart}/>
      </div>
      </BrowserRouter>
    </DataProvider>
  )
}

export default App
