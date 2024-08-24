import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, Stack } from '@mui/material';
import image1 from './../assets/2.jpg'; // Import your image
import image3 from './../assets/3.png'; // Import your image
import image4 from './../assets/6.jpg'; // Import your image
import { useNavigate } from 'react-router-dom';

function Home() {
    const  navigate = useNavigate();
    const login = ()=>{
        navigate("/login");
    }
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
            ONE<i style={{ color: 'blue' }}>sol</i>
          </Typography>

          <Stack direction="row" spacing={2} sx={{ p: 2 }} style={{ flexGrow: 1, marginRight: 5 }}>
            <Button>home</Button>
            <Button>create</Button>
            <Button>about</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="contained">home</Button>
            <Button variant="outlined" size='large' onClick={login}>Sign in</Button>
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
          backgroundPosition: '150% center',
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
            <p style={{ fontFamily: 'monospace', fontSize: '35px',color:'#8298af',width:'2px' }}>Welcome To ONEsol !</p>
            <p style={{ fontFamily: 'sans-serif', fontSize: '35px',color:'#ccaaaa' }}>Many Problems, One Solution</p>
           <div style={{margin:'10px',padding:'10px',textAlign:'center'}}>
            <Button variant="outlined" size='large' style={{margin:'10px'}}>GO to Monitor</Button>
            <Button variant="outlined" size='large'>Go To dashboard</Button>
           </div>
          </Card>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',position:'relative' }}>
        <Card
  sx={{
    boxShadow: 'none', // Remove the shadow
    overflow: 'hidden', // Ensure that the image doesn't overflow the Card's boundaries
    borderRadius: 2, // Add rounded corners if desired
  }}
>
  <img
    src={image3}
    alt="Sample"
    style={{
      marginLeft:'40px',
      width: '500px',
      height: '300px',
      transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom effect
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)'; // Scale up the image on hover
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)'; // Reset the image to its original size
    }}
  />
</Card>


          <Card
            sx={{
              marginRight:'40px',
              boxShadow: 'none',
              width: 850,
              //textAlign: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
              backdropFilter: 'blur(10px)', // Apply blur to the background of the card
              borderRadius: 2, // Rounded corners
            //  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
            }}
          >
            <CardContent>
              <Typography variant='h4'>
                Multiple Problems, One Solution
                <p style={{fontSize:'20px', color:'gray', margin:'30px', border:'1px solid gray', borderRadius:'10px' , padding:'10px'}}>We create high-quality, responsive websites tailored to your business needs. From initial design concepts to final implementation, our team ensures your website is not only visually appealing but also user-friendly and optimized for search engines.</p>
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Typography variant='h6' align='center' style={{ padding: '20px' }}>
           
           
          </Typography>
        </div>

        <Card style={{ position: 'relative', width: '100%', height: '700px', boxShadow: 'none' }}>
  <img
    src={image4}
    alt="Sample"
    style={{
      width: '100%',
      height: '100%',
      transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom effect
      objectFit: 'cover', // Ensures the image covers the entire card without distortion
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'scale(1.1)'; // Scale up the image on hover
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'scale(1)'; // Reset the image to its original size
    }}
  />
  
  {/* Overlay content */}
  <div
    style={{
      position: 'absolute',
      top: '20%', // Center vertically
      left: '30%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Adjust the center point
      color: 'white', // Text color
      textAlign: 'center', // Center text
      padding: '20px',
    //   backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional: dark background with transparency
    backgroundColor: '#d8afa5', 
      
      borderRadius: '10px', // Optional: rounded corners
    }}
  >
    <Typography variant="h4" style={{ marginBottom: '10px' }}>
      Your Title Here
    </Typography>
    <Typography variant="body1">
      Your content goes here. This can be a description, a call to action, or anything you'd like.
    </Typography>
  </div>
  <div
    style={{
      position: 'absolute',
      top: '50%', // Center vertically
      left: '35%', // Center horizontally
      transform: 'translate(-50%, -50%)', // Adjust the center point
      color: '#ba5b75', // Text color
     // textAlign: 'center', // Center text
      padding: '20px',
    //   backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional: dark background with transparency
   // backgroundColor: '#d8afa5', 
      
      borderRadius: '10px', // Optional: rounded corners
    }}
  >
    <Typography variant="h4" style={{ marginBottom: '10px' }}>
      Hello Hemant !
    </Typography>
    <Typography variant="body1">
      Your content goes here. This can be a description, a call to action, or anything you'd like.
      Your content goes here. This can be a description, a call to action, or anything you'd like.
      Your content goes here. This can be a description.
    </Typography>
  </div>
</Card>

        <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Typography variant='h6' align='center' style={{ padding: '20px' }}>
           
           
          </Typography>
        </div>

        <Box
        component="footer"
        sx={{
          width: '100%',
          padding: '20px',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          backdropFilter: 'blur(10px)', // Apply blur effect
          position: 'relative',
          bottom: 0,
          textAlign: 'center',
        }}
      >
        <Typography variant="h6" style={{ color: '#333' }}>
          © 2024 ONEsol. All rights reserved.
        </Typography>
        <Typography variant="body2" style={{ color: '#555' }}>
          Footer content goes here. Links, copyright, etc.
        </Typography>
      </Box>

      <div style={{ width: '100%', height: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
          <Typography variant='h6' align='center' style={{ padding: '20px' }}>
            
           
          </Typography>
        </div>
        <Card
      sx={{
        backgroundColor: 'rgba(255, 0, 0, 0.3)', // Red color with transparency
        backdropFilter: 'blur(10px)', // Blur effect
        borderRadius: 2, // Rounded corners
        boxShadow: 'none', // Remove shadow
        padding: 2, // Padding inside the card
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div" style={{ color: 'white' }}>
          Blurred Transparent Card
        </Typography>
        <Typography variant="body2" style={{ color: 'white' }}>
          This is a card with a red, semi-transparent background and a blur effect.
        </Typography>
      </CardContent>
    </Card>
      </Box>
    </div>
  );
}

export default Home;
