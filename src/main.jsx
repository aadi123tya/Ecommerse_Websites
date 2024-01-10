import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './Component/Home.jsx'
import Layout from './Component/Layout.jsx'
import Product, { rootloader } from './Component/Product.jsx'
import About from './Component/About.jsx'
import Contact from './Component/Contact.jsx'
import SingleProduct from './Component/SingleProduct.jsx'
import Footer from './Component/component_2/Footer.jsx'
import Error from './Component/Error.jsx'
import { ThemeProvider } from 'styled-components'
import { UserContextProvider } from './context/context.js'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import Cart from './Component/Cart.jsx'

const router = createBrowserRouter(
createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/home' element={<Home/>}></Route>
  <Route path='/About' element={<About/>}></Route>
  <Route path='/Product' loader={rootloader} element={<Product/>}></Route>
  <Route path='/Contact' element={<Contact/>}></Route>
  <Route path='/SingleProduct' element={<SingleProduct/>}></Route>
  <Route path='*' element={ <Error/> }></Route>
  <Route path='cart' element={ <Cart/> }></Route>
  <Route path='s' element={ <SingleProduct/> }></Route>
 
  
  {/* <Route path='*' element={<App/>}></Route> */}
  
<Route path='/footer' element={<Footer/>}></Route>
</Route>
)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
 
    <RouterProvider router={router}/>
  </Provider>,
)
