// import Nav from "./nav";
import React, { useState } from "react";
import "../files.css/login_signup.css"
import { useNavigate } from "react-router-dom";
//import PhoneInput from 'react-phone-number-input'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function SignUp(props) {
  
//   const location = useLocation();
//   const [mode, setMode] = useState(location.state.mode);
  const [value, setValue] = useState();
  const navigate = useNavigate();
 

  return (
    <>
    {/* <Nav></Nav> */}
    <div className="signup-container">
      <form className="form" onSubmit={navigate('/personalspace')}>
        <div className="form-content">
          <h3 className="form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={navigate('/login')}>
              Log In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Jane"
            />
          </div>
          <div className="form-group mt-3">
            <label>last Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Id</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="e.g 123456789"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Phone</label>
            <PhoneInput
              className="form-control mt-1"
              value={value}
              placeholder="phone"
              onChange={setValue}
              country={'Israel'}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a>password?</a>
          </p>
        </div>
      </form>
    </div>
    </>
  )
}
