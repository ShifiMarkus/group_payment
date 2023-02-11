// import { Button } from "bootstrap";
import React /*{ useState } */ from "react";
// import { useNavigate } from "react-router-dom";
import '../files.css/PersonalSpace.css' ;
import Nav from "./nav";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function PersonalSpace(){

    // const navigate = useNavigate();
    // const [groupsCounter,setGroupsCounter] = useState(1);
    let groups = ['a', 'b', 'c', 'd', 'e'];
    let groupList = []

    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    groups.forEach((item,index)=>{
        groupList.push(<div key={index} className="singalGroup">group name: {item} <br/>  <Button variant="outlined" onClick={handleClickOpen}>
        more details</Button> </div>);
    })

    if(groupList.length <= 0)
    {
        return (
            <>
            {/* <Nav></Nav> */}
            <div>You haven't started a group yet...😪</div>
            <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      ></Dialog>
            </>
        );
    }
   else{
    return (
        <>
        {/* <Nav></Nav> */}
        <div className="allGroups">
            {groupList}
        </div>
        <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
        >
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
        </Dialog>
        </>
    );
   }

}