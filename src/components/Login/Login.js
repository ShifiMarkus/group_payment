import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
// import { setLogin } from '../Navbar/nav';
import { wait } from '@testing-library/user-event/dist/utils';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="/">
        Pay In Group
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
// const users = [ {email:'1234@gmail.com', password:'1234'},
//                 {email:'shifimarkus@gmail.com', password:'123'}];

export default function LogIn() {
  const navigate = useNavigate();
  const [user,setUser] = React.useState({});
  
const [fields, setFields] = React.useState({
  email: "",
  password: ""
});
const [errors, setErrors] = React.useState({
   email: "",
  password: ""
});

const validate = (name, value) => {
  debugger
  switch (name) {
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
    case "password":
      if (!value) {
        return "❗סיסמא היא שדה חובה ";
      } else if (value.length < 6 || value.length > 15) {
        return "הזן בבקשה שש תווים לפחות";
      } else {
        return "";
      }
    default: {
      return "";
    }
  }
};


const handleUserInput = e => {
  setErrors({ ...errors, [e.target.name]: validate(e.target.name, e.target.value) })
  setFields({ ...fields, [e.target.name]: e.target.value })
}

const handleSubmit1 = async (e) => {
  e.preventDefault();
  let validationErrors = {};
  Object.keys(fields).forEach(name => {
    const error = validate(name, fields[name]);
    if (error && error.length > 0) {
      validationErrors[name] = error;
    }
  });
  if (Object.keys(validationErrors).length > 0) {
    // this.setState({ errors: validationErrors });
    setErrors(validationErrors)
    return;
  }
  if (fields.email && fields.password) {
    const data = {
      email: fields.email,
      password: fields.password
    };
    window.alert("נשלח בהצלחה!", JSON.stringify(data));
    console.log("----data----", data);
    var res = await fetch(`https://localhost:44320/api/users/${user.UserMail}/${user.UserPassword}`)
    console.log(res)
    if(res.ok)    
    {
      // setLogin(true)
      wait(5)
      navigate('/personalspace')
    }
    else{
      console.log('Please try again or sign up')
      alert('Please try again or sign up ')
    }
  }
}

  // const onChange=(selected,key) => {
  //   setUser((prev)=>({...prev,[key]:selected}))
  //  }

  // const handleSubmit = async (event) => {
  //   // event.preventDefault();
  //   var res = await fetch(`https://localhost:44320/api/users/${user.UserMail}/${user.UserPassword}`)
  //   console.log(res)
  //   if(res.ok)    
  //   {
  //     // setLogin(true)
  //     wait(5)
  //     navigate('/personalspace')
  //   }
  //   else{
  //     console.log('Please try again or sign up')
  //     alert('Please try again or sign up ')
  //   }
  // };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log In
          </Typography>
          <Box component="form" onSubmit={handleSubmit1} noValidate sx={{ mt: 1 }}>
          <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                name="email"
                value={fields.email}
                onChange={event => handleUserInput(event)}
                label="מייל"
                id="email"

              />
              <div>
                <span style={{ color: 'red' }} className="text-danger">{errors.email}</span>
              </div>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                value={fields.password}
                onChange={event => handleUserInput(event)}
                label="סיסמא"
                id="password"
              />
              <div>
                <span style={{ color: 'red' }} className="text-danger">{errors.password}</span>
              </div>
              </Box>
            {/* <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event)=>onChange(event.target.value,"UserMail")}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event)=>onChange(event.target.value,"UserPassword")}
            /> */}
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
// // import Nav from "./nav";
// import React, { useState } from "react";
// import "../files.css/login_signup.css"
// import {  useNavigate } from "react-router-dom";
// //import PhoneInput from 'react-phone-number-input'
// // import PhoneInput from 'react-phone-input-2'
// import 'react-phone-input-2/lib/style.css'

// export default function Login(props) {
  
//   // const location = useLocation();
//   // const [value, setValue] = useState();
//   const navigate = useNavigate();

//   return (
//         <>
//       {/* <Nav></Nav> */}
//       <div className="login-container">
//         <form className="form" onSubmit={navigate('/personalspace')}>
//           <div className="form-content">
//             <h3 className="form-title">Log In</h3>
//             <div className="text-center">
//               Not registered yet?{" "}
//               <span className="link-primary" onClick={navigate('/signup')}>Sign Up</span>
//             </div>
//             <div className="form-group mt-3">
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control mt-1"
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group mt-3">
//               <label>Password</label>
//               <input
//                 type="password"
//                 className="form-control mt-1"
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="d-grid gap-2 mt-3">
//               <button type="submit" className="btn btn-primary">
//                 Submit
//               </button>
//             </div>
//             <p className="text-center mt-2">
//               Forgot <a>password?</a>
//             </p>
//           </div>
//         </form>
//       </div>
//       </>
//     );
// }
