// import Nav from "./nav";
import React, { useState } from "react";
import "../files.css/login_signup.css"
import {  useNavigate } from "react-router-dom";
//import PhoneInput from 'react-phone-number-input'
// import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Login(props) {
  
  // const location = useLocation();
  // const [value, setValue] = useState();
  const navigate = useNavigate();

  return (
        <>
      {/* <Nav></Nav> */}
      <div className="login-container">
        <form className="form" onSubmit={navigate('/personalspace')}>
          <div className="form-content">
            <h3 className="form-title">Log In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <span className="link-primary" onClick={navigate('/signup')}>Sign Up</span>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
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
    );
}
