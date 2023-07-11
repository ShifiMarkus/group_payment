import "./CreateGroup.css";
import { Form } from "react-bootstrap";
import FormControlLabel from "@mui/material/FormControlLabel";
import heLocale from "date-fns/locale/he";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// export default function CreateGroup() {
//   let islogin = true;
//   const navigate = useNavigate();
//   const [value, setValue] = React.useState("public");
//   const [group, setGruop] = React.useState([]);

// const onChange = (selected, key) => {
//   setGruop((prev) => ({ ...prev, [key]: selected }));
// };

// const handleChange = (event) => {
//   setValue(event.target.value);
// };

// const handleSubmit = async () => {
//   // event.preventDefault();
//   //create new group and update usersInGroup table
//   var res = await fetch(`https://localhost:44320/api/Groups`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(group, 30),
//   });
//   if (res.ok) {
//     alert(`${group} has been created successfully`);
//   } else {
//     alert("error while creating group");
//   }
// };

//   function login() {
//     navigate("/login", { state: { id: 1, mode: "login" } });
//   }

//   if (islogin) {
//     return (
//       <>
//         <Form className="form">
//           <Form.Group>
//             <Form.Label>Group Name: </Form.Label>
//             <Form.Control
//               onChange={(e) => onChange(e.target.value, "GroupDescription")}
//               placeholder="E.g. Gift For Birth Day"
//             />
//           </Form.Group>
//           <Form.Group>
//             <Form.Label>Leader Name: </Form.Label>
//             <Form.Control placeholder="E.g. Israel Israeli" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Leader Email address: </Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>Leader ID: </Form.Label>
//             <Form.Control
//               onChange={(e) => onChange(e.target.value, "LeaderID")}
//               placeholder="E.g. 123456789"
//             />
//           </Form.Group>
//           <FormControl>
//             <FormLabel id="demo-controlled-radio-buttons-group">
//               Type Of Group
//             </FormLabel>
//             <RadioGroup
//               aria-labelledby="demo-controlled-radio-buttons-group"
//               name="controlled-radio-buttons-group"
//               value={value}
//               onChange={handleChange}
//             >
//               <FormControlLabel
//                 onChange={(e) => onChange(e.target.value, "GroupType")}
//                 value="public"
//                 control={<Radio />}
//                 label="public"
//               />
//               <FormControlLabel
//                 onChange={(e) => onChange(e.target.value, "GroupType")}
//                 value="private"
//                 control={<Radio />}
//                 label="private"
//               />
//             </RadioGroup>
//             <Form.Text className="text-muted">
//               We'll never share your personal details with anyone else.
//             </Form.Text>
//           </FormControl>
//           <Button onClick={() => handleSubmit()}>let's create!!</Button>
//         </Form>
//         {/*code to uplode files or images*/}
//         {/* <Button variant="contained" component="label">Upload
//         <input hidden accept="image/*" multiple type="file" />
//       </Button> */}
//         {/* <IconButton color="primary" aria-label="upload picture" component="label">
//             <input hidden accept="image/*" type="file" />
//             <PhotoCamera />
//         </IconButton> */}
//         <br />
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div>You have to login first</div>
//         <button onClick={() => login()}> login</button>
//       </>
//     );
//   }
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Checkbox, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const steps = ["Create an ad group", "Create an ad cash", "Create an ad"];

export default function HorizontalLinearStepper(props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [groupDetails, setGroupDetails] = React.useState({
  });
  const [groupAndCash, setGroupAndCash] = React.useState();

  const [cashDetails, setCashDetails] = React.useState({
    GroupGoal: "",
    Deadline: new Date(),
    GroupSum: "",
    GroupDivisionMethod: false,
  });

  const completeSteps = async () => {
    debugger
    props.onClose();
    const objToFetch={groupDetails, cashDetails}
    setGroupAndCash({groupDetails, cashDetails});
    console.log("groupDetails: " + groupDetails);
    console.log(groupAndCash);
    var res = await fetch(
      `https://localhost:44320/api/Groups/createNewGroupAndCash`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(objToFetch),
      }
    );
    if (res.ok) {
      console.log("Success");
    } else {
      console.log("Error");
    }
  };

  const handleChange = (event, key) => {
    debugger
    setGroupDetails((prevState) => ({
      ...prevState,
      [key]: event,
    }));
  };

  const handleChange1 = (event, key) => {
    debugger;
    setCashDetails((prevState) => ({
      ...prevState,
      [key]: event,
    }));
  };

  // const handleSubmit1 = async (event) => {
  //   event.preventDefault();
  //   var res = await fetch(`https://localhost:44320/api/Cashes`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(43),
  //   });
  //   if (res.ok) {
  //     alert("handle subbmit cash");
  //   }
  //   // Here you can handle the submission of the updated group settings
  //   // You can call the PUT function in C# here with the groupSettings object
  // };
  // const handleSubmit = async () => {
  //   // event.preventDefault();
  //   //create new group and update usersInGroup table
  //   var res = await fetch(`https://localhost:44320/api/Groups`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(group, 1),
  //   });
  //   if (res.ok) {
  //     alert(`${group} has been created successfully`);
  //     var response = await handleSubmit1();
  //     if (response.ok) {
  //       alert("Success");
  //     }
  //   } else {
  //     alert("error while creating group");
  //   }
  // };
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}

            {activeStep === steps.length - 1 && (
              <Button onClick={() => completeSteps()}>let's create!!</Button>
            )}

            {activeStep !== steps.length - 1 && (
              <Button onClick={handleNext}> Next </Button>
            )}
          </Box>
          {activeStep === 0 && (
            <Box sx={{ mt: 2 }}>
              <Form className="form">
                <Form.Group>
                  <Form.Label>Group Name: </Form.Label>
                  <Form.Control
                    onChange={(e) =>
                      handleChange(e.target.value, "GroupDescription")
                    }
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Leader Name: </Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Leader Email address: </Form.Label>
                  <Form.Control type="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Leader ID: </Form.Label>
                  <Form.Control
                    onChange={(e) => handleChange(e.target.value, "LeaderID")}
                  />
                </Form.Group>
                <Form.Text className="text-muted">
                  We'll never share your personal details with anyone else.
                </Form.Text>
              </Form>
            </Box>
          )}
          {activeStep === 1 && (
            <Box sx={{ mt: 2 }}>
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "2rem",
                }}
                // onSubmit={handleSubmit1}
              >
                <TextField
                  style={{ marginBottom: "1rem" }}
                  id="Group-Goal"
                  name="GroupGoal"
                  label="Group Goal"
                  value={cashDetails.GroupGoal}
                  onChange={(e) => handleChange1(e.target.value, "GroupGoal")}
                />

                <LocalizationProvider
                  locale={heLocale}
                  dateAdapter={AdapterDateFns}
                >
                  <DatePicker
                    label={"Deadline"}
                    inputFormat={"dd/MM/yyyy"}
                    value={cashDetails.Deadline}
                    defaultValue={new Date()}
                    onChange={(e) => handleChange1(e, "Deadline")}
                    renderInput={(params) => <TextField {...params} />}
                    style={{ marginBottom: "1rem" }}
                  />
                </LocalizationProvider>
                <TextField
                  style={{ marginBottom: "1rem" }}
                  id="group-sum"
                  name="GroupSum"
                  label="Group Sum"
                  type="number"
                  value={cashDetails.GroupSum}
                  onChange={(e) => handleChange1(e.target.value, "GroupSum")}
                />
                <FormControlLabel
                  style={{ marginBottom: "1rem" }}
                  control={
                    <Checkbox
                      checked={cashDetails.GroupDivisionMethod}
                      onChange={(e) =>
                        handleChange1(e.target.value, "GroupDivisionMethod")
                      }
                      name="GroupDivisionMethod"
                      color="primary"
                    />
                  }
                  label="Divide equally among all participants"
                />
              </form>
            </Box>
          )}
        </React.Fragment>
      )}
    </Box>
  );
}
