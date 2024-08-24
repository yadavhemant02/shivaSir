import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button, Card, Stack, TextField } from '@mui/material';
import image1 from './../assets/4.png'; // Import your image
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import Home from './Home';


function Signup() {
  return (
    <div>
    <CssBaseline />
    <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
      <Toolbar>
        <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
          
          ONE<i style={{ color: 'blue' }}>sol</i>
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
        backgroundPosition: '100% center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundSize: '80%',
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
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
            backdropFilter: 'blur(10px)', // Apply blur to the background of the card
           // borderRadius: 2, // Rounded corners
           // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
          }} style={{ position: 'absolute', top: '20%', left: '10%', padding: '1%' }}> 
            <HowToRegTwoToneIcon sx={{ fontSize: '60px', color: '#8298af', marginBottom: '20px' }} />
          <p style={{ fontFamily: 'monospace', fontSize: '35px',color:'#8298af' }}>Registration !</p>
         
         <form style={{display:'inline-block'}}>
            <div style={{paddingBottom:'5px'}}>
          <TextField id="outlined-basic" label="UserName" variant="outlined" style={{width:'400px'}} />
          </div>
          <div style={{paddingTop:'5px', paddingBottom:'10px'}}>
          <TextField id="outlined-basic" label="Password" variant="outlined" style={{width:'400px'}} />
          </div>
          </form>
          <p style={{ fontFamily: 'sans-serif', fontSize: '20px',color:'#ccaaaa', width:'800px', paddingTop:'10px' }}>With a team of seasoned professionals, we’re here to guide you every step of the way, providing insights and support whenever you need it.</p>
         <div style={{marginTop:'10px',padding:'10px'}}>
          <Button variant="outlined" size='large' style={{margin:'10px'}}>GO to Monitor</Button>
          <Button variant="outlined" size='large'>Go To dashboard</Button>
         </div>
        </Card>
      </div>

    </Box>
  </div>
  )
}

export default Signup