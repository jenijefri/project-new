import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PhoneNumberInput({ setPhoneNumber, setGeneratedOtp }) {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000).toString(); // Generate a 4-digit OTP
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phone.length !== 10) {
      alert('Please enter a valid 10-digit phone number.');
      return;
    }
    const otp = generateOtp();
    setGeneratedOtp(otp); // Call setGeneratedOtp to set the generated OTP
    setPhoneNumber(phone);
    // You can add API call to send OTP here
    console.log('Generated OTP:', otp); // For demonstration purposes
    navigate('/otp');
  };

  return (
    <div className="centered-form">
      <form onSubmit={handleSubmit} className="form-container">
        <h2>Enter Phone Number</h2>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          placeholder="Phone Number" 
          required 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhoneNumberInput;
