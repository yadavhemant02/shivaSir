import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Otp() {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if the value is not empty
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = async() => {
    if (otp.join('').length === 4) {
      console.log('OTP Submitted:', otp.join(''));
      setError(false);
      //api
      const otpLoginData = {
        email: localStorage.getItem('email'),
        password: localStorage.getItem('password'),
        otp: otp.join(''),
        ip:"string123"
      };
      try {
        // Send POST request
        console.log(otpLoginData);
        const response = await axios.post('http://157.245.109.206:8091/identity-handler/auth/login-with-otp', otpLoginData);
        console.log("response", response.data);
        if(response.status === 200)
        {
          localStorage.setItem('empCode',response.data.empCode)
          localStorage.setItem('token',response.data.token)
          localStorage.setItem('empNumber',response.data.empNumber)
          localStorage.setItem('name',response.data.name)
          navigate('/das')
        }
      } catch (error) {
        console.error("Error during OTP submission:", error);
      }
    } else {
      setError(true);
    }
  };

  

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: 360,
        mx: 'auto',
        mt: 10,
        p: 3,
        border: '1px solid #ccc',
        borderRadius: 2,
        boxShadow: 1,
        textAlign: 'center',
      }}
    >
      <Typography variant="h6" gutterBottom>
        Enter OTP
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        {otp.map((_, index) => (
          <TextField
            key={index}
            id={`otp-${index}`}
            variant="outlined"
            value={otp[index]}
            onChange={(e) => handleChange(e, index)}
            inputProps={{
              maxLength: 1,
              style: { textAlign: 'center', fontSize: '1.5rem' },
            }}
            error={error && !otp[index]}
          />
        ))}
      </Box>
      {error && (
        <Typography variant="body2" color="error" sx={{ mb: 2 }}>
          Please enter all 4 digits
        </Typography>
      )}
      <Button variant="contained" onClick={handleSubmit} fullWidth>
        Submit OTP
      </Button>
    </Box>
  );
}

export default Otp;
