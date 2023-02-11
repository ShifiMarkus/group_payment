import React from "react";
import './PersonalSpace.css';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';
import { Avatar, AvatarGroup, Box, Grid, Typography } from "@mui/material";
import { Modal } from "react-bootstrap";
import CreateGroup from "../groups/CreateGroup/CreateGroup";
import AddCircleIcon from '@mui/icons-material/AddCircle';
// import { wait } from "@testing-library/user-event/dist/utils";
import CashList from "../cashes/CashList";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

// const groupCreated = false;

// export function setGroupCreated() {
//   this.groupCreated = true;
//   wait(5)
//   this.groupCreated = false;
// }

export default function PersonalSpace() {

  let groups = ['a', 'b', 'c', 'd'];
  let groupList = []
  // let cashes = ['a', 'b', 'c', 'd'];
  // let cashesList = [];
  const [open, setOpen] = React.useState(false);
  const [createGroupOpen, setCreateGroupOpen] = React.useState(false);
  // const date = new Date();

  //open more details
  const handleClickOpen = () => {
    setOpen(true);
    //get all cashes of this group

  };

  //close more details
  const handleClose = () => {
    setOpen(false);
  };

  //open create group
  const handleshow = () => {
    setCreateGroupOpen(true);
  }

  //close create group
  const handleClickClose = () => {
    setCreateGroupOpen(false)
  }

  // const getUsersInGroup = () => {
  //   debugger
  //   //TODO: get all users in selected group
  //   return [{ name: 'aaa' }, { name: 'bbb' }, { name: 'ccc' }]
  // }

  const handleSubmit = () => {
    console.log('Submit');
  };

  // cashes.forEach((item, index) => {
  //   cashesList.push(
  //     <div key={index} className="singalCash">
  //       group name: {item} cash name:
  //       <br />
  //       <div>יתרת הקבוצה: 0ש"ח</div>
  //       <div>שילמו: 0</div>
  //       <div>סכום מבוקש: כל הסכום</div>
  //       <div>תאריך יעד:</div>
  //       <div>{date.getFullYear()}</div>
  //       <div>הזמנת חברים נוספים:</div>
  //       <Button variant="outlined" onClick={handleClickOpen} style={{ cursor: 'pointer' }}>pay this group</Button> </div>);
  // })

  groups.forEach((item, index) => {
    groupList.push(
      <div key={index} className="singalGroup">
        <AvatarGroup max={4} style={{ marginTop: '-3rem' }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
        group name: {item}
        <br />
        <Button variant="outlined" onClick={handleClickOpen} style={{ cursor: 'pointer' }}>more details</Button> </div>);
  })

  if (groupList.length <= 0) {
    return (
      <>
        <div>You haven't started a group yet...😪</div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}></Dialog>
      </>
    );
  }
  else {
    return (
      <>
        <Grid style={{ display: 'inline-grid' }}>
          {/* {if(this.groupCreated)
          <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">This is a success alert — check it out!</Alert>
          } */}
          <Modal show={createGroupOpen} onHide={handleClickClose}>
            <Modal.Header closeButton>
              <Modal.Title>Create New Group</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <CreateGroup/>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClickClose}>
                Close
              </Button>
              {/* <Button variant="primary" onClick={handleClickClose}>
            Save Changes
          </Button> */}
            </Modal.Footer>
          </Modal>
          <div className="allGroups" >
            <div className="singalGroup">
              <Button variant="primary" onClick={() => handleshow()}>Create new Group<AddCircleIcon /></Button>
            </div>
            {groupList}
          </div>
        </Grid>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
            <Typography component="h1" variant="h5">Group Name</Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid style={{borderColor:'green', borderWidth:'8px'}}>
                <div>החברים בקבוצה:</div>
               <CashList/>
              </Grid>
            </Box>
          </Box>
          <Button autoFocus color="inherit" onClick={handleClose}>close</Button>
        </Dialog>
      </>
    );
  }

}