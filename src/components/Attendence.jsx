// import React, { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import { Button, Card, Drawer, Stack, TextField } from "@mui/material";
// import image1 from "./../assets/3.png"; // Import your image
// import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
// import Home from "./Home";
// import Checkin from "./Checkin";
// import Checkout from "./Checkout";

// function Attendence() {
//   const [rightOpen, setRightOpen] = useState(false); // Manage open state
//   const [leftOpen, setLeftOpen] = useState(false);
//   // Function to handle drawer open/close
//   const righttoggleDrawer = (open) => (event) => {
//     if (
//       event.type === "keydown" &&
//       (event.key === "Tab" || event.key === "Shift")
//     ) {
//       return;
//     }
//     setRightOpen(open);
//   };
//   const lefttoggleDrawer = (open) => (event) => {
//     // if (
//     //   event.type === "keydown" &&
//     //   (event.key === "Tab" || event.key === "Shift")
//     // ) {
//     //   return;
//     // }
//     setLeftOpen(open);
//   };
//   return (
//     <div>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         style={{
//           backgroundColor: "rgba(255, 255, 255, 0.1)",
//           backdropFilter: "blur(10px)",
//         }}
//       >
//         <Toolbar>
//           <Typography
//             style={{ color: "black", marginLeft: 10, width: 90 }}
//             variant="h5"
//             noWrap
//           >
//             ONE<i style={{ color: "blue" }}>sol</i>
//           </Typography>

//           <Stack
//             direction="row"
//             spacing={2}
//             sx={{ p: 2 }}
//             style={{ flexGrow: 1, marginRight: 5 }}
//           >
//             <Button LinkComponent="/home">home</Button>
//             <Button>create</Button>
//             <Button>about</Button>
//           </Stack>
//           <Stack direction="row" spacing={2}>
//             <Button variant="contained">home</Button>
//             <Button variant="outlined" size="large">
//               Sign in
//             </Button>
//           </Stack>
//         </Toolbar>
//       </AppBar>
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           mt: { xs: 7, sm: 8 },
//           minHeight: "100vh",
//           //backgroundImage: `url(${image1})`,
//           // backgroundPosition: 'center',
//           // backgroundRepeat: 'no-repeat',
//           // backgroundSize: 'cover',
//           // backgroundAttachment: 'fixed',
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           backgroundSize: "100%",
//         }}
//       >
//         <div
//           style={{width: "100%",border: "1px solid red",display: "flex",justifyContent: "space-between",}}>
//           <div
//             style={{
//               width: "400px",
//               border: "1px  solid red",
//               height: "100vh",
//               backgroundColor: "rgba(0, 0, 0, 0.3)",
//               overflow:'hidden'
//             }}
//           >
//             khcsddv
//           </div>
//           <div>
//             {/* first */}
//             <div style={{height:'400px'}}>
// gg..............................................
//             </div>
//             <div
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               <Button
//                 onClick={lefttoggleDrawer(true)}
//                 variant="outlined"
//                 size="large"
//               >
//                 Open Drawer
//               </Button>
//               <Drawer
//                 anchor="left"
//                 open={leftOpen}
//                 onClose={lefttoggleDrawer(false)}
//               >
//                 <div
//                   style={{ width: 650, padding: "20px",overflow:'hidden' }}
//                   role="presentation"
//                   onClick={lefttoggleDrawer(false)}
//                   onKeyDown={lefttoggleDrawer(false)}
//                 >
//                   <Checkin />
//                   <p>Checkout Content Here</p>
//                 </div>
//               </Drawer>
//               {/* <Button variant="outlined" size='large'>Go To Dashboard</Button> */}
//               <Button
//                 onClick={righttoggleDrawer(true)}
//                 variant="outlined"
//                 size="large"
//               >
//                 Open Drawer
//               </Button>
//               <Drawer
//                 anchor="right"
//                 open={rightOpen}
//                 onClose={righttoggleDrawer(false)}
//               >
//                 <div
//                   style={{ width: 650, padding: "20px", overflow: "hidden" }}
//                   role="presentation"
//                   onClick={righttoggleDrawer(false)}
//                   onKeyDown={righttoggleDrawer(false)}
//                 >
//                   <Checkout />
//                   <p>Checkout Content Here</p>
//                 </div>
//               </Drawer>
//             </div>
//             <div style={{height:'400px'}}>
// gg..............................................
//             </div>
//           </div>

//           <div
//             style={{
//               width: "400px",
//               border: "1px  solid red",
//               height: "100vh",
//               backgroundColor: "rgba(0, 0, 0, 0.3)",
//             }}
//           >
//             bvjgbh
//           </div>
//         </div>
//       </Box>
//     </div>
//   );
// }

// export default Attendence;

import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button, Drawer, Stack } from "@mui/material";
import Checkin from "./Checkin";
import Checkout from "./Checkout";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image1 from './../assets/12.jpg'; // Import your image

function Attendence() {
  const [rightOpen, setRightOpen] = useState(false);
  const [leftOpen, setLeftOpen] = useState(false);
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState("");
  const [attenceceStatus, setAttendenceStatus] = useState('')
  const [todayDate, setTodayDate]  = useState();
  const [workinghours, setWorkinghours] = useState(0);
  const [workingmin, setWorkingmin] = useState(0);

  const [hours, setHours] = useState(0);
  const [minutes, setMin] = useState(0);
  const [seconds, setSec] = useState(0);
  const [isActive, setIsActive] = useState(true);
  

  const [time, setTime] = useState(32400);
  const navigate = useNavigate();
  
  

  const toggleRightDrawer = (open) => () => {
    //setRightOpen(open);
    setRightOpen(open);
    if (!open) {
      window.location.reload();
    }
  };

  const toggleLeftDrawer = (open) => () => {
   // setLeftOpen(open);
    setLeftOpen(open);
  if (!open) {
    window.location.reload();
  }
  };

  const apidata = async()=>{
    const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/today-emp-atttendence?empCode=' + localStorage.getItem('empCode'))
    if (response.status === 201) {
        console.log("papu",response)
        setAttendenceStatus(response.data.result.attendenceStatus)
        localStorage.setItem("checkin",response.data.result.checkIn)
        if(localStorage.getItem('chekin')!=null ){
            setIsActive(true);
            localStorage.setItem('active',true);
        }
        localStorage.setItem("checkout",response.data.result.checkOut)
        setCheckIn(response.data.result.checkIn)
        setCheckOut(response.data.result.checkOut)
        setTodayDate(response.data.result.todayDate)
        if(response.data.result.checkOut!=null){
            console.log("kkkkkkkkkkkkkkkkkkkkkkk")
            const hours = response.data.result.workingHours/60;
            if(hours>1){
              setWorkinghours(hours);
            }
            else{
              setWorkingmin(response.data.result.workingHours);
            }
        }
        localStorage.setItem('remoteWork',response.data.result.remoteWork)
    }
}

useEffect(()=>{
  apidata();

  if (!sessionStorage.getItem('timerCheck')) {
    sessionStorage.setItem('timerCheck', 'true');
    window.location.reload();
  }

  let storedTime = localStorage.getItem('startTime');
  let startTime = storedTime ? parseInt(storedTime) : Date.now();
  
  // If no start time is stored, set it to the current time
  if (!storedTime) {
    localStorage.setItem('startTime', startTime);
  }

  const updateTimer = () => {
    let currentTime = Math.floor((Date.now() - startTime) / 1000); // Calculate elapsed time in seconds
    const hours = Math.floor(currentTime / 3600);
    const minutes = Math.floor((currentTime % 3600) / 60);
    const secs = currentTime % 60;

    setHours(hours);
    setMin(minutes);
    setSec(secs);
  };

  let intervalId;
  if (localStorage.getItem('checkout')=='null') {
    intervalId = window.setInterval(updateTimer, 1000);
    console.log(localStorage.getItem('checkout'))
  } else if (localStorage.getItem('checkout')!='null' && storedTime) {
    // If timer is not active, clear the interval
    clearInterval(intervalId);
    localStorage.removeItem('startTime')
    setHours(0);
    setMin(0);
    setSec(0);
  }

  // Cleanup interval on component unmount
  return () => clearInterval(intervalId);


},[])

// const formatTime = (seconds) => {
//   const hours = Math.floor(seconds / 3600);
//   const minutes = Math.floor((seconds % 3600) / 60);
//   const secs = seconds % 60;
//   setHours(hours);
//   setMin(minutes);
//   setSec(secs);
//   console.log(hours+":"+minutes+":"+secs)

//  // return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
// };


const logout  = ()=>{
  localStorage.removeItem('token')
  sessionStorage.removeItem('timerCheck');
  navigate("/login")
}

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <Typography
            style={{ color: "black", marginLeft: 10, width: 90 }}
            variant="h5"
            noWrap
          >
            CKD<i style={{ color: "blue" }}>vcs</i>
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            sx={{ p: 2 }}
            style={{ flexGrow: 1, marginRight: 5 }}
          >
            <Button component={Link} to="/das">home</Button>
            <Button component={Link} to="/profile" >profile</Button>
            <Button>about</Button>
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
          // backgroundImage: `url(${image1})`,
          // backgroundPosition: "100% center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{ width: "100%", display: "flex", justifyContent: "space-between" }}
        >
          <div
            style={{
              width: "400px",
             // border: "1px solid red",
             borderRadius:'20px',
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              overflow: "hidden",
            }}>


            <div style={{border:'1px solid white', borderRadius:'10px',margin:'10%',  padding:'15px'}}>
             <div>
              <p style={{ fontFamily:'fantasy',fontSize:'25px',color:'white'}}> Check IN Side</p>
              <h1>Timer: {`${hours}:${minutes}:${seconds}`}</h1>
              <p> this is your check  in side if  you are  check in you can see your status in down </p>
              <p  style={{color:'white', marginTop:'10px'}}> <i>otherwise click on open check In to for check In today work</i></p>
             </div>

             <div style={{marginTop:'5%'}}>
             <p style={{fontFamily:'fantasy', fontSize:'25px', color:'white'}} >check IN Data</p>

             <div style={{textAlign:'center' , border:'1px solid black', borderRadius:'10px', marginTop:'5%', padding:'10px'}}>
             <p><b>checkIn : </b> {checkIn!=null ? checkIn : 'panding..'}</p>
             <p><b>todayDate : </b> {todayDate!=null? todayDate:'panding..'}</p>
             </div>

             </div>
            </div>
            



          </div>
          <div>
            <div style={{ height: '400px' , padding:'3%', position:'relative', backgroundColor: 'rgba(255, 255, 255, 0.1)',backdropFilter: 'blur(10px)',}}>
              <div style={{position:'absolute', bottom:'7%'}}>
  
               <p>Hello {localStorage.getItem('name')}</p>
              <p style={{fontFamily:'fantasy', fontSize:'25px', color:'gray'}}>Welcome to CKD<i>vcs</i></p>

              <p>your Today Timing Status is <b>{attenceceStatus!='' ? attenceceStatus : 'panding..'}</b></p>
              {/* <h1>Timer: {formatTime(time)}</h1> */}
              </div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap:'10px'
              }}
            >
              {/* { interval = setInterval(() => getTime(deadline), 1000);
                  return () => clearInterval(interval)} */}


              <Button onClick={toggleLeftDrawer(true)} variant="outlined" size="large">
                Open CheckIn
              </Button>
              <Drawer anchor="left" open={leftOpen} onClose={toggleLeftDrawer(false)}>
                <div style={{ width: 550, padding: "20px",overflow:'hidden' }}>
                  <Checkin />
                  <Button variant="contained" onClick={toggleLeftDrawer(false)}>
                    Close CheckIn
                  </Button>
                </div>
              </Drawer>

              <Button onClick={toggleRightDrawer(true)} variant="outlined" size="large">
                Open ChechOut
              </Button>
              <Drawer anchor="right" open={rightOpen} onClose={toggleRightDrawer(false)}>
                <div style={{ width: 550, padding: "20px" }}>
                  <Checkout />
                  <Button variant="contained" onClick={toggleRightDrawer(false)}>
                    Close checkout
                  </Button>
                </div>
              </Drawer>
            </div>
            <div style={{ height: '400px' }}>
              ..............................................................................
            </div>
          </div>

          <div
            style={{
              width: "400px",
             // border: "1px solid red",
              borderRadius:'20px',
              height: "100vh",
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}>


<div style={{border:'1px solid white', borderRadius:'10px',margin:'10%',  padding:'15px'}}>
             <div>
              <p style={{ fontFamily:'fantasy',fontSize:'25px',color:'white'}}> Check out Side</p>
              <p> this is your check out side if you are check out you can see your status in down </p>

              <p  style={{color:'white', marginTop:'10px'}}> <i>otherwise click on open check out to for check  out today work</i></p>
             </div>
             <div style={{marginTop:'5%'}}>
             <p style={{fontFamily:'fantasy', fontSize:'25px', color:'white'}} >check out Data</p>

             <div style={{textAlign:'center' , border:'1px solid black', borderRadius:'10px', marginTop:'5%', padding:'10px'}}>
             <p><b>checkOUT : </b>{checkOut!=null ? checkOut : "panding.."}</p>
             <p><b>checkIN : </b> {checkIn != null ? checkIn : 'panding'}</p>
             <p><b>todayDATE : </b> {todayDate!=null ? todayDate : "pandding"}</p>
             <p><b>workingHOURS : </b>{workinghours>=1 ? (<b> {workinghours} hours</b>) : (<b> {workingmin} Min</b>) }</p>

             </div>

             </div>
            </div> 


          </div>
        </div>
      </Box>
    </div>
  );
}

export default Attendence;

