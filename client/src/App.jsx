import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/footer'
import CategoryProduct from './Pages/category/CategoryProduct'
import Home from './Pages/home/Home'
import SingleProduct from './components/SingleProduct'
import NewsLetter from './components/NewsLetter'
import AppContext from './utils/Context'

const App = () => {
  return (
    <BrowserRouter>
      <AppContext>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/category/:id' element={<CategoryProduct />} />
          <Route path='/product/:id' element={<SingleProduct />} />
        </Routes>
        <NewsLetter />
        <Footer />
      </AppContext>
    </BrowserRouter>
  )
}

export default App
