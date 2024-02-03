import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Header from './component_2/Header'
import Footer from './component_2/Footer'
import Pagenavigation from './Pagenavigation'
function Layout() {
  return (
   <>
    <Header/>
    <Pagenavigation/>
    <Outlet/>
    <Footer/>
   </>
  )
}

export default Layout