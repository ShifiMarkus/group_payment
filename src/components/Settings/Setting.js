// import { Box, Card, Grid } from "@mui/material";
import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Stack from "@mui/material/Stack";
// import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import Button from "@mui/material/Button";
import { Autocomplete, FormControlLabel } from "@mui/material";
import { Checkbox } from "@mui/material";

export default function Settings() {
  const [groupList, setGroupList] = useState([]);
  const [groupSelected, setGroupSelected] = useState(false);
  // const [sumToPay, setSumToPay] = React.useState(<Grid>default</Grid>);

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));
  // const validate = (name, value) => {
  //   // const { fields } = this.state;
  //   debugger;
  //   switch (name) {
  //     case "GroupGoal":
  //       if (!value || value.trim() === "") {
  //         return "❗שם הקופה הוא שדה חובה ";
  //       } else {
  //         return "";
  //       }

  //     case "groupSum":
  //       if (!value || value.trim() === "") {
  //         return "❗מספר הטלפון הוא שדה חובה ";
  //       } else if (!value.match(/^[0-9]\d{2}$/)) {
  //         return "הכנס מספר טלפון תקין";
  //       } else {
  //         return "";
  //       }
  //     case "password":
  //       if (!value) {
  //         return "❗סיסמא היא שדה חובה ";
  //       } else if (value.length < 8 || value.length > 15) {
  //         return "הזן בבקשה שמונה תווים בלבד";
  //         // } else if (!value.match(/[a-z]/g)) {
  //         //   return "Please enter at least lower character.";
  //         // } else if (!value.match(/[A-Z]/g)) {
  //         //   return "Please enter at least upper character.";
  //         // } else if (!value.match(/[0-9]/g)) {
  //         //   return "Please enter at least one digit.";
  //       } else {
  //         return "";
  //       }

  //     default: {
  //       return "";
  //     }
  //   }
  // };

  // const handleUserInput = (e) => {
  //   setErrors({
  //     ...errors,
  //     [e.target.name]: validate(e.target.name, e.target.value),
  //   });
  //   setFields({ ...fields, [e.target.name]: e.target.value });
  // };

  // const [fields, setFields] = React.useState({
  //   GroupGoal: "",
  //   Deadline: "",
  //   groupSum: "",
  // });
  // const [errors, setErrors] = React.useState({
  //   GroupGoal: "",
  //   Deadline: "",
  //   groupSum: "",
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   let validationErrors = {};
  //   Object.keys(fields).forEach((name) => {
  //     const error = validate(name, fields[name]);
  //     if (error && error.length > 0) {
  //       validationErrors[name] = error;
  //     }
  //   });
  //   if (Object.keys(validationErrors).length > 0) {
  //     // this.setState({ errors: validationErrors });
  //     setErrors(validationErrors);
  //     return;
  //   }
  //   if (fields.GroupGoal) {
  //     const data = {
  //       GroupGoal: fields.GroupGoal,
  //     };
  //     window.alert("נשלח בהצלחה!", JSON.stringify(data));
  //     console.log("----data----", data);
  //   }

  // };

  // const chooseSum = (i) => {
  //   switch (i) {
  //     case 1:
  //       setSumToPay(<TextField label="האם ברצונך להגביל את טווח התשלום?" />);
  //       break;
  //     case 2:
  //       setSumToPay(
  //         <TextField
  //           type="number"
  //           name="groupSum"
  //           variant="filled"
  //           value={fields.groupSum}
  //           onChange={(event) => handleUserInput(event)}
  //         />
  //       );
  //       break;
  //     default:
  //       return <div> </div>;
  //   }
  // };
  // const [value, setValue] = React.useState({});

  // const classes = useStyles();
 
  const [groupSettings, setGroupSettings] = useState({
    GroupGoal: "",
    Deadline: "",
    GroupSum: "",
    GroupDivisionMethod: false,
  });
  
  
    const fetchData = async () => {
      debugger
      var res = await fetch(`https://localhost:44320/api/Cashes/getCashesByManagerId/${1}`);
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        setGroupList(data);
      }
    };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setGroupSettings((prevState) => ({
      ...prevState,
      [name]: name === "GroupDivisionMethod" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    var res = await fetch(`https://localhost:44320/api/Cashes/${1}/${19}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(groupSettings),
    });
    if (res.ok) {
    }
    // Here you can handle the submission of the updated group settings
    console.log(groupSettings);
    // You can call the PUT function in C# here with the groupSettings object
  };
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "2rem",
      }}
      onSubmit={handleSubmit}
    >
      <Autocomplete
        style={{ marginBottom: "1rem" }}
        disablePortal
        id="combo-box-demo"
        options={groupList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Choose Group" />}
      />
      <TextField
        style={{ marginBottom: "1rem" }}
        id="Group-Goal"
        name="GroupGoal"
        label="Group Goal"
        value={groupSettings.GroupGoal}
        onChange={handleChange}
      />
      <TextField
        style={{ marginBottom: "1rem", cursor: "pointer" }}
        id="deadline"
        name="Deadline"
        label="Deadline"
        type="date"
        value={groupSettings.Deadline}
        onChange={handleChange}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        style={{ marginBottom: "1rem" }}
        id="group-sum"
        name="GroupSum"
        label="Group Sum"
        type="number"
        value={groupSettings.GroupSum}
        onChange={handleChange}
      />
      <FormControlLabel
        style={{ marginBottom: "1rem" }}
        control={
          <Checkbox
            checked={groupSettings.GroupDivisionMethod}
            onChange={handleChange}
            name="GroupDivisionMethod"
            color="primary"
          />
        }
        label="Divide equally among all participants"
      />
      <Button
        style={{ marginTop: "1rem" }}
        variant="contained"
        color="primary"
        type="submit"
        // className={classes.button}
      >
        OK
      </Button>
    </form>
  );

  // return (
  //   <>
  //   <Card variant="outloned" style={{margin:"auto",alignItems: "center",minWidth: "20vw", minHeight: "30vh", maxWidth:"50vw", maxHeight: "70vh"}}>
  //     {/* <Grid item xs={12} sm={6}> */}
  //       <Box component="form" noValidate sx={{ mt: 1 }}>
  //         <TextField
  //           dir="ltr"
  //           margin="normal"
  //           required
  //           fullWidth
  //           name="GroupGoal"
  //           value={fields.GroupGoal}
  //           onChange={(event) => handleUserInput(event)}
  //           label="שם הקופה"
  //           id="Group Goal"
  //         />
  //         <div>
  //           <span style={{ color: "red" }} className="text-danger">
  //             {errors.GroupGoal}
  //           </span>
  //         </div>
  //         <LocalizationProvider dateAdapter={AdapterDayjs}>
  //           <DatePicker
  //             label="תאריך לתשלום"
  //             value={value}
  //             onChange={(newValue) => {
  //               setValue(newValue);
  //             }}
  //             renderInput={(params) => <TextField {...params} />}
  //           />
  //         </LocalizationProvider>
  //         {/* <Grid>
  //           <Item>סכום שכל חבר בקבוצה יצטרך לשלם:</Item>
  //           <Stack
  //             direction="row"
  //             spacing={2}
  //             marginTop="2rem"
  //             justifyContent="center"
  //             alignItems="center"
  //           >
  //             <Item onClick={() => chooseSum(1)}>כל סכום</Item>
  //             <Item onClick={() => chooseSum(2)}>סכום ספציפי</Item>
  //           </Stack>
  //           <Grid>{sumToPay}</Grid>
  //         </Grid> */}
  //         <div>
  //           <span style={{ color: "red" }} className="text-danger">
  //             {errors.GroupGoal}
  //           </span>
  //         </div>
  //       </Box>
  //     {/* </Grid> */}
  //     </Card>
  //   </>
  // );
}
