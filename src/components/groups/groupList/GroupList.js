import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import PersonalSpace from "../../PersonalSpace/PersonalSpace";
import LinearProgress from "@mui/material/LinearProgress";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentGroupId } from "../../store/group";

const GroupList = () => {
  const [groupsList, setGroupsList] = useState(null);
  const [open, setOpen] = useState(false);
  const currentUserId = useSelector((state) => state.user?.currentUserId);
  const dispatch = useDispatch();
  const handleMoreDetailsClick = (currentGroupId) => {
    dispatch(setCurrentGroupId(currentGroupId));
    setOpen(true);
  };
  useEffect(() => {
    var id = currentUserId == null ? 0 : currentUserId;
    const fetchData = async () => {
      var res = await fetch(
        `https://localhost:44320/api/Groups/getGroupsByUserID/${id}`
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setGroupsList(data);
      }
    };
    fetchData();
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {currentUserId == null ? (
        <div>
          To see your's groups you have to <a href="/login">log in </a>
        </div>
      ) : (
        <>
{/* {groupsList?.map((item)=>(
  
  return(
    <div
                key={index}
                className={`group-card ${group.paid ? "paid" : ""}`}
              >
                <h3>{group.GroupDescription}</h3>
                <p>{group.members} members</p>
                <p>{group.cashesAmount} cashes</p>
                <Button
                  variant="outlined"
                  onClick={handleMoreDetailsClick(index)}
                  style={{ cursor: "pointer" }}
                  className="group-card-button"
                >
                  more details
                </Button>
                {open && <PersonalSpace open={open} onClose={handleClose} />}
              </div>
  )
))} */}
          {
          groupsList!==null? (
            groupsList?.map((group, index) => (
              
              <div
                key={index}
                className={`group-card ${group.paid ? "paid" : ""}`}
              >
                <h3>{group.GroupDescription}</h3>
                <p>{group.members} members</p>
                <p>{group.cashesAmount} cashes</p>
                <Button
                  variant="outlined"
                  onClick={handleMoreDetailsClick(index)}
                  style={{ cursor: "pointer" }}
                  className="group-card-button"
                >
                  more details
                </Button>
                {open && <PersonalSpace open={open} onClose={handleClose} />}
              </div>
            ))
          ) : (
            <Box>
              {" "}
              <Typography variant="h3">Loading Your's groups</Typography>
              <br />
              <LinearProgress />
            </Box>
          )
          }
        </>
      )}
    </>
  );
};
export default GroupList;
