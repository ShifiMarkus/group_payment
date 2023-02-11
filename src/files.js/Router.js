import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import PersonalSpace from './PersonalSpace';
import Main from "./Main";
import Settings from "./Setting";
import About from "./About";
import Login from "./Login";
import SignUp from "./SignUp";
import CreateGroup from "./CreateGroup";
import FullScreenDialog from "./try";
import ResponsiveAppBar from './nav';
// import Nav from "./nav";

export default function Router(){

    return(
        <>
        <BrowserRouter>
        <ResponsiveAppBar></ResponsiveAppBar>
        <Routes>
            <Route path="/" element={<Main/>}></Route>
            <Route path="/personalspace" element={<PersonalSpace/>}></Route>
            <Route path="/settings" element={<Settings/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/signup" element={<SignUp/>}></Route>
            <Route path="/creategroup" element={<CreateGroup/>}></Route>
            <Route path="/try" element={<FullScreenDialog/>}></Route>
        </Routes>
        </BrowserRouter>
        {/* <Router>
           <div className="App">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/personalspace">personalspace</Link>
              </li>
              <li>
                <Link to="/settings">settings</Link>
              </li>
            </ul>
           <Routes>
                 <Route exact path='/' element={<Main/>}></Route>
                 <Route exact path='/personalspace' element={<PersonalSpace/>}></Route>
                 <Route path="/settings" element={<Settings/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/login" element={<Login_SignUp/>}></Route>
                <Route path="/signup" element={<Login_SignUp/>}></Route>
                <Route path="/creategroup" element={<CreateGroup/>}></Route>
                <Route path="/try" element={<FullScreenDialog/>}></Route>
          </Routes>
          </div>
       </Router> */}
        </>

    );
}