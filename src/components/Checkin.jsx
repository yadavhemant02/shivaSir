import { LocalHospital } from '@mui/icons-material';
import { Box, Button, Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Checkin() {

  const [remoteWork, serRemoteWork] = useState('');
  const todayDate = new Date().toISOString().split('T')[0];
  const navigate = useNavigate();

  const currencies = [
    {
      value: 'WFO',
      label: 'WFO',
    },
    {
      value: 'WFH',
      label: 'WFH',
    },
    {
      value: 'WFF',
      label: 'WFF',
    }
  ];

  const checkIn= async()=>{

    const checkInData = {
      name: localStorage.getItem('name'),
      empNumber: localStorage.getItem('empNumber') , // Replace with actual employee number
      empCode: localStorage.getItem('empCode'), // Replace with actual employee cod
      latitude:0,
      longitude:0,
      remoteWork: remoteWork==''? "WFO" : remoteWork
  };
  console.log(checkInData)

  try {
    const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/check-in', checkInData);
    console.log("hemantData", response);
    if (response.status === 201) {
      alert("success");
      sessionStorage.removeItem('timerCheck');
      navigate("/attendence");
    }
  } catch (error) {
    console.error("An error occurred:", error);
    if (error.response) {
      // The request was made and the server responded with a status code outside of the range 2xx
      if (error.response.status === 400) {
        alert("You have already checkIn "+error.response.data.message);
        navigate("/attendence");
      } else {
        alert("An error occurred on the server. Please try again.");
      }
    } else if (error.request) {
      // The request was made but no response was received
      alert("No response from the server. Please check your network connection.");
    } else {
      // Something happened in setting up the request that triggered an Error
      alert("An error occurred while setting up the request.");
    }
  }

  }
  


  useEffect(()=>{
    if (!sessionStorage.getItem('timerCheck')) {
      sessionStorage.setItem('timerCheck', 'true');
      window.location.reload();
    }
  },[])


  return (
    <Box sx={{border:'1px solid rgba(46, 209, 137, 0.5)', borderRadius:'10px',marginTop:'10%',padding:'30px'}}>
      <div>
        <p style={{fontFamily:'cursive', fontSize:'30px',  marginBottom:'7%'}}> Check IN</p>
      </div>
      <div style={{ marginBottom:'3%'}}>
     <TextField
          id="outlined-select-currency"
          select
          label="Remote Work"
          defaultValue="WFO"
          helperText="Please select your currency"
          onChange={(e)=>serRemoteWork(e.target.value)}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

        <div style={{display:'flex', justifyContent:'start', marginBottom:'3%', gap:'10px'}}>
        <TextField
          disabled
          id="outlined-disabled"
          label="TodayDate"
          defaultValue={todayDate}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="empNumber"
          defaultValue={localStorage.getItem('empNumber')}
        />
        </div>
       
       <div style={{marginBottom:'3%'}}>
       <Button variant="outlined" size='large'  onClick={checkIn}>Go to CheckIN</Button>
       </div>

       <div>
       <Card
    sx={{
      backgroundColor: 'rgba(46, 209, 137, 0.5)', /* 50% transparency */
 // Red color with transparency
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      boxShadow: 'none', // Remove shadow
      padding: 2, // Padding inside the card
      width: '750px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card
        backgroundColor: '#2ed189', // Darker red on hover
      },
    }}
  >
    <CardContent>
      <Typography variant="h5" component="div" style={{ color: 'white' }}>
        Feed Current Location
      </Typography>
      <Typography variant="body2" style={{ color: 'white' }}>
        This is a card with a red, semi-transparent background and a blur effect.
      </Typography>
        <Button variant="outlined" size='medium'><a href='https://66ba0413f205a485f84fe405--effortless-jelly-38df1d.netlify.app/'>Go To Feed Location</a> </Button>
    </CardContent>
  </Card>
       </div>
  </Box>
  )
}

export default Checkin