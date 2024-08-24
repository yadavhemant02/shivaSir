import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { Button, Card, CardContent, Stack, TextField } from "@mui/material";
import image1 from "./../assets/6.jpg"; // Import your image
import HowToRegTwoToneIcon from "@mui/icons-material/HowToRegTwoTone";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { isElement } from "react-dom/test-utils";

function Profile() {

  const [isToggled, setIsToggled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [baseImage,setBaseImage] = useState('');
  const [designation, setDesignation]  = useState('')
  const [records,setRecord] = useState([])
  const [email, setEmail]  = useState('')
  const [workinghours, setWorkinghours] = useState(0);
  const [workingmin, setWorkingmin] = useState(0);

  const navigate = useNavigate();

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    await handleUploadImage(file);
  };

  const handleUploadImage = async (file) => {
    const formData = new FormData();
    formData.append("empCode", localStorage.getItem('empCode'));
    formData.append("empNumber", localStorage.getItem('empNumber'));
    formData.append("file", file);

    const response = await axios.post(
      "http://157.245.109.206:8093/emp-handler/image/edit-emp-image",
      formData
    );
    if (response.status === 201) {
      console.log(response)
      fetchImageApi();
    }
    console.log("response", response.data);
  };


  const fetchImageApi = async () => {
    try {
        const response = await axios.get('http://157.245.109.206:8093/emp-handler/image/get-emp-image?empCode=' + localStorage.getItem('empCode'));
        if (response.status === 201) {
            setIsToggled(true);
            console.log(response)
            setBaseImage("data:image/png;base64," + response.data.result);
        } else {
            setIsToggled(false);
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        setIsToggled(false);
    } 
};

const empDetails = async () => {
  const response = await axios.post('http://157.245.109.206:8091/identity-handler/details/get-emp-details?empCode=' + localStorage.getItem('empCode'));
  console.log("responseHemant", response.data.disignation)
  setDesignation(response.data.disignation)
  //localStorage.setItem('designation',response.data.disignation)
};


const fetchEmployeeAllAttendence = async () => {
  const response = await axios.post('http://157.245.109.206:8093/emp-handler/attendence/emp-all-attendence?empCode=' + localStorage.getItem('empCode'))
  setRecord(response.data.result)
  console.log("lulu",response)
} 

const logout = ()=>{
  localStorage.removeItem('token');
  sessionStorage.removeItem('reloaded');
  navigate('/login')
}  

  useEffect(()=>{
    empDetails();
    fetchImageApi();
    fetchEmployeeAllAttendence();
  },[])




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
            <Button component={Link} to="/das">
              home
            </Button>
            <Button>profile</Button>
            <Button>about</Button>
            <Button component={Link} to="/attendence">
              attendence
            </Button>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" size="large">
              {localStorage.getItem('name')}
            </Button>
            <Button variant="contained" onClick={logout}>logOut</Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          mt: { xs: 7, sm: 8 },
          minHeight: "90vh",
          backgroundImage: `url(${image1})`,
          backgroundPosition: "100% center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundSize: "100%",
          backgroundAttachment: "fixed",
          // display: 'flex',
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <div
            style={{
              position: "absolute",
              top: "20%",
              left: "10%",
              padding: "1%",
            }}
          >
            <div>
              {/* <img
                src={image1}
                style={{
                  width: "100px",
                  height: "100px",
                  border: "2px solid green",
                  borderRadius: "50%",
                }}
              /> */}
               {/* <div
      style={{
        position: 'relative',
        display: 'inline-block',
        width: '100px',
        height: '100px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isToggled ? (
        <img
          src={baseImage}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            border: '2px solid green',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      ) : (
        <img
          src={image1}
          alt="Profile"
          style={{
            width: '100px',
            height: '100px',
            border: '2px solid green',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      )}
      {isHovered && (
        <label
          htmlFor="file-upload"
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#2ed189',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '12px',
          }}
        >
          Edit
        </label>
      )}
      <input
        id="file-upload"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          display: 'none',
        }}
      />
    </div> */}

    {isToggled ? (
        <img
          src={baseImage}
          alt="Profile"
          style={{
            objectFit:'cover',
            width: '100px',
            height: '100px',
            border: '2px solid green',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />
      ) : (
        <img
          src={image1}
          alt="Profile"
          style={{
            objectFit:'cover',
            width: '100px',
            height: '100px',
            border: '2px solid green',
            borderRadius: '50%',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          }}
        />)}

<label htmlFor="file-upload"
     style={{border:'1px solid white',borderRadius:'10px' ,padding:'1%'}}
       >
          Edit profile
        </label>

<input id="file-upload" type="file"  accept="image/*" onChange={handleFileChange} style={{display:'none'}}/>

            </div>

            <div>
              <p
                style={{
                  color: "#8b8b8b",
                  fontFamily: "sans-serif",
                  fontSize: "30px",
                  fontWeight: "bold",
                }}
              >
               {localStorage.getItem('name')}
              </p>
              <p>{designation}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "7%",
                gap: "10px",
              }}
            >
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "10px",
                  padding: "15px",
                }}
              >
                <p>Designation</p>
                <p style={{ color: "gray" }}> {designation}</p>
              </div>
              <div
                style={{
                  border: "1px solid gray",
                  borderRadius: "10px",
                  padding: "15px",
                }}
              >
                <p>Email</p>
                <p style={{ color: "gray" }}>
                  {" "}
                  {localStorage.getItem('email')}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            //border: "1px solid red",
            width: "100%",
            height: "90vh",
            padding: "5%",
          }}
        >
          <div>
            <p
              style={{
                color: "#8b8b8b",
                fontFamily: "sans-serif",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Attendence Details
            </p>
          </div>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap", // Allows wrapping of cards to next line
              gap: 2, // Spacing between cards
              maxHeight: "100%", // Ensure the container is fixed
              overflowY: "auto", // Enable vertical scrolling
              paddingRight: 2, // Space for scrollbar
              scrollbarWidth: "thin", // Firefox scrollbar
              "&::-webkit-scrollbar": {
                width: "8px", // Width of the scrollbar
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f1f1f1", // Scrollbar track color
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888", // Scrollbar thumb color
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#555", // Thumb color on hover
              },
            }}
          >
            {records.map((item, index) => (
  item.attendenceStatus === "ABSENT" ? (
    <Card
      key={index}
      sx={{
        backgroundColor: "rgba(255, 0, 0, 0.3)", // Red color with transparency
        backdropFilter: "blur(10px)", // Blur effect
        borderRadius: 2, // Rounded corners
        boxShadow: "none", // Remove shadow
        padding: 2, // Padding inside the card
        width: "calc(25% - 16px)", // Ensure 4 cards per row
        transition: "transform 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge the card
          backgroundColor: "rgba(255, 0, 0, 0.5)", // Darker red on hover
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ color: "white" }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{item.todayDate}</p>
            <p style={{
              color: '#fff',
              backgroundColor:'rgba(255, 0, 0, 0.5)',
              border: '1px solid white',
              paddingLeft: "10px",
              paddingRight: '10px',
              borderRadius: '7px'
            }}>
              {item.attendenceStatus === "ABSENT" ? 'Absent' : 'Pending'}
            </p>
          </div>
        </Typography>
        <Typography variant="body2" style={{ color: "white" }}>
          Check-In: {item.checkIn} <br />
          Check-Out: {item.checkOut != '' ? item.checkOut : "pandding"}<br />
          Working Hours: {item.workingHours/60>=1 ? (<b> {item.workingHours/60 } hours</b>) : (<b> {item.workingHours} Min</b>) }
        </Typography>
      </CardContent>
    </Card>
  ) : item.attendenceStatus === "ONTIME" ? (
    <Card
      key={index}
      sx={{
        backgroundColor: "rgba(0, 128, 0, 0.3)", // Green color with transparency
        backdropFilter: "blur(10px)", // Blur effect
        borderRadius: 2, // Rounded corners
        boxShadow: "none", // Remove shadow
        padding: 2, // Padding inside the card
        width: "calc(25% - 16px)", // Ensure 4 cards per row
        transition: "transform 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge the card
          backgroundColor: "rgba(0, 128, 0, 0.5)", // Darker green on hover
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ color: "white" }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{item.todayDate}</p>
            <p style={{
              color: '#fff',
              backgroundColor:"rgba(0, 128, 0, 0.5)",
              border: '1px solid white',
              paddingLeft: "10px",
              paddingRight: '10px',
              borderRadius: '7px'
            }}>
              {item.attendenceStatus === "ONTIME" ? 'OnTime' : 'Pending'}
            </p>
          </div>
        </Typography>
        <Typography variant="body2" style={{ color: "white" }}>
          Check-In: {item.checkIn} <br />
          Check-Out: {item.checkOut != null ? item.checkOut : "Pending.."}<br />
          Working Hours:  {item.workingHours/60>=1 ? (<b> {item.workingHours/60 } hours</b>) : (<b> {item.workingHours} Min</b>) }
        </Typography>
      </CardContent>
    </Card>
  ) : (
    <Card
      key={index}
      sx={{
        backgroundColor: 'rgba(246, 166, 1, 0.5)', // Grey color with transparency for other statuses
        backdropFilter: "blur(10px)", // Blur effect
        borderRadius: 2, // Rounded corners
        boxShadow: "none", // Remove shadow
        padding: 2, // Padding inside the card
        width: "calc(25% - 16px)", // Ensure 4 cards per row
        transition: "transform 0.3s ease, background-color 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge the card
          backgroundColor: "#f6a601", // Darker grey on hover
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          style={{ color: "white" }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p>{item.todayDate}</p>
            <p style={{
              color: '#fff',
              backgroundColor:'#f6a601',
              border: '1px solid white',
              paddingLeft: "10px",
              paddingRight: '10px',
              borderRadius: '7px'
            }}>
              {item.attendenceStatus === "LATE" ? 'Late' : 'Pending'}
            </p>
          </div>
        </Typography>
        <Typography variant="body2" style={{ color: "white" }}>
          Check-In: {item.checkIn} <br />
          Check-Out: {item.checkOut != null ? item.checkOut : "Pending.."}<br />
          Working Hours: {item.workingHours/60>=1 ? (<b> {item.workingHours/60 } hours</b>) : (<b> {item.workingHours} Min</b>) }
        </Typography>
      </CardContent>
    </Card>
  )
))}


            {/* ))} */}
          </Box>
        </div>
      </Box>
    </div>
  );
}

export default Profile;
