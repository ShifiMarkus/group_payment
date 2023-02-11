import { Box, Grid } from "@mui/material";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Settings() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const validate = (name, value) => {
        // const { fields } = this.state;
        debugger
        switch (name) {
            case "GroupGoal":
                if (!value || value.trim() === "") {
                    return "❗שם הקופה הוא שדה חובה ";
                } else {
                    return "";
                }

            case "phone":
                if (!value || value.trim() === "") {
                    return "❗מספר הטלפון הוא שדה חובה ";
                } else if (!value.match(/^[0-9]\d{9}$/)) {
                    return "הכנס מספר טלפון תקין";
                } else {
                    return "";
                }
            case "password":
                if (!value) {
                    return "❗סיסמא היא שדה חובה ";
                } else if (value.length < 8 || value.length > 15) {
                    return "הזן בבקשה שמונה תווים בלבד";
                    // } else if (!value.match(/[a-z]/g)) {
                    //   return "Please enter at least lower character.";
                    // } else if (!value.match(/[A-Z]/g)) {
                    //   return "Please enter at least upper character.";
                    // } else if (!value.match(/[0-9]/g)) {
                    //   return "Please enter at least one digit.";
                } else {
                    return "";
                }
            case "lastName":
                if (!value || value.trim() === "") {
                    return "❗שם משפחה הוא  שדה חובה ";
                } else {
                    return "";
                }
            default: {
                return "";
            }
        }
    };

    const handleUserInput = e => {
        setErrors({ ...errors, [e.target.name]: validate(e.target.name, e.target.value) })
        setFields({ ...fields, [e.target.name]: e.target.value })
    };

    const [fields, setFields] = React.useState({
        GroupGoal: "",
        Deadline: ""
    });
    const [errors, setErrors] = React.useState({
        GroupGoal: "",
        Deadline: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        let validationErrors = {};
        Object.keys(fields).forEach(name => {
            const error = validate(name, fields[name]);
            if (error && error.length > 0) {
                validationErrors[name] = error;
            }
        });
        if (Object.keys(validationErrors).length > 0) {
            // this.setState({ errors: validationErrors });
            setErrors(validationErrors)
            return;
        }
        if (fields.GroupGoal) {
            const data = {
                GroupGoal: fields.GroupGoal
            };
            window.alert("נשלח בהצלחה!", JSON.stringify(data));
            console.log("----data----", data);
        }
    }
    const [value, setValue] = React.useState(null);
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="GroupGoal"
                        value={fields.GroupGoal}
                        onChange={event => handleUserInput(event)}
                        label="שם הקופה"
                        id="Group Goal"
                    />
                    <div>
                        <span style={{ color: 'red' }} className="text-danger">{errors.GroupGoal}</span>
                    </div>
                    <Grid>
                        <Item>סכום שכל חבר בקבוצה יצטרך לשלם:</Item>
                        <Stack direction="row" spacing={2} marginTop="2rem" justifyContent="center"
                            alignItems="center">
                            <Item>כל סכום</Item>
                            <Item>סכום ספציפי</Item>
                            <Item>מספר אופציות</Item>
                        </Stack>
                    </Grid>
                    <div>
                        <span style={{ color: 'red' }} className="text-danger">{errors.GroupGoal}</span>
                    </div>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label="תאריך לתשלום"
                            value={value}
                            onChange={(newValue) => {
                                setValue(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
                </Box>
            </Grid>

        </>
    );

}
