import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function OTPInput({ phoneNumber, generatedOtp, setOtp }) {
  const [otpInput, setOtpInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log('Generated OTP:', generatedOtp); // For demonstration purposes
  }, [generatedOtp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpInput.length !== 4) {
      alert('Please enter a valid 4-digit OTP.');
      return;
    }
    if (otpInput !== generatedOtp) {
      alert('Incorrect OTP.');
      return;
    }
    setOtp(otpInput);
    // You can add API call to verify OTP here
    navigate('/dashboard');
  };

  return (
    <div className="centered-form">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>Enter OTP </h2>
          <p> OTP is: {generatedOtp}</p> {/* Display the generated OTP */}
          <input 
            type="text" 
            value={otpInput} 
            onChange={(e) => setOtpInput(e.target.value)} 
            placeholder="OTP" 
            required 
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default OTPInput;
