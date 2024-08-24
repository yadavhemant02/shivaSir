import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button, Card, CircularProgress, Stack, TextField } from '@mui/material';
import image1 from './../assets/10.png'; // Import your image
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

  //for userState
  const [email, setEmail]=  useState('');
  const [password, setPassword]=  useState('');
  const [ip, setIp]=  useState('string123');
  const [message, setMessage] = useState(null); // Initialize message state
   
  //navigate 
  const navigate = useNavigate();

  // functions 

  //for login api
  const login = async () => {
    const loginData = {
      email: email,
      password: password,
      ip: ip,
    };
    console.log(loginData);

    if (email !== '' && password !== '') {
      setMessage(<CircularProgress />); // Show the loader
    }

    try {
      const response = await axios.post(
        'http://157.245.109.206:8091/identity-handler/auth/login-employee',
        loginData
      );
      console.log(response.data);

      if (response.status === 200) {
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        navigate('/otp');
      }
    } catch (error) {
      console.error(error);
      setMessage('Login failed. Please try again.'); // Show an error message if the login fails
    }
  };
  
  return (
    <div>
    <CssBaseline />
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
          
          CKD<i style={{ color: 'blue' }}>vcs</i>
        </Typography>

        <Stack direction="row" spacing={2} sx={{ p: 2 }} style={{ flexGrow: 1, marginRight: 5 }}>
          <Button LinkComponent='/home'>home</Button>
          <Button>create</Button>
          <Button>about</Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">home</Button>
          <Button variant="outlined" size='large'>Sign in</Button>
        </Stack>
      </Toolbar>
    </AppBar>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        mt: { xs: 7, sm: 8 },
        minHeight: '100vh',
        backgroundImage: `url(${image1})`,
        backgroundPosition: '50% center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundSize: '100%',
        backgroundAttachment: 'fixed',
       // display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '100%', height: '700px', position: 'relative' }}>
        <Card   sx={{
            boxShadow: 'none', // Remove the shadow
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white background
          //  backdropFilter: 'blur(10px)', // Apply blur to the background of the card
           // borderRadius: 2, // Rounded corners
           // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
          }} style={{ position: 'absolute', top: '20%', left: '10%', padding: '1%' }}> 
            <LockOpenTwoToneIcon sx={{ fontSize: '60px', color: '#8298af', marginBottom: '20px' }} />
          <p style={{ fontFamily: 'monospace', fontSize: '35px',color:'#8298af' }}>Welcome To CKDvcs !</p>
         
         <form style={{display:'inline-block'}}>
            <div style={{paddingBottom:'5px'}}>
          <TextField id="outlined-basic" label="UserName" variant="outlined" style={{width:'400px'}} onChange={(e)=>setEmail(e.target.value)} />
          </div>
          <div style={{paddingTop:'5px', paddingBottom:'10px'}}>
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:'400px'}} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          </form>
          <p style={{ fontFamily: 'sans-serif', fontSize: '20px',color:'#ccaaaa', width:'800px', paddingTop:'10px' }}>With a team of seasoned professionals, we’re here to guide you every step of the way, providing insights and support whenever you need it.</p>
         <div style={{marginTop:'10px',padding:'10px'}}>
          <Button variant="outlined" size='large' style={{margin:'10px'}} onClick={login}>GO to Login</Button>
          <Button variant="outlined" size='large'>Go To Clear</Button>
         </div>
         {/* <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center' }}>
              <Button
                variant="outlined"
                size="large"
                startIcon={<KeyboardBackspaceIcon />}
                style={{
                  textTransform: 'none', // Preserve case
                  padding: '10px 20px', // Padding for larger clickable area
                  fontSize: '18px', // Larger font size
                  borderRadius: '25px', // Rounded button
                  backgroundColor: '#ffffff', // Background color
                  color: '#8298af', // Text color
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow
                }}
                onClick={signup}
              >
                Go To Registration
              </Button>
            </div> */}
        </Card>
      </div>
      <div style={{marginLeft:'10%'}}>
        {message}
      </div>


    </Box>
  </div>
  )
}

export default Login