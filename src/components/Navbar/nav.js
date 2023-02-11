import * as React from 'react';
import './nav.css';
import { MenuItems } from './MenuItems';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Grid } from '@mui/material';

var isLogin = false;

export function setLogin(bool)
{
  isLogin = bool;
  console.log(isLogin)
}

class Navbar extends React.Component {
   state = { clicked: false};

  handleClick = () =>{
    this.setState({clicked: !this.state.clicked});
  }

  stringAvatar(name) {
    return {
      sx: {
        bgcolor: this.stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }

  stringToColor(string) {
    let hash = 0;
    let i;
  
    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */
  
    return color;
  }

    render(){
      if(!isLogin)
    return(
      <nav className='NavbarItems' style={{float:'none'}}>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        <h1 className='navbar-logo'>Pay In Group</h1>
        {/* <div className='menu-icon' onClick={this.handleClick}></div> */}
        {/* <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}> */}
        <ul className={'nav-menu active'}>
          {/* <ul className='nav-menu'> */}
          {MenuItems.map((item, index) => {
            return(
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
        {/* <Avatar {...this.stringAvatar('Shifi Markus')} /> */}
        <Grid container item xs={4} spacing={3} justifyContent="start" alignItems="flex-end">
        <Button variant="contained" href="/login">Log In</Button>
        <Button variant="contained" href="/signup">Sign Up</Button>
        </Grid>
      </nav>
    )
    else 
    return(
      <nav className='NavbarItems'>
        <FontAwesomeIcon icon="fa-solid fa-bars" />
        <Avatar {...this.stringAvatar('Shifi Markus')} />
        <h1 className='navbar-logo'>Pay In Group</h1>
        <div className='menu-icon' onClick={this.handleClick}></div>
        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return(
              <li key={index}><a className={item.cName} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
        <Button variant="contained" href="/login">Log Out</Button>
      </nav>
    )
  }}
export default Navbar;
//     const { Track, trackEvent } = useTracking({
//         page: "Nav Links",
//       });
//     return(
//     <>
//        {/* {NavLinks.map((item,index)=>{
//         {console.log(index)}
//                   <div>{item.path}</div>
//                 })} */}
//     <Track>
//     <AppBar data-testid="AppBar"  position="static">
//     <Toolbar>
//     <Container data-testid="home-icon" maxWidth="xl">
//         <Hidden smDown>
//             <List component="nav" aria-labelledby="main navigation">
//                 <Link onClick={() => {trackEvent({ action: `Page Select - \\home` });}}
//                   key="home-icon"
//                   to={"/"}
//                 >
//                 <span style={{color:'black'}}>Pay In Group</span>
//                 </Link>
                
//                 {NavLinks.map((title,path)=>{
//                 <Link key={path} onClick={() => {trackEvent({ action: `Page Select - ${path}` });}}
//                     to={path}
//                   >
//                     {/* <div> */}
//                     <span data-testid={path} key={path} style={{display:'inline-grid', color:'blue'}}>
//                       {title} 
//                     </span>
//                    </Link> 
//                  })}
               
//               </List>
//             </Hidden> 
//              <Hidden mdUp>
//                 <div>
//                   mdup
//                 </div>
//             </Hidden>
//            </Container>
//            </Toolbar> 
//      </AppBar> 
//      </Track> 
//     </>
// )

// import { Navbar } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// const pages = ['Home Page', 'About Us', 'My Groups', 'Create Group', 'Senttings'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const navigate = useNavigate();

//     const navigateFunction = (page) =>
//   {
//     console.log('navigate function  called');
//     switch(page)
//     {
//         case 'Home Page':
//             navigate('/');
//             break;
//         case 'About Us':
//             navigate('/about');
//             break;
//         case 'My Groups':
//             navigate('/personalspace');
//             break;
//         case 'Create Group':
//             navigate('/creategroup');
//             break;
//         case 'Senttings':
//             navigate('/settings');
//             break;
//         default: break;
//     }
//   };
  
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
//           <Typography variant="h6" noWrap component="a" href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >PayInGroup</Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 //  <MenuItem key={page} onClick={navigateFunction(page)}>
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//                 // <MenuItem key={page} onClick={handleCloseNavMenu}>
//                 //   <Navbar.Link to={`/${page}`}>{page}</Navbar.Link>
//                 // </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             PayInGroup
//           </Typography>
//           <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 // onClick={navigateFunction(page)}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: 'white', display: 'block' }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

//           <Box sx={{ flexGrow: 0 }}>
//             <Tooltip title="Open settings">
//               <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                 <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//               </IconButton>
//             </Tooltip>
//             <Menu
//               sx={{ mt: '45px' }}
//               id="menu-appbar"
//               anchorEl={anchorElUser}
//               anchorOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'right',
//               }}
//               open={Boolean(anchorElUser)}
//               onClose={handleCloseUserMenu}
//             >
//               {settings.map((setting) => (
//                 <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                   <Typography textAlign="center">{setting}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
// import React from 'react'
// // import { Link, Navigate } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// // import { useDispatch, useSelector } from 'react-redux'
// import '../files.css/nav.css'

// export default function Nav() {

//     const navigate = useNavigate();
    
//     function log_in(){
//         navigate('/login',{ state: { id: 1, mode: "login" } });
//     }

//     function sign_up(){
//         navigate('/signup',{ state: { id: 2, mode: "signup" } });
//     }

//     function home_page(){
//         navigate('/main');
//     }

//     function create_group(){
//         navigate('/creategroup');  
//     }

//     function my_groups(){
//         navigate('/personalspace');
//     }
    
//     return(
//         <>
//           <div className='div_nav'>
//                 <nav className='nav'>
//                     <div className='div'>
//                         <span className='span' id="span_img" title="personal area">profil</span>
//                         <div className='wrap_login_signup'>
//                             <span className='login_signup' onClick={()=>log_in()}><b>log in</b></span>
//                             <span className='span_b' ><b> | </b></span>
//                             <span className='login_signup' onClick={()=>sign_up()}><b>sign up</b></span>
//                         </div>
//                         <span className='span' onClick={()=>home_page()}>Home</span>
//                         <span className='span' onClick={()=>navigate('/about')}>About Us</span>
//                         <span className='span' onClick={()=>my_groups()}>My Groups</span>
//                         <span className='span' onClick={()=>create_group()}>Create Gruop</span>
//                         <span className='span' onClick={()=>navigate('/settings')}>Settings </span>
//                     </div>
//                 </nav>
//             </div >
//             <hr style={{ position:'relative',marginTop:'15vh', background: 'cornflowerblue',color: 'black',borderColor: 'black',height: '3px',}}
//       />
//         </>
//     );

// }