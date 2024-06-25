// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PhoneNumberInput from './PhoneNumberInput';
import OTPInput from './OTPInput';
import './App.css'; // Ensure this file is present for global styles
import Dashboard from './dashboard';
import Home from './home';
import ProductList from './product';
import Data from './Database/Data';

function App() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [otp, setOtp] = useState('');

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<PhoneNumberInput setPhoneNumber={setPhoneNumber} setGeneratedOtp={setGeneratedOtp} />} 
        />
        <Route 
          path="/otp" 
          element={<OTPInput phoneNumber={phoneNumber} generatedOtp={generatedOtp} setOtp={setOtp} />} 
        />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="home" element={<Home />} />
        <Route path="data" element={<Data />} />
        <Route path="product" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
