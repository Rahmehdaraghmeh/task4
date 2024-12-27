import React from 'react'
import Navbar from './component/navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Product from './component/product/Product'
import Quotes from './component/quotes/Quotes'
import Home from './component/home/Home'
import Add from './component/add/Add'
import Details from './component/details/Details'
import Catogare from './component/catogare/Catogare'
import Footer from './component/footer/Footer'
import Detailscatog from './component/detailsca/Detailscatog'

export default function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path='/product' element={<Product/>}></Route>
    <Route path='/qoutes' element={<Quotes/>}></Route>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/add' element={<Add/>}></Route>
    <Route path='/catogre' element={<Catogare/>}></Route>
  
    <Route path='/detail/:id' element={<Details/>}></Route>
    <Route path='/detailcat/:slug' element={<Detailscatog/>}></Route>

  </Routes>
  <Footer/>
  </>
  )
}
