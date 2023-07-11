import React, { useEffect, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const GroupMembers = () => {
  const [members, setMembers] = useState([]);
  const [newMemberName, setNewMemberName] = useState("");
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [removeMemberEmail, setRemoveMemberEmail] = useState("");
  const currentGroupId = useSelector((state) => state.group?.currentGroupId);

  useEffect(() => {
    const fetchData = async () => {
      var res = await fetch(
        `https://localhost:44320/api/users/getUsersInGroup/${currentGroupId}`
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setMembers(data);
      }
    };
    fetchData();
  }, []);



  const handleAddMember = async () => {
    const newMember = { name: newMemberName, email: newMemberEmail };
    setMembers([...members, newMember]);
    const data = {
      Mail: newMemberEmail,
      GroupCode: currentGroupId,
    };
    setNewMemberName("");
    setNewMemberEmail("");

    var res = await fetch(
      "https://localhost:44320/api/UsersInGroups/addMemberInGroup/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    if (res.ok) {
      debugger
      const newMember = await res.json();
      setMembers(newMember);
    } else {
    }
  };

  const handleRemoveMember = () => {
    const updatedMembers = members.filter(
      (member) => member.email !== removeMemberEmail
    );
    setMembers(updatedMembers);
    setRemoveMemberEmail("");
  };
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#e5f2ff",
        padding: "20px",
        overflow: 'auto',
        width: "15w",
        height: "62vh"
      }}
    >
      <Typography
        variant="h4"
        style={{ color: "#0d47a1", marginBottom: "20px" }}
      >
        Group Members
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        {members.map((member, index) => (
          <Typography key={index} style={{ color: "#0d47a1" }}>
            {member.firstName} {member.lastName} ({member.userMail})
          </Typography>
        ))}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <TextField
          label="Name"
          variant="outlined"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <TextField
          label="Email"
          variant="outlined"
          value={newMemberEmail}
          onChange={(e) => setNewMemberEmail(e.target.value)}
          style={{ marginBottom: "10px" }}
        />
        <Button
          variant="contained"
          onClick={handleAddMember}
          style={{ backgroundColor: "#0d47a1", color: "#ffffff" }}
        >
          Add Member
          {/*  הצגת רשימת כל המשתמשים וכן אופציה להזמין משתמש חדש ע"י שליחת מייל אימות */}
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <TextField
          label="Email"
          variant="outlined"
          value={removeMemberEmail}
          onChange={(e) => setRemoveMemberEmail(e.target.value)}
          style={{ marginBottom: "10px" }}
        /> */}
        {/* <Button
          variant="contained"
          onClick={handleRemoveMember}
          style={{ backgroundColor: "#0d47a1", color: "#ffffff" }}
        >
          Remove Member
        </Button> */}
      </div>
    </div>
  );
};

export default GroupMembers;
