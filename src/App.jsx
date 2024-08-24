// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import { styled } from '@mui/material';
// import zIndex from '@mui/material/styles/zIndex';

// const MainDiv = styled('Box')({
//   color: 'darkslategray',
//   backgroundColor: 'aliceblue',
// });
 

// export default function DenseAppBar() {
//   return (
//     <MainDiv  sx={{ flexGrow: 1 }}>
//       <AppBar  sx={{ height: 60, position: 'sticky', top: 0, zIndex: 999}} position="fixed" color='transparent'>
//         <Toolbar variant="dense">
//           <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" color="inherit" component="div">
//             Photos
//           </Typography>
//         </Toolbar>
//       </AppBar>

//       <Box style={{height:900, border:"1px solid red", height: 'calc(1000vh - 60px)', backgroundColor: 'green',overflowY: 'auto'}}>
//            nks
//       </Box>
//     </MainDiv>
   
//   );
// }

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import { Button, Card, CardContent, Stack } from '@mui/material';
// import image1 from './assets/1.jpg';

// function App() {
//   return (
//     <div >
//       <CssBaseline />
//       <AppBar position="fixed" style={{backgroundColor:'white'}}>
//         <Toolbar>
//           <Typography style={{color: 'black' , marginLeft: 10,width: 90}} variant="h5" noWrap>
//             ONE<i  style={{color:'blue'}}>sol</i>
//           </Typography>

//           <Stack direction="row" spacing={2} sx={{p:2}} style={{flexGrow: 1, marginRight: 5}}>
//             <Button>home</Button>
//             <Button>creare</Button>
//             <Button>about</Button>
//           </Stack>
//           <Stack direction="row" spacing={2} >
//             <Button  variant="contained">home</Button>
//             <Button variant="outlined" size='large'>Sign in</Button>

//           </Stack>
//         </Toolbar>
//       </AppBar>
//       <Box component="main" sx={{ flexGrow: 1, mt: { xs: 7, sm: 8 } }}>
//        <div    sx={{
//             backgroundImage: image1,
//             backgroundPosition: `right bottom`,
//             backgroundRepeat: `no-repeat`,
//             backgroundSize: `300px 300px`,
//             height: "100%",
//             width: "100%",
//           }}style={{height: 800, border:'1px solid red', position:'relative'}}>
//         <Card sx={{width:500}} style={{justifyItems:'center', justifyContent:'center'}}>
//           <CardContent>
//             <Typography variant='h4'>
//                    Multipul Problems one solution
//             </Typography>
//           </CardContent>
//         </Card>
//        </div>
//       </Box>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import Container from '@mui/material/Container';
// import Box from '@mui/material/Box';
// import { Button, Card, CardContent, Stack } from '@mui/material';
// import image1 from './assets/2.jpg'; // Import your image

// function App() {
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
//             ONE<i style={{ color: 'blue' }}>sol</i>
//           </Typography>

//           <Stack direction="row" spacing={2} sx={{ p: 2 }} style={{ flexGrow: 1, marginRight: 5 }}>
//             <Button>home</Button>
//             <Button>create</Button>
//             <Button>about</Button>
//           </Stack>
//           <Stack direction="row" spacing={2}>
//             <Button variant="contained">home</Button>
//             <Button variant="outlined" size='large'>Sign in</Button>
//           </Stack>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           mt: { xs: 7, sm: 8 },
//           height: '100vh',
//           backgroundImage: `url(${image1})`,
//           backgroundPosition: '150% center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundSize: '80%', 
//           backgroundAttachment: 'fixed',
//          // display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div style={{width:'100%',height:'700px' , border:'1px solid red', position:'relative'}}>
//           <Card style={{position:'absolute', top:'20%',left:'10%',padding:'1%'}}>
//              <p style={{fontFamily:'monospace',  fontSize:'35px'}}>Welcome To ONEsol !</p>
//              <p style={{fontFamily:'sans-serif',  fontSize:'35px'}}>Many Problem ONE Solution</p>

//           </Card>
//         </div>

//         <div style={{display:'flex', justifyContent:'space-between', margin:'40px'}}>
//          <Card>
//           <img src={image1} style={{width:'500px',height:'300px'}} />
//          </Card>



//         <Card
//            sx={{
//             width: 800,
//             textAlign: 'center',
//             backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
//             backdropFilter: 'blur(10px)', // Apply blur to the background of the card
//             borderRadius: 2, // Rounded corners
//             boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
//           }}
//         >
//           <CardContent>
//             <Typography variant='h4'>
//               Multiple Problems, One Solution
//             </Typography>
//           </CardContent>
//         </Card>
//         </div>

//         <div style={{width:'100%',height:'400px'}}>
//             bhvhjd
//         </div>

//       </Box>
//     </div>
//   );
// }

// export default App;

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import { Button, Card, CardContent, Stack } from '@mui/material';
// import image1 from './assets/2.jpg'; // Import your image
// import image3 from './assets/3.png'; // Import your image
// import image4 from './assets/4.png'; // Import your image

// function App() {
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
//             ONE<i style={{ color: 'blue' }}>sol</i>
//           </Typography>

//           <Stack direction="row" spacing={2} sx={{ p: 2 }} style={{ flexGrow: 1, marginRight: 5 }}>
//             <Button>home</Button>
//             <Button>create</Button>
//             <Button>about</Button>
//           </Stack>
//           <Stack direction="row" spacing={2}>
//             <Button variant="contained">home</Button>
//             <Button variant="outlined" size='large'>Sign in</Button>
//           </Stack>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           mt: { xs: 7, sm: 8 },
//           minHeight: '100vh',
//           backgroundImage: `url(${image1})`,
//           backgroundPosition: '150% center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundSize: '80%',
//           backgroundAttachment: 'fixed',
//          // display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <div style={{ width: '100%', height: '700px', position: 'relative' }}>
//           <Card   sx={{
//               boxShadow: 'none', // Remove the shadow
//               border: 'none',
//               backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
//               backdropFilter: 'blur(10px)', // Apply blur to the background of the card
//              // borderRadius: 2, // Rounded corners
//              // boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
//             }} style={{ position: 'absolute', top: '20%', left: '10%', padding: '1%' }}>
//             <p style={{ fontFamily: 'monospace', fontSize: '35px',color:'#8298af',width:'2px' }}>Welcome To ONEsol !</p>
//             <p style={{ fontFamily: 'sans-serif', fontSize: '35px',color:'#ccaaaa' }}>Many Problems, One Solution</p>
//            <div style={{margin:'10px',padding:'10px',textAlign:'center'}}>
//             <Button variant="outlined" size='large' style={{margin:'10px'}}>GO to Monitor</Button>
//             <Button variant="outlined" size='large'>Go To dashboard</Button>
//            </div>
//           </Card>
//         </div>

//         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',position:'relative' }}>
//         <Card
//   sx={{
//     boxShadow: 'none', // Remove the shadow
//     overflow: 'hidden', // Ensure that the image doesn't overflow the Card's boundaries
//     borderRadius: 2, // Add rounded corners if desired
//   }}
// >
//   <img
//     src={image3}
//     alt="Sample"
//     style={{
//       marginLeft:'40px',
//       width: '500px',
//       height: '300px',
//       transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom effect
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = 'scale(1.1)'; // Scale up the image on hover
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = 'scale(1)'; // Reset the image to its original size
//     }}
//   />
// </Card>


//           <Card
//             sx={{
//               marginRight:'40px',
//               boxShadow: 'none',
//               width: 850,
//               //textAlign: 'center',
//               backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
//               backdropFilter: 'blur(10px)', // Apply blur to the background of the card
//               borderRadius: 2, // Rounded corners
//             //  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Add shadow for better separation
//             }}
//           >
//             <CardContent>
//               <Typography variant='h4'>
//                 Multiple Problems, One Solution
//                 <p style={{fontSize:'20px', color:'gray', margin:'30px', border:'1px solid gray', borderRadius:'10px' , padding:'10px'}}>We create high-quality, responsive websites tailored to your business needs. From initial design concepts to final implementation, our team ensures your website is not only visually appealing but also user-friendly and optimized for search engines.</p>
//               </Typography>
//             </CardContent>
//           </Card>
//         </div>

//         <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
//           <Typography variant='h6' align='center' style={{ padding: '20px' }}>
//             Scrollable Content Here
           
//           </Typography>
//         </div>

//         <Card style={{ width: '100%', height: '600px'}}>

// <img
//     src={image4}
//     alt="Sample"
//     style={{
//       marginLeft:'40px',
//       width: '100%',
//       height: '600px',
//       transition: 'transform 0.3s ease-in-out', // Smooth transition for zoom effect
//     }}
//     onMouseEnter={(e) => {
//       e.currentTarget.style.transform = 'scale(1.1)'; // Scale up the image on hover
//     }}
//     onMouseLeave={(e) => {
//       e.currentTarget.style.transform = 'scale(1)'; // Reset the image to its original size
//     }}
//   />
          

//           cbkhdh

//         </Card>
//         <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
//           <Typography variant='h6' align='center' style={{ padding: '20px' }}>
//             Scrollable Content Here
           
//           </Typography>
//         </div>

//         <Box
//         component="footer"
//         sx={{
//           width: '100%',
//           padding: '20px',
//           backgroundColor: 'rgba(255, 255, 255, 0.3)',
//           backdropFilter: 'blur(10px)', // Apply blur effect
//           position: 'relative',
//           bottom: 0,
//           textAlign: 'center',
//         }}
//       >
//         <Typography variant="h6" style={{ color: '#333' }}>
//           © 2024 ONEsol. All rights reserved.
//         </Typography>
//         <Typography variant="body2" style={{ color: '#555' }}>
//           Footer content goes here. Links, copyright, etc.
//         </Typography>
//       </Box>

//       <div style={{ width: '100%', height: '100px', backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
//           <Typography variant='h6' align='center' style={{ padding: '20px' }}>
//             S
           
//           </Typography>
//         </div>
//       </Box>
//     </div>
//   );
// }

// export default App;

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import { Dashboard } from '@mui/icons-material'
import Board from './components/Board'
import Profile from './components/Profile'
import Attendence from './components/Attendence'
import Checkin from './components/Checkin'
import Checkout from './components/Checkout'
import Otp from './components/Otp'

function App() {

  const token = window.localStorage.getItem('token')
  console.log("hemany bhai keasa hai tu")
 

  return (
    <BrowserRouter>
    <Routes>
      <Route 
      path="/" element={token!=null ? <Login/> : <Login/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/das" element={token!=null ? <Board/> : <Board/>} />
      <Route path="/profile" element={token!=null ? <Profile/> : <Login/>} />
      <Route path="/attendence" element={token!=null ? <Attendence/> : <Login/>} />
      <Route path="/checkin" element={token!=null ? <Checkin/> : <Login/>} />
      <Route path="/checkout" element={token!=null ? <Checkout/> : <Login/>} />
      <Route path="/otp" element={<Otp/>} />

      </Routes>
      </BrowserRouter>
  )
}

export default App
