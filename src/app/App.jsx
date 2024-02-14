import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Layout from '../page/Layout/Layout'
import Home from '../page/Home/Home'
import Admin from '../page/Admin/Admin'
import Products from '../page/Products/Products'
import Contact from '../page/Contact/Contact'
import Catalog from '../page/Catalog/Catalog'
import Header from '../page/Header/Header'
import Footer from '../page/Footer/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
