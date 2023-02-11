import React from "react";
import './CreateGroup.css'
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function CreateGroup() {

    let islogin = true;
    const navigate = useNavigate();
    const [value, setValue] = React.useState('public');
    const [group, setGruop] = React.useState([]);

    const onChange = (selected, key) => {
        setGruop((prev) => ({ ...prev, [key]: selected }))
    }

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = async () => {
        // event.preventDefault();
        //create new group and update usersInGroup table
        var res = await fetch(`https://localhost:44320/api/Groups`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(group,30)
        })
        if(res.ok)
        {
            alert(`${group} has been created successfully`)
        }
        else{
            alert('error while creating group')
        }
    }

    function login() {
        navigate('/login', { state: { id: 1, mode: "login" } });
    }

    if (islogin) {
        return (
            <>
                <Form className="form" >
                    <Form.Group>
                        <Form.Label>Group Name: </Form.Label>
                        <Form.Control onChange={(e) => onChange(e.target.value, "GroupDescription")} placeholder="E.g. Gift For Birth Day" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Leader Name: </Form.Label>
                        <Form.Control placeholder="E.g. Israel Israeli" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Leader Email address: </Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label >Leader ID: </Form.Label>
                        <Form.Control onChange={(e) => onChange(e.target.value, "LeaderID")} placeholder="E.g. 123456789" />
                    </Form.Group>
                    <FormControl>
                        <FormLabel id="demo-controlled-radio-buttons-group">Type Of Group</FormLabel>
                        <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name="controlled-radio-buttons-group" value={value} onChange={handleChange}>
                            <FormControlLabel onChange={(e) => onChange(e.target.value, "GroupType")} value="public" control={<Radio />} label="public" />
                            <FormControlLabel onChange={(e) => onChange(e.target.value, "GroupType")} value="private" control={<Radio />} label="private" />
                        </RadioGroup>
                        <Form.Text className="text-muted">We'll never share your personal details with anyone else.</Form.Text>
                    </FormControl>
                    <Button onClick={() => handleSubmit()} >let's create!!</Button>
                </Form>
                {/*code to uplode files or images*/}
                {/* <Button variant="contained" component="label">Upload
        <input hidden accept="image/*" multiple type="file" />
      </Button> */}
                {/* <IconButton color="primary" aria-label="upload picture" component="label">
            <input hidden accept="image/*" type="file" />
            <PhotoCamera />
        </IconButton> */}
                <br />
            </>
        )
    }
    else {
        return (
            <>
                <div>You have to login first</div>
                <button onClick={() => login()}> login</button>
            </>)
    };
}