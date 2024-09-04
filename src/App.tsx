import { useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import RegistrationComp from './components/RegistrationComp'
import OTPComp from './components/OTPComp'
import LoginComp from './components/LoginComp'
import AboutComp from './components/AboutComp'
import ContactComp from './components/ContactComp'
import TermsAndConditionsComp from './components/TermsAndConditionsComp'
import AddToCartComp from './components/AddToCartComp'
import DetailedProductCardComp from './components/DetailedProductCardComp'

function App() {

  return (
    <>
    <Router>
       <Routes>
        <Route path="/" element={<RegistrationComp />} />
        <Route path="/otp" element={<OTPComp />} />
        <Route path="/login" element={<LoginComp />} />
        <Route path="/about" element={<AboutComp />} />
        <Route path="/contact" element={<ContactComp />} />
        <Route path="/product/:id" element={<DetailedProductCardComp product={{
  id: 1,
  name: 'Product 1',
  brand: 'Brand 1',
  price: 50,
  imageUrl: 'https://via.placeholder.com/150',
  description: 'Product 1 description',
  
        }}   onAddToCart={()=>{}} />} />
        <Route path="/cart" element={<AddToCartComp />} />
        <Route path="/termsandconditions" element={<TermsAndConditionsComp />} />
       </Routes>
    
    </Router>
      </>
  )
}

export default App
