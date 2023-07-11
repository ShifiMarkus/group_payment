// // import React from "react";
// // export default function About() {
// //   return (
// //     <>
// //       <div>About us</div>
// //       <grid>
// //         <grid>נרשמים לאתר</grid>
// //         <grid>
// //           בוחרים:
// //           <br />
// //           לשלם או לבקש תשלום?
// //           <br />
// //           למי?
// //           <br />
// //           כמה?
// //         </grid>
// //         <br />
// //         <grid>שולחים בלחיצה והכסף עובר מייד!!!</grid>
// //       </grid>
// //     </>
// //   );
// // }
// import React from 'react';
// // import Header from './Header';

// function AboutUs() {
//   return (
//     <div>
//       {/* <Header /> */}
//       {/* <div className="container">
//         <h1>About Us</h1>
//         <p>We are a group payment site that makes it easy for friends, families, and colleagues to split bills and expenses.</p>
//         <h2>Our Team</h2>
//         <div className="row">
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" alt="Team Member" className="card-img-top" />
//               <div className="card-body">
//                 <h3 className="card-title">John Doe</h3>
//                 <p className="card-text">Co-founder and CEO</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" alt="Team Member" className="card-img-top" />
//               <div className="card-body">
//                 <h3 className="card-title">Jane Smith</h3>
//                 <p className="card-text">Co-founder and CTO</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-4">
//             <div className="card">
//               <img src="https://via.placeholder.com/150" alt="Team Member" className="card-img-top" />
//               <div className="card-body">
//                 <h3 className="card-title">Bob Johnson</h3>
//                 <p className="card-text">Marketing Director</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}
//       <div className="about-us-container">
//       <h1>About Us</h1>
//       <p>We are a group payment site that makes it easy for you to split bills and expenses with your friends, family, or colleagues.</p>
//       <h2>How to Use the Site</h2>
//       <p>Using our site is simple and straightforward. Here are the steps:</p>
//       <ol>
//         <li>Create an account or log in to your existing account.</li>
//         <li>Create a new group or join an existing group.</li>
//         <li>Add your expenses to the group and specify who paid for them.</li>
//         <li>Let our site calculate the balances for you and settle up with your friends.</li>
//       </ol>
//       <h2>Blue Tones Design</h2>
//       <p>Our site is designed with blue tones to create a calming and trustworthy atmosphere. We want you to feel confident and secure when using our site.</p>
//     </div>
//     </div>
//   );
// }

// export default AboutUs;
// import { makeStyles } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import React from 'react';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     backgroundColor: '#E8F5FE',
//     minHeight: '100vh',
//     paddingTop: theme.spacing(8),
//     paddingBottom: theme.spacing(8),
//   },
//   title: {
//     fontWeight: 'bold',
//     color: '#2196F3',
//     marginBottom: theme.spacing(4),
//   },
//   subtitle: {
//     color: '#2196F3',
//     marginBottom: theme.spacing(4),
//   },
//   text: {
//     color: '#333',
//     lineHeight: '1.5',
//     marginBottom: theme.spacing(4),
//   },
// }));

const AboutUs = () => {
  // const classes = useStyles();

  return (
    <div className="root">
      <Container maxWidth="md">
        <Typography variant="h3" className="title">
          About Us
        </Typography>
        <Typography variant="h5" className="subtitle">
          Who we are and what we do
        </Typography>
        <Typography variant="body1" className="text">
          We are a group payment site that allows you to easily split bills and expenses with your friends and family. Our goal is to make it simple and hassle-free to manage shared expenses, whether you're splitting the cost of a dinner or paying rent with your roommates.
        </Typography>
        <Typography variant="body1" className="text">
          Our site is designed with you in mind, with a user-friendly interface that makes it easy to create and manage groups, track expenses, and settle up with your friends. We believe that managing shared expenses should be stress-free, so you can focus on enjoying time with your loved ones.
        </Typography>
      </Container>
    </div>
  );
};

export default AboutUs;