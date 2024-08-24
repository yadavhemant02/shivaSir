// 

// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import CssBaseline from '@mui/material/CssBaseline';
// import Box from '@mui/material/Box';
// import { Button, Card, Stack } from '@mui/material';
// import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import { Link } from 'react-router-dom';
// import image1 from './../assets/7.jpg'; // Import your image
// import { PieChart } from '@mui/x-charts/PieChart';

// // Dummy data for table
// const rows = [
//   { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
//   { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
//   { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
//   { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
//   { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
// ];

// function Board() {
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
//         <Toolbar>
//           <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
//             ONE<i style={{ color: 'blue' }}>sol</i>
//           </Typography>
//           <Stack direction="row" spacing={2} sx={{ p: 2 }} style={{ flexGrow: 1, marginRight: 5 }}>
//             <Button component={Link} to="/home">Home</Button>
//             <Button component={Link} to="/create">Create</Button>
//             <Button component={Link} to="/about">About</Button>
//           </Stack>
//           <Stack direction="row" spacing={2}>
//             <Button variant="contained" component={Link} to="/home">Home</Button>
//             <Button variant="outlined" size="large" component={Link} to="/signin">Sign in</Button>
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
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundSize: 'cover',
//           backgroundAttachment: 'fixed',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}
//       >
//         <Card
//           sx={{
//             boxShadow: 'none',
//             border: 'none',
//             backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
//             backdropFilter: 'blur(10px)', // Apply blur to the background of the card
//             padding: '20px',
//             textAlign: 'center',
//             display:'flex',
//             marginBottom: '20px',
//             width: { xs: '90%', sm: '70%', md: '50%' }, // Responsive width
//           }}
//         >

// <PieChart
//       series={[
//         {
//           data: [
//             { id: 0, value: 10, label: 'series A' },
//             { id: 1, value: 15, label: 'series B' },
//             { id: 2, value: 20, label: 'series C' },
//           ],
//         },
//       ]}
//       width={400}
//       height={200}
//     />
        
//         </Card>
//         <TableContainer
//           component={Paper}
//           sx={{
//             marginTop: '20px',
//             width: { xs: '90%', sm: '80%', md: '60%' }, // Responsive width
//             backgroundColor: 'rgba(255, 0, 0, 0.3)', // Semi-transparent red background
//             backdropFilter: 'blur(10px)', // Apply blur effect
//             marginLeft: 'auto', // Shift to the right
//             marginRight: '10%', // Ensure some spacing from the right edge
//           }}
//         >
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <TableRow>
//                 <TableCell>Dessert (100g serving)</TableCell>
//                 <TableCell align="right">Calories</TableCell>
//                 <TableCell align="right">Fat&nbsp;(g)</TableCell>
//                 <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//                 <TableCell align="right">Protein&nbsp;(g)</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {rows.map((row) => (
//                 <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
//                   <TableCell component="th" scope="row">{row.name}</TableCell>
//                   <TableCell align="right">{row.calories}</TableCell>
//                   <TableCell align="right">{row.fat}</TableCell>
//                   <TableCell align="right">{row.carbs}</TableCell>
//                   <TableCell align="right">{row.protein}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </Box>
//     </div>
//   );
// }

// export default Board;

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Button, Card, CardContent, Stack } from '@mui/material';
import HowToRegTwoToneIcon from '@mui/icons-material/HowToRegTwoTone';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from 'react-router-dom';
import image1 from './../assets/7.jpg';
import { PieChart } from '@mui/x-charts/PieChart';
import Profile from './Profile';
import axios from 'axios';

// Dummy data for table
const rows = [
  { name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
  { name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
  { name: 'Eclair', calories: 262, fat: 16.0, carbs: 24, protein: 6.0 },
  { name: 'Frozen Yogurt', calories: 159, fat: 6.0, carbs: 24, protein: 4.0 },
  { name: 'Gingerbread', calories: 356, fat: 16.0, carbs: 49, protein: 3.9 },
];

function Board() {
  const navigate = useNavigate();
  const [status, setStatus] = useState('');
  const [late, setLate] = useState(0);
  const [ontime, setOntime] = useState(0);
  const [absent, setAbsent] = useState(0);
  

  //http://157.245.109.206:8093/emp-handler/attendence/emp-chart-mounth/attendence-monitor?empCode=C12PRADEEP


  const monitorData = async()=>{
    const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/emp-chart-mounth/attendence-monitor?empCode=' + localStorage.getItem('empCode'))
    if (response.status === 201) {
        console.log("papubhai",response)
        setLate(response.data.result.late)
        setAbsent(response.data.result.absent)
        setOntime(response.data.result.onTime)
    }

  }

  const apidata = async()=>{
    const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/today-emp-atttendence?empCode=' + localStorage.getItem('empCode'))

    if (response.status === 201) {
        console.log("papu",response)
        setStatus(response.data.result.attendenceStatus)
    }
}

  useEffect(()=>{
    apidata();
    monitorData();
    if (!sessionStorage.getItem('reloaded')) {
      sessionStorage.setItem('reloaded', 'true');
      window.location.reload();
    }
  },[])


  const handleNavigation = () => {
    sessionStorage.removeItem('reloaded'); // Optional: Reset to allow reloading on next visit
    navigate('/das');
  };


  const markAttendence= ()=>{
    navigate("/attendence");
  }

const logout = ()=>{
  localStorage.removeItem('token')
  sessionStorage.removeItem('reloaded');
  navigate('/login')
}  
  return (
    <div>
      <CssBaseline />
      <AppBar position="fixed" style={{ backgroundColor: 'white' }}>
        <Toolbar>
          <Typography style={{ color: 'black', marginLeft: 10, width: 90 }} variant="h5" noWrap>
            CKD<i style={{ color: 'blue' }}>vcs</i>
          </Typography>
          <Stack direction="row" spacing={2} sx={{ p: 2 }} style={{ flexGrow: 1, marginRight: 5 }}>
            <Button component={Link} to="/das">Home</Button>
            <Button component={Link} to="/profile">Profile</Button>
            <Button component={Link} to="/about">About</Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="large" component={Link} to="/profile">{localStorage.getItem('name')}</Button>
            <Button variant="contained" onClick={logout}>LogOut</Button>
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
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          display: 'flex',
          flexDirection: 'column',
         // justifyContent: 'center',
        //  alignItems: 'center',
        }}
      >
        <div style={{display:'flex', width:'100%', marginTop:'8%'}}>
        <Card
          sx={{
            marginLeft:'8%',
            boxShadow: 'none',
            border: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
            backdropFilter: 'blur(10px)', // Apply blur to the background of the card
            //padding: '10px',
          //  textAlign: 'center',
            display: 'flex',
           // marginBottom: '20px',
           // width: { xs: '90%', sm: '70%', md: '50%' }, // Responsive width
          }}
        >
          <PieChart
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: '10px', // Rounded corners
        padding: '20px', // Inner padding
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
      }}
      series={[
        {
          data: [
            { id: 0, value: absent, label: 'Absent', color: 'rgba(255, 0, 0, 0.3)' }, // Soft red
            { id: 1, value: ontime!=0 ? ontime: 0 , label: 'OnTime', color: 'rgba(46, 209, 137, 0.5)' }, // Purple
            { id: 2, value: late, label: 'late', color: 'rgba(246, 166, 1, 0.5)' }, // Green
          ],
        },
      ]}
      width={500}
      height={400}
      labels={({ datum }) => ({
        text: datum.label,
        fill: '#fff', // White text color
        fontSize: 14, // Adjust font size
        fontWeight: 'bold', // Bold labels
      })}
      donutWidth={50} // Add a donut effect by making the pie chart hollow in the center
    />
        </Card>
        <div
         style={{
          boxShadow: 'none',
          border: 'none',
          marginLeft:'20%',
          padding:'3%',
        //  backgroundColor: 'rgba(255, 255, 255, 0.4)',
          }}
        >
             <p style={{color:'#8b8b8b',fontFamily:'monospace',fontSize:'40px',
                fontWeight: 'bold',
                marginBottom: '20px',
             }}>Hi {localStorage.getItem('name')} !</p>
             <p style={{fontFamily:'cursive', fontSize:'30px'}}> Welcome to CKDventure consultancy services </p>
             <p style={{fontSize:'20px'}}>Employee Portal...!</p>
             <div style={{marginTop:'20px'}}>
             <Button variant="outlined" size='large'  onClick={handleNavigation}>Refresh To dashboard</Button>
             </div>
        </div>
      
        </div>

        <div style={{ width: '100%', height: '200px', backgroundColor: 'rgba(255, 255, 255, 0.1)'}}>
          <Typography variant='h6' align='center' style={{ padding: '20px' }}>
           
           
          </Typography>
        </div>
        {/* <div style={{ width: '100%', height: '400px', backgroundColor: 'rgba(255, 255, 255, 0.1)',
          
         }}>
          <div style={{display:'flex', margin:'2%'}}>
          <div  style={{margin:'5%', textAlign:'center',paddingLeft:'10%'}}>
          <p>jbks  cibshbckhs  bcsh nnlshbcw bibchhcbh  hhbhkhkhdh cuucvs shhk</p>
          </div>

          <div style={{width:'500px',height:'300px',backgroundColor:'gray',borderRadius:'10px',marginLeft:'80px'}}>
            //  show all total workiing hours and today attencece status
             go to the attendence page
          </div>

          </div>
        </div> */}

<div style={{ 
  width: '100%', 
  height: '400px', 
  backgroundColor: 'rgba(255, 255, 255, 0.1)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'end',
  padding: '20px'
}}>
  <div style={{
    display: 'flex', 
    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
    borderRadius: '15px',
    padding: '20px',
   // boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)'
  }}>
    <div style={{
      color: 'white', 
      marginRight: '50px',
      maxWidth: '300px',
      textAlign: 'center',
      lineHeight: '1.5'
    }}>
      <p style={{
        fontSize: '18px',
        fontWeight: '500',
        marginBottom: '20px'
      }}>
        Overview
      </p>
      <p>Keep track of your total working hours and today's attendance status. Head over to the attendance page for more details.</p>
    </div>

    <div style={{
      width: '500px',
      height: '300px',
     // backgroundColor: '#2ed189',
   //   backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
      color: 'white',
     // display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '20px',
      fontWeight: 'bold',
      textAlign: 'center',
      border:'1px solid white',
      paddingTop:'60px'
    //  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
    }}>
      <p style={{fontFamily:'cursive'}}>Total Working Hours: 8 hrs<br/>Attendance Status: {status!=''?status : "panding"}</p><br/>
      <div>
      <Button variant="outlined" size='large'  
       onClick={markAttendence}
       sx={{
          color: 'white',
          borderColor: 'white',
          //backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
            borderColor: 'white',
            color:'black'
          },
        }}>Mark Attendence</Button>
      </div>
    </div>
  </div>
</div>


        <div style={{ display: 'flex',justifyContent:'space-between' , margin: '2%', padding: '6%', gap: '30px'}}>
  <Card
    sx={{
      backgroundColor: 'rgba(255, 0, 0, 0.3)', // Red color with transparency
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      boxShadow: 'none', // Remove shadow
      padding: 2, // Padding inside the card
      width: '300px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card
        backgroundColor: 'rgba(255, 0, 0, 0.5)', // Darker red on hover
      },
    }}
  >
    <CardContent>
      <Typography variant="h5" component="div" style={{ color: 'white' }}>
        E warnings
      </Typography>
      <Typography variant="body2" style={{ color: 'white' }}>
        This is a card with a red, semi-transparent background and a blur effect.
      </Typography>
      <Button
            variant="contained"
            sx={{
              border:'1px sold white',
              
              backgroundColor: 'rgba(255, 0, 0, 0.3)', // Match the card's hover background color
              color: 'white', // White text
              '&:hover': {
                backgroundColor: 'rgba(255, 0, 0, 0.7)', // Slightly darker on hover
              },
              borderRadius: '4px', // Match the card's border radius
              boxShadow: 'none', // Remove button shadow to match the card
            }}
          >
            Click Me
          </Button>
    </CardContent>
  </Card>

  {/* Repeat for other cards with the same styles */}

  <Card
    sx={{
      backgroundColor: 'rgba(150, 130, 233, 0.5)', /* 50% transparency */
// Red color with transparency
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      boxShadow: 'none', // Remove shadow
      padding: 2, // Padding inside the card
      width: '300px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card
        backgroundColor: '#9682e9', // Darker red on hover
      },
    }}
  >
    <CardContent>
      <Typography variant="h5" component="div" style={{ color: 'white' }}>
        Employee Task
      </Typography>
      <Typography variant="body2" style={{ color: 'white' }}>
        This is a card with a red, semi-transparent background and a blur effect.
      </Typography>
    </CardContent>
  </Card>

  {/* Repeat for other cards with the same styles */}

  <Card
    sx={{
      backgroundColor: 'rgba(46, 209, 137, 0.5)', /* 50% transparency */
 // Red color with transparency
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      boxShadow: 'none', // Remove shadow
      padding: 2, // Padding inside the card
      width: '300px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card
        backgroundColor: '#2ed189', // Darker red on hover
      },
    }}
  >
    <CardContent>
      <Typography variant="h5" component="div" style={{ color: 'white' }}>
        Employee Paysplip
      </Typography>
      <Typography variant="body2" style={{ color: 'white' }}>
        This is a card with a red, semi-transparent background and a blur effect.
      </Typography>
    </CardContent>
  </Card>

  {/* Repeat for other cards with the same styles */}

  <Card
    sx={{
      backgroundColor: 'rgba(246, 166, 1, 0.5)', /* 50% transparency */
 // Red color with transparency
      backdropFilter: 'blur(10px)', // Blur effect
      borderRadius: 2, // Rounded corners
      boxShadow: 'none', // Remove shadow
      padding: 2, // Padding inside the card
      width: '300px',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      '&:hover': {
        transform: 'scale(1.05)', // Slightly enlarge the card
        backgroundColor: '#f6a601', // Darker red on hover
      },
    }}
  >
    <CardContent>
      <Typography variant="h5" component="div" style={{ color: 'white' }}>
        Employee Projects
      </Typography>
      <Typography variant="body2" style={{ color: 'white' }}>
        This is a card with a red, semi-transparent background and a blur effect.
      </Typography>
    </CardContent>
  </Card>

  {/* Repeat for other cards with the same styles */}

</div>

      </Box>
    </div>
  );
}

export default Board;


