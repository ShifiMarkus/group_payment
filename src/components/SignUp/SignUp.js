import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
// import { useDispatch } from "react-redux";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import isIsraeliIdValid from 'israeli-id-validator';
import { useNavigate } from "react-router-dom";


function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        Pay In Group
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();


export default function SignUp() {
  const navigate = useNavigate(); 
  // const dispatch = useDispatch();
  const [fields, setFields] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    id: "",
  });
  const [errors, setErrors] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    id: "",
  });
  //  const onChange=(selected,key) => {
  //   setUser((prev)=>({...prev,[key]:selected}))
  //   console.log(user)
  //  }

  const validate = (name, value) => {
    debugger;
    switch (name) {
      case "firstName":
        if (!value || value.trim() === "") {
          return "❗שם פרטי הוא שדה חובה ";
        } else {
          return "";
        }
      case "email":
        if (!value) {
          return "❗מייל הוא שדה חובה ";
        } else if (
          !value.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)
        ) {
          return "הזן כתובת מייל חוקית";
        } else {
          return "";
        }
      case "phone":
        if (!value || value.trim() === "") {
          return "❗מספר הטלפון הוא שדה חובה ";
        } else if (!value.match(/^[0-9]\d{9}$/)) {
          return "הכנס מספר טלפון תקין";
        } else {
          return "";
        }
      case "password":
        if (!value) {
          return "❗סיסמא היא שדה חובה ";
        } else if (value.length < 8 || value.length > 8) {
          return "הזן בבקשה שמונה תווים בדיוק";
        } else {
          return "";
        }
      case "lastName":
        if (!value || value.trim() === "") {
          return "❗שם משפחה הוא  שדה חובה ";
        } else {
          return "";
        }
      case "id":
        if (!isIsraeliIdValid(value)) {
          return "תעודת זהות לא תקינה";
        } else {
          return "";
        }
      default: {
        return "";
      }
    }
  };

  const handleUserInput = (e) => {
    setErrors({
      ...errors,
      [e.target.name]: validate(e.target.name, e.target.value),
    });
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSubmit1 = async (e) => {
    e.preventDefault();
    let validationErrors = {};
    Object.keys(fields).forEach((name) => {
      const error = validate(name, fields[name]);
      if (error && error.length > 0) {
        validationErrors[name] = error;
      }
    });
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (
      fields.firstName &&
      fields.lastName &&
      fields.email &&
      fields.password &&
      fields.phone
    ) {
      const data = {
        FirstName: fields.firstName,
        LastName: fields.lastName,
        UserMail: fields.email,
        UserPassword: fields.password,
        UserPhone: fields.phone,
        UserId: fields.id,
      };
      var res = await fetch(`https://localhost:44320/api/Users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok) {
       
        navigate('/')
      } else {
      }
    }
  };

  // const handleSubmit = async(event) => {
  //   event.preventDefault();
  //   var res = await fetch(`https://localhost:44320/api/users`,{
  //     method: "POST",
  //     headers:{
  //     "Content-Type": "application/json",
  //    },
  //     body: JSON.stringify(data)
  //    })
  //   // const ans = async () =>{await service.addUser(user).then(()=>{console.log(ans + "success")})}
  //   if(res.ok)
  //  {
  //   setLogin(true)
  //   navigate('/personalspace')
  //  }
  //  else{
  //   alert('User already exists, please login')
  //  }
  //   todo call axios func
  //    {service.addUser(user)

  //     navigate('/personalspace')
  //   }
  //   alert("user already exists, please login")
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            {" "}
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit1}
            sx={{ mt: 1 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              
                {/* <Box component="form" noValidate sx={{ mt: 1 }}> */}
                  <TextField
                    // margin="normal"
                   style={{textAlign: "right"}}
                    name="firstName"
                    required
                    fullWidth
                    value={fields.firstName}
                    onChange={(event) => handleUserInput(event)}
                    label="שם פרטי"
                    id="First Name"
                  />
                  <div>
                    <span style={{ color: "red" }} className="text-danger">
                      {errors.firstName}
                    </span>
                  </div>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                  <TextField
                  
                    required
                    fullWidth
                    name="lastName"
                    value={fields.lastName}
                    onChange={(event) => handleUserInput(event)}
                    label="שם משפחה"
                    id="Last Name"
                  />
                  <div>
                    <span style={{ color: "red" }} className="text-danger">
                      {errors.lastName}
                    </span>
                  </div>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="id"
                      value={fields.id}
                      onChange={(event) => handleUserInput(event)}
                      label="תעודת זהות"
                      id="id"
                    />
                    <div>
                      <span style={{ color: "red" }} className="text-danger">
                        {errors.id}
                      </span>
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="email"
                      value={fields.email}
                      onChange={(event) => handleUserInput(event)}
                      label="מייל"
                      id="email"
                    />
                    <div>
                      <span style={{ color: "red" }} className="text-danger">
                        {errors.email}
                      </span>
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="phone"
                      value={fields.phone}
                      onChange={(event) => handleUserInput(event)}
                      label="טלפון"
                      id="phone"
                    />
                    <div>
                      <span style={{ color: "red" }} className="text-danger">
                        {errors.phone}
                      </span>
                    </div>
                    </Grid>
                    <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      value={fields.password}
                      onChange={(event) => handleUserInput(event)}
                      label="סיסמא"
                      id="Password"
                    />
                    <div>
                      <span style={{ color: "red" }} className="text-danger">
                        {errors.password}
                      </span>
                    </div>
                  </Grid>
                {/* </Box> */}
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(event)=>onChange(event.target.value,"LastName")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  name="id"
                  autoComplete="ID"
                  onChange={(event)=>onChange(event.target.value,"UserId")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  name="phoneNumber"
                  autoComplete="phone-number"
                  onChange={(event)=>onChange(event.target.value,"UserPhone")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(event)=>onChange(event.target.value,"UserMail")}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(event)=>onChange(event.target.value,"UserPassword")}
                />
              </Grid> */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            {/* </Grid> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                {/* <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link> */}
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
// // import Nav from "./nav";
// import React, { useState } from "react";
// import "../files.css/login_signup.css"
// import { useNavigate } from "react-router-dom";
// //import PhoneInput from 'react-phone-number-input'
// import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

// export default function SignUp(props) {

// //   const location = useLocation();
// //   const [mode, setMode] = useState(location.state.mode);
//   const [value, setValue] = useState();
//   const navigate = useNavigate();

//   return (
//     <>
//     {/* <Nav></Nav> */}
//     <div className="signup-container">
//       <form className="form" onSubmit={navigate('/personalspace')}>
//         <div className="form-content">
//           <h3 className="form-title">Sign Up</h3>
//           <div className="text-center">
//             Already registered?{" "}
//             <span className="link-primary" onClick={navigate('/login')}>
//               Log In
//             </span>
//           </div>
//           <div className="form-group mt-3">
//             <label>First Name</label>
//             <input
//               type="text"
//               className="form-control mt-1"
//               placeholder="e.g Jane"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>last Name</label>
//             <input
//               type="text"
//               className="form-control mt-1"
//               placeholder="e.g Doe"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Id</label>
//             <input
//               type="text"
//               className="form-control mt-1"
//               placeholder="e.g 123456789"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Email address</label>
//             <input
//               type="email"
//               className="form-control mt-1"
//               placeholder="Email Address"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Password</label>
//             <input
//               type="password"
//               className="form-control mt-1"
//               placeholder="Password"
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label>Phone</label>
//             <PhoneInput
//               className="form-control mt-1"
//               value={value}
//               placeholder="phone"
//               onChange={setValue}
//               country={'Israel'}
//             />
//           </div>
//           <div className="d-grid gap-2 mt-3">
//             <button type="submit" className="btn btn-primary">
//               Submit
//             </button>
//           </div>
//           <p className="text-center mt-2">
//             Forgot <a>password?</a>
//           </p>
//         </div>
//       </form>
//     </div>
//     </>
//   )
//
