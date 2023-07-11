import React from "react";
import "./PersonalSpace.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Modal } from "react-bootstrap";
import CreateGroup from "../groups/CreateGroup/CreateGroup";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import { wait } from "@testing-library/user-event/dist/utils";
import CashList from "../cashes/CashList";
import GroupList from "../groups/groupList/GroupList";
// import GroupList from "../groups/groupList/GroupList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const groupCreated = false;

// export function setGroupCreated() {
//   this.groupCreated = true;
//   wait(5)
//   this.groupCreated = false;
// }

export default function PersonalSpace({open, onClose}) {
  
  // const [open, setOpen] = React.useState(false);
  const [createGroupOpen, setCreateGroupOpen] = React.useState(false);
  //open more details
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOnClose = () => {
    onClose();
  };

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);
  //close more details
  const handleClose = () => {
    setIsOpen(false);
  };

  //open create group
  const handleshow = () => {
    setCreateGroupOpen(true);
  };

  //close create group
  const handleClickClose = () => {
    setCreateGroupOpen(false);
  };

  const handleSubmit = () => {
    console.log("Submit");
  };

  // groups.forEach((item, index) => {
  //   groupList.push(
  //     <div key={index} className="singalGroup">

  //       group name: {item}
  //       <br />
  //       <Button
  //         variant="outlined"
  //         onClick={handleClickOpen}
  //         style={{ cursor: "pointer" }}
  //       >
  //         more details
  //       </Button>{" "}
  //     </div>
  //   );
  // });

  if (!GroupList.length <= 0) {
    return (
      <>
        <div>You haven't started any group yet...😪</div>
        <Dialog
          fullScreen
          open={isOpen}
          onClose={handleClose}
          TransitionComponent={Transition}
        ></Dialog>
      </>
    );
  } else {
    return (
      <>
        <Grid
          item
          xs
          style={{
            display: "inline-grid",
            backgroundColor: "pink",
            marginTop: "1rem",
          }}
        >
          {/* {if(this.groupCreated)
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">This is a success alert — check it out!</Alert>
          } */}
          <Card
            style={{
              minHeight: "20rem",
              maxHeight: "40rem",
              maxWidth: "95rem",
              overflowY: "auto",
            }}
          >
            <CardContent>
              <Modal show={createGroupOpen} onHide={handleClickClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create New Group</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <CreateGroup onClose={handleClickClose} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClickClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <div className="personal-area-container">
                {/* <div className="left-panel"> */}
                <button onClick={() => handleshow()} className="add-group-btn">
                  +
                </button>
                <div className="center-panel">
                  <div className="groups-grid">
                  
                    {/* <div className="allGroups"> */}
                   <GroupList/>
                  </div>
                </div>
              </div>
              {/* {groupList} */}
              {/* <GroupList/> */}
            </CardContent>
          </Card>
        </Grid>
        <Dialog
          fullScreen
          open={isOpen
          }
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h1" variant="h5">
              Group Name
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid>
                
                <CashList />
              </Grid>
            </Box>
          </Box>

          <Button
            style={{ marginTop: "8vh" }}
            autoFocus
            color="inherit"
            onClick={handleOnClose}
          >
            close
          </Button>
        </Dialog>
      </>
    );
  }
}

// import React from 'react';
// import './PersonalArea.css';

// function PersonalSpace() {
//   // Sample data for displaying the groups
//   const groups = [
//     {
//       name: 'Group 1',
//       paid: false,
//       amount: 100,
//       members: 4,
//       targetDate: '2022-01-31',
//     },
//     {
//       name: 'Group 2',
//       paid: true,
//       amount: 50,
//       members: 2,
//       targetDate: '2021-12-31',
//     },
//     {
//       name: 'Group 3',
//       paid: false,
//       amount: 75,
//       members: 3,
//       targetDate: '2022-02-28',
//     },
//   ];

//   return (
//     <div className="personal-area-container">
//       <div className="left-panel">
//         <button className="add-group-btn">+</button>
//         <h2>Group Members</h2>
//         <ul className="group-members">
//           <li>Member 1</li>
//           <li>Member 2</li>
//           <li>Member 3</li>
//         </ul>
//       </div>
//       <div className="center-panel">
//         <h1>My Groups</h1>
//         <div className="groups-grid">
//           {groups.map((group, index) => (
//             <div key={index} className={`group-card ${group.paid ? 'paid' : ''}`}>
//               <h3>{group.name}</h3>
//               <p>{group.members} members</p>
//               <p>{group.amount} to be paid</p>
//               <p>{group.targetDate}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PersonalSpace;
