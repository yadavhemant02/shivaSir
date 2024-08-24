import { Box, Button, Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const todayDate = new Date().toISOString().split('T')[0];
  const [remoteWork, serRemoteWork] = useState('');
  const [description, setDescription] = useState('')
  const navigate = useNavigate();

  //console.log(localStorage.getItem('checkout') === "")
  const bool = localStorage.getItem('checkout') === 'null';
  console.log(!bool, localStorage.getItem('checkout'))
  const checkout= async()=>{
    const data = {
      name : localStorage.getItem('name'),
      empNumber: localStorage.getItem('empNumber'), 
      empCode: localStorage.getItem('empCode'), 
      latitude:0,
      longitude:0,
      remoteWork: localStorage.getItem('remoteWork'),
      description: description 
  };
  console.log(data)
  if(checkout!=''){
  try{
    const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/check-out', data)
    console.log(response.data)
    if (response.status === 201) {
        console.log(response);
        sessionStorage.removeItem('timerCheck');
        alert("successFully you are checkout!")
        localStorage.setItem('active', false);
        localStorage.removeItem('startTime')
        navigate("/attendence")
    }
 
} catch (error) {
  console.error("An error occurred:", error);
  if (error.response) {
    // The request was made and the server responded with a status code outside of the range 2xx
    if (error.response.status === 400) {
      alert("You have already checkOut."+error.response.data.message);
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
else{
  alert("you have already ckeckout")
} 
 

  }



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
  
  return (
    <Box sx={{height:'600px' ,justifyContent:'end',border:'1px solid rgba(255, 0, 0, 0.5)', marginTop:'10%',padding:'30px'}}>


      <div>

        <p style={{ display:'flex',justifyContent:'end' ,fontFamily:'cursive', fontSize:'30px',  marginBottom:'7%'}}> Check OUT</p>
      </div>
      <div style={{display:'flex',justifyContent:'end' , marginBottom:'3%'}}>
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

        <div style={{ display:'flex',justifyContent:'end' ,marginBottom:'3%',  gap:'10px'}}>
        <TextField
          disabled
          id="outlined-disabled"
          label="Today Date"
          defaultValue={todayDate}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="empNumber"
          defaultValue={localStorage.getItem('empNumber')}
        />
        </div>

        <div style={{display:'flex',justifyContent:'end',position:'relative'}}>
       <Card
    sx={{
      position:'absolute',
      top:'150px',
      backgroundColor: 'rgba(255, 0, 0, 0.3)', /* 50% transparency */
 // Red color with transparency
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      boxShadow: 'none', // Remove shadow
      padding: 2, // Padding inside the card
      width: '550px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // Darker red on hover
      },
    }}
  >
    <CardContent>
      <Typography variant="h5" component="div" style={{ color: 'white', display:'flex',justifyContent:'end' }}>
        Feed Current Location
      </Typography>
      <Typography variant="body2" style={{ color: 'white' , display:'flex',justifyContent:'end' }}>
        This is a card with a red, semi-transparent background and a blur effect.
      </Typography>
       <div style={{display:'flex',justifyContent:'end'}}>
        <Button variant="outlined" size='medium' ><a href='https://66ba0413f205a485f84fe405--effortless-jelly-38df1d.netlify.app/'>Go To Feed Location</a></Button>
       </div>
    </CardContent>
  </Card>
       </div>


       <div style={{ display:'flex',justifyContent:'end',  marginBottom:'3%' }}>
       <TextField
         style={{width:'430px'}}
          required
          id="filled-required"
          label="Discription"
          //defaultValue="Hello World"
          variant="filled"
          onChange={(e)=>setDescription(e.target.value)}
        />
       </div>

       <div style={{ display:'flex',justifyContent:'end' }}>
       <Button
    variant="outlined"
    size="medium"
    onClick={checkout}
    disabled={!bool}
  >
    Go to checkOut
  </Button>
       {localStorage.getItem('checkout') === ""}
       </div>
  </Box>
  )
}

export default Checkout