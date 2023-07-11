import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require("C:/Users/user1/OneDrive/שולחן העבודה/תכנות/פרויקט גמר/group_payment/src/images/cyber-security-protect-safe-concept-closeup-finger-about-press-button-with-security-shield-symbol_127544-1198.webp")}
          alt="First slide"
          style={{ width: "100%", height: "100%" }}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={require("C:/Users/user1/OneDrive/שולחן העבודה/תכנות/פרויקט גמר/group_payment/src/images/mobile-cashback-concept-with-smartphone_23-2148462831.webp")}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("C:/Users/user1/OneDrive/שולחן העבודה/תכנות/פרויקט גמר/group_payment/src/images/PayInGroup_bg2.webp")}
          alt="asdfg"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import AvatarGroup from '@mui/material/AvatarGroup';

// export default function GroupAvatars() {
//   return (
//     <AvatarGroup max={4}>
//       <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//       <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
//       <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
//       <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
//       <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
//     </AvatarGroup>
//   );
// }
// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';

// function stringToColor(string) {
//   let hash = 0;
//   let i;

//   /* eslint-disable no-bitwise */
//   for (i = 0; i < string.length; i += 1) {
//     hash = string.charCodeAt(i) + ((hash << 5) - hash);
//   }

//   let color = '#';

//   for (i = 0; i < 3; i += 1) {
//     const value = (hash >> (i * 8)) & 0xff;
//     color += `00${value.toString(16)}`.slice(-2);
//   }
//   /* eslint-enable no-bitwise */

//   return color;
// }

// function stringAvatar(name) {
//   return {
//     sx: {
//       bgcolor: stringToColor(name),
//     },
//     children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
//   };
// }

// export default function BackgroundLetterAvatars() {
//   var user = {}
//   user.FirstName = 'John';
//   user.LastName = 'Doe';
//   var name = user.FirstName + ' ' + user.LastName;
//   return (
//       <Avatar {...stringAvatar(name)} />
//   );
// }
// import React from "react";
// import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

// export default function App() {
//   return (
//     <MDBContainer className="mt-5" style={{maxWidth: '1000px'}}>
//       <MDBAccordion alwaysOpen initialActive={1}>
//         <MDBAccordionItem collapseId={1} headerTitle="Question #1">
//           <strong>This is the first item's accordion body.</strong> It is shown
//           by default, until the collapse plugin adds the appropriate classes
//           that we use to style each element. These classes control the overall
//           appearance, as well as the showing and hiding via CSS transitions. You
//           can modify any of this with custom CSS or overriding our default
//           variables. It's also worth noting that just about any HTML can go
//           within the <code>.accordion-body</code>, though the transition does
//           limit overflow.
//         </MDBAccordionItem>
//         <MDBAccordionItem collapseId={2} headerTitle="Question #2">
//           <strong>This is the second item's accordion body.</strong> It is
//           hidden by default, until the collapse plugin adds the appropriate
//           classes that we use to style each element. These classes control the
//           overall appearance, as well as the showing and hiding via CSS
//           transitions. You can modify any of this with custom CSS or overriding
//           our default variables. It's also worth noting that just about any HTML
//           can go within the <code>.accordion-body</code>, though the transition
//           does limit overflow.
//         </MDBAccordionItem>
//         <MDBAccordionItem collapseId={3} headerTitle="Question #3">
//           <strong>This is the third item's accordion body.</strong> It is hidden
//           by default, until the collapse plugin adds the appropriate classes
//           that we use to style each element. These classes control the overall
//           appearance, as well as the showing and hiding via CSS transitions. You
//           can modify any of this with custom CSS or overriding our default
//           variables. It's also worth noting that just about any HTML can go
//           within the <code>.accordion-body</code>, though the transition does
//           limit overflow.
//         </MDBAccordionItem>
//       </MDBAccordion>
//     </MDBContainer>
//   );
// }
// // import * as React from 'react';
// // import Button from '@mui/material/Button';
// // import Dialog from '@mui/material/Dialog';
// // import ListItemText from '@mui/material/ListItemText';
// // import ListItem from '@mui/material/ListItem';
// // import List from '@mui/material/List';
// // import Divider from '@mui/material/Divider';
// // import AppBar from '@mui/material/AppBar';
// // import Toolbar from '@mui/material/Toolbar';
// // import IconButton from '@mui/material/IconButton';
// // import Typography from '@mui/material/Typography';
// // // import CloseIcon from '@mui/icons-material/Close';
// // import Slide from '@mui/material/Slide';

// // const Transition = React.forwardRef(function Transition(props, ref) {
// //   return <Slide direction="up" ref={ref} {...props} />;
// // });

// // export default function FullScreenDialog() {
// //   const [open, setOpen] = React.useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   return (
// //     <div>
// //       <Button variant="outlined" onClick={handleClickOpen}>
// //         Open full-screen dialog
// //       </Button>
// //       <Dialog
// //         fullScreen
// //         open={open}
// //         onClose={handleClose}
// //         TransitionComponent={Transition}
// //       >
// //         <AppBar sx={{ position: 'relative' }}>
// //           <Toolbar>
// //             <IconButton
// //               edge="start"
// //               color="inherit"
// //               onClick={handleClose}
// //               aria-label="close"
// //             >
// //               {/* <CloseIcon /> */}
// //             </IconButton>
// //             <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
// //               Sound
// //             </Typography>
// //             <Button autoFocus color="inherit" onClick={handleClose}>
// //               save
// //             </Button>
// //           </Toolbar>
// //         </AppBar>
// //         <List>
// //           <ListItem button>
// //             <ListItemText primary="Phone ringtone" secondary="Titania" />
// //           </ListItem>
// //           <Divider />
// //           <ListItem button>
// //             <ListItemText
// //               primary="Default notification ringtone"
// //               secondary="Tethys"
// //             />
// //           </ListItem>
// //         </List>
// //       </Dialog>
// //     </div>
// //   );
// // }
// // import React, { Component } from 'react'
// // import { NavItem } from 'react-bootstrap';


// // class Navbar extends Component {

// //   render() { 
    
// //     const MenuItems = [
// //       {title: 'Home', url: '#', cName:'nav-links'},
// //       {title: 'Services', url: '#', cName:'nav-links'},
// //       {title: 'Products', url: '#', cName:'nav-links'},
// //       {title: 'Contact Us', url: '#', cName:'nav-links'},
// //       {title: 'Sign Up', url: '#', cName:'nav-links-mobile'},
// //     ]

// //     return(
// //       <nav className='NavbarItems'>
// //         <h1 className='navbar-logo'>React</h1>
// //         <div className='menu-icon'></div>
// //         <ul>
// //           {MenuItems.map((item, index) => {
// //             return(
// //               <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
// //             )
// //           })}
// //         </ul>
// //       </nav>
// //     )
// //   }
// // }

// // export default Navbar;