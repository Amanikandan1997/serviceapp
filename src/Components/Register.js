import React from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios
import "../App.css";

const validateMessages = {
  required: "This field is required!",
  types: {
    email: "Not a valid email!",
  },
};

const Register = () => {
  const onFinish = async (values) => {
    try {
      const response = await axios.post("YOUR_REGISTRATION_API_ENDPOINT", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting registration:", error);
    }
  };

  return (
    <Box
    sx={{
      minHeight: "150vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: 'rgb(28, 2, 75)' ,// Set the background color here
    }}
  >
    
      <div className="form">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onFinish({
              name: e.target.name.value,
              email: e.target.email.value,
              phoneNumber: e.target.phoneNumber.value,
              password: e.target.password.value,
              confirmPassword: e.target.confirmPassword.value,
              select: e.target.select.value,
            });
          }}
          style={{
            width: "100%",
            maxWidth: "400px",
             // Adjust the maximum width as needed
            padding: "20px",
            borderRadius: "20px",
            color:"white",
            
background: "rgba(255, 255, 255, 0.23)",

boxshadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropfilter: "blur(6.2px)",
webkitbackdropfilter: "blur(6.2px)",
border: '1px solid rgba(255, 255, 255, 0.35)',
          }}
         
        >
          <Typography variant="h4" align="center" gutterBottom>
            Register
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="name"
            sx={{ color:"white"}}>Name</InputLabel>
            <Input id="name" required />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="email"  sx={{ color:"white"}}>Email</InputLabel>
            <Input id="email" type="email" required />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="phoneNumber"  sx={{ color:"white"}}>Phone Number</InputLabel>
            <Input id="phoneNumber" required />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="password"  sx={{ color:"white"}}>Password</InputLabel>
            <Input id="password" type="password" required />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="confirmPassword"  sx={{ color:"white"}}>Confirm Password</InputLabel>
            <Input id="confirmPassword" type="password" required />
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel htmlFor="select"  sx={{ color:"white"}}>Select</InputLabel>
            <Select id="select" required>
              <MenuItem value="1">Level 1</MenuItem>
              <MenuItem value="2">Level 2</MenuItem>
              <MenuItem value="3">Level 3</MenuItem>
              <MenuItem value="4">Level 4</MenuItem>
            </Select>
          </FormControl>
         <Link to="/pay"><button >Submit</button></Link> 
          <Typography variant="body2" align="center" sx={{ marginTop: "10px" }}>
            <Link to="/login">Already have an account? Login</Link>
          </Typography>
        </form>
      </div>
    </Box>
  );
};

export default Register;