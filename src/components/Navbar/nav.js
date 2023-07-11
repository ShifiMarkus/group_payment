import * as React from "react";
import "./nav.css";
import { MenuItems } from "./MenuItems";
import { Button } from "react-bootstrap";
import { Avatar, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCurrentUserId } from "../store/user";
export default function Navbar() {
  // const [clicked, setClicked] = React.useState(false);

  const currentUserId = useSelector((state) => state.user?.currentUserId);
  const dispatch = useDispatch();
  // function handleClick() {
  //   setClicked(!clicked);
  // }
  const handleLogOut = () => {
    dispatch(setCurrentUserId(null))
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  const name = currentUserId !== null ? currentUserId : null;

  return (
    <nav className="NavbarItems" style={{ float: "none" }}>
      <Link className="navbar-logo" to={"/"}> Pay In Group</Link>
      {/* <a className="navbar-logo" href="/"> */}
       
      {/* </a> */}
      <ul className={"nav-menu active"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} key={index} to={item.url}>
                  {item.title}
              </Link>
              {/* <a className={item.cName} href={item.url}>
                {item.title}
              </a> */}
            </li>
          );
        })}
      </ul>
      <Grid
        container
        item
        xs={4}
        spacing={3}
        justifyContent="start"
        alignItems="flex-end"
      >
        {name == null ? (
          <>
            {" "}
            <Button variant="contained" href="/login">
              Log In
            </Button>
            <Button variant="contained" href="/signup">
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Avatar {...stringAvatar("Shifi Markus")} />
            <Button variant="contained" onClick={handleLogOut}>Log Out</Button>
          </>
        )}
      </Grid>
    </nav>
  );
}
//   <Link
//   onClick={() => {
//     trackEvent({ action: `Page Select - \\home` });
//   }}
//   key="home-icon"
//   className={classes.linkText}
//   to={"/"}
// >

//   <span className={`${classes.linkText} ${classes.mainLink}`}>
//     ניהול תיקי השעיות
//   </span>
// </Link>
// {NavLinks.map(({ title, path, Icon }) => (
//   <Link
//     key={path}
//     onClick={() => {
//       trackEvent({ action: `Page Select - ${path}` });
//     }}
//   className={classes.linkText}
//   to={path}
// >
//   <div
//     data-testid={path}
//     key={path}
//     className={classes.linkTextDiv_hover}
//   >
//     {Icon}

//     {title}
//   </div>
// </Link>

// } else {
//   return (
//     <nav className="NavbarItems">
//       <h1 className="navbar-logo">Pay In Group</h1>
//       {/* <div className="menu-icon" onClick={handleClick}></div> */}
//       <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//         {MenuItems.map((item, index) => {
//           return (
//             <li key={index}>
//               <Link key={item.url} to={item.url}>
//                 <div>{item.title}</div>
//               </Link>
//               {/* <a className={item.cName} href={item.url}>
//                 {item.title}
//               </a> */}
//             </li>
//           );
//         })}
//       </ul>
//       <Avatar {...stringAvatar("Shifi Markus")} />

//       <Button variant="contained">
//         Log Out
//       </Button>
//     </nav>
//   );
// }
// }
